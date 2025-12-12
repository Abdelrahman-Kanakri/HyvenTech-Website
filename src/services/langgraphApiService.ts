/**
 * LangGraph API Service for HyvenBot
 * Handles communication with the deployed LangGraph API on Render
 */

const LANGGRAPH_API_URL = import.meta.env.VITE_LANGGRAPH_API_URL || "https://langchain-hyvenbot.onrender.com";
const ASSISTANT_ID = "agent";

interface Message {
  role: "human" | "ai";
  content: string;
}

interface StreamChunk {
  type: string;
  content?: string;
  tool_calls?: any[];
  response_metadata?: {
    finish_reason?: string;
  };
}

/**
 * Create a new conversation thread
 */
export async function createThread(userId: string): Promise<string> {
  try {
    const response = await fetch(`${LANGGRAPH_API_URL}/threads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        metadata: {
          user_id: userId,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create thread: ${response.statusText}`);
    }

    const data = await response.json();
    return data.thread_id;
  } catch (error) {
    console.error("Error creating thread:", error);
    throw error;
  }
}

/**
 * Send a message and get streaming response
 */
export async function sendMessage(
  threadId: string,
  message: string,
  onChunk: (text: string) => void,
  onComplete: () => void,
  onError: (error: Error) => void
): Promise<void> {
  try {
    const response = await fetch(
      `${LANGGRAPH_API_URL}/threads/${threadId}/runs/stream`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assistant_id: ASSISTANT_ID,
          input: {
            messages: [
              {
                role: "human",
                content: message,
              },
            ],
          },
          stream_mode: "messages-tuple",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to send message: ${response.statusText}`);
    }

    if (!response.body) {
      throw new Error("No response body");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let currentEvent = "";

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        onComplete();
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.trim()) continue;

        // Handle event lines
        if (line.startsWith("event: ")) {
          currentEvent = line.slice(7).trim();
          continue;
        }

        // Handle data lines
        if (line.startsWith("data: ")) {
          const dataContent = line.slice(6);

          if (currentEvent === "messages") {
            try {
              const [messageChunk] = JSON.parse(dataContent);

              if (messageChunk.type === "AIMessageChunk") {
                // Handle regular content only - skip tool call indicators
                if (messageChunk.content) {
                  onChunk(messageChunk.content);
                }
              }
            } catch (error) {
              console.error("Error parsing message chunk:", error);
            }
          }
        }
      }
    }
  } catch (error) {
    console.error("Error in sendMessage:", error);
    onError(error instanceof Error ? error : new Error("Unknown error"));
  }
}

/**
 * Main function to send a chat message (creates thread if needed)
 */
export async function sendChatMessage(
  message: string,
  threadId: string | null,
  userId: string,
  onChunk: (text: string) => void,
  onComplete: () => void,
  onError: (error: Error) => void
): Promise<string> {
  try {
    // Create thread if it doesn't exist
    let activeThreadId = threadId;
    if (!activeThreadId) {
      activeThreadId = await createThread(userId);
    }

    // Send message with streaming
    await sendMessage(activeThreadId, message, onChunk, onComplete, onError);

    return activeThreadId;
  } catch (error) {
    console.error("Error in sendChatMessage:", error);
    throw error;
  }
}

export const langgraphApiService = {
  createThread,
  sendMessage,
  sendChatMessage,
};
