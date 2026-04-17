import { useState, useRef, useEffect } from "react";
import { 
  Send, Bot, User, Sparkles, ArrowLeft, Trash2, Download, 
  Menu, X, History, Terminal, Briefcase, Palette, Code2, 
  MessageSquare, Settings, Share2, Plus
} from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  agent?: string;
}

interface ChatbotPageProps {
  onBack: () => void;
}

const agents = [
  { id: "general", name: "Inalgo Assistant", icon: Bot, color: "text-orange-600", bg: "bg-orange-50" },
  { id: "tech", name: "Tech Architect", icon: Code2, color: "text-blue-600", bg: "bg-blue-50" },
  { id: "product", name: "Product Strategy", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "design", name: "Creative Director", icon: Palette, color: "text-purple-600", bg: "bg-purple-50" },
];

const sampleQuestions = [
  "What services does Inalgo offer?",
  "How can AI help my business?",
  "Tell me about your development process",
  "How do I get started with your platform?"
];

export function ChatbotPage({ onBack }: ChatbotPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI assistant from Inalgo. How can I assist you today?",
      timestamp: new Date(),
      agent: "Inalgo Assistant"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeAgent, setActiveAgent] = useState(agents[0]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("service") || lowerMessage.includes("offer")) {
      return "Inalgo offers full-stack development, AI/ML integration, and custom chatbot solutions.";
    }
    if (lowerMessage.includes("ai")) {
      return "AI can transform your business through automation and predictive analytics.";
    }
    return "That's an interesting question! How else can I help with your Inalgo experience?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMessage.content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
        agent: activeAgent.name
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="w-80 bg-white border-r border-slate-100 flex flex-col z-20"
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">I</span>
                </div>
                <span className="text-xl font-black text-slate-950 tracking-tighter">Inalgo</span>
              </div>

              <Button
                variant="outline"
                className="w-full justify-start gap-3 rounded-2xl border-slate-100 text-slate-600 font-bold h-12 hover:bg-slate-50 mb-10"
                onClick={() => setMessages([messages[0]])}
              >
                <Plus className="w-5 h-5" />
                New Chat
              </Button>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Specialized Agents</p>
                  <div className="space-y-2">
                    {agents.map((agent) => (
                      <button
                        key={agent.id}
                        onClick={() => setActiveAgent(agent)}
                        className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all ${
                          activeAgent.id === agent.id ? "bg-slate-100 text-slate-950" : "text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        <div className={`w-10 h-10 ${agent.bg} rounded-xl flex items-center justify-center`}>
                          <agent.icon className={`w-5 h-5 ${agent.color}`} />
                        </div>
                        <span className="font-bold text-sm">{agent.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative bg-slate-50">
        <header className="bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-8 py-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="w-6 h-6" />
            </Button>
            <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Back
            </Button>
          </div>
          <div className="flex items-center gap-4">
             <div className={`w-12 h-12 ${activeAgent.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
              <activeAgent.icon className={`w-6 h-6 ${activeAgent.color}`} />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-10">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-6 ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl border-4 border-white ${
                  message.role === "user" ? "bg-slate-950" : activeAgent.bg
                }`}>
                  {message.role === "user" ? <User className="w-6 h-6 text-white" /> : <activeAgent.icon className={`w-6 h-6 ${activeAgent.color}`} />}
                </div>
                <div className={`flex-1 max-w-2xl ${message.role === "user" ? "text-right" : ""}`}>
                  <div className={`inline-block px-8 py-6 rounded-[2rem] text-base font-medium ${
                    message.role === "user" ? "bg-slate-950 text-white" : "bg-white text-slate-950 border border-slate-50 shadow-xl"
                  }`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && <div className="text-slate-400 text-sm italic">Agent is thinking...</div>}
            <div ref={messagesEndRef} />
          </div>
        </main>

        <footer className="p-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-2 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Ask our ${activeAgent.name.toLowerCase()}...`}
                className="flex-1 px-8 py-4 bg-transparent text-slate-950 focus:outline-none font-bold text-lg"
              />
              <Button onClick={handleSend} disabled={!input.trim() || isTyping} className="h-14 px-8 bg-slate-950 text-white rounded-2xl">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}