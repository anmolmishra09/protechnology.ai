import { Avatar, AvatarFallback } from "./ui/avatar";
import { CheckCircle, Users, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Democratizing access to advanced AI for businesses of all sizes."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Built by researchers and engineers from the world's top AI labs."
  },
  {
    icon: Zap,
    title: "Rapid Innovation",
    description: "Weekly updates deploying the latest breakthroughs in model architecture."
  }
];

export function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-cyan-50 dark:from-slate-950 dark:to-indigo-950 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/50 dark:bg-teal-900/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Building the <span className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">Intelligence Layer</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              At Pro Technology, we believe AI should augment human potential, not replace it. Founded by a team of researchers and engineers passionate about the future of work, we're building tools that help teams move faster and think bigger.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{value.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] w-full"
          >
            {/* Background Card */}
            <div className="absolute top-0 right-0 w-full h-full bg-slate-50 rounded-3xl border border-slate-200" />
            
            {/* Floating Card 1: Team */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 w-64 z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarFallback className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 text-xs">JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarFallback className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 text-xs">AS</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarFallback className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-xs">MK</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-xs font-medium text-slate-500">+50 Experts</div>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <div className="mt-2 text-xs text-slate-400 text-right">85% Growth</div>
            </motion.div>

            {/* Floating Card 2: Mission */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 w-72 z-30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">System Status</div>
                  <div className="text-xs text-green-600 font-medium">All Systems Operational</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Model Accuracy</span>
                  <span className="font-semibold text-slate-900">99.9%</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Response Time</span>
                  <span className="font-semibold text-slate-900">120ms</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Uptime</span>
                  <span className="font-semibold text-slate-900">99.99%</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-900/40 dark:to-cyan-900/40 rounded-full blur-3xl opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}