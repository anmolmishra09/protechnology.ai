import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-orange-200 dark:border-indigo-800 bg-gradient-to-b from-white to-orange-50 dark:from-slate-950 dark:to-indigo-950 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Pro Technology</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building the future of intelligent company.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © 2026 Pro Technology. All rights reserved.
            </p>
          </div>

          {/* Office Details Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Office</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>Global Headquarters</p>
              <p>123 Innovation Area</p>
              <p>Sonbhadra, U.P. 231216</p>
              <p>India</p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@protechnology.ai" 
                className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>anmolmishra86229@gmail.com</span>
              </a>
              
              <div className="flex space-x-4 pt-2">
                <a href="https://www.linkedin.com/in/anmolmishra09/" className="text-slate-400 dark:text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/anmolmishra09/protechno" className="text-slate-400 dark:text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}