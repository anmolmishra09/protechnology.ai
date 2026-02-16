import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { LLMInteractiveAnimation } from "./LLMInteractiveAnimation";
import { Upload, Code2, Puzzle } from "lucide-react";

const rotatingTexts = [
  "dashboard.",
  "website.",
  "mobile app.",
  "SaaS product.",
  "internal tool.",
  "landing page."
];

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTemplates = () => {
    const templatesElement = document.querySelector('.templates-section');
    if (templatesElement) {
      templatesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      scrollToFeatures();
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950 transition-colors duration-300">
      {/* Soft Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-amber-50/80 to-yellow-50/80 dark:from-slate-950/80 dark:via-indigo-950/80 dark:to-slate-950/80" />
      
      {/* Interactive LLM Animation */}
      {/* <LLMInteractiveAnimation /> */}
      
      {/* Organic Floating Shapes - Orange and Amber theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-200/60 dark:bg-orange-900/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-amber-200/50 dark:bg-amber-900/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-yellow-200/40 dark:bg-yellow-900/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[-5%] right-[10%] w-[450px] h-[450px] bg-orange-300/50 dark:bg-orange-900/30 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-amber-300/40 dark:bg-amber-900/30 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pointer-events-none">
        <h1 className="font-bold text-slate-900 dark:text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 tracking-tight">
          Think It. Type It. Launch It.
        </h1>
        
        {/* Rotating Text Section */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-2">
            Build production-ready
          </h2>
          <div className="flex items-center justify-center gap-2 min-h-[60px] md:min-h-[80px]">
            <span 
              className={`text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400 bg-clip-text text-transparent transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-orange-600 dark:text-orange-400 animate-pulse">|</span>
          </div>
        </div>

        {/* Input Section */}
        <div className="mb-8 pointer-events-auto">
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6 font-medium">
            What can I build for you today?
          </p>
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-3 border-2 border-orange-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Describe your project... (e.g., A social media dashboard with analytics)"
                className="flex-1 px-6 py-4 rounded-xl bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none text-lg"
                onKeyDown={handleInputKeyDown}
              />
              <Button 
                onClick={scrollToFeatures}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-xl px-8 py-4 text-lg font-medium shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Build Now
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 pointer-events-auto">
          <button onClick={scrollToFeatures} className="flex items-center gap-2 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-300 group">
            <Upload className="w-5 h-5 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Import</span>
          </button>
          <button onClick={scrollToTemplates} className="flex items-center gap-2 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-300 group">
            <Code2 className="w-5 h-5 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Frameworks</span>
          </button>
          <button onClick={scrollToFeatures} className="flex items-center gap-2 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-300 group">
            <Puzzle className="w-5 h-5 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Integrations</span>
          </button>
        </div>

        {/* Subtext */}
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          From concept to production-ready solutions in minutes. AI-powered development that understands your vision.
        </p>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0 dark:opacity-20" />
    </section>
  );
}