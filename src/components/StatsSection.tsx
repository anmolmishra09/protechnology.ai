import { Users, Rocket, Globe, TrendingUp } from "lucide-react";

import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "1M+",
    label: "Active Users",
    description: "Developers and teams building amazing products"
  },
  {
    icon: Globe,
    value: "180+",
    label: "Countries",
    description: "Global reach with local performance"
  },
  {
    icon: Rocket,
    value: "100K+",
    label: "Apps Launched",
    description: "Production-ready applications deployed"
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Success Rate",
    description: "Reliable builds you can trust"
  }
];

export function StatsSection() {
  return (
    <section className="relative z-10 py-32 bg-white border-y border-slate-100 overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-50 border border-orange-100"
          >
            <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Global Reach</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter leading-[1.1]"
          >
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
              1M+ users
            </span>
            {" "}in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
              180+ countries
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Join millions of developers, startups, and enterprises building the future with our AI-powered platform
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
              }}
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 text-center hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-orange-200 transition-all duration-500 relative"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-slate-950 mb-3 tracking-tight">
                {stat.value}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional trust badges */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 flex justify-center items-center gap-6 flex-wrap"
        >
          {["⚡ Lightning Fast Deployment", "🔒 Enterprise Security", "💪 Production Ready"].map((badge, i) => (
            <motion.div 
              key={badge}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3.5 bg-slate-50 rounded-full border border-slate-100 shadow-sm hover:bg-white hover:border-orange-200 hover:shadow-md transition-all duration-300"
            >
              <span className="text-slate-700 font-bold text-sm tracking-tight">
                {badge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}