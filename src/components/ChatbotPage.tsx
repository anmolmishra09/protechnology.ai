import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, ArrowLeft, Trash2, Download } from "lucide-react";
import { Button } from "./ui/button";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatbotPageProps {
  onBack: () => void;
}

const sampleQuestions = [
  "What services does Pro Technology offer?",
  "How can AI help my business?",
  "Tell me about your development process",
  "What technologies do you use?",
  "How do I get started with your platform?"
];

export function ChatbotPage({ onBack }: ChatbotPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI assistant from Pro Technology. I can help you learn about our services, answer questions about AI development, or guide you through our platform. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("service") || lowerMessage.includes("offer")) {
      return "Pro Technology offers comprehensive AI-powered development services including:\n\n• Full-stack application development\n• AI/ML integration and consulting\n• Custom chatbot and agent development\n• Cloud infrastructure and deployment\n• Real-time data processing and analytics\n\nWe specialize in turning ideas into production-ready solutions with cutting-edge AI technology. Would you like to know more about any specific service?";
    }
    
    if (lowerMessage.includes("ai") && (lowerMessage.includes("help") || lowerMessage.includes("business"))) {
      return "AI can transform your business in several ways:\n\n🚀 Automation: Streamline repetitive tasks and workflows\n💡 Intelligence: Make data-driven decisions with predictive analytics\n🤖 Customer Service: Provide 24/7 support with AI chatbots\n📊 Insights: Uncover patterns and opportunities in your data\n⚡ Efficiency: Reduce costs and increase productivity\n\nWe can help you identify the best AI solutions for your specific needs. What industry are you in?";
    }
    
    if (lowerMessage.includes("process") || lowerMessage.includes("how do you")) {
      return "Our development process is simple and efficient:\n\n1️⃣ Discovery: We understand your vision and requirements\n2️⃣ Design: Create optimal UX/UI and architecture\n3️⃣ Development: Build with cutting-edge technologies\n4️⃣ Testing: Ensure quality and performance\n5️⃣ Deployment: Launch your application to production\n6️⃣ Support: Ongoing maintenance and updates\n\nMost projects go from concept to production in just weeks, not months. Want to start a project?";
    }
    
    if (lowerMessage.includes("technolog") || lowerMessage.includes("stack") || lowerMessage.includes("framework")) {
      return "We work with modern, industry-leading technologies:\n\n💻 Frontend: React, Vue, Angular, Next.js, TypeScript\n⚙️ Backend: Node.js, Python, FastAPI, Express\n🗄️ Database: PostgreSQL, MongoDB, Redis\n☁️ Cloud: AWS, Google Cloud, Azure\n🤖 AI/ML: TensorFlow, PyTorch, OpenAI, Anthropic\n🔧 Tools: Docker, Kubernetes, Git, CI/CD\n\nWe choose the best stack for each project based on your requirements. Any specific technology you're interested in?";
    }
    
    if (lowerMessage.includes("start") || lowerMessage.includes("begin") || lowerMessage.includes("get started")) {
      return "Getting started is easy! Here's how:\n\n✅ Step 1: Describe your project idea or goals\n✅ Step 2: Schedule a free consultation with our team\n✅ Step 3: Receive a detailed proposal and timeline\n✅ Step 4: We begin development while you track progress\n✅ Step 5: Launch your production-ready application\n\nYou can start by clicking 'Contact' in the navigation, or tell me more about your project right here!";
    }
    
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("pricing")) {
      return "Our pricing is flexible and project-based:\n\n📱 Simple Landing Page: Starting at $2,000\n🌐 Web Application: Starting at $10,000\n🤖 AI Integration: Starting at $5,000\n💼 Enterprise Solutions: Custom pricing\n\nWe also offer:\n• Hourly consulting rates\n• Monthly retainer packages\n• Revenue-sharing partnerships for startups\n\nPricing depends on complexity, features, and timeline. Contact us for a detailed quote tailored to your needs!";
    }
    
    if (lowerMessage.includes("chatbot") || lowerMessage.includes("chat bot")) {
      return "Great question! We specialize in building intelligent chatbots like this one:\n\n🎯 Custom AI Agents: Trained on your specific data\n💬 Multi-channel: Web, mobile, Slack, Discord, WhatsApp\n🧠 Advanced NLP: Understanding context and intent\n🔗 Integration: Connect to your systems and databases\n📊 Analytics: Track conversations and improve over time\n\nOur chatbots can handle customer service, lead generation, internal support, and more. Interested in building one?";
    }
    
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're very welcome! 😊 I'm here to help anytime. Feel free to ask more questions or reach out to our team for personalized assistance. Have a great day!";
    }
    
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! 👋 Great to hear from you! I'm here to help you learn about Pro Technology's AI solutions. What would you like to know about?";
    }
    
    return "That's an interesting question! While I can provide general information about Pro Technology's services, AI development, and our platform, I'd recommend reaching out to our team directly for more specific inquiries.\n\nYou can:\n• Click 'Contact' to send us a message\n• Explore our website for detailed information\n• Ask me about our services, processes, or technologies\n\nIs there anything specific about our AI solutions I can help clarify?";
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

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(input.trim());
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: "Chat cleared! How can I help you today?",
        timestamp: new Date()
      }
    ]);
  };

  const handleExportChat = () => {
    const chatText = messages.map(m => 
      `[${m.timestamp.toLocaleTimeString()}] ${m.role === "user" ? "You" : "AI"}: ${m.content}`
    ).join("\n\n");
    
    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSampleQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-orange-100 dark:hover:bg-slate-800"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">AI Assistant</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Always here to help</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleExportChat}
              className="hover:bg-orange-100 dark:hover:bg-slate-800"
              title="Export chat"
            >
              <Download className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearChat}
              className="hover:bg-orange-100 dark:hover:bg-slate-800"
              title="Clear chat"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col" style={{ height: "calc(100vh - 200px)" }}>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-slate-500 to-slate-700"
                    : "bg-gradient-to-br from-orange-500 to-amber-500"
                }`}>
                  {message.role === "user" ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* Message Content */}
                <div className={`flex-1 max-w-2xl ${message.role === "user" ? "text-right" : ""}`}>
                  <div className={`inline-block px-6 py-4 rounded-2xl shadow-md ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700"
                  }`}>
                    <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                  <p className={`text-xs text-slate-500 dark:text-slate-400 mt-2 ${
                    message.role === "user" ? "text-right" : ""
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-orange-500 to-amber-500">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Sample Questions */}
          {messages.length <= 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Try asking:
              </p>
              <div className="flex flex-wrap gap-2">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSampleQuestion(question)}
                    className="px-4 py-2 bg-orange-100 dark:bg-slate-800 text-orange-800 dark:text-orange-300 rounded-full text-sm hover:bg-orange-200 dark:hover:bg-slate-700 transition-colors duration-200 border border-orange-200 dark:border-slate-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-colors duration-200"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="px-6 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 text-center">
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
