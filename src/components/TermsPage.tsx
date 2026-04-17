import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

interface TermsPageProps {
  onBack: () => void;
}


// 🔷 Terms Data (scalable & clean)
const termsData = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing, browsing, or using any part of Inalgo’s platform, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service.

If you do not agree with any part of these terms, you must not use our services.

We reserve the right to update, modify, or replace these terms at any time without prior notice. Continued use of the platform after changes constitutes acceptance of the revised terms.`
  },
  {
    title: "2. Use License",
    content: `Inalgo grants you a limited, non-exclusive, non-transferable, and revocable license to use the platform for personal and non-commercial purposes.

You agree NOT to:
- Modify or copy materials for commercial use
- Reverse engineer or extract source code
- Use the platform for illegal activities
- Remove copyright or proprietary markings

Violation of these terms may result in immediate termination of access.`
  },
  {
    title: "3. Disclaimer",
    content: `All services are provided on an "as is" and "as available" basis.

Inalgo makes no guarantees regarding:
- Accuracy or reliability of content
- Continuous availability of the platform
- Suitability for specific purposes

We disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement.`
  },
  {
    title: "4. Governing Law",
    content: `These Terms shall be governed by and interpreted in accordance with the laws of India.

Any disputes shall be subject to the exclusive jurisdiction of the courts located in Uttar Pradesh, India.`
  },
  {
    title: "5. User Responsibilities",
    content: `You agree to use the platform responsibly and not misuse the services.

You are responsible for maintaining the confidentiality of your account and all activities under it.`
  },
  {
    title: "6. Limitation of Liability",
    content: `In no event shall Inalgo or its team be liable for any indirect, incidental, or consequential damages arising from the use of the platform.`
  },
  {
    title: "7. Contact Information",
    content: `For any questions regarding these Terms, please contact us at:
inaialgo@gmail.com`
  }
];

export function TermsPage({ onBack }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      
      {/* Container */}
      <div className="max-w-4xl mx-auto px-6 py-20 selection:bg-orange-100">

        {/* 🔙 Back Button */}
        <Button
          onClick={onBack}
          className="group mb-12 flex items-center gap-2 px-6 py-3 rounded-full 
          bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold 
          shadow-lg hover:shadow-orange-400/40 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back
        </Button>

        {/* 🔷 Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-black text-slate-950 mb-4 tracking-tight">
            Terms of <span className="text-orange-600">Service</span>
          </h1>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Last Updated: January 1, 2026
          </p>
        </div>

        {/* 🔷 Terms Sections */}
        <div className="space-y-12">
          {termsData.map((item, index) => (
            <section
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h2>

              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </section>
          ))}
        </div>

        {/* 🔷 Footer */}
        <div className="mt-20 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Inalgo. All rights reserved.
        </div>
      </div>
    </div>
  );
}