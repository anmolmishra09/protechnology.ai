
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// ─── Animated 3D Ribbon Waves (matching the screenshot) ───────────────────────
function RibbonWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ribbons = [
      // Gold/amber ribbons
      {
        amp: 60, freq: 0.8, phaseOffset: 0, yBase: 0.42,
        topColor: "rgba(251, 191, 36, 0.85)",
        bottomColor: "rgba(253, 224, 120, 0.45)",
        thickness: 90, speed: 0.012
      },
      {
        amp: 55, freq: 0.85, phaseOffset: 0.6, yBase: 0.52,
        topColor: "rgba(251, 191, 36, 0.6)",
        bottomColor: "rgba(252, 211, 77, 0.25)",
        thickness: 75, speed: 0.01
      },
      {
        amp: 45, freq: 0.9, phaseOffset: 1.2, yBase: 0.48,
        topColor: "rgba(253, 224, 120, 0.5)",
        bottomColor: "rgba(255, 237, 160, 0.2)",
        thickness: 60, speed: 0.009
      },
      // Blue ribbon (right side, as in screenshot)
      {
        amp: 65, freq: 0.75, phaseOffset: Math.PI * 0.9, yBase: 0.44,
        topColor: "rgba(96, 165, 250, 0.8)",
        bottomColor: "rgba(147, 197, 253, 0.3)",
        thickness: 85, speed: 0.011
      },
      {
        amp: 50, freq: 0.8, phaseOffset: Math.PI * 1.1, yBase: 0.54,
        topColor: "rgba(59, 130, 246, 0.5)",
        bottomColor: "rgba(96, 165, 250, 0.2)",
        thickness: 65, speed: 0.008
      },
    ];

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      tRef.current += 1;
      const t = tRef.current;

      ribbons.forEach((r) => {
        const yCenter = h * r.yBase;
        const halfT = r.thickness / 2;

        // Build top and bottom wave paths
        const topPoints: [number, number][] = [];
        const botPoints: [number, number][] = [];

        const steps = 120;
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * w;
          const phase = (i / steps) * Math.PI * 2 * r.freq + r.phaseOffset + t * r.speed;
          const wave = Math.sin(phase) * r.amp;
          // slight secondary harmonic for ribbon depth
          const wave2 = Math.sin(phase * 1.5 + 0.5) * (r.amp * 0.3);
          const y = yCenter + wave + wave2;
          topPoints.push([x, y - halfT * (0.5 + 0.5 * Math.cos(phase))]);
          botPoints.push([x, y + halfT * (0.5 + 0.5 * Math.cos(phase + Math.PI))]);
        }

        // Draw filled ribbon
        ctx.beginPath();
        ctx.moveTo(topPoints[0][0], topPoints[0][1]);
        for (let i = 1; i < topPoints.length; i++) {
          const [px, py] = topPoints[i - 1];
          const [cx, cy] = topPoints[i];
          const cpX = (px + cx) / 2;
          ctx.quadraticCurveTo(px, py, cpX, (py + cy) / 2);
        }
        // Close around bottom points in reverse
        for (let i = botPoints.length - 1; i >= 0; i--) {
          const [px, py] = botPoints[i];
          const prev = botPoints[i + 1] ?? botPoints[i];
          const cpX = (px + prev[0]) / 2;
          ctx.quadraticCurveTo(prev[0], prev[1], cpX, (py + prev[1]) / 2);
        }
        ctx.closePath();

        // Gradient fill
        const grad = ctx.createLinearGradient(0, yCenter - halfT, 0, yCenter + halfT);
        grad.addColorStop(0, r.topColor);
        grad.addColorStop(1, r.bottomColor);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ─── Trust logos strip ────────────────────────────────────────────────────────
const trustLogos = [
  { name: "aikido", logo: "https://cdn.prod.website-files.com/642adcaf364024654c71df23/6824b5a495b6d62e902581a5_Aikido%20Security.png" },
  { name: "ChatGPT", logo: "data:image/png;base64,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" },
  { name: "LIVEFORCE", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E98dVWtA2tZiOvUqDFsj_EQL3VkKQTzJgQ&s" },
  { name: "Claude", logo: "data:image/jpeg;base64,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" },
  { name: "Cursor", logo: "https://media.licdn.com/dms/image/v2/D560BAQHKh6nk4UdeBA/company-logo_200_200/B56ZnbGvJ6KUAI-/0/1760317600747/cursorai_logo?e=2147483647&v=beta&t=lhx_A8xPe1zjjwpgRRirVgUykLbsFR-wRbW2s1ykSgk" },
];

// ─── Main Hero ────────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">

      {/* ── Top: Text content, centered ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-0 max-w-4xl mx-auto w-full"
      >
        {/* Headline - Slides in from Left */}
        <motion.h1
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.05] mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Built for the modern inalgo{" "}
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Think, Type, Launch,
          </span>
        </motion.h1>

        {/* Subtitle - Slides in from Right */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-medium"
        >
          What can I build for you today? 24/7
        </motion.p>

        {/* CTA - Slides up slightly while fading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <motion.button
  onClick={() => window.open("https://transcript-ai-8.preview.emergentagent.com/", "_blank")}
  whileHover={{ scale: 1.04, backgroundColor: "#1e293b" }}
  whileTap={{ scale: 0.96 }}
  className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-950 text-white font-bold text-sm shadow-2xl shadow-slate-300/40 transition-colors"
>
  <Sparkles className="w-4 h-4 text-amber-400" />
  See AI demo
</motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            Learn more →
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ── Middle: Ribbon Wave Canvas ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, delay: 0.2 }}
        className="relative w-full"
        style={{ height: "320px" }}
      >
        <RibbonWaves />
      </motion.div>

      {/* ── Bottom: Trust logos Marquee ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 border-t border-slate-100 py-16 overflow-hidden"
      >
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 shadow-sm backdrop-blur-sm transition-all hover:bg-white"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
              Trusted by leading teams
            </p>
          </motion.div>
        </div>

        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center gap-16 md:gap-24 flex-nowrap min-w-max px-12"
          >
            {[...trustLogos, ...trustLogos].map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-7 w-auto object-contain"
                />
                <span className="text-base font-black text-slate-600 tracking-tight">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
