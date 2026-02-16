import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  onNavigate?: (page: 'articles' | 'contact') => void;
}

const faqs = [
  {
    question: "What is Pro Technology?",
    answer: "Pro Technology is an AI-powered development platform that turns your ideas into production-ready applications. Simply describe your vision, and we'll build a complete app with backend, integrations, and deployment-ready code."
  },
  {
    question: "How is Pro Technology different from other AI builders?",
    answer: "Unlike other platforms that require multiple prompts for each page, Pro Technology understands your entire vision from one description. We build complete, functional applications with backend integration, authentication, and deployment configuration - all from a single prompt."
  },
  {
    question: "What can I build with Pro Technology?",
    answer: "You can build web applications, mobile apps, landing pages, internal tools, e-commerce platforms, dashboards, SaaS products, and more. Our platform supports a wide range of use cases from simple landing pages to complex enterprise applications."
  },
  {
    question: "What tech stacks does Pro Technology support?",
    answer: "We support React, Vue, Angular, Next.js, Node.js, Python, and many more modern frameworks. Our platform automatically selects the best stack for your project or you can specify your preferred technologies."
  },
  {
    question: "Who owns the IP and the code?",
    answer: "You own 100% of the intellectual property and code. Everything we generate is yours to keep, modify, and deploy however you choose. We believe in complete ownership and transparency."
  },
  {
    question: "Do you offer free plans?",
    answer: "Yes! We offer a free tier so you can try the platform and build your first projects. Our paid plans unlock additional features, faster builds, and priority support."
  },
  {
    question: "Is Pro Technology only for developers?",
    answer: "Not at all! Pro Technology is designed for everyone - from non-technical founders to experienced developers. Our AI handles the complexity while you focus on your vision. No coding knowledge required."
  },
  {
    question: "Is Pro Technology secure and scalable?",
    answer: "Absolutely. We use enterprise-grade security with 256-bit encryption, secure authentication, and best practices in every generated application. Our infrastructure is built to scale from prototype to millions of users."
  }
];

export function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleViewDocumentation = () => {
    if (onNavigate) {
      onNavigate('articles');
    }
  };

  const handleJoinDiscord = () => {
    // Open Discord in a new tab or navigate to contact page
    window.open('https://discord.gg/pro-technology', '_blank');
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-orange-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            FAQs
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Pro Technology is super easy to navigate for anyone. Here are some of our most common questions and answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300 hover:bg-orange-50 dark:hover:bg-slate-800"
                >
                  <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12 border-2 border-orange-200 dark:border-slate-700">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Explore docs, see tutorials, or join our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleViewDocumentation}
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Documentation
            </button>
            <button 
              onClick={handleJoinDiscord}
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300"
            >
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
