import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

interface PrivacyPageProps {
  onBack: () => void;
}

export function PrivacyPage({ onBack }: PrivacyPageProps) {

  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to Inalgo. We respect your privacy and are committed to protecting your personal data.",
    },
    {
      title: "2. Data We Collect",
      content:
        "We collect identity, contact, and technical data to improve our services.",
      list: [
        "Identity Data: name, username",
        "Contact Data: email, phone",
        "Technical Data: IP address, login data",
      ],
    },
    {
      title: "3. How We Use Your Data",
      content:
        "We use your data to provide services and improve user experience.",
      list: [
        "Account creation",
        "Order processing",
        "Customer support",
      ],
    },
    {
      title: "4. Data Security",
      content:
        "We implement strong security measures to protect your data.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      
      {/* ✅ Single Container (FIXED) */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* 🔙 Back Button */}
        <div className="mb-8">
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-950">
            Privacy{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="mt-2 text-xs font-semibold text-slate-400 tracking-widest uppercase">
            Effective Date: January 1, 2026
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                {section.title}
              </h2>

              <p className="text-slate-600 text-sm mb-2">
                {section.content}
              </p>

              {section.list && (
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-500">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-sm text-slate-400 mt-12"
        >
          If you have any questions, contact us anytime.
        </motion.p>

      </div>
    </div>
  );
}