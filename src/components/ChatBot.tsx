import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || "";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you with Fusion Innovation IT services today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputValue, isUser: true }]);
    const userText = inputValue;
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let response = "Thank you for your message. Our team will get back to you shortly.";
      
      if (userText.toLowerCase().includes("service")) {
        response = "We offer a wide range of services including AI Solutions, Cyber Security, and Digital Development. Which one are you interested in?";
      } else if (userText.toLowerCase().includes("contact") || userText.toLowerCase().includes("email")) {
        response = "You can reach us at contact@fusioninnovation.it or call +1 (555) 123-4567.";
      } else if (userText.toLowerCase().includes("price") || userText.toLowerCase().includes("cost")) {
        response = "Our pricing is tailored to each project's specific needs. Please contact us for a custom quote.";
      }
      else if (userText.toLowerCase().includes("team") || userText.toLowerCase().includes("someone")) {
        response = "Our team is made up of highly skilled professionals with years of experience in their respective fields.";
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-36 right-4 lg:bottom-24 lg:right-6 z-50 flex flex-col items-end" ref={chatRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] glass backdrop-blur-xl bg-background/90 border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border/50 bg-primary/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-glow flex items-center justify-center shadow-lg shadow-primary/20">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Fusion Assistant</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary/10 text-muted-foreground hover:text-foreground rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isUser
                        ? "bg-primary text-primary-foreground rounded-tr-none shadow-lg shadow-primary/20"
                        : "bg-muted/50 text-foreground rounded-tl-none border border-border/50"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-border/50 bg-background/50">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="bg-background/50 border-border/50 focus:border-primary/50"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? "bg-muted text-foreground rotate-90" 
            : "bg-gradient-glow text-primary hover:shadow-[0_0_30px_rgba(76,201,240,0.4)]"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-7 w-7" />
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;