import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface FloatingChatWidgetProps {
  onOpenFullChat?: () => void;
}

const quickReplies = [
  "What services do you offer?",
  "How can I get started?",
  "Tell me about pricing",
  "What technologies do you use?"
];

export function FloatingChatWidget({ onOpenFullChat }: FloatingChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm your AI assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const generateQuickResponse = (question: string): string => {
    const lower = question.toLowerCase();
    
    if (lower.includes("service") || lower.includes("offer")) {
      return "We offer AI-powered development, full-stack apps, chatbots, and cloud deployment. Want to learn more about a specific service?";
    }
    if (lower.includes("start") || lower.includes("get started")) {
      return "Getting started is easy! Just tell me about your project, or click 'AI Chat' in the navigation for a detailed conversation. 🚀";
    }
    if (lower.includes("price") || lower.includes("pricing")) {
      return "We have flexible pricing based on your needs. Projects start from $2,000. Click 'AI Chat' above for detailed pricing information.";
    }
    if (lower.includes("technolog")) {
      return "We use React, Node.js, Python, AI/ML frameworks, and modern cloud platforms. Want specifics on any technology?";
    }
    return "That's a great question! For detailed information, click the 'AI Chat' button in the navigation for our full AI assistant. 💬";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateQuickResponse(input.trim());
      setMessages(prev => [...prev, {
        role: "assistant",
        content: response
      }]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-96 h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border-2 border-orange-200 dark:border-slate-700 flex flex-col z-50 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-white">AI Assistant</h3>
                <p className="text-xs text-orange-100">Online</p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="space-y-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Quick questions:
                </p>
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="w-full text-left px-3 py-2 bg-orange-50 dark:bg-slate-800 hover:bg-orange-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs transition-colors border border-orange-200 dark:border-slate-600"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Full Chat CTA */}
          {messages.length > 2 && (
            <button
              onClick={onOpenFullChat}
              className="mx-4 mb-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Open Full Chat for More Features
            </button>
          )}

          {/* Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-orange-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-4 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 md:w-7 md:h-7" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
          </>
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="fixed bottom-6 right-24 md:right-28 bg-slate-900 dark:bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300 z-40 animate-bounce">
          Chat with our AI! 💬
        </div>
      )}
    </>
  );
}
