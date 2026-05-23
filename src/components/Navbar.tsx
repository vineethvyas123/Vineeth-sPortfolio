/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, Linkedin, Github, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { PROFILE } from "../constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "light";
  });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Education", href: "#education" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact"}
  ];

  return (
    <header className="relative">
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#2563eb] origin-left z-50"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-[#09090f]/90 backdrop-blur-[20px] border-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3.5 group"
          >
            {/* V Monogram logo */}
            <div className="w-10 h-10 rounded-lg bg-[#2563eb] flex items-center justify-center font-display font-extrabold text-[22px] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:bg-[#1d4ed8] transition-colors duration-300">
              V
            </div>
            <div className="block leading-none">
              <span className="text-sm font-display font-bold tracking-tight text-[#f0f0f5] group-hover:text-[#2563eb] transition-colors duration-300 block">
                VINEETH KUMAR
              </span>
              <span className="font-mono text-[9px] font-medium tracking-[0.14em] text-[#8888a0] uppercase block mt-1">
                AGENTIC AI ARCHITECT
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-[#8888a0] hover:text-[#f0f0f5] py-2 transition-colors duration-200 group/nav"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2563eb] transition-all duration-300 group-hover/nav:w-full" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
              <motion.a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.08 }}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8888a0] hover:text-[#2563eb] hover:border-[#2563eb] transition-colors duration-200"
              >
                <Linkedin size={14} />
              </motion.a>
              <motion.a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.08 }}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8888a0] hover:text-[#2563eb] hover:border-[#2563eb] transition-colors duration-200"
              >
                <Github size={14} />
              </motion.a>

              {/* Theme Toggle Button */}
              <motion.button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8888a0] hover:text-[#2563eb] hover:border-[#2563eb] transition-colors duration-200 cursor-pointer outline-none shrink-0"
                aria-label="Toggle Theme"
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
                </motion.div>
              </motion.button>

              <motion.a
                href={PROFILE.resumeUrl}
                download
                whileHover={{ scale: 1.03, brightness: 1.15 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2 rounded-full bg-[#2563eb] text-white font-display text-[11px] font-semibold tracking-wider hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300"
              >
                DOWNLOAD CV
              </motion.a>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#8888a0] hover:text-[#2563eb] transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-30 bg-[#09090f]/95 backdrop-blur-[20px] pt-24 px-6 md:hidden flex flex-col justify-start"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-[#f0f0f5] hover:text-[#2563eb] transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 flex items-center space-x-4">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8888a0] hover:text-[#2563eb] hover:border-[#2563eb] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8888a0] hover:text-[#2563eb] hover:border-[#2563eb] transition-colors"
              >
                <Github size={18} />
              </a>

              {/* Theme Toggle Button (Mobile) */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8888a0] hover:text-[#2563eb] hover:border-[#2563eb] transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
            <a
              href={PROFILE.resumeUrl}
              download
              className="w-full py-3.5 bg-[#2563eb] text-white text-center rounded-xl font-display font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#2563eb]/20"
            >
              DOWNLOAD CV
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
