/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Linkedin, MapPin, Send, ArrowUp, Github } from "lucide-react";
import { PROFILE } from "../constants";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section 
      id="contact" 
      className="relative pt-20 overflow-hidden bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />
      
      <div className="section-container pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.95] text-[#0E0B3D]"
            >
              Let’s build <span className="text-[#2563EB]">AI-powered</span> enterprises together.
            </motion.h2>
            
            <div className="space-y-8">
              <div 
                onClick={copyEmail}
                className="flex items-center space-x-6 group cursor-pointer relative"
                title="Click to copy email address"
              >
                <div className="p-5 rounded-2xl bg-paper border border-line group-hover:bg-[#0E0B3D] group-hover:text-paper transition-all duration-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div className="relative">
                  <div className="label-caps mb-1 flex items-center gap-2">
                    <span>Email Me</span>
                    <span className="text-[9px] text-[#2563EB] lowercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      (click to copy)
                    </span>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold tracking-tight hover:text-[#2563EB] transition-colors text-ink block break-all">
                    {PROFILE.email}
                  </span>

                  {/* Tooltip */}
                  {copied && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute left-0 -top-10 bg-[#2563EB] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-md z-20 pointer-events-none font-mono"
                    >
                      Copied email!
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-5 rounded-2xl bg-paper border border-line group-hover:bg-[#0E0B3D] group-hover:text-paper transition-all duration-500 shrink-0">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="label-caps mb-1">Connect</div>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-xl sm:text-2xl font-bold tracking-tight hover:text-[#2563EB] transition-colors text-ink block">
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-5 rounded-2xl bg-paper border border-line group-hover:bg-[#0E0B3D] group-hover:text-paper transition-all duration-500 shrink-0">
                  <Github size={24} />
                </div>
                <div>
                  <div className="label-caps mb-1">Repository</div>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-xl sm:text-2xl font-bold tracking-tight hover:text-[#2563EB] transition-colors text-ink block">
                    GitHub Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="p-5 rounded-2xl bg-paper border border-line shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="label-caps mb-1">Base</div>
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-ink">{PROFILE.location}</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="modern-card p-10 md:p-12 bg-paper/30 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 tracking-tight text-[#0E0B3D]">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="label-caps">Name</label>
                    <input type="text" className="w-full bg-white border border-line rounded-xl px-5 py-4 outline-none focus:border-[#2563EB] transition-colors text-ink font-medium text-sm" placeholder="Your name" />
                  </div>
                  <div className="space-y-3">
                    <label className="label-caps">Email</label>
                    <input type="email" className="w-full bg-white border border-line rounded-xl px-5 py-4 outline-none focus:border-[#2563EB] transition-colors text-ink font-medium text-sm" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="label-caps">Inquiry Type</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-line rounded-xl px-5 py-4 outline-none focus:border-[#2563EB] transition-colors appearance-none text-ink font-medium text-sm">
                      <option>Consulting</option>
                      <option>Agentic AI Systems</option>
                      <option>Enterprise BPM Optimization</option>
                      <option>General Message</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ArrowUp size={16} className="rotate-180" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="label-caps">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-line rounded-xl px-5 py-4 outline-none focus:border-[#2563EB] transition-colors resize-none text-ink font-medium text-sm" placeholder="How can I help you?"></textarea>
                </div>
                <button className="btn-primary w-full flex items-center justify-center space-x-3 text-xs uppercase tracking-widest font-bold group">
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width premium dark footer */}
      <footer className="w-full bg-ink text-white py-16 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
          
          {/* Brand and tagline */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-lg sm:text-xl font-sans font-extrabold tracking-tight mb-3 uppercase text-white">
              VINEETH KUMAR VYASABHATTU<span className="text-[#2563EB]">.</span>
            </div>
            <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm mb-4">
              Bridging Legacy Enterprises into Autonomous AI
            </p>
            <p className="text-white/30 text-xs font-mono uppercase tracking-widest">© 2026 {PROFILE.name}</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start w-full">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center md:text-left w-full max-w-xs">
              <a href="#" className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Home</a>
              <a href="#about" className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">About</a>
              <a href="#expertise" className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Expertise</a>
              <a href="#experience" className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">History</a>
              <a href="#projects" className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Projects</a>
              <a href="#stack" className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Stack</a>
            </div>
          </div>

          {/* Controls */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-between self-stretch">
            <div className="flex space-x-4 mb-8 md:mb-0">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#2563EB] hover:text-[#2563EB] text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#2563EB] hover:text-[#2563EB] text-white transition-all">
                <Github size={18} />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#2563EB] hover:text-[#2563EB] text-white transition-all">
                <Mail size={18} />
              </a>
            </div>

            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top of the page"
              className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#2563EB] hover:text-white transition-all group mt-auto"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform text-[#2563EB]" />
            </button>
          </div>

        </div>
      </footer>
    </motion.section>
  );
}
