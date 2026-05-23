/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import React, { useState } from "react";
import { Mail, Linkedin, MapPin, Send, ArrowUp, Github } from "lucide-react";
import { PROFILE } from "../constants";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", inquiry: "Consulting", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", inquiry: "Consulting", message: "" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section 
      id="contact" 
      className="bg-[#030307] pt-12 border-t border-white/5 relative overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-6 pb-12">
        
        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Connect text and icons (58% / lg:col-span-7) */}
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-[56px] font-display font-bold mb-6 tracking-tight leading-[1.05]"
            >
              Let’s build <span className="text-shimmer">AI-powered</span> enterprises together.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Email item with Copy */}
              <div 
                onClick={copyEmail}
                className="flex items-center gap-4 group cursor-pointer relative"
                title="Click to copy email address"
              >
                {/* Square Icon transitions to cobalt block on hover */}
                <div className="w-14 h-14 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 shrink-0">
                  <Mail size={22} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[9px] text-slate-400 tracking-widest uppercase mb-1">
                    Email Address <span className="text-xs text-[#3b82f6] lowercase opacity-0 group-hover:opacity-100 transition-opacity">· copy</span>
                  </div>
                  <span className="font-display font-bold text-sm sm:text-[15px] text-white group-hover:text-[#3b82f6] transition-colors block truncate">
                    {PROFILE.email}
                  </span>
                </div>

                {/* Copied check bubble */}
                {copied && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute left-1/2 -top-12 -translate-x-1/2 bg-[#3b82f6] text-white text-[10px] font-mono font-bold py-1.5 px-3 rounded-lg shadow-xl z-20 pointer-events-none"
                  >
                    COPIED EMAIL!
                  </motion.div>
                )}
              </div>

              {/* LinkedIn item */}
              <a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 shrink-0">
                  <Linkedin size={22} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[9px] text-slate-400 tracking-widest uppercase mb-1">
                    LinkedIn Network
                  </div>
                  <span className="font-display font-bold text-sm sm:text-[15px] text-white group-hover:text-[#3b82f6] transition-colors block truncate">
                    vineethvyasabhattu
                  </span>
                </div>
              </a>

              {/* GitHub item */}
              <a 
                href={PROFILE.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 shrink-0">
                  <Github size={22} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[9px] text-slate-400 tracking-widest uppercase mb-1">
                    Repository Code
                  </div>
                  <span className="font-display font-bold text-sm sm:text-[15px] text-white group-hover:text-[#3b82f6] transition-colors block truncate">
                    Vineethvyas123
                  </span>
                </div>
              </a>

              {/* Location item */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#3b82f6] shrink-0">
                  <MapPin size={22} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[9px] text-slate-400 tracking-widest uppercase mb-1">
                    Primary Hub
                  </div>
                  <span className="font-display font-bold text-sm sm:text-[15px] text-white block truncate">
                    {PROFILE.location}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Contact Form (42% / lg:col-span-5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 card-glass p-8 md:p-10 bg-white/[0.01] border-white/5 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-display font-semibold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                {/* Name + Email side by side layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-widest text-slate-400 uppercase block">
                      Name
                    </label>
                    <input 
                      type="text" 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full bg-[#05050c] border border-white/10 rounded-lg px-4 py-3 outline-none text-white font-sans text-sm focus:border-[#3b82f6] focus:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-widest text-[#8888a0] uppercase block">
                      Email
                    </label>
                    <input 
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full bg-[#05050c] border border-white/10 rounded-lg px-4 py-3 outline-none text-white font-sans text-sm focus:border-[#3b82f6] focus:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all" 
                      placeholder="your@email.com" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] tracking-widest text-slate-400 uppercase block">
                    Inquiry Type
                  </label>
                  <select 
                    value={formState.inquiry}
                    onChange={(e) => setFormState({ ...formState, inquiry: e.target.value })}
                    className="w-full bg-[#05050c] border border-white/10 rounded-lg px-4 py-3 outline-none text-white font-sans text-sm focus:border-[#3b82f6] transition-colors appearance-none"
                  >
                    <option value="Consulting">Consulting</option>
                    <option value="Agentic AI Systems">Agentic AI Systems</option>
                    <option value="Enterprise BPM Optimization">Enterprise BPM Optimization</option>
                    <option value="General Message">General Message</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] tracking-widest text-slate-400 uppercase block">
                    Message
                  </label>
                  <textarea 
                    rows={4} 
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="w-full bg-[#05050c] border border-white/10 rounded-lg px-4 py-3 outline-none text-white font-sans text-sm focus:border-[#3b82f6] focus:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all resize-none" 
                    placeholder="How can I help you?"
                  />
                </div>

                {/* Submit button: full-width cobalt pill */}
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.01, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.99 }}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#3b82f6] text-white py-3.5 rounded-full font-display text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 shrink-0"
                >
                  {isSubmitting ? (
                    // Spinner logic
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send size={15} />
                    </>
                  )}
                </motion.button>

                {submitSuccess && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-emerald-400 font-mono text-center mt-2"
                  >
                    🚀 Message submitted successfully helper!
                  </motion.p>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* FOOTER: Background #020204 (deepest dark) with 1px border grid */}
      <footer className="w-full bg-[#020204] text-white py-16 border-t border-white/5 relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Monogram brand logo label */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-display font-bold text-lg leading-none tracking-[0.08em] uppercase text-white mb-2">
              VINEETH KUMAR VYASABHATTU<span className="text-[#3b82f6]">.</span>
            </div>
            <p className="font-mono text-xs text-slate-400 max-w-sm mb-4 leading-relaxed">
              Bridging Legacy Enterprises into Autonomous AI
            </p>
            <p className="text-slate-400/40 text-[10px] font-mono uppercase tracking-widest">
              © 2026 {PROFILE.name}
            </p>
          </div>

          {/* Column 2: Quick links split */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start w-full">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#3b82f6] mb-4 font-bold">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-center md:text-left w-full max-w-xs font-mono text-xs">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
              <a href="#expertise" className="text-slate-400 hover:text-white transition-colors">Expertise</a>
              <a href="#experience" className="text-slate-400 hover:text-white transition-colors">History</a>
              <a href="#projects" className="text-slate-400 hover:text-[#3b82f6] transition-colors">Projects</a>
              <a href="#stack" className="text-slate-400 hover:text-[#3b82f6] transition-colors">Stack</a>
              <a href="#education" className="text-slate-400 hover:text-[#3b82f6] transition-colors">Education</a>
              <a href="#writing" className="text-slate-400 hover:text-[#3b82f6] transition-colors">Writing</a>
            </div>
          </div>

          {/* Column 3: Social connectors + back-to-top */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-between self-stretch">
            <div className="flex space-x-3 mb-6 md:mb-0">
              <a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all"
              >
                <Linkedin size={15} />
              </a>
              <a 
                href={PROFILE.github} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all"
              >
                <Github size={15} />
              </a>
              <a 
                href={`mailto:${PROFILE.email}`} 
                className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all"
              >
                <Mail size={15} />
              </a>
            </div>

            {/* Back to top bounce action icon button */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] flex items-center justify-center text-white shadow-lg shadow-[#3b82f6]/20 cursor-pointer group mt-auto"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </footer>
    </section>
  );
}
