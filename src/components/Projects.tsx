/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="bg-[#030307] py-12 relative overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Portfolio
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Featured Case <span className="font-sans italic text-slate-400 font-normal">Studies</span>
          </h2>
        </div>

        {/* Stacked Cards Stack */}
        <div className="flex flex-col gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ y: -6, boxShadow: "0 15px 45px rgba(59, 130, 246, 0.15)" }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden card-glass border-white/5 bg-white/[0.01] transition-all duration-350"
            >
              
              {/* LEFT PANEL (dark glass, 55%) -> lg:col-span-7 */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="flex items-center gap-2 mb-6 text-[#3b82f6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Enterprise AI Solution
                  </span>
                </div>

                {/* Project Title: Space Grotesk Bold */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4 tracking-tight">
                  {project.title}
                </h3>

                {/* Description Space Grotesk or Plus Jakarta Sans */}
                <p className="font-sans text-slate-400 text-sm md:text-[15px] leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/[0.02] border border-white/10 rounded-md font-mono text-[9px] font-bold tracking-wider text-slate-400 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT PANEL (very dark, near-black, 45%) -> lg:col-span-5 */}
              <div className="lg:col-span-5 bg-[#05050c] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group/panel">
                
                {/* Faint radial gradient bloom behind quote text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

                {/* SVG Watermark Arc */}
                <svg 
                  className="absolute right-[-40px] bottom-[-40px] w-64 h-64 text-white/[0.02] transition-colors pointer-events-none" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1"
                >
                  <circle cx="50" cy="50" r="40" strokeDasharray="3 3"/>
                  <circle cx="50" cy="50" r="30"/>
                </svg>

                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 text-[#3b82f6] mb-6">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                       Client Impact
                    </span>
                    <ArrowUpRight size={14} className="animate-pulse" />
                  </div>

                  {/* Quote text */}
                  <blockquote className="font-display font-bold italic text-white text-lg sm:text-xl lg:text-2xl leading-snug">
                    "{project.impact}"
                  </blockquote>
                </div>

                {/* VIEW PROJECT Underline slides in relative */}
                <div className="relative z-10 flex justify-end mt-12 w-full">
                  <a
                    href="#contact"
                    className="relative pb-1 text-xs font-mono font-bold uppercase tracking-widest text-[#3b82f6] group/link flex items-center gap-1 hover:text-white transition-colors duration-300"
                  >
                    <span>VIEW PROJECT</span>
                    <span>→</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/link:w-full" />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
