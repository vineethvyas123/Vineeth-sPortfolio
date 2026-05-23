/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { EDUCATION } from "../constants";

export default function Education() {
  return (
    <section 
      id="education" 
      className="bg-[#030307] py-16 border-b border-white/5 relative overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Education
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Academic <span className="font-sans italic text-slate-400 font-normal">Qualifications</span>
          </h2>
        </div>

        {/* Layout Grid / Dynamic responsive cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUCATION.map((edu, index) => {
            // Determine custom accents based on educational tier
            const isLatest = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: index * 0.08 
                }}
                whileHover={{ y: -6, borderColor: isLatest ? "#fbbf24" : "#3b82f6" }}
                className={`card-glass p-6 bg-white/[0.01] border-white/5 flex flex-col justify-between min-h-[220px] transition-all duration-300 relative group overflow-hidden ${
                  isLatest ? "md:col-span-2 lg:col-span-3 !bg-gradient-to-r from-white/[0.02] to-white/[0.01] hover:shadow-[0_0_24px_rgba(251,191,36,0.15)]" : ""
                }`}
              >
                {/* Decorative subtle background icon indicator */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 text-white/[0.01] group-hover:text-white/[0.02] pointer-events-none transition-colors duration-300">
                  <GraduationCap className="w-full h-full" />
                </div>

                <div className="relative z-10">
                  {/* Top Header Row with Year and Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    {/* Period badge */}
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                      <Calendar size={12} className="text-[#3b82f6]" />
                      <span>{edu.period}</span>
                    </div>

                    {/* Grade indicator pill */}
                    {edu.grade && (
                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#fbbf24]/10 border border-[#fbbf24]/20 font-mono text-[9px] font-bold text-[#fbbf24] tracking-wider uppercase">
                        <Award size={10} className="shrink-0" />
                        <span>{edu.grade}</span>
                      </div>
                    )}
                  </div>

                  {/* Degree Name */}
                  <h3 className={`font-display font-bold text-white tracking-tight mb-2 group-hover:text-[#3b82f6] transition-colors duration-300 ${
                    isLatest ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                  }`}>
                    {edu.degree}
                  </h3>

                  {/* Institution Details */}
                  <div className="flex items-start gap-2 text-sm text-slate-400 font-sans leading-relaxed mb-4">
                    <BookOpen size={14} className="text-slate-400 mt-1 shrink-0" />
                    <span className="font-medium group-hover:text-slate-300 transition-colors duration-300">
                      {edu.institution}
                    </span>
                  </div>
                </div>

                {/* Footer metadata: location info */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400/80 pt-4 border-t border-white/5 relative z-10">
                  <MapPin size={11} className="text-[#3b82f6]" />
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
