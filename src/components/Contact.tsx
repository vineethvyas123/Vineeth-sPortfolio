/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Linkedin, MapPin, Send, ArrowUp, Github } from "lucide-react";
import { PROFILE } from "../constants";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative pt-20 pb-12 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.95] text-ink"
            >
              Let’s build <span className="text-brand">AI-powered</span> enterprises together.
            </motion.h2>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-5 rounded-2xl bg-paper border border-line group-hover:bg-ink group-hover:text-paper transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="label-caps mb-1">Email Me</div>
                  <a href={`mailto:${PROFILE.email}`} className="text-2xl font-bold tracking-tight hover:text-brand transition-colors text-ink">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-5 rounded-2xl bg-paper border border-line group-hover:bg-ink group-hover:text-paper transition-all duration-500">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="label-caps mb-1">Connect</div>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-2xl font-bold tracking-tight hover:text-brand transition-colors text-ink">
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-5 rounded-2xl bg-paper border border-line group-hover:bg-ink group-hover:text-paper transition-all duration-500">
                  <Github size={24} />
                </div>
                <div>
                  <div className="label-caps mb-1">Repository</div>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-2xl font-bold tracking-tight hover:text-brand transition-colors text-ink">
                    GitHub Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="p-5 rounded-2xl bg-paper border border-line">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="label-caps mb-1">Base</div>
                  <div className="text-2xl font-bold tracking-tight text-ink">{PROFILE.location}</div>
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
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="label-caps">Name</label>
                    <input type="text" className="w-full bg-white border border-line rounded-xl px-5 py-4 outline-none focus:border-brand transition-colors text-ink font-medium" placeholder="Your name" />
                  </div>
                  <div className="space-y-3">
                    <label className="label-caps">Email</label>
                    <input type="email" className="w-full bg-white border border-line rounded-xl px-5 py-4 outline-none focus:border-brand transition-colors text-ink font-medium" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="label-caps">Inquiry Type</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-line rounded-xl px-5 py-4 outline-none focus:border-brand transition-colors appearance-none text-ink font-medium">
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
                  <textarea rows={4} className="w-full bg-white border border-line rounded-xl px-5 py-4 outline-none focus:border-brand transition-colors resize-none text-ink font-medium" placeholder="How can I help you?"></textarea>
                </div>
                <button className="btn-primary w-full flex items-center justify-center space-x-3 text-xs uppercase tracking-widest font-bold group">
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <footer className="pt-16 border-t border-line flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold tracking-tighter mb-2 uppercase italic flex items-center">
              VINEETH<span className="text-brand">.</span>
            </div>
            <p className="text-ink/40 text-xs font-bold uppercase tracking-widest">© 2026 {PROFILE.name}</p>
          </div>

          <div className="flex space-x-10">
            <a href="#" className="text-ink/40 hover:text-ink transition-colors text-xs font-bold uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-ink/40 hover:text-ink transition-colors text-xs font-bold uppercase tracking-widest">Terms</a>
            <a href="#leadership" className="text-ink/40 hover:text-ink transition-colors text-xs font-bold uppercase tracking-widest">Sitemap</a>
          </div>

          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top of the page"
            className="p-5 rounded-full border border-line hover:bg-ink hover:text-paper group transition-all"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </footer>
      </div>
    </section>
  );
}
