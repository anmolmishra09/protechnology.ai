import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Play, Zap, Target, MousePointer2 } from "lucide-react";
import { useRef } from "react";

interface WebsiteCTAProps {
  onNavigate?: (page: "signup" | "chatbot") => void;
}

export function WebsiteCTA({ onNavigate }: WebsiteCTAProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the mockup
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-white overflow-hidden py-32 px-4 selection:bg-amber-100 selection:text-amber-900"
    >
      {/* Background Accents - Soft & Airy */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[120px] opacity-60" />
        {/* Subtle grid pattern for texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-8 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Next-Gen AI Platform</span>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 leading-[0.9]">
            Scale with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Inalgo</span>
          </h2>
          
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            The intelligent layer for your sales stack. Automate demos, 
            qualify leads, and close deals while your team sleeps.
          </p>
        </motion.div>

        {/* CTA Actions */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mt-12 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => onNavigate?.("signup")}
            className="group relative flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-slate-950 text-white font-bold text-base shadow-xl shadow-slate-900/10 transition-all hover:bg-slate-800 active:scale-95"
          >
            Start Building Free
            <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => onNavigate?.("chatbot")}
            className="flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-slate-200 bg-white text-slate-900 font-bold text-base shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            <Play className="w-4 h-4 fill-amber-500 text-amber-500" />
            Watch Demo
          </button>
        </motion.div>

        {/* Visual Mockup Container */}
        <motion.div 
          style={{ y }}
          className="w-full relative max-w-5xl"
        >
          {/* Main Browser Mockup */}
          <div className="relative bg-white rounded-[32px] p-2 shadow-[0_32px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-200">
            <div className="bg-slate-50/50 rounded-[24px] overflow-hidden border border-slate-100">
              
              {/* Browser Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="text-[11px] font-bold text-slate-400 bg-slate-100/50 px-4 py-1.5 rounded-lg border border-slate-200/50">
                  app.inalgo.ai/dashboard
                </div>
                <div className="w-10" />
              </div>

              {/* Dashboard Content Mockup */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[400px] bg-white">
                <div className="col-span-1 space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 bg-slate-50 rounded-xl border border-slate-100" />
                  ))}
                </div>
                <div className="md:col-span-3 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-amber-50/50 border border-amber-100 rounded-2xl" />
                    <div className="h-32 bg-slate-50 border border-slate-100 rounded-2xl" />
                  </div>
                  <div className="h-48 bg-slate-50/50 border border-slate-100 rounded-3xl border-dashed" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <FloatingCard 
            icon={<Zap className="text-amber-600 w-5 h-5" />} 
            text="High Speed" 
            sub="200ms latency" 
            pos="top-0 -left-6"
            delay={0}
          />
          <FloatingCard 
            icon={<Target className="text-emerald-600 w-5 h-5" />} 
            text="Precision AI" 
            sub="99.2% Accuracy" 
            pos="bottom-20 -right-8"
            delay={1}
          />
          
          {/* Animated Cursor */}
          <motion.div 
            animate={{ 
              x: [120, -180, 120], 
              y: [60, 180, 60] 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 z-20 hidden lg:block"
          >
            <MousePointer2 className="w-8 h-8 text-slate-900 drop-shadow-md" fill="currentColor" />
            <div className="bg-slate-950 text-white px-3 py-1.5 rounded-full text-[10px] font-black ml-4 shadow-xl border border-white/20">
              AI AGENT LIVE
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({ icon, text, sub, pos, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 0.5 } 
      }}
      className={`absolute ${pos} hidden md:flex items-center gap-4 bg-white/90 backdrop-blur-xl border border-slate-200 p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] z-20`}
    >
      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">{icon}</div>
      <div className="text-left">
        <p className="text-xs font-black text-slate-900">{text}</p>
        <p className="text-[10px] text-slate-400 font-bold tracking-tight">{sub}</p>
      </div>
    </motion.div>
  );
}