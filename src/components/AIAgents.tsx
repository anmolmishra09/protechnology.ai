import { Bot, Database, MessageSquare, PenTool, Radio, Zap } from "lucide-react";
import { motion } from "framer-motion";

type Agent = {
  icon: any;
  title: string;
  description: string;
  status: "Online" | "Processing" | "Ready" | "Active";
  accent: string;
};

const agents: Agent[] = [
  {
    icon: MessageSquare,
    title: "Customer Support",
    description: "Handles inquiries 24/7 with human-like empathy and accuracy.",
    status: "Online",
    accent: "amber",
  },
  {
    icon: Database,
    title: "Data Analyst",
    description: "Processes complex datasets to deliver actionable insights instantly.",
    status: "Processing",
    accent: "indigo",
  },
  {
    icon: PenTool,
    title: "Creative Writer",
    description: "Generates compelling copy, blogs, and marketing content.",
    status: "Ready",
    accent: "rose",
  },
  {
    icon: Bot,
    title: "Dev Assistant",
    description: "Debugs code, suggests optimizations, and writes documentation.",
    status: "Active",
    accent: "emerald",
  },
];

const statusStyles: Record<string, string> = {
  Online: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Processing: "bg-indigo-50 text-indigo-600 border-indigo-200",
  Ready: "bg-amber-50 text-amber-600 border-amber-200",
  Active: "bg-sky-50 text-sky-600 border-sky-200",
};

const accentColors: Record<string, string> = {
  amber: "text-amber-500",
  indigo: "text-indigo-500",
  rose: "text-rose-500",
  emerald: "text-emerald-500",
};

export function AIAgents() {
  return (
    <section className="bg-white py-32 px-4 relative overflow-hidden">
      {/* Background Grid - Subtle Light Version */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: `radial-gradient(#e2e8f0 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Soft Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,_#f1f5f9_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-slate-900 font-bold tracking-widest text-xs uppercase mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Live Autonomous Network
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-950 leading-[1.1]"
            >
              The Next Era of <br />
              <span className="text-slate-400 italic">Workforce Automation</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-lg md:max-w-xs leading-relaxed"
          >
            Deploy high-performance agents specialized for your most demanding business tasks.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-[32px] p-8 border border-slate-200 hover:border-slate-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
            >
              <div className="relative z-10">
                {/* Agent Icon */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                  <agent.icon className={`w-6 h-6 ${accentColors[agent.accent]}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {agent.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                  {agent.description}
                </p>

                {/* Status Badge */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${statusStyles[agent.status]}`}>
                    {agent.status}
                  </div>
                  <Zap className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}