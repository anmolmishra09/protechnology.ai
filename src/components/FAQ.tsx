import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

interface FAQProps {
  onNavigate?: (page: "articles" | "contact") => void;
}

interface FAQItemType {
  question: string;
  answer: string;
}

const faqs: FAQItemType[] = [
  {
    question: "What is Inalgo?",
    answer:
      "Inalgo is an AI-powered development platform that transforms your ideas into fully functional, production-ready applications. Just describe your vision and Inalgo builds the frontend, backend, and integrations automatically.",
  },
  {
    question: "Who is Inalgo for?",
    answer:
      "Inalgo is designed for everyone — from non-technical founders and startups to professional developers and enterprises looking to accelerate product development.",
  },
  {
    question: "How does Inalgo work?",
    answer:
      "You describe your idea in natural language, and our AI agents generate a complete application including UI, backend logic, APIs, and deployment configuration.",
  },
  {
    question: "What makes Inalgo different?",
    answer:
      "Unlike other tools that generate isolated components, Inalgo builds full, connected applications with real functionality — not just UI mockups.",
  },
  {
    question: "What can I build with Inalgo?",
    answer:
      "You can build SaaS platforms, dashboards, e-commerce apps, internal tools, landing pages, AI tools, mobile apps, and enterprise-grade systems.",
  },
  {
    question: "Do I need coding knowledge?",
    answer:
      "No. Inalgo is built for both beginners and developers. Non-technical users can build apps without code, while developers can customize everything.",
  },
  {
    question: "Can developers customize the generated code?",
    answer:
      "Yes. You get full access to clean, production-ready code that you can edit, extend, and integrate into your existing workflows.",
  },
  {
    question: "What technologies does Inalgo support?",
    answer:
      "Inalgo supports modern stacks like React, Next.js, Node.js, Python, and integrates with databases, APIs, and third-party services.",
  },
  {
    question: "Who owns the code and IP?",
    answer:
      "You own 100% of the generated code and intellectual property. There are no restrictions on usage, modification, or deployment.",
  },
  {
    question: "Is Inalgo secure?",
    answer:
      "Yes. Inalgo follows industry best practices including secure authentication, encrypted data handling, and scalable infrastructure.",
  },
  {
    question: "Can I deploy my app directly?",
    answer:
      "Yes. Inalgo provides deployment-ready code and supports integration with platforms like Vercel, AWS, and other cloud providers.",
  },
  {
    question: "Does Inalgo support integrations?",
    answer:
      "Absolutely. You can connect APIs, payment gateways, authentication systems, databases, and third-party tools seamlessly.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Inalgo offers a free tier so you can explore and build your first projects before upgrading to advanced features.",
  },
  {
    question: "How fast can I build with Inalgo?",
    answer:
      "What normally takes weeks or months can be built in minutes. Inalgo drastically reduces development time by automating repetitive tasks.",
  },
];


// 🔥 Separate Component (IMPORTANT)
function FAQItem({
  faq,
  index,
  isOpen,
  toggleFAQ,
}: {
  faq: FAQItemType;
  index: number;
  isOpen: boolean;
  toggleFAQ: (index: number) => void;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="group relative rounded-2xl p-[1px]"
    >
      {/* 🔥 Cursor Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, rgba(255,115,0,0.25), transparent 40%)`,
        }}
      />

      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition" />

      {/* Card */}
      <motion.div
        style={{
          transform: `
            perspective(1000px)
            rotateX(${(pos.y - 100) / 25}deg)
            rotateY(${(pos.x - 150) / 25}deg)
          `,
        }}
        className="relative bg-white rounded-2xl border border-slate-100 overflow-hidden transition-transform duration-300 ease-out"
      >
        {/* Question */}
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full px-6 py-5 flex items-center justify-between text-left"
        >
          <span className="text-base md:text-lg font-semibold text-slate-900">
            {faq.question}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-orange-500" />
          </motion.div>
        </button>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="px-6 pb-6 text-slate-600 text-sm md:text-base">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}


// 🚀 Main Component
export function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 blur-[120px] opacity-30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 blur-[120px] opacity-30 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-4">
            FAQs
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Everything you need to know about Inalgo.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-slate-950 text-white rounded-3xl p-10 md:p-14 shadow-xl">
            <h3 className="text-2xl md:text-4xl font-black mb-4">
              Still have questions?
            </h3>

            <p className="text-slate-300 mb-8">
              Explore docs or connect with our community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.("articles")}
                className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:scale-105 transition"
              >
                View Docs
              </button>

              <button
                onClick={() =>
                  window.open("https://discord.gg/pro-technology", "_blank")
                }
                className="px-8 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
              >
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
