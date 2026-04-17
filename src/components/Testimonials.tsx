
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface TestimonialsProps {
  onNavigate?: (page: 'signup') => void;
}

const testimonials = [
  {

    name: "Sarah C.",
    role: "SAN FRANCISCO, CA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Now that I feel more informed and validated working with Inalgo, we're in scale mode. I'm talking to my peers, I'm helping them along with the process.\n\nI am organizing a workflow report in our department to figure out what our automation needs are gonna be. And it feels like I can actually participate because I'm coming from a place of confidence.",
  },
  {
    name: "Marcus R.",
    role: "AUSTIN, TX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Honestly, just you going through this process with me makes it better. I feel less crazy. It's validating and reassuring to be seen while navigating this rollercoaster.\n\nDeploying AI agents across our entire backend used to be a daunting task, but the interface makes it totally transparent and manageable.",
  },
  {
    name: "Emily W.",
    role: "LONDON, UK",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "You guys saved me $40k on my infrastructure costs in one conversation, wow.\n\nThe insights provided by the analytics dashboard showed us exactly where we were leaking money from inefficient data pipelines. I can't recommend this enough.",
  },
  {
    name: "David K.",
    role: "NEW YORK, NY",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote: "This platform saved me more time in 10 minutes than my last 3 tools combined. The integration is seamless and it actually understands the context of our custom codebase.\n\nWe are finally able to ship features at the speed we always knew we could.",
  }
];

export function Testimonials({ onNavigate }: TestimonialsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (

    <section className="py-24 bg-[#F4F3F0] relative overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            Customer Reviews
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[44px] font-normal text-slate-900 tracking-tight"
          >
            What leading teams say about us
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Scrollable track */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-none w-[360px] md:w-[400px] h-[400px] p-8 md:p-10 rounded-2xl border border-[#E2E1DD] bg-transparent snap-start relative flex flex-col justify-between"
              >
                {/* Custom Quote SVG */}
                <div className="absolute top-8 right-8">
                  <svg width="28" height="24" viewBox="0 0 40 30" fill="#1e293b" className="opacity-90">
                    <path d="M15 0H0V15H7.5C6.5 20 3.5 23 0 25.5V30C8.5 27 15 20 15 10V0ZM40 0H25V15H32.5C31.5 20 28.5 23 25 25.5V30C33.5 27 40 20 40 10V0Z"/>
                  </svg>
                </div>

                {/* Quote Text */}
                <div className="text-[15px] pt-12 pb-8 leading-[1.6] text-[#262626] font-medium whitespace-pre-wrap">
                  {t.quote}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover grayscale"
                  />
                  <div>
                    <div className="font-bold text-[#1a1a1a] text-[15px]">
                      {t.name}
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Edge Fade Mask */}
          <div className="absolute top-0 right-0 bottom-8 w-32 md:w-48 bg-gradient-to-l from-[#F4F3F0] to-transparent pointer-events-none z-10" />
          
          {/* Next Button Overlay */}
          <div className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none pb-8 flex items-center justify-center h-full">
             <button 
               onClick={scrollRight}
               aria-label="Scroll right"
               className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md hover:bg-black/60 transition-colors pointer-events-auto"
             >
               <ChevronRight className="w-5 h-5 ml-0.5" />
             </button>
          </div>
        </div>

        {/* Generic Carousel Dots */}
        <div className="flex justify-center gap-2 mt-4">
           <div className="w-2 h-2 rounded-full bg-slate-800" />
           <div className="w-2 h-2 rounded-full bg-slate-300" />
        </div>

      </div>

      {/* Basic hide-scrollbar utility override */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
>>>>>>> 551a070 (Initial commit)
        }
      `}</style>
    </section>
  );
}


