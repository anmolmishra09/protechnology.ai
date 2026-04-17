
import { User, LogOut, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface NavbarProps {
  onNavigate: (page: any) => void;
  isLoggedIn: boolean;
  onLogout?: () => void;
}

export function Navbar({ onNavigate, isLoggedIn, onLogout }: NavbarProps) {

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Vision", route: "vision" },
    { label: "Articles", route: "articles" },
    { label: "Privacy", route: "privacy" },
    { label: "Terms", route: "terms" },
    { label: "Contact", route: "contact" },
    { label: "Careers", route: "careers" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <div
        className={`
          flex items-center justify-between
          px-6 py-3 w-[92%] max-w-6xl
          rounded-full backdrop-blur-xl
          transition-all duration-300
          border border-white/20
          ${scrolled ? "bg-white/70 shadow-xl" : "bg-white/50"}
        `}
      >
        {/* Logo */}
        <div
          onClick={() => onNavigate("home")}
          className="flex items-center cursor-pointer"
        >
          <img src={logo} className="h-10 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.route)}
              className="hover:text-black transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border text-sm">
                <User className="w-4 h-4" />
                Account
              </div>

              <button
                onClick={() => onLogout?.()}
                className="px-5 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-orange-500 transition"
              >
                <LogOut className="w-4 h-4 inline mr-1" />
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => onNavigate("login")}
              className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              Get started
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 w-[92%] max-w-6xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-4 md:hidden"
          >
            <div className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.route);
                    setMobileOpen(false);
                  }}
                  className="text-left hover:text-black"
                >
                  {item.label}
                </button>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}