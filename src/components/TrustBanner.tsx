import { Star } from "lucide-react";

// Mock company logos - in production, replace with real logo images
const companies = [
  { name: "Microsoft", color: "from-blue-600 to-blue-700" },
  { name: "Google", color: "from-red-500 to-yellow-500" },
  { name: "Amazon", color: "from-orange-500 to-orange-600" },
  { name: "Meta", color: "from-blue-500 to-blue-600" },
  { name: "Apple", color: "from-slate-700 to-slate-800" },
  { name: "Netflix", color: "from-red-600 to-red-700" },
  { name: "Tesla", color: "from-red-500 to-red-600" },
  { name: "Spotify", color: "from-green-500 to-green-600" },
  { name: "Adobe", color: "from-red-500 to-red-600" },
  { name: "Salesforce", color: "from-blue-400 to-blue-500" },
  { name: "Oracle", color: "from-red-600 to-red-700" },
  { name: "IBM", color: "from-blue-600 to-blue-700" },
  { name: "Intel", color: "from-blue-500 to-blue-600" },
  { name: "Cisco", color: "from-blue-500 to-blue-600" },
  { name: "SAP", color: "from-blue-600 to-blue-700" }
];

export function TrustBanner() {
  // Duplicate companies array for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <span className="text-slate-600 dark:text-slate-400 font-medium">4.9/5 Rating</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              1M+ users
            </span>
            {" "}in{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              180+ countries
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Join thousands of companies building with our platform
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Animation */}
          <div className="flex gap-8 animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${company.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">1M+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">180+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">100K+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Apps Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">99.9%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
