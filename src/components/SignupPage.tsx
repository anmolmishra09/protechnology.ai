import { useState } from "react";
import {
  ArrowLeft,
  Loader2,
  Mail,
  User,
  Lock,
  Eye,
  EyeOff,
  Github,
  Chrome,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

interface SignupPageProps {
  onBack: () => void;
  onSignupSuccess: () => void;
}

export function SignupPage({ onBack, onSignupSuccess }: SignupPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onSignupSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      
      {/* Left Side - Visual/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-50 relative items-center justify-center p-12 border-r border-slate-100">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-200/20 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-4 bg-white rounded-3xl shadow-xl shadow-slate-200/50 w-fit"
          >
            <Sparkles className="w-8 h-8 text-amber-500" />
          </motion.div>
          <h2 className="text-4xl font-black text-slate-950 tracking-tighter leading-none mb-4">
            Join the next generation of <span className="text-slate-400">builders.</span>
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Create an account to access production-ready templates and AI-powered architecture tools.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col relative">
        
        {/* Navigation */}
        <div className="p-6 flex justify-between items-center">
          <Button
            onClick={onBack}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full 
            bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold 
            shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="w-full max-w-md"
          >
            <div className="mb-10">
              <h1 className="text-3xl font-black text-slate-950 tracking-tight mb-2">
                Create account
              </h1>
              <p className="text-slate-500 font-medium text-sm">
                Get started with your 14-day free trial.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Full Name</Label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-slate-950 transition-colors" />
                  <Input
                    placeholder="Anmol Mishra"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-11 border-slate-200 focus-visible:ring-slate-950 rounded-xl transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Email Address</Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-slate-950 transition-colors" />
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11 border-slate-200 focus-visible:ring-slate-950 rounded-xl transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Password</Label>
                  <div className="relative group">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-10 h-11 border-slate-200 focus-visible:ring-slate-950 rounded-xl"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-950"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Confirm</Label>
                  <div className="relative group">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pr-10 h-11 border-slate-200 focus-visible:ring-slate-950 rounded-xl"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-950"
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-bold uppercase tracking-tight">
                  {error}
                </motion.p>
              )}

              <Button className="w-full h-11 bg-slate-950 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg shadow-slate-200" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                Create Account
              </Button>
            </form>

            <div className="mt-8">
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100"></div>
                </div>
                <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                  <span className="bg-white px-4 text-slate-400">Or join with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-11 rounded-xl border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-all">
                  <Chrome className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" className="h-11 rounded-xl border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-all">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-slate-500 font-medium">
              Already have an account?{" "}
              <button onClick={onBack} className="text-slate-950 font-black hover:underline underline-offset-4 transition-all">
                Sign in
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}