import { Button } from "./ui/button";
import { ArrowRight, BarChart3, Zap, TrendingUp, Activity } from "lucide-react";
import { motion } from "framer-motion";

interface CTABannerProps {
  onNavigate?: (page: 'signup' | 'contact') => void;
}

// Simulated data points for the chart
const chartData = [45, 60, 55, 75, 65, 90];

export function CTABanner({ onNavigate }: CTABannerProps) {
  const handleGetStarted = () => {
    if (onNavigate) {
      onNavigate('signup');
    }
  };

  const handleContactSales = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  return (
    <section className="relative z-10 px-4 pb-24 pt-12 bg-gradient-to-b from-orange-50 to-white dark:from-indigo-950 dark:to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-orange-600 via-amber-700 to-yellow-700 dark:from-orange-700 dark:via-amber-800 dark:to-yellow-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl shadow-orange-300/30 dark:shadow-orange-900/50"
        >
          {/* Decorative background elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Content */}
            <div className="text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-orange-50 dark:text-amber-100 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Join thousands of companies using Pro Technology to automate workflows and gain predictive insights. Start your free trial today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                  <Button 
                  onClick={handleGetStarted}
                  variant="ghost" 
                  className="border border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  onClick={handleContactSales}
                  variant="ghost" 
                  className="border border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Sales
                </Button>
              </motion.div>
            </div>

            {/* Right Side: Animated Dashboard Graphic */}
            <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6 border-b border-white/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-white/60 rounded mb-1"></div>
                      <div className="h-2 w-16 bg-white/30 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400/30">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </div>
                    <span className="text-xs font-semibold text-green-300">LIVE</span>
                  </div>
                </div>

                {/* Body Content - Animated Chart */}
                <div className="space-y-5 mb-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-cyan-100 dark:text-cyan-200 mb-1">Efficiency</div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-2xl font-bold text-white">98.4%</div>
                        <motion.div 
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-green-300 text-sm font-medium"
                        >
                          <Activity className="w-3 h-3 inline mr-1" />
                          Optimizing
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-green-300 text-sm font-medium bg-green-500/20 px-2 py-1 rounded">
                      <TrendingUp className="w-3 h-3" />
                      +12%
                    </div>
                  </div>

                  {/* Animated Bar Chart */}
                  <div className="flex items-end gap-3 h-32 pt-4 px-1">
                    {chartData.map((height, index) => (
                      <motion.div
                        key={index}
                        className="flex-1 rounded-t-sm relative overflow-hidden group"
                        style={{ 
                          originY: 1 // Grow from bottom
                        }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.5 + (index * 0.1), 
                          type: "spring", 
                          stiffness: 100 
                        }}
                        animate={{
                          scaleY: [1, 1 + (Math.random() * 0.2 - 0.1), 1], // Subtle fluctuation
                        }}
                        whileHover={{ scaleY: 1.05 }}
                      >
                        {/* Background Bar */}
                        <div 
                          className={`absolute bottom-0 w-full rounded-t-sm transition-colors duration-300 ${
                            index === chartData.length - 1 
                              ? 'bg-gradient-to-t from-teal-500 to-cyan-400 shadow-[0_0_15px_rgba(20,184,166,0.5)]' 
                              : 'bg-white/20 group-hover:bg-white/30'
                          }`}
                          style={{ height: '100%' }}
                        />
                        
                        {/* Inner content for visual depth */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating Optimized Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-white text-teal-700 dark:text-teal-800 rounded-xl p-3 shadow-lg border border-teal-100 dark:border-teal-200 flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-20"></div>
                    <div className="bg-teal-100 dark:bg-teal-200 p-1.5 rounded-full relative">
                      <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Status</div>
                    <div className="text-xs font-bold text-gray-900">Optimized</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}