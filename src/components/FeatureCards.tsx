import { Settings, Shield, Calendar, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Intelligent Automation",
    description: "Streamline workflows with AI-powered automation that learns from your patterns and optimizes processes in real-time.",
    gradient: "from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50"
  },
  {
    icon: Shield,
    title: "Secure AI Infrastructure",
    description: "Enterprise-grade security with end-to-end encryption and compliance-ready architecture for peace of mind.",
    gradient: "from-amber-100 to-yellow-100 dark:from-amber-900/50 dark:to-yellow-900/50"
  },
  {
    icon: Calendar,
    title: "Predictive Insights",
    description: "Harness the power of predictive analytics to anticipate trends, optimize resources, and make data-driven decisions.",
    gradient: "from-yellow-100 to-orange-100 dark:from-yellow-900/50 dark:to-orange-900/50"
  }
];

export function FeatureCards() {
  return (
    <section id="features" className="relative z-10 px-4 pb-24 bg-gradient-to-b from-white to-orange-50 dark:from-slate-950 dark:to-indigo-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover how our AI-powered platform can transform your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-indigo-900/30 rounded-3xl border border-orange-200 dark:border-indigo-800 p-8 hover:translate-y-[-8px] transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/50 dark:hover:shadow-indigo-900/50 overflow-hidden backdrop-blur-sm"
            >
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-semibold mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-3xl border border-slate-0 group-hover:border-orange-300 dark:group-hover:border-orange-700 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}