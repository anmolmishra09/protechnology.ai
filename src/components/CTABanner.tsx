import { Button } from "./ui/button";

import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface CTABannerProps {
  onNavigate?: (page: 'signup' | 'contact') => void;
}


const chartData = [40, 55, 50, 70, 60, 85];

export function CTABanner({ onNavigate }: CTABannerProps) {

  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200/30 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-10 md:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
        >
          
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            
            {/* LEFT */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
              >
                Scale Faster with{" "}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Intelligent AI
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg text-slate-600 max-w-xl"
              >
                Automate workflows, predict outcomes, and unlock insights in real-time. 
                Build smarter systems with Inalgo.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <motion.button
  onClick={() => onNavigate?.('signup')}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-6 rounded-full text-lg font-semibold bg-slate-900 text-white shadow-xl flex items-center gap-2"
>
  Get Started
  <motion.span
    initial={{ x: 0 }}
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <ArrowRight className="w-5 h-5" />
  </motion.span>
</motion.button>
              </motion.div>
            </div>

            {/* RIGHT - CLEAN CHART */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl">
                
                {/* Chart */}
                <div className="flex items-end gap-3 h-36">
                  {chartData.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className={`flex-1 rounded-t-xl ${
                        i === chartData.length - 1
                          ? "bg-gradient-to-t from-orange-500 to-amber-400"
                          : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Growth</p>
                    <p className="text-2xl font-bold text-slate-900">+124%</p>
                  </div>

                  <div className="flex items-center gap-2 text-orange-600 font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    Live Data
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-orange-500 text-white px-4 py-3 rounded-xl shadow-xl"
              >
                AI Optimized ⚡
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}