import { Sparkles, Database, Rocket, Code, Server, Cloud, Zap, Lock, GitBranch } from "lucide-react";

const scrollToTemplates = () => {
  const templatesElement = document.querySelector('.templates-section');
  if (templatesElement) {
    templatesElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const steps = [
  {
    icon: Sparkles,
    title: "One Prompt",
    subtitle: "Whole app. No kidding.",
    description: "Describe your vision once and get a full functional app with backend, integrations, production-ready code - everything.",
    processes: [
      "Deep research about your market and competition",
      "Contextualizes your problem and decides feature set",
      "Designs optimum user experience and interface",
      "Writes high-quality code in your choice of framework",
      "Adds features you didn't know you needed"
    ]
  },
  {
    icon: Database,
    title: "Backend",
    subtitle: "Already ready.",
    description: "Your application is already configured to integrate with the backend. Database schemas, authentication, and APIs all setup on-the-go.",
    processes: [
      "Database schemas auto-generated",
      "Authentication and security configured",
      "API endpoints created automatically",
      "Ready for payment gateway integrations",
      "Cloud infrastructure provisioned"
    ]
  },
  {
    icon: Rocket,
    title: "Launch",
    subtitle: "Deploy instantly.",
    description: "From idea to live application in minutes, not months. Our deployment pipeline handles everything for launching instantly.",
    processes: [
      "Code optimization and bundling",
      "Sync with GitHub repository",
      "Ready to deploy on cloud platforms",
      "Custom domain configuration ready",
      "Production monitoring and analytics"
    ]
  }
];

// Animated graphics components
const OnePromptGraphic = () => (
  <div className="relative h-full flex items-center justify-center">
    {/* Floating code snippets */}
    <div className="absolute inset-0">
      <div className="absolute top-[20%] left-[10%] animate-float-slow">
        <Code className="w-12 h-12 text-orange-500 dark:text-orange-400 opacity-70" />
      </div>
      <div className="absolute top-[60%] right-[15%] animate-float-medium" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="w-10 h-10 text-amber-500 dark:text-amber-400 opacity-70" />
      </div>
      <div className="absolute bottom-[30%] left-[20%] animate-float-fast" style={{ animationDelay: '1s' }}>
        <Zap className="w-8 h-8 text-yellow-500 dark:text-yellow-400 opacity-70" />
      </div>
    </div>
    
    {/* Central processing unit */}
    <div className="relative w-48 h-48 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center animate-pulse-slow shadow-2xl">
      <Sparkles className="w-24 h-24 text-white animate-spin-slow" />
    </div>
    
    {/* Orbiting particles */}
    <div className="absolute inset-0 animate-spin-very-slow">
      <div className="absolute top-[50%] left-[50%] w-3 h-3 -ml-1.5 -mt-1.5 bg-orange-400 rounded-full transform -translate-x-32 shadow-lg" />
      <div className="absolute top-[50%] left-[50%] w-2 h-2 -ml-1 -mt-1 bg-amber-400 rounded-full transform translate-x-32 shadow-lg" />
    </div>
  </div>
);

const BackendGraphic = () => (
  <div className="relative h-full flex items-center justify-center">
    {/* Server layers */}
    <div className="relative space-y-6">
      {/* Database */}
      <div className="flex items-center gap-4 animate-slide-right" style={{ animationDelay: '0s' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center animate-pulse-slow">
          <Database className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <div className="w-32 h-3 bg-orange-300 dark:bg-orange-700 rounded-full animate-pulse" />
          <div className="w-24 h-3 bg-amber-300 dark:bg-amber-700 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
      
      {/* Server */}
      <div className="flex items-center gap-4 animate-slide-right" style={{ animationDelay: '0.3s' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
          <Server className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <div className="w-28 h-3 bg-orange-300 dark:bg-orange-700 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-20 h-3 bg-amber-300 dark:bg-amber-700 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      
      {/* Security */}
      <div className="flex items-center gap-4 animate-slide-right" style={{ animationDelay: '0.6s' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <Lock className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <div className="w-36 h-3 bg-orange-300 dark:bg-orange-700 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
          <div className="w-28 h-3 bg-amber-300 dark:bg-amber-700 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
        </div>
      </div>
    </div>
    
    {/* Connection lines */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-orange-500 rounded-full animate-ping" />
      <div className="absolute top-[50%] right-[15%] w-2 h-2 bg-amber-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[70%] right-[25%] w-2 h-2 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
    </div>
  </div>
);

const LaunchGraphic = () => (
  <div className="relative h-full flex items-center justify-center overflow-hidden">
    {/* Cloud platforms */}
    <div className="absolute top-[10%] left-[10%] animate-float-slow">
      <Cloud className="w-16 h-16 text-blue-400 dark:text-blue-500 opacity-60" />
    </div>
    <div className="absolute top-[15%] right-[15%] animate-float-medium" style={{ animationDelay: '0.5s' }}>
      <Cloud className="w-12 h-12 text-cyan-400 dark:text-cyan-500 opacity-60" />
    </div>
    
    {/* Rocket launch */}
    <div className="relative animate-launch">
      <div className="absolute -bottom-8 left-1/2 -ml-1 w-2 h-32 bg-gradient-to-t from-orange-500 via-amber-500 to-transparent opacity-70 blur-sm animate-flame" />
      <div className="absolute -bottom-8 left-1/2 -ml-0.5 w-1 h-40 bg-gradient-to-t from-orange-400 via-yellow-400 to-transparent animate-flame" style={{ animationDelay: '0.1s' }} />
      
      <div className="relative w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center shadow-2xl rotate-45">
        <Rocket className="w-16 h-16 text-white -rotate-45" />
      </div>
    </div>
    
    {/* Git integration */}
    <div className="absolute bottom-[20%] left-[15%] animate-float-fast">
      <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
        <GitBranch className="w-6 h-6 text-white" />
      </div>
    </div>
    
    {/* Deploy indicators */}
    <div className="absolute top-[60%] right-[10%] space-y-2 animate-slide-left">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <div className="w-20 h-2 bg-green-500/30 rounded-full" />
      </div>
      <div className="flex items-center gap-2" style={{ animationDelay: '0.2s' }}>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <div className="w-16 h-2 bg-green-500/30 rounded-full" />
      </div>
      <div className="flex items-center gap-2" style={{ animationDelay: '0.4s' }}>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <div className="w-24 h-2 bg-green-500/30 rounded-full" />
      </div>
    </div>
  </div>
);

export function ProcessSteps() {
  const graphics = [OnePromptGraphic, BackendGraphic, LaunchGraphic];
  
  return (
    <section className="py-24 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            How We Do It
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            From concept to deployment, we handle the complexity so you can focus on your vision
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const GraphicComponent = graphics[index];
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Content Side */}
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-xl text-orange-600 dark:text-orange-400 font-semibold">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      What Actually Happens:
                    </p>
                    {step.processes.map((process, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 flex items-center justify-center">
                          <span className="text-sm font-bold text-orange-700 dark:text-orange-400">
                            {index + 1}.{i + 1}
                          </span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 pt-1">
                          {process}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={scrollToTemplates}
                    className="mt-8 px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    See It In Action
                  </button>
                </div>

                {/* Visual Side with Animated Graphics */}
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative aspect-square bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
                    {/* Decorative background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/5 dark:to-amber-500/5" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300/20 dark:bg-orange-600/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-300/20 dark:bg-amber-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
                    
                    {/* Animated Graphic */}
                    <GraphicComponent />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slide-right {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-left {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes launch {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes flame {
          0%, 100% { opacity: 0.7; height: 32px; }
          50% { opacity: 1; height: 48px; }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 20s linear infinite; }
        .animate-slide-right { animation: slide-right 0.8s ease-out; }
        .animate-slide-left { animation: slide-left 0.8s ease-out; }
        .animate-launch { animation: launch 3s ease-in-out infinite; }
        .animate-flame { animation: flame 0.3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
