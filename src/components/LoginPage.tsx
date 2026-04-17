import { useState } from "react";
import { ArrowLeft, Loader2, Mail, Lock, Eye, EyeOff, Github, Chrome } from "lucide-react";
import { motion } from "framer-motion";
import logo from "/src/assets/logo.png";

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
  onSignupClick: () => void;
}

const mockScreens = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&h=370&fit=crop",
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&h=370&fit=crop",
  "https://images.unsplash.com/photo-1647414969248-cb58d4a7bfd3?q=80&w=800&h=370&fit=crop",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&h=370&fit=crop",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&h=370&fit=crop",
  "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=800&h=370&fit=crop",
];

const marqueeRow1 = [...mockScreens].reverse().concat([...mockScreens].reverse());
const marqueeRow2 = [...mockScreens, ...mockScreens];

export function LoginPage({ onBack, onLoginSuccess, onSignupClick }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoading(true);
    setTimeout(() => {
      onLoginSuccess();
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-white font-sans overflow-hidden">
      
      {/* 1. Left Panel: Aesthetic Marquee (Desktop Only) */}
      <section className="hidden lg:flex w-1/2 bg-[#F8F7F4] relative overflow-hidden items-center justify-center">
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-[#F8F7F4]" />
        
        <div 
          className="flex flex-col gap-8 opacity-40 rotate-[12deg] scale-125 translate-x-[-10%]"
          style={{ transformOrigin: "center center" }}
        >
          {/* Row 1 */}
          <div className="flex animate-marquee gap-8">
            {marqueeRow1.map((src, i) => (
              <div key={i} className="h-[240px] w-[480px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white">
                <img src={src} alt="Preview" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex animate-marquee-reverse gap-8">
            {marqueeRow2.map((src, i) => (
              <div key={i} className="h-[240px] w-[480px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white">
                <img src={src} alt="Preview" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            ))}
          </div>
        </div>

        {/* Branding Overlay on Marquee */}
        <div className="absolute z-20 bottom-20 left-20">
          <div className="p-4 bg-white/80 backdrop-blur-xl border border-white rounded-2xl shadow-xl max-w-xs">
            <p className="text-slate-900 font-black text-lg tracking-tight leading-tight">
              Access the <span className="text-slate-400">future</span> of rapid full-stack deployments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Right Panel: Login Form */}
      <section className="flex-1 flex flex-col relative bg-white">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-xs uppercase tracking-widest transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="flex-1 flex items-center justify-center p-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-[400px]"
          >
            {/* Logo & Header */}
            <div className="mb-12">
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 shadow-xl">
<img
      src={logo}
      alt="Logo"
      className="w-full h-full object-contain p-2"
    />              </div>
              <h1 className="text-4xl font-black text-slate-950 tracking-tighter mb-2">Welcome back</h1>
              <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 h-12 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all font-bold text-sm text-slate-700">
                <Chrome className="w-4 h-4" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 h-12 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all font-bold text-sm text-slate-700">
                <Github className="w-4 h-4" />
                GitHub
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span className="bg-white px-4 text-slate-400">Or use email</span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-950 transition-colors" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 bg-slate-50 border-transparent focus:bg-white focus:border-slate-200 focus:ring-0 rounded-2xl font-medium transition-all outline-none"
                    placeholder="name@agency.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400">Password</label>
                  <button type="button" className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-950">Reset?</button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-950 transition-colors" />
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full h-14 pl-12 pr-12 bg-slate-50 border-transparent focus:bg-white focus:border-slate-200 focus:ring-0 rounded-2xl font-medium transition-all outline-none"
                    placeholder="••••••••"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-950"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-slate-950 text-white rounded-2xl font-black text-sm tracking-tight hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In to Dashboard"}
              </button>
            </form>

            <p className="mt-12 text-center text-sm font-medium text-slate-500">
              New here?{" "}
              <button onClick={onSignupClick} className="text-slate-950 font-black hover:underline underline-offset-4">
                Create account
              </button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marquee Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(calc(-100% / 2)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }
      `}</style>
    </div>
  );
}