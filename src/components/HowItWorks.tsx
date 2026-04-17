import { motion } from "framer-motion";
import { Bot, Sparkles, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Bot,
      title: "Provide Context",
      description:
        "Connect your data securely or describe your objective to our intelligent AI system.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "AI Analysis",
      description:
        "Advanced models analyze inputs instantly and detect patterns for optimal output.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Sparkles,
      title: "Instant Results",
      description:
        "Receive actionable insights and ready-to-use outputs in seconds.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex px-4 py-2 rounded-full bg-slate-100 text-xs font-bold tracking-[0.2em] uppercase"
          >
            How it works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mt-6 leading-tight"
          >
            A simple flow that turns{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              ideas into results
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-6 text-lg max-w-2xl mx-auto"
          >
            A streamlined 3-step AI process designed for speed, clarity, and real-world impact.
          </motion.p>
        </div>

        {/* Connector line */}
        <div className="hidden md:block absolute top-[62%] left-0 w-full h-[2px] bg-slate-100" />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -14 }}
                className="group relative bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* glow background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition duration-500`}
                />

                {/* floating number */}
                <div className="absolute -top-6 right-6 text-8xl font-black text-slate-100 group-hover:text-slate-200 transition">
                  {index + 1}
                </div>

                {/* icon */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-bold mt-6 text-slate-900">
                    {step.title}
                  </h3>

                  {/* description */}
                  <p className="text-slate-500 mt-3 leading-relaxed">
                    {step.description}
                  </p>

                  {/* status */}
                  <div className="mt-8 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                      Step {index + 1}
                    </span>
                  </div>
                </div>

                {/* shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}