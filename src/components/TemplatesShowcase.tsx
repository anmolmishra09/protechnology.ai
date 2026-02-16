import { Smartphone, Globe, Building, Boxes, LayoutDashboard, FileText } from "lucide-react";
import { useState } from "react";

interface TemplatesShowcaseProps {
  onNavigate?: (page: 'signup') => void;
}

const templates = [
  {
    icon: FileText,
    title: "Landing Page",
    description: "High-converting landing pages with modern design, animations, and SEO optimization",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Globe,
    title: "Web App",
    description: "Full-featured web applications with authentication, database, and real-time features",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Building,
    title: "Brand Website",
    description: "Professional brand websites with custom designs, CMS integration, and analytics",
    color: "from-orange-600 to-red-500"
  },
  {
    icon: Boxes,
    title: "Internal Tool",
    description: "Custom internal tools and admin panels with role-based access and workflows",
    color: "from-amber-600 to-orange-600"
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Cross-platform mobile apps with native features and smooth performance",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Analytics dashboards with real-time data visualization and reporting",
    color: "from-orange-500 to-amber-600"
  }
];

export function TemplatesShowcase({ onNavigate }: TemplatesShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleUseTemplate = () => {
    if (onNavigate) {
      onNavigate('signup');
    }
  };

  return (
    <section className="py-24 px-4 bg-white dark:bg-slate-950 templates-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Templates
          </h2>
          <p className="text-2xl md:text-3xl text-orange-600 dark:text-orange-400 font-semibold mb-6">
            Jump start your idea launch.
          </p>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Top quality templates curated by our experts. Reduce development time by up to 80%
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {templates.map((template, index) => {
            const Icon = template.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 cursor-pointer transition-all duration-300 border-2 ${
                  isHovered 
                    ? 'border-orange-500 shadow-2xl scale-105' 
                    : 'border-slate-200 dark:border-slate-700 shadow-lg'
                }`}
              >
                {/* Icon */}
                <div className={`mb-6 p-4 bg-gradient-to-br ${template.color} rounded-2xl inline-block transform transition-transform duration-300 ${
                  isHovered ? 'scale-110 rotate-3' : ''
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {template.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {template.description}
                </p>

                {/* CTA */}
                <button 
                  onClick={handleUseTemplate}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isHovered
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600'
                }`}>
                  Use Template
                </button>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-0 rounded-3xl transition-opacity duration-300 pointer-events-none ${
                  isHovered ? 'opacity-5' : ''
                }`} />
              </div>
            );
          })}
        </div>

        {/* Preview Section */}
        <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-900/50 dark:to-orange-950/30 rounded-3xl p-12 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="relative text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
              <span className="text-orange-800 dark:text-orange-300 font-semibold">
                ✨ New Templates Added Weekly
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Can't find what you need?
            </h3>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Describe your project in one sentence and we'll build it from scratch with all the features you need
            </p>
            <button 
              onClick={handleUseTemplate}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore More Templates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
