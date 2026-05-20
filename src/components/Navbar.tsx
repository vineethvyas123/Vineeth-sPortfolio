/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, Linkedin, Mail, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { PROFILE } from "../constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
  ];

  return (
    <header>
      {/* Sticky Scroll Progress Bar at the very viewport top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand origin-left z-50"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px] border-b border-line/5 py-3 shadow-xs" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-ink flex items-center justify-center font-bold text-xl text-paper group-hover:bg-brand transition-colors">
              V
            </div>
            <div className="block">
              <strong className="text-xs sm:text-sm font-bold tracking-tight leading-none text-ink uppercase block">Vineeth Kumar</strong>
              <p className="label-caps !text-[7px] sm:!text-[8px] mt-0.5">Agentic AI Architect</p>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors group/nav"
              >
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:nav-underline group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-line rounded-full hover:border-brand hover:text-brand transition-all text-ink"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-line rounded-full hover:border-brand hover:text-brand transition-all text-ink"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href={PROFILE.resumeUrl}
              download
              className="px-6 py-2 rounded-full bg-ink text-paper text-xs font-bold uppercase tracking-widest hover:bg-brand transition-all"
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-ink hover:text-brand"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          className="fixed inset-0 z-40 bg-paper pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-ink tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8 border-t border-line flex space-x-6">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-ink hover:text-brand">
                <Linkedin size={24} />
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-ink hover:text-brand">
                <Github size={24} />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="text-ink hover:text-brand">
                <Mail size={24} />
              </a>
            </div>
            <a
              href={PROFILE.resumeUrl}
              download
              className="w-full py-4 bg-ink text-paper text-center rounded-xl font-bold uppercase tracking-widest"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
