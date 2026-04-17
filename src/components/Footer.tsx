
import logo from "../assets/logo.png";
import { SearchCode } from "lucide-react";
import { Linkedin, Instagram, Youtube } from "lucide-react";
// Optional: if using React Router
// import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-[#8e8e8e] font-sans overflow-hidden border-t border-[#111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-[#1a1a1a]">
          <div className="text-[11px] leading-relaxed max-w-2xl font-medium tracking-wide">
            Inalgo Securities Limited is not yet authorised by the Financial Conduct Authority.<br />
            Prior to becoming authorised no information regarding the future provision of custody and execution services<br />
            is intended as an invitation or inducement to apply for these services, nor does it constitute financial advice.
          </div>

          <div className="mt-8 md:mt-0 flex items-center gap-3">
            <span className="text-[11px] opacity-80">Powered by</span>
            <div className="flex items-center gap-1.5 text-white/90">
              <div className="w-5 h-5 rounded-full border border-white/80 flex items-center justify-center relative">
                <div className="w-[1px] h-full bg-white/50 rotate-45 absolute" />
                <div className="w-[1px] h-full bg-white/50 -rotate-45 absolute" />
              </div>
              <span className="font-serif text-[18px] tracking-tight">Inalgo</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 pb-20">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-7">
            <div className="flex items-center gap-2">
<img 
  src={logo} 
  alt="Inalgo" 
  className="h-[26px] w-auto"
/>              
            </div>

            <p className="text-[11px] leading-relaxed max-w-[340px] tracking-wide">
              Inalgo Technologies Limited is a company registered in England & Wales with company number 16326982. 
              Our office is located at 30 Churchill Place, Canary Wharf, London, England, E14 5RE.
            </p>

            <div className="flex items-center gap-4 pt-2">
              {/* GDPR Badge */}
              <div className="w-12 h-12 rounded-full border border-[#2a2a2a] bg-[#111] flex flex-col items-center justify-center text-[9px] font-black text-white/90 relative tracking-wider">
                <span className="text-[6px] tracking-widest absolute top-1.5 opacity-60">★★★★★</span>
                GDPR
                <span className="text-[6px] tracking-widest absolute bottom-1.5 opacity-60">★★★★★</span>
              </div>

              {/* Security Badge */}
              <div className="w-12 h-12 rounded-full border border-[#2a2a2a] bg-[#111] flex items-center justify-center text-white/90">
                <SearchCode className="w-5 h-5 opacity-80" />
              </div>
            </div>

            <p className="text-[10px] text-[#555] pt-1">
              © 2026 Inalgo Technologies Limited. Inalgo is the registered trademark of Inalgo Technologies Limited.
            </p>
          </div>

          {/* Right Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-8">

            {/* Inalgo */}
            <div className="space-y-6">
              <h4 className="text-[13px] text-[#777] font-medium">Inalgo</h4>
              <div className="flex flex-col gap-4 text-[13px] text-white/80">
                
                {/* If NOT using React Router */}
                <a href="/resources" className="hover:text-white transition-colors">Vision</a>
                <a href="/about" className="hover:text-white transition-colors">About Us</a>
                <a href="/Careers" className="hover:text-white transition-colors">Careers</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
                <a href="https://www.linkedin.com/company/in-algo09/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>

                {/* If using React Router (replace above)
                <Link to="/resources">Resources</Link>
                */}
              </div>
            </div>

            {/* Others */}
            <div className="space-y-6">
              <h4 className="text-[13px] text-[#777] font-medium">Others</h4>
              <div className="flex flex-col gap-4 text-[13px] text-white/80">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="https://www.instagram.com/inaialgo/" className="hover:text-white transition-colors">Instagram</a>
                <a href="https://t.me/inaialgo?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnzSUrQ1WR9IyciXTM1V5V4AxT3eB2QNo0k877Iu9Oz3dtKo0Z8sMUeOLdtxs_aem_YfLCtq5THAkJ6kux83dWMg" className="hover:text-white transition-colors">Telegram</a>

              </div>
            </div>

          </div>
        </div>
      </div>
      

      {/* Watermark */}
      <div className="w-full relative mt-[-100px] mb-[-4%] sm:mt-[-160px] pb-0 flex justify-center pointer-events-none select-none">
        <h1 className="text-[25.5vw] font-serif tracking-tighter text-[#121212] leading-[0.75] mx-auto w-full text-center">
          inalgo
        </h1>
      </div>

    </footer>
  );
}