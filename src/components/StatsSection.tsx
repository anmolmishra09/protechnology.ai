import { Users, Rocket, Globe, TrendingUp } from "lucide-react";

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
    <section className="relative z-10 py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              1M+ users
            </span>
            {" "}in{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              180+ countries
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Join millions of developers, startups, and enterprises building the future with our AI-powered platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border-2 border-orange-100 dark:border-slate-700 text-center hover:shadow-2xl hover:shadow-orange-200/50 dark:hover:shadow-orange-900/20 transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 dark:hover:border-orange-700"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional trust badges */}
        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
          <div className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-200 dark:border-slate-700">
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              ⚡ Lightning Fast Deployment
            </span>
          </div>
          <div className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-200 dark:border-slate-700">
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              🔒 Enterprise Security
            </span>
          </div>
          <div className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-200 dark:border-slate-700">
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              💪 Production Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}