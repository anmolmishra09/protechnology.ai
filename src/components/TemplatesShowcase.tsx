import {
  Smartphone,
  Globe,
  Building,
  Boxes,
  LayoutDashboard,
  FileText,
  LucideIcon,
  ChevronRight,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TemplatesShowcaseProps {
  onNavigate?: (page: "signup") => void;
}

interface Template {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  accent: string;
  glow: string;
}

const templates: Template[] = [
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboard",
    description: "High-converting admin panels with modular data visualization.",
    tag: "Analytics",
    accent: "bg-blue-500",
    glow: "group-hover:bg-blue-500/5",
  },
  {
    icon: Building,
    title: "Corporate Site",
    description: "High-performance landing pages optimized for conversion.",
    tag: "Business",
    accent: "bg-emerald-500",
    glow: "group-hover:bg-emerald-500/5",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native-feel interfaces built with React Native & Expo.",
    tag: "iOS/Android",
    accent: "bg-purple-500",
    glow: "group-hover:bg-purple-500/5",
  },
  {
    icon: Globe,
    title: "Global Commerce",
    description: "Multilingual storefronts with local payment integration.",
    tag: "E-commerce",
    accent: "bg-orange-500",
    glow: "group-hover:bg-orange-500/5",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Developer-first documentation with MDX support.",
    tag: "Technical",
    accent: "bg-slate-800",
    glow: "group-hover:bg-slate-800/5",
  },
  {
    icon: Boxes,
    title: "Inventory System",
    description: "Real-time tracking for complex supply chain logistics.",
    tag: "Logistics",
    accent: "bg-amber-500",
    glow: "group-hover:bg-amber-500/5",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

export function TemplatesShowcase({ onNavigate }: TemplatesShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-4 bg-white overflow-hidden">
      {/* Dynamic Animated Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] opacity-40 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-black uppercase tracking-tighter text-slate-500 mb-6 shadow-sm"
            >
              <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
              Pre-built Infrastructure
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-950 tracking-tight leading-[0.9]"
            >
              Launch in <span className="text-slate-400">hours,</span> <br />
              not weeks.
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-lg md:max-w-xs font-medium"
          >
            Stop reinventing the wheel. Use our production-ready boilerplate architectures.
          </motion.p>
        </div>

        {/* Templates Grid with staggered entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50"
        >
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onNavigate?.("signup")}
                className={`group relative bg-white p-12 cursor-pointer transition-all duration-500 ${template.glow}`}
              >
                {/* Content Row: Icon and Arrow */}
                <div className="flex justify-between items-start mb-16">
                  <motion.div 
                    animate={hoveredIndex === index ? { y: -5, scale: 1.05 } : { y: 0, scale: 1 }}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-slate-950" />
                  </motion.div>
                  
                  <motion.div
                    animate={hoveredIndex === index ? { rotate: 45, x: 5, y: -5 } : { rotate: 0 }}
                    className="text-slate-300 group-hover:text-slate-950 transition-colors"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Text Info */}
                <div className="relative z-10">
                  <motion.span 
                    animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 block"
                  >
                    {template.tag}
                  </motion.span>
                  <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">
                    {template.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[260px] group-hover:text-slate-600 transition-colors">
                    {template.description}
                  </p>
                </div>

                {/* Animated Accent Underline */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className={`absolute inset-0 ${template.accent} origin-left`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* AI Generator CTA with Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 group bg-slate-950 rounded-[40px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Animated Flare */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none" 
          />
          
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Can't find the <br /> perfect fit?
            </h3>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              Describe your specific business model and our AI will architect a 
              custom starting point in seconds.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate?.("signup")}
            className="relative z-10 px-10 py-5 bg-white text-slate-950 rounded-full font-black text-base flex items-center gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
          >
            Generate Custom Architecture
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}