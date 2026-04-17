import { useState } from "react";
import { motion } from "framer-motion";

import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  Code2, 
  Briefcase, 
  ChevronDown 
} from "lucide-react";

import { Button } from "./ui/button";
interface Message {
  role: "user" | "assistant";
  content: string;
}

interface FloatingChatWidgetProps {
  onOpenFullChat?: () => void;
}

const personas = [
  { id: "general", name: "Inalgo Assistant", icon: Bot, color: "text-orange-500", accent: "bg-orange-500" },
  { id: "tech", name: "Tech Architect", icon: Code2, color: "text-blue-500", accent: "bg-blue-500" },
  { id: "product", name: "Product Manager", icon: Briefcase, color: "text-emerald-500", accent: "bg-emerald-500" },
];

const quickReplies = [
  "What services do you offer?",
  "How can I get started?",
  "Tell me about pricing",
  "What technologies do you use?"
];

export function FloatingChatWidget({ onOpenFullChat }: FloatingChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [activePersona, setActivePersona] = useState(personas[0]);
  const [showPersonaPicker, setShowPersonaPicker] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm your Inalgo AI assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    setShowPersonaPicker(false);
  };

  const handlePersonaSwitch = (persona: typeof personas[0]) => {
    setActivePersona(persona);
    setShowPersonaPicker(false);
    setMessages([{
      role: "assistant",
      content: `Switched to ${persona.name}. ${
        persona.id === "tech" ? "I specialize in architecture, code reviews, and technical strategy. What can I help with?" :
        persona.id === "product" ? "I focus on product strategy, roadmaps, and growth. What are you building?" :
        "I'm your general Inalgo assistant. How can I help you today?"
      }`
    }]);
  };

  const generateQuickResponse = (question: string): string => {
    const lower = question.toLowerCase();


    if (lower.includes("service") || lower.includes("offer")) {
      return "We offer AI-powered development, full-stack apps, custom chatbots, and cloud deployment. Want to learn more?";
    }
    if (lower.includes("start") || lower.includes("get started")) {
      return "Getting started is easy! Tell me about your project, or click 'Open Full Chat' for a detailed conversation. 🚀";
    }
    if (lower.includes("price") || lower.includes("pricing")) {
      return "Flexible pricing starts from $2,000. Click 'Open Full Chat' for detailed package information.";
    }
    if (lower.includes("technolog")) {
      return "We use React, Node.js, Python, and cutting-edge AI/ML frameworks. Need specifics?";
    }
    return "Great question! For a detailed answer, click 'Open Full Chat' to access our full AI assistant. 💬";
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

    setMessages(prev => [
      ...prev,
      { role: "assistant", content: response }
    ]);
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

        <div className="fixed bottom-24 right-4 md:right-8 w-[92vw] md:w-96 h-[520px] bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-slate-300/50 border border-slate-100 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-950 px-6 py-5 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <activePersona.icon className={`w-5 h-5 ${activePersona.color}`} />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-950 animate-pulse" />
              </div>
              <div>
                <button
                  onClick={() => setShowPersonaPicker(!showPersonaPicker)}
                  className="flex items-center gap-1.5 group"
                >
                  <h3 className="font-black text-white text-sm leading-tight">{activePersona.name}</h3>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showPersonaPicker ? "rotate-180" : ""}`} />
                </button>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Inalgo Intelligence</p>
              </div>
            </div>
            <button
              onClick={handleToggle}

              className="text-slate-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>


          {/* Persona Picker Dropdown */}
          {showPersonaPicker && (
            <div className="bg-slate-900 border-b border-slate-800 flex-shrink-0">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  onClick={() => handlePersonaSwitch(persona)}
                  className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                    activePersona.id === persona.id
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center`}>
                    <persona.icon className={`w-4 h-4 ${persona.color}`} />
                  </div>
                  <span className="text-sm font-bold">{persona.name}</span>
                  {activePersona.id === persona.id && (
                    <div className={`ml-auto w-2 h-2 rounded-full ${persona.accent}`} />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div

                  className={`max-w-[85%] px-4 py-3 rounded-[1.25rem] text-sm font-medium leading-relaxed ${
                    message.role === "user"
                      ? "bg-slate-950 text-white rounded-br-md shadow-lg"
                      : "bg-slate-50 text-slate-950 border border-slate-100 rounded-bl-md shadow-sm"
                  }`}
                >
                  <p>{message.content}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">

                <div className="bg-slate-50 px-4 py-3 rounded-[1.25rem] rounded-bl-md border border-slate-100 shadow-sm">
                  <div className="flex gap-1.5">
                    {[0, 150, 300].map((d) => (
                      <div
                        key={d}
                        className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${d}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quick Replies */}
            {messages.length <= 1 && (

              <div className="space-y-2 pt-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-orange-500" />
                  Try asking:
                </p>
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="w-full text-left px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-950 rounded-xl text-xs font-bold transition-all border border-slate-100 hover:border-slate-200 shadow-sm active:scale-[0.98]"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Full Chat CTA */}
          {messages.length > 2 && (

            <div className="px-5 pb-3 flex-shrink-0">
              <button
                onClick={onOpenFullChat}
                className="w-full px-4 py-3 bg-slate-950 text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all hover:bg-slate-800 flex items-center justify-center gap-2 shadow-xl shadow-slate-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Open Full Chat Experience
              </button>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-slate-50 bg-white/80 backdrop-blur-sm flex-shrink-0">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}

                placeholder={`Ask our ${activePersona.name.toLowerCase()}...`}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-950 text-sm font-bold placeholder-slate-400 focus:bg-white focus:border-slate-300 focus:outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}

                className="w-11 h-11 flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white rounded-xl transition-all disabled:opacity-40 active:scale-95 shadow-lg"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Floating Trigger Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-4 md:right-8 w-16 h-16 bg-slate-950 hover:bg-slate-800 text-white rounded-[2rem] shadow-2xl hover:shadow-slate-400/50 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Open Inalgo AI Chat"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
            <div className="absolute top-3.5 right-3.5 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-950 animate-pulse" />
          </>
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (

        <div className="fixed bottom-7 right-24 md:right-28 bg-slate-950 text-white px-4 py-2 rounded-2xl shadow-2xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 z-40 animate-bounce pointer-events-none border border-white/10 whitespace-nowrap">
          Chat with AI 💬
        </div>
      )}
    </>
  );
}
