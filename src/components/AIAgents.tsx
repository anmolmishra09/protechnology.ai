import { Bot, Database, MessageSquare, PenTool, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const agents = [
  {
    icon: MessageSquare,
    title: "Customer Support",
    description: "Handles inquiries 24/7 with human-like empathy and accuracy.",
    status: "Online",
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400",
  },
  {
    icon: Database,
    title: "Data Analyst",
    description: "Processes complex datasets to deliver actionable insights instantly.",
    status: "Processing",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400",
  },
  {
    icon: PenTool,
    title: "Creative Writer",
    description: "Generates compelling copy, blogs, and marketing content.",
    status: "Ready",
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400",
  },
  {
    icon: Bot,
    title: "Dev Assistant",
    description: "Debugs code, suggests optimizations, and writes documentation.",
    status: "Active",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400",
  },
];

export function AIAgents() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-orange-50 dark:from-indigo-950 dark:to-slate-950 py-24 px-4 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/50 dark:from-orange-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Deploy Specialized AI Agents
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our autonomous agents work tirelessly in the background, handling complex tasks so you can focus on strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white dark:bg-indigo-900/40 rounded-2xl p-6 border border-orange-200 dark:border-indigo-800 shadow-sm hover:shadow-2xl hover:shadow-orange-200/50 dark:hover:shadow-indigo-900/50 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              <div className={`w-14 h-14 rounded-xl ${agent.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <agent.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{agent.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 min-h-[40px]">
                {agent.description}
              </p>
              
              <div className="flex items-center gap-2 pt-4 border-t border-teal-100 dark:border-indigo-800">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 dark:bg-teal-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500 dark:bg-teal-400"></span>
                </div>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{agent.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}