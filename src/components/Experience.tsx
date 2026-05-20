/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";
import { EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <motion.section 
      id="experience" 
      className="bg-white relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-container !pt-4">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-caps mb-2"
          >
            History
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0E0B3D]">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => {
            const outcomeMetric = 
              index === 0 ? "↓ 45% Overhead Reduced" 
              : index === 1 ? "↓ 60% approval cycles" 
              : "↓ 3x faster delivery";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="modern-card p-6 md:p-10 bg-white border border-line/10 hover:border-brand/30 hover:shadow-xl transition-all duration-500 flex flex-col gap-6"
              >
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line/10 pb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0E0B3D] tracking-tighter">{exp.company}</h3>
                    <div className="flex items-center space-x-2 text-ink/40 mt-1.5 uppercase text-[10px] tracking-widest font-bold">
                      <MapPin size={13} className="text-[#2563EB] shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 px-3.5 py-1.5 bg-paper rounded-xl border border-line/10 font-mono text-[10px] font-bold uppercase tracking-wider text-ink/60 h-fit w-fit">
                    <Calendar size={12} className="text-[#2563EB]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Subheader credentials */}
                <div className="flex flex-row flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#0E0B3D] text-white text-[10px] font-bold uppercase tracking-widest border border-white/5 shadow-sm">
                    <Briefcase size={12} className="text-[#2563EB]" />
                    <span>{exp.role}</span>
                  </div>

                  <div className="inline-flex items-center bg-[#2563EB]/5 border border-[#2563EB]/15 text-[#2563EB] px-4 py-2 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest">
                    {outcomeMetric}
                  </div>
                </div>

                {/* Bullets with inline markers */}
                <ul className="space-y-4 pt-2">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start space-x-3.5 text-sm font-medium text-ink/65 leading-relaxed">
                      <ArrowRight size={15} className="text-[#2563EB] shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
