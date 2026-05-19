/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="bg-white relative overflow-hidden">
      <div className="section-container !pt-4">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-caps mb-2"
          >
            History
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Work Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2" />

          <div className="space-y-20">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-3 h-3 bg-paper rounded-full border-2 border-ink -translate-x-1/2 z-10" />

                <div className={`grid md:grid-cols-2 gap-8 md:gap-24 ${index % 2 !== 0 ? "md:rtl" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`${index % 2 !== 0 ? "md:text-left ltr" : "md:text-right"}`}
                  >
                    <div className="inline-flex items-center space-x-2 text-brand font-mono text-[10px] font-bold uppercase tracking-widest mb-3">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-ink mb-3 tracking-tighter">{exp.role}</h3>
                    <div className={`flex items-center space-x-3 text-ink/40 mb-6 font-bold uppercase text-[10px] tracking-widest ${index % 2 !== 0 ? "justify-start" : "justify-end"}`}>
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                      <span className="text-line">•</span>
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="modern-card p-10 group hover:border-brand/20 transition-all duration-500 bg-white"
                  >
                    <ul className="space-y-5">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start space-x-4 text-ink/60 text-sm leading-relaxed font-medium">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
