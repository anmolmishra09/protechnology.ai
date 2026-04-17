import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Screens", "UI Elements", "Flows", "Text in Screenshot"];

const screens = [
  { title: "Profile", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&fit=crop" },
  { title: "Wallet", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=400&fit=crop" },
  { title: "Welcome", img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400&fit=crop" },
  { title: "Account Setup", img: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXQlMjBjb21wYW55fGVufDB8fDB8fHww" },
  { title: "Home", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&fit=crop" },
  { title: "Subscription & Paywall", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQHyDX7KscvP8RU3XnINkVTg3ToUz557hPCfP-fLTXc0Gs3R781" },
  { title: "Login", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&fit=crop" },
  { title: "Settings", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=400&fit=crop" },
  { title: "Checkout", img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400&fit=crop" },
  { title: "Collections", img: "https://images.unsplash.com/photo-1647414969248-cb58d4a7bfd3?q=80&w=400&fit=crop" },
];

export function SearchFilterSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="w-full grid place-items-center py-20 md:py-32 lg:pb-[116px] lg:pt-[120px] bg-white overflow-hidden font-sans">
      
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[335px] text-center text-4xl font-medium tracking-tight md:max-w-[420px] md:text-5xl lg:max-w-[550px] lg:text-[56px] lg:leading-[1.1] text-slate-900"
      >
        Find design patterns in seconds.
      </motion.h2>

      {/* Segmented Control */}
      <div className="pt-12 lg:pt-16 w-full flex justify-center">
        <div 
          role="radiogroup" 
          className="relative flex items-center justify-center p-1 rounded-full bg-slate-100/80 shadow-inner overflow-x-auto hide-scrollbar max-w-[95vw]"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 md:px-8 py-2.5 rounded-full text-[14px] md:text-[15px] font-medium whitespace-nowrap transition-colors z-10 ${
                activeTab === tab ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/50"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Marquee Row */}
      <div className="w-full pt-16 md:pt-20 lg:pt-24 select-none pointer-events-none">
        
        {/* We use standard CSS animation for true infinite smooth marquee */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee gap-6 md:gap-8 px-3 md:px-4 shrink-0">
            {screens.map((item, index) => (
              <figure key={`list1-${index}`} className="flex flex-col gap-y-4 md:gap-y-6 shrink-0 w-[160px] md:w-[225px] lg:w-[280px]">
                <figcaption className="text-center text-[15px] md:text-base font-bold text-slate-900 tracking-tight">
                  {item.title}
                </figcaption>
                <div className="relative overflow-hidden rounded-[24px] shadow-sm border border-slate-100 aspect-[0.462] bg-slate-50">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top opacity-90 transition-opacity" 
                    loading="lazy"
                  />
                  {/* Subtle glass overlay to make it look like an interface mockup */}
                  <div className="absolute inset-x-4 top-4 h-12 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hidden md:block" />
                  <div className="absolute inset-x-4 bottom-4 h-16 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hidden md:block" />
                </div>
              </figure>
            ))}
          </div>

          <div className="flex animate-marquee gap-6 md:gap-8 px-3 md:px-4 shrink-0" aria-hidden="true">
            {screens.map((item, index) => (
              <figure key={`list2-${index}`} className="flex flex-col gap-y-4 md:gap-y-6 shrink-0 w-[160px] md:w-[225px] lg:w-[280px]">
                <figcaption className="text-center text-[15px] md:text-base font-bold text-slate-900 tracking-tight">
                  {item.title}
                </figcaption>
                <div className="relative overflow-hidden rounded-[24px] shadow-sm border border-slate-100 aspect-[0.462] bg-slate-50">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top opacity-90 transition-opacity" 
                    loading="lazy"
                  />
                  {/* Subtle glass overlay to make it look like an interface mockup */}
                  <div className="absolute inset-x-4 top-4 h-12 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hidden md:block" />
                  <div className="absolute inset-x-4 bottom-4 h-16 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hidden md:block" />
                </div>
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
