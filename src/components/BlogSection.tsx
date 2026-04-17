import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    category: "AI ENGINEERING",
    title: "Understanding LLM orchestration",
    author: "Shubhdeep, Chief AI Officer",
    art: (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Abstract crescent/stomach representation */}
        <div className="relative w-32 h-32">
          {/* Main pipe/curve */}
          <div className="absolute right-0 top-0 w-24 h-32 bg-gradient-to-br from-orange-100 to-orange-300 rounded-l-full rounded-r-[40px] opacity-90 shadow-inner" />
          <div className="absolute -left-4 bottom-4 w-16 h-12 bg-slate-200 rounded-l-xl opacity-80" />
          {/* Internal gradient wave */}
          <div className="absolute right-2 bottom-4 w-20 h-16 bg-gradient-to-t from-orange-400/80 to-purple-300/40 rounded-full blur-sm" />
          <div className="absolute top-0 right-4 w-12 h-16 bg-gradient-to-b from-orange-200 to-transparent rounded-full opacity-60" />
        </div>
      </div>
    )
  },
  {
    category: "BEST PRACTICES",
    title: "Architecting for scale",
    author: "Sunny Molten, Head of Infrastructure",
    art: (
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        {/* Scale representation */}
        <div className="w-36 h-28 bg-gradient-to-b from-purple-200/40 via-orange-300 to-orange-400 rounded-3xl relative shadow-sm overflow-hidden flex justify-center pt-3">
          <div className="w-24 h-10 bg-gradient-to-b from-purple-300/50 via-slate-100 to-white rounded-b-full flex justify-center shadow-inner border-b border-purple-100">
            <ArrowDown className="w-4 h-4 text-purple-900 mt-1 opacity-70" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    )
  },
  {
    category: "DEVELOPMENT",
    title: "The modern data pipeline",
    author: "Lucas Reed, VP Engineering",
    art: (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Abstract bubbles and flow */}
        <div className="relative w-full h-full">
          <div className="absolute bottom-10 right-16 w-14 h-20 bg-gradient-to-t from-orange-400 to-orange-200 rounded-lg shadow-sm" />
          <div className="absolute bottom-16 right-20 w-10 h-16 bg-gradient-to-t from-orange-300 to-orange-100 rounded-t-full rounded-l-full" />
          <div className="absolute top-12 right-20 w-5 h-5 rounded-full bg-gradient-to-tr from-orange-300 to-purple-300 shadow-sm" />
          <div className="absolute top-20 right-14 w-7 h-7 rounded-full bg-gradient-to-tr from-orange-400 to-orange-200 shadow-sm" />
          <div className="absolute top-32 left-[35%] w-5 h-5 rounded-full bg-gradient-to-tr from-purple-300 to-slate-200 shadow-sm" />
        </div>
      </div>
    )
  },
  {
    category: "STRATEGY",
    title: "Custom models vs API routing",
    author: "Henry Collins, Tech Lead",
    art: (
      <div className="absolute inset-0 flex items-end justify-center pb-12">
        {/* Abstract mountain and flag */}
        <div className="relative w-full h-full">
           {/* Cloud behind */}
           <div className="absolute bottom-16 left-[15%] w-16 h-6 bg-purple-300/40 rounded-full blur-[2px]" />
           
           {/* Left Mountain */}
           <div className="absolute bottom-8 left-[25%] w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-b-[50px] border-b-slate-200" />
           
           {/* Right Mountain */}
           <div className="absolute bottom-8 right-[25%] w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[70px] border-b-orange-200/60" />
           
           {/* Flag pole */}
           <div className="absolute bottom-12 right-[45%] w-1 h-[85px] bg-slate-300" />
           
           {/* Flag */}
           <div className="absolute top-12 right-[32%] w-10 h-8 bg-gradient-to-r from-purple-300/80 to-orange-300 rounded-r-md" />
           <div className="absolute top-[60px] right-[25%] w-8 h-8 bg-gradient-to-b from-orange-300 to-orange-400 rounded-r-md" />
           
           {/* Front rock/sun */}
           <div className="absolute bottom-8 right-[30%] w-10 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-t-full" />
        </div>
      </div>
    )
  }
];

export function BlogSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white font-sans max-w-[1400px] mx-auto">
      
      {/* Header - Upgraded Design */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 border border-orange-100 font-bold text-xs tracking-[0.2em] uppercase mb-6 shadow-sm"
        >
          <BookOpen className="w-3.5 h-3.5" />
          News & Insights
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-black text-slate-950 mb-6 tracking-tighter leading-[1.1]"
        >
          Navigate your way <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-500 to-amber-500">
            to success
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium"
        >
          Industry insights, expert methodologies, and the latest in AI engineering.
        </motion.p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
        data-cursor="scroll"
      >
        {articles.map((article, index) => (
          <motion.div 
            key={index}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            whileHover={{ y: -8 }}
            className="flex-none w-[85vw] md:w-[400px] flex flex-col group snap-start relative"
          >
            {/* Image Container with advanced styling */}
            <div className="w-full aspect-[4/3] bg-slate-50 rounded-[2.5rem] mb-8 relative overflow-hidden transition-all duration-700 border border-slate-100 group-hover:border-orange-200 group-hover:shadow-[0_32px_64px_-12px_rgba(251,146,60,0.12)]">
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
              
              <div className="relative h-full transition-transform duration-700 group-hover:scale-105">
                {article.art}
              </div>

              {/* Category Badge on Image */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-slate-100 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em]">
                  {article.category}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow px-2">
              <h3 
                className="text-3xl font-black text-slate-950 leading-[1.2] mb-6 group-hover:text-orange-600 transition-colors duration-300 tracking-tight"
              >
                {article.title}
              </h3>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 border border-slate-200">
                    {article.author.split(' ')[0][0]}{article.author.split(' ')[1][0]}
                  </div>
                  <div>
                    <p className="text-[12px] font-black text-slate-900 leading-none mb-1">
                      {article.author.split(',')[0]}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400">
                      {article.author.split(',')[1]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-orange-600 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Basic hide-scrollbar utility override */}
      <style>{`
        div[data-cursor="scroll"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
