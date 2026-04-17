
import { Shield, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "Intelligent Automation",

    description:
      "Streamline workflows with AI-powered automation that learns from your patterns and optimizes processes in real-time.",
    gradient: "from-orange-400/20 to-amber-400/20",
  },
  {
    icon: Shield,
    title: "Secure AI Infrastructure",

    description:
      "Enterprise-grade security with end-to-end encryption and compliance-ready architecture for peace of mind.",
    gradient: "from-amber-400/20 to-yellow-400/20",
  },
  {
    icon: Calendar,
    title: "Predictive Insights",

    description:
      "Harness predictive analytics to anticipate trends, optimize resources, and make smarter decisions.",
    gradient: "from-yellow-400/20 to-orange-400/20",
  },
];

// container animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// card animation
const card = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function FeatureCards() {
  return (
    <section id="features" className="relative py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-950">
            Our Solutions
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg">
            AI-powered tools designed to scale your business faster and smarter.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -12, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Glow background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition duration-500`}
              />

              {/* Shine effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {/* Icon */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA */}
                <div className="mt-8 flex items-center text-slate-900 font-semibold group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* floating icon watermark */}
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition">
                <feature.icon className="w-40 h-40" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}