import PQueue from 'p-queue';

/**
 * n8n API Service
 * 
 * Centralized service for interacting with n8n webhooks.
 * Features:
 * - Request queueing with concurrency control (max 10 concurrent requests)
 * - Exponential backoff retry logic for transient errors
 * - Robust error handling
 */

// Request queue with max 10 concurrent requests
const queue = new PQueue({ concurrency: 10 });

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || '';

/**
 * Retry configuration
 */
const RETRY_CONFIG = {
  maxRetries: 3,
  initialDelay: 1000, // 1 second
  maxDelay: 10000, // 10 seconds
  retryableStatusCodes: [429, 502, 503], // Too Many Requests, Bad Gateway, Service Unavailable
};

/**
 * Sleep utility for delays
 */
const sleep = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

/**
 * Calculate exponential backoff delay
 */
const calculateBackoffDelay = (attempt: number): number => {
  const delay = RETRY_CONFIG.initialDelay * Math.pow(2, attempt);
  return Math.min(delay, RETRY_CONFIG.maxDelay);
};

/**
 * Fetch with exponential backoff retry logic
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = RETRY_CONFIG.maxRetries
): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      // Success - return immediately
      if (response.ok) {
        return response;
      }

      // Check if error is retryable
      if (RETRY_CONFIG.retryableStatusCodes.includes(response.status)) {
        const delay = calculateBackoffDelay(attempt);
        console.warn(
          `n8n request failed with ${response.status}. Retrying in ${delay}ms... (Attempt ${attempt + 1}/${maxRetries})`
        );
        await sleep(delay);
        continue;
      }

      // Non-retryable error - throw immediately
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (error) {
      lastError = error as Error;

      // If this is a network error and we have retries left, try again
      if (attempt < maxRetries - 1) {
        const delay = calculateBackoffDelay(attempt);
        console.warn(
          `n8n request failed: ${lastError.message}. Retrying in ${delay}ms... (Attempt ${attempt + 1}/${maxRetries})`
        );
        await sleep(delay);
        continue;
      }

      // Max retries exceeded - throw
      break;
    }
  }

  throw lastError || new Error('Request failed after maximum retries');
}

/**
 * Send a chat message to n8n
 */
export async function sendChatMessage(
  message: string,
  sessionId: string
): Promise<string> {
  if (!N8N_WEBHOOK_URL) {
    throw new Error('n8n webhook URL is not configured');
  }

  return queue.add(async () => {
    try {
      const response = await fetchWithRetry(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          sessionId,
        }),
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      // Handle the response (Check for 'output', 'text', or 'reply')
      return data.output || data.text || data.reply || 'I received your message but got no text back.';
    } catch (error) {
      console.error('Error sending chat message to n8n:', error);
      throw new Error('Sorry, I\'m having trouble connecting to the server right now.');
    }
  });
}

/**
 * Submit a contact form to n8n
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  if (!N8N_WEBHOOK_URL) {
    throw new Error('n8n webhook URL is not configured');
  }

  return queue.add(async () => {
    try {
      const response = await fetchWithRetry(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact_form',
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error submitting contact form to n8n:', error);
      throw new Error('Failed to send message. Please try again later.');
    }
  });
}

/**
 * Send batch request to n8n (for bulk operations)
 */
export async function sendBatchRequest<T>(
  items: T[],
  batchSize = 10
): Promise<void> {
  if (!N8N_WEBHOOK_URL) {
    throw new Error('n8n webhook URL is not configured');
  }

  // Split items into batches
  const batches: T[][] = [];
  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize));
  }

  // Process each batch
  for (const batch of batches) {
    await queue.add(async () => {
      try {
        const response = await fetchWithRetry(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'batch',
            items: batch,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error sending batch request to n8n:', error);
        throw error;
      }
    });
  }
}

/**
 * Get current queue status (for debugging/monitoring)
 */
export function getQueueStatus() {
  return {
    size: queue.size,
    pending: queue.pending,
    isPaused: queue.isPaused,
  };
}

// Export as a service object for easier mocking in tests
export const n8nApiService = {
  sendChatMessage,
  submitContactForm,
  sendBatchRequest,
  getQueueStatus,
};
