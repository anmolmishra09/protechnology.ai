import { ArrowLeft, Eye, Target, Rocket, Users, Lightbulb, Globe } from "lucide-react";
import { Button } from "../components/ui/button";

import { motion } from "framer-motion";

interface VisionMissionPageProps {
  onBack: () => void;
}

export function VisionMissionPage({ onBack }: VisionMissionPageProps) {
  return (

    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* 🔙 Back Button */}
        <Button
            onClick={onBack}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full 
            bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold 
            shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>

        <div className="space-y-20">

          {/* 🚀 Header */}
          <div className="text-center space-y-5">
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter">
              Vision & <span className="text-orange-600">Mission</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
              Shaping the future of technology through innovation and excellence.
            </p>
          </div>

          {/* 👤 Founder & CEO */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200/40 blur-[120px] rounded-full -mr-32 -mt-32" />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

              {/* Image */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-orange-400/20 blur-2xl rounded-full scale-110" />
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQE08OG9IJtAJw/profile-displayphoto-scale_400_400/B56Z0RO3x1JMAg-/0/1774110609883?e=1778112000&v=beta&t=8iP5NM-za55nvJ0qQe-exGz6cvDnPKruSUwZmEYDbHI"
                    alt="Founder"
                    className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-2xl relative z-10 group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-3">
                  Founder & <span className="text-orange-600">CEO</span>
                </h2>

                <p className="text-lg font-bold text-slate-800">
                  Anmol Mishra
                </p>

                <p className="text-xs uppercase tracking-widest text-slate-400 mb-5 font-bold">
                  Founder, Inalgo
                </p>

                <p className="text-slate-600 leading-relaxed mb-4">
                  We started Pro Technology with a simple belief: building software shouldn't be this hard.
                  Too many brilliant ideas never make it to reality because of technical barriers.
                </p>

                <p className="text-slate-600 leading-relaxed mb-4">
                  Our mission is to compress the time from idea to launch from months to minutes.
                  We’re building a platform where anyone can turn vision into production-ready software instantly.
                </p>

                <p className="text-slate-900 font-semibold">
                  “The future of software will be radically different — and we’re here to build it.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* 👨‍💻 CTO */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden"
>
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 blur-[120px] rounded-full -ml-32 -mt-32" />

  <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

    {/* Content FIRST (reverse layout for variation) */}
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-3">
        Chief <span className="text-blue-600">Technology Officer</span>
      </h2>

      <p className="text-lg font-bold text-slate-800">
        Adarsh Mishra
      </p>

      <p className="text-xs uppercase tracking-widest text-slate-400 mb-5 font-bold">
        CTO, Inalgo
      </p>

      <p className="text-slate-600 leading-relaxed mb-4">
        We are reimagining how software is built using AI-first principles.
        Our goal is to remove complexity and empower developers to move faster than ever.
      </p>

      <p className="text-slate-600 leading-relaxed mb-4">
        From scalable infrastructure to intelligent automation,
        we focus on building systems that evolve with user needs.
      </p>

      <p className="text-slate-900 font-semibold">
        “Great technology should feel invisible — powerful, fast, and effortless.”
      </p>
    </div>

    {/* Image */}
    <div className="flex justify-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full scale-110" />
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQFu1lnVyRqtqw/profile-displayphoto-scale_400_400/B56Zxx9ptKIcAg-/0/1771438514908?e=1778112000&v=beta&t=GyG600RqhSOsxa8wTnMVPG4KnpC5STtVsNnPK37Ssjc" // 👉 add CTO image
          alt="CTO"
          className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-2xl relative z-10 group-hover:scale-105 transition-transform"
        />
      </div>
    </div>

  </div>
</motion.div>

          {/* 👁 Vision */}
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/50 blur-[120px] rounded-full -mr-32 -mt-32" />
            
            <div className="flex items-center gap-5 mb-10 relative z-10">
              <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950">Our Vision</h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10 relative z-10">
              To be the global leader in AI-powered technology solutions, transforming industries and empowering businesses worldwide.
            </p>

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {[ 
                { icon: Globe, title: "Global Impact" },
                { icon: Lightbulb, title: "Innovation First" },
                { icon: Rocket, title: "Future Ready" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border shadow-sm">
                  <item.icon className="w-6 h-6 text-orange-600 mb-3" />
                  <h3 className="font-bold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* 🎯 Mission */}
          <div className="bg-slate-950 rounded-[3rem] p-10 md:p-16 text-white">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
                <Target className="w-7 h-7 text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black">Our Mission</h2>
            </div>

            <p className="text-slate-400 mb-8">
              Deliver intelligent, scalable AI solutions that drive real impact.
            </p>

            <div className="space-y-4">
              {[
                "Deliver Excellence",
                "Empower Businesses",
                "Foster Innovation",
                "Build Trust"
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-orange-600 flex items-center justify-center rounded-full font-bold">
                    {idx + 1}
                  </div>
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* 💡 Values */}
          <div className="text-center space-y-10">
            <h2 className="text-4xl font-black">
              Core <span className="text-orange-600">Values</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "People First" },
                { icon: Lightbulb, title: "Integrity" },
                { icon: Rocket, title: "Excellence" }
              ].map((val, idx) => (
                <div key={idx} className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-xl transition">
                  <val.icon className="mx-auto mb-3 text-orange-600" />
                  <h3 className="font-bold">{val.title}</h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



