import { useState } from "react";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

import { ArrowLeft, CheckCircle2, Briefcase } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export function ApplicationFormPage({ jobTitle, onBack }: { jobTitle: string; onBack: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: ''
  });


  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => setIsSubmitted(true), 600);
  };

  // ✅ SUCCESS SCREEN
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50 px-6">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mx-auto w-24 h-24 bg-green-100 rounded-3xl flex items-center justify-center mb-8 shadow-xl"
          >
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </motion.div>

          <h2 className="text-4xl font-black mb-4">Application Sent 🎉</h2>
          <p className="text-slate-600 mb-8">
            Thanks for applying for <span className="text-orange-600 font-bold">{jobTitle}</span>.
          </p>

          <Button onClick={onBack} className="rounded-full px-8 py-4">
            Back to Careers
          </Button>
        </motion.div>
      </div>
    );
  }

  return (

    <div className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-orange-50 overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-orange-400/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 py-16">

        {/* 🔙 Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Button
            onClick={onBack}
            className="group mb-10 flex items-center gap-2 px-5 py-2.5 rounded-full 
            bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold 
            shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
        </motion.div>

        {/* 🚀 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs font-bold mb-6">
            <Briefcase className="w-4 h-4" />
            {jobTitle}
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Apply for this <span className="text-orange-500">Role</span>
          </h1>

          <p className="text-slate-500">
            We review applications quickly — don’t overthink it.
          </p>
        </motion.div>

        {/* 🧾 FORM */}
        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-white/70 backdrop-blur-xl p-10 rounded-[2rem] border shadow-xl"
        >

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { id: "fullName", label: "Full Name", type: "text" },
              { id: "email", label: "Email", type: "email" }
            ].map((field) => (
              <motion.div key={field.id} variants={item}>
                <Label>{field.label}</Label>
                <Input
                  type={field.type}
                  required
                  className="mt-2 h-12 rounded-xl bg-slate-50 focus:ring-2 focus:ring-orange-400"
                  onChange={(e) =>
                    setFormData({ ...formData, [field.id]: e.target.value })
                  }
                />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { id: "phone", label: "Phone" },
              { id: "linkedin", label: "LinkedIn" }
            ].map((field) => (
              <motion.div key={field.id} variants={item}>
                <Label>{field.label}</Label>
                <Input
                  className="mt-2 h-12 rounded-xl bg-slate-50 focus:ring-2 focus:ring-orange-400"
                  onChange={(e) =>
                    setFormData({ ...formData, [field.id]: e.target.value })
                  }
                />
              </motion.div>
            ))}
          </div>

          {/* File Upload */}
          <motion.div variants={item} className="mb-6">
            <Label>Resume</Label>
            <Input
              type="file"
              onChange={handleFileChange}
              required
              className="mt-2 h-12 bg-slate-50 rounded-xl"
            />
            {fileName && (
              <p className="text-green-600 text-sm mt-2">{fileName}</p>
            )}
          </motion.div>

          {/* Cover Letter */}
          <motion.div variants={item} className="mb-8">
            <Label>Cover Letter</Label>
            <Textarea
              rows={4}
              className="mt-2 rounded-xl bg-slate-50 focus:ring-2 focus:ring-orange-400"
              onChange={(e) =>
                setFormData({ ...formData, coverLetter: e.target.value })
              }
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            variants={item}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-white 
            bg-gradient-to-r from-orange-500 to-amber-500 
            shadow-lg hover:shadow-orange-400/40 transition"
          >
            Submit Application
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}