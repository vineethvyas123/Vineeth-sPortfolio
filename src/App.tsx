/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import BlogsAndCertifications from "./components/BlogsAndCertifications";
import Education from "./components/Education";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import { motion } from "motion/react";
import { PROFILE } from "./constants";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030307] text-[#f8fafc]">
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        {/* 3. ABOUT / NARRATIVE SECTION */}
        <section id="about" className="py-12 md:py-16 relative overflow-hidden border-t border-b border-white/5 bg-[#08080f]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* LEFT Column: Photo framework */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative flex justify-center"
              >
                <div className="relative w-full max-w-[380px] aspect-[4/5]">
                  
                  {/* Portrait photo: fully clear and natural details */}
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-[#06060c] border border-white/5 relative group shadow-2xl shadow-black/85 profile-image-container">
                    <img 
                      src={PROFILE.profileImage} 
                      alt="Vineeth Kumar Vyasabhattu"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 profile-avatar-img"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Floating vertical cobalt rule line overlapping corner */}
                  <div className="absolute -top-6 -left-4 w-[2px] h-[70px] bg-[#3b82f6]" />
                  <div className="absolute -top-6 -left-4 w-[70px] h-[2px] bg-[#3b82f6]" />

                  {/* 12+ floating badge with Orbit animation */}
                  <motion.div 
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 4, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-6 -left-6 z-20 backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col justify-center min-w-[130px] shadow-2xl cursor-default"
                  >
                    <div className="text-4xl font-display font-extrabold text-[#fbbf24] tracking-tighter leading-none mb-1">
                      12+
                    </div>
                    <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-400 leading-none">
                      Years Strategic Expertise
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT Column: Overlapping rich text */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  <div className="section-label mb-5">
                    The Narrative
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-[54px] leading-[1.1] font-display font-bold mb-6 tracking-tight text-white select-none">
                    Bridging <span className="font-sans italic text-slate-400 font-normal">Traditional Systems</span> with <span className="text-shimmer font-bold">Agentic Intelligence.</span>
                  </h2>

                  <div className="space-y-6 text-slate-400 font-sans text-base sm:text-lg leading-relaxed font-normal mb-10">
                    <p>
                      With over a decade of deep involvement in Enterprise Java and industry-leading BPM suites like PEGA, Appian, Camunda, and Bonitasoft, I have witnessed the evolution of business workflow orchestration firsthand.
                    </p>
                    <p>
                      Today, the landscape is shifting from rigid, pre-defined pathways to fluid, autonomous agentic networks. My current mandate as an Agentic AI Architect is to design this transition—implementing robust multi-agent swarms, custom RAG integrations, and scalable enterprise LLM pathways that optimize operational speed.
                    </p>
                  </div>

                  {/* Modernize + Scale side by side callout cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 border-t border-white/5">
                    <div className="card-glass p-5 flex flex-col bg-white/[0.01] hover:border-[#3b82f6]/30 transition-all duration-300">
                      <div className="font-mono text-[11px] font-bold text-white mb-2 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                        Modernize
                      </div>
                      <p className="font-sans text-xs text-slate-400 leading-relaxed">
                        Transforming legacy BPM architectures (PEGA, Appian, Camunda, Bonitasoft) into AI-native workflows through intelligent orchestration.
                      </p>
                    </div>

                    <div className="card-glass p-5 flex flex-col bg-white/[0.01] hover:border-[#3b82f6]/30 transition-all duration-300">
                      <div className="font-mono text-[11px] font-bold text-white mb-2 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                        Scale
                      </div>
                      <p className="font-sans text-xs text-slate-400 leading-relaxed">
                        Designing resilient, scalable agentic systems that connect enterprise databases to coordinate intelligence seamlessly.
                      </p>
                    </div>
                  </div>

                </motion.div>
              </div>

            </div>
          </div>
        </section>

        <Expertise />
        <Experience />
        <Projects />
        <TechStack />
        <BlogsAndCertifications />
        <Education />
        <Writing />
      </main>

      <Contact />
    </div>
  );
}
