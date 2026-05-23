/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="bg-[#030307] py-12 relative overflow-hidden text-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            History
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Work <span className="font-sans italic text-slate-400 font-normal">Experience</span>
          </h2>
        </div>

        {/* Timeline single-column rail wrapper */}
        <div className="relative pl-8 md:pl-12 border-l border-gradient-to-b from-[#3b82f6] to-transparent border-white/5">
          {/* Custom continuous vertical timeline rail line */}
          <div className="absolute left-0 top-3 bottom-0 w-[2px] bg-gradient-to-b from-[#3b82f6] via-[#3b82f6]/50 to-transparent pointer-events-none" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              const outcomeMetric = exp.metric || "↓ COGNITIVE AUTOMATION";

              return (
                <div key={index} className="relative group">
                  
                  {/* Timeline connector circle dot on rail (left) */}
                  <div className="absolute left-[-37px] md:left-[-53px] top-[8px] w-4 h-4 rounded-full bg-[#3b82f6] border-2 border-[#030307] ring-4 ring-[#3b82f6]/20 group-hover:scale-125 transition-transform duration-300 z-10" />

                  {/* Header metadata Grid */}
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      
                      {/* Name + link */}
                      <a 
                        href="#contact" 
                        className="text-xl sm:text-2xl font-display font-bold text-white hover:text-[#3b82f6] transition-colors duration-200"
                      >
                        {exp.company}
                      </a>

                      {/* Right impact metric */}
                      <div className="text-xs font-mono font-bold text-[#fbbf24] tracking-widest sm:text-right">
                        {outcomeMetric}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-400 font-mono text-xs">
                      
                      {/* Role Pill Badge */}
                      <span className="px-3 py-1 rounded bg-white/[0.03] border border-white/5 font-mono text-[10px] text-[#3b82f6] font-bold tracking-widest uppercase">
                        [{exp.role}]
                      </span>

                      {/* Location details */}
                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                        <MapPin size={11} className="text-[#3b82f6]" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Period Badge */}
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 sm:ml-auto">
                        <Calendar size={11} className="text-[#fbbf24]" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets mapping */}
                  <ul className="space-y-3 pl-1">
                    {exp.highlights.map((point, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="flex items-start gap-2 text-sm md:text-[15px] font-sans text-slate-400 leading-relaxed hover:text-[#f8fafc] transition-colors duration-200"
                      >
                        <ChevronRight size={16} className="text-[#3b82f6] shrink-0 mt-1" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
