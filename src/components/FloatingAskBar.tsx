import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles, X } from "lucide-react";

interface FloatingAskBarProps {
  onOpenFullChat?: () => void;
}

export function FloatingAskBar({ onOpenFullChat }: FloatingAskBarProps) {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          );
          
          const isPastHero = scrollY > 100;
          // Only mask out when deeply into the footer absolute bottom zone (prevent false positives on nested heights)
          const isAtBottom = scrollY + windowHeight >= documentHeight - 600; 
          
          setIsVisible(isPastHero && !isAtBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = () => {
    if (!input.trim()) return;
    onOpenFullChat?.();
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") {
      setInput("");
      inputRef.current?.blur();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="floating-ask-bar"
          initial={{ y: 80, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 80, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-10 left-1/2 z-50 w-[94vw] max-w-[640px]"
        >
          <motion.div
            animate={isFocused ? {
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15), 0 10px 20px -5px rgba(0,0,0,0.1), 0 0 15px rgba(249, 115, 22, 0.15)",
              borderColor: "rgba(249, 115, 22, 0.4)",
              scale: 1.01
            } : {
              boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.2)",
              borderColor: "rgba(226, 232, 240, 0.8)",
              scale: 1
            }}
            className="flex items-center gap-4 bg-white/90 backdrop-blur-2xl rounded-[28px] border border-slate-200/80 px-3 py-2.5 transition-all duration-500"
          >
            {/* Left Side: Colorful Avatar Icon */}
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-tr from-blue-400 via-indigo-200 to-amber-300 p-[2px] shadow-sm">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-amber-500/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-slate-800" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Input: Centered */}
            <div className="flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Ask me anything..."
                className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-[15px] font-semibold py-1 tracking-tight text-center"
              />
            </div>

            {/* Right Side: Action Buttons (Balanced width with left side) */}
            <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {input ? (
                  <motion.button
                    key="close"
                    initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.7, rotate: 45 }}
                    onClick={() => setInput("")}
                    className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <motion.button
                    key="submit"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmit}
                    className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center transition-all shadow-lg active:shadow-inner"
                  >
                    <ArrowUp className="w-5 h-5 text-white" strokeWidth={3} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
