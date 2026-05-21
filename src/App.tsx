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
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import { motion } from "motion/react";
import { PROFILE } from "./constants";

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section - Story Driven */}
        <section id="about" className="py-12 bg-white">
          <div className="section-container !py-4">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="aspect-[4/5] bg-paper rounded-[40px] overflow-hidden border border-line relative z-10 group shadow-2xl shadow-ink/5">
                  <img 
                    src={PROFILE.profileImage} 
                    alt="Vineeth Kumar Vyasabhattu - Enterprise AI &amp; BPM (PEGA, Appian, Camunda, Bonitasoft) Automation Architect"
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 modern-card bg-paper/90 backdrop-blur-sm">
                    <div className="text-4xl font-bold tracking-tighter text-ink mb-0.5">12+</div>
                    <div className="label-caps !text-ink/60 leading-none">Years Strategic Expertise</div>
                  </div>
                </div>
                
                {/* Architectural Accent */}
                <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-line hidden lg:block" />
              </motion.div>

              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="label-caps mb-4">The Narrative</div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-[0.95] text-ink">
                    Bridging <span className="text-ink/30 italic">Traditional Systems</span> with <span className="text-brand">Agentic Intelligence.</span>
                  </h2>
                  <div className="space-y-6 text-xl text-ink/60 leading-relaxed font-medium">
                    <p>
                      With over a decade of deep involvement in Enterprise Java and industry-leading BPM suites like PEGA, Appian, Camunda, and Bonitasoft, I have seen the evolution of business processes firsthand.
                    </p>
                    <p>
                      Today, the landscape is shifting from rigid, pre-defined workflows to fluid, autonomous agentic systems. My focus is on architecting this transition—leveraging multi-agent orchestration, RAG architectures, and enterprise LLM integration to build the next generation of cognitive automation.
                    </p>
                    
                    <div className="pt-8 grid sm:grid-cols-2 gap-8 border-t border-line mt-8">
                       <div className="group">
                        <div className="text-sm font-bold text-ink mb-2 uppercase tracking-widest group-hover:text-brand transition-colors">Modernize</div>
                        <p className="text-sm text-ink/50 leading-relaxed">Transforming legacy BPM architectures (PEGA, Appian, Camunda, Bonitasoft) into AI-native workflows through intelligent orchestration.</p>
                      </div>
                      <div className="group">
                        <div className="text-sm font-bold text-ink mb-2 uppercase tracking-widest group-hover:text-brand transition-colors">Scale</div>
                        <p className="text-sm text-ink/50 leading-relaxed">Designing resilient, scalable agentic systems that deliver measurable enterprise outcomes.</p>
                      </div>
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
        <Writing />
      </main>

      <Contact />
      
      {/* Global Background Particles Component could go here */}
    </div>
  );
}

