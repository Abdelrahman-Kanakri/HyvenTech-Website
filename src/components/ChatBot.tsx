import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';
import { n8nApiService } from "@/services/n8nApiService";
import { useIsMobile } from "@/hooks/use-mobile";

const Chatbot = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you with HyvenTech services today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sessionId = useRef(uuidv4());

  // Listen for toggle event
  useEffect(() => {
    const handleToggle = () => {
      setIsOpen(prev => !prev);
    };

    window.addEventListener('toggleChatbot', handleToggle);
    return () => window.removeEventListener('toggleChatbot', handleToggle);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isSending) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { text: userText, isUser: true }]);
    setInputValue("");
    setIsSending(true);

    try {
      const botReply = await n8nApiService.sendChatMessageDebounced(userText, sessionId.current);
      setMessages((prev) => [...prev, { text: botReply, isUser: false }]);
    } catch (error) {
      console.error("Error sending message:",error);
      const errorMessage = error instanceof Error ? error.message : "Sorry, I'm having trouble connecting to the server right now.";
      setMessages((prev) => [...prev, { text: errorMessage, isUser: false }]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-6 z-50 flex flex-col items-end lg:items-center" ref={chatRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { opacity: 0, scale: 0.2, y: 80 } : { opacity: 0, scale: 0.9, x: 20 }}
            animate={isMobile ? { opacity: 1, scale: 1, y: 0 } : { opacity: 1, scale: 1, x: 0 }}
            exit={isMobile ? { opacity: 0, scale: 0.2, y: 80 } : { opacity: 0, scale: 0.9, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 lg:mb-0 lg:absolute lg:right-20 lg:top-1/2 lg:-translate-y-1/2 w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] glass backdrop-blur-xl bg-background/90 border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden origin-bottom-right lg:origin-right"
          >
            <div className="p-4 border-b border-border/50 bg-primary/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-glow flex items-center justify-center shadow-lg shadow-primary/20">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">HyvenTech Assistant</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-primary/10 text-muted-foreground hover:text-foreground rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isUser ? "bg-primary text-primary-foreground rounded-tr-none shadow-lg shadow-primary/20" : "bg-muted/50 text-foreground rounded-tl-none border border-border/50"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-border/50 bg-background/50">
              <div className="flex gap-2">
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type a message..." className="bg-background/50 border-border/50 focus:border-primary/50" disabled={isSending} />
                <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" disabled={!inputValue.trim() || isSending}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`hidden lg:flex w-14 h-14 rounded-full shadow-2xl items-center justify-center transition-all duration-300 ${isOpen ? 'bg-destructive rotate-90' : 'bg-primary glow-strong'}`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Bot className="w-8 h-8 text-primary-foreground" />}
      </motion.button>
    </div>
  );
};

export default Chatbot;