/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TECH_STACK } from "../constants";

export default function TechStack() {
  return (
    <section id="stack" className="bg-paper">
      <div className="section-container !pt-4">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-caps mb-2"
          >
            Toolkit
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Technical Arsenal</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(TECH_STACK).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="modern-card p-10 hover:border-brand/40 group"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-ink flex items-center justify-between">
                <span>{category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-line group-hover:bg-brand transition-colors" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "var(--color-ink)", 
                      color: "var(--color-paper)",
                      borderColor: "var(--color-ink)"
                    }}
                    className="px-3 py-1.5 bg-paper rounded-lg text-[10px] font-bold uppercase tracking-widest text-ink/40 border border-line transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
