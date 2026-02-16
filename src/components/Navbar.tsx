import { User, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

interface NavbarProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms' | 'contact' | 'careers' | 'apply' | 'login' | 'articles' | 'vision' | 'chatbot') => void;
  isLoggedIn: boolean;
  onLogout?: () => void;
}

export function Navbar({ onNavigate, isLoggedIn, onLogout }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-orange-200 dark:border-indigo-800 bg-white/90 dark:bg-indigo-950/90 backdrop-blur-md shadow-lg shadow-orange-100/50 dark:shadow-indigo-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center hover:opacity-80 transition-opacity"
            onClick={() => onNavigate('home')}
          >
            <img 
              src={logo} 
              alt="Pro Technology" 
              className="h-14 w-auto mix-blend-multiply dark:mix-blend-screen dark:invert"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              {[
                { label: 'Vision & Mission', route: 'vision' },
                { label: 'Articles', route: 'articles' },
                { label: 'Privacy', route: 'privacy' },
                { label: 'Terms', route: 'terms' },
                { label: 'Contact', route: 'contact' },
                { label: 'Careers', route: 'careers' }
              ].map((item) => (
                <button
                  key={item.route}
                  onClick={() => onNavigate(item.route as any)}
                  className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Auth Button */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm font-medium text-slate-900 dark:text-white">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 flex items-center justify-center">
                    <User className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="hidden sm:inline">Account</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    if (onLogout) onLogout();
                    else onNavigate('home');
                  }}
                  className="text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => onNavigate('login')}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}