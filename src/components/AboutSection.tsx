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

    <section className="relative py-32 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-10 tracking-tighter leading-tight">
              Building the <span className="text-orange-600">Intelligence Layer</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              At Inalgo, we believe AI should augment human potential. Founded by a team of researchers and engineers from the world's top labs, we're building tools that help teams move faster and think bigger.
            </p>

            <div className="space-y-10">
              {values.map((value, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-lg group-hover:bg-slate-950 transition-colors duration-500 group-hover:border-slate-950">
                    <value.icon className="w-7 h-7 text-slate-950 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-950 mb-2">{value.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Composition */}
          <motion.div

            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            {/* Background Base */}
            <div className="absolute inset-0 bg-slate-50 rounded-[3rem] border border-slate-100" />

            {/* Floating Card 1: Team */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 right-12 bg-white p-6 rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100 w-72 z-20"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <Avatar key={i} className="w-10 h-10 border-4 border-white shadow-sm">
                      <AvatarFallback className="bg-slate-50 text-slate-950 text-xs font-black ring-1 ring-slate-100">
                        {i === 1 ? "JD" : i === 2 ? "AS" : "MK"}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">+50 Experts</div>
              </div>
              <div className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-slate-950 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
              <div className="mt-3 text-[10px] font-black text-slate-400 text-right uppercase tracking-[0.2em]">85% Growth</div>
            </motion.div>

            {/* Floating Card 2: Mission */}
            <motion.div

              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 left-12 bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 w-80 z-30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-base font-black text-slate-950">System Level</div>
                  <div className="text-[10px] font-black text-green-600 uppercase tracking-widest mt-0.5">Operational</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Accuracy", value: "99.9%" },
                  { label: "Latency", value: "120ms" },
                  { label: "Uptime", value: "99.99%" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-400">{item.label}</span>
                    <span className="font-black text-slate-950">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-100 blur-[100px] opacity-30 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
