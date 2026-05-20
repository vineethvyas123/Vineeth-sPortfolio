/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink, Layers, TrendingUp } from "lucide-react";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="bg-paper bg-dot-pattern"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-container !pt-4">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-caps mb-2"
          >
            Portfolio
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0E0B3D]">Featured Case Studies</h2>
        </div>

        <div className="grid gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group modern-card bg-white p-0 overflow-hidden grid lg:grid-cols-12 min-h-[400px] hover:translate-y-[-4px] hover:shadow-xl transition-all duration-500 border border-line/15"
            >
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-2.5 rounded-xl bg-ink text-paper group-hover:bg-brand transition-colors shadow-lg shadow-ink/5"
                  >
                    <Layers size={20} />
                  </motion.div>
                  <span className="label-caps !text-ink/60">Enterprise AI Solution</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter leading-tight group-hover:text-brand transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-lg text-ink/60 mb-8 leading-relaxed max-w-xl font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <motion.span 
                      key={t}
                      whileHover={{ y: -2, borderColor: "var(--color-brand)" }}
                      className="px-4 py-1.5 bg-paper rounded-full text-[10px] font-bold uppercase tracking-wider text-ink/80 border border-line transition-all"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-ink p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-dot-pattern opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4 text-brand">
                    <TrendingUp size={24} />
                    <span className="text-xs font-bold uppercase tracking-widest">Client Impact</span>
                  </div>
                  <p className="text-paper text-2xl md:text-3xl font-bold leading-tight tracking-tight italic group-hover:scale-[1.02] transition-transform duration-500 origin-left">
                    "{project.impact}"
                  </p>
                </div>
                
                <div className="relative z-10 flex justify-end mt-8">
                  <motion.a
                    href={project.link}
                    whileHover={{ x: 8 }}
                    className="flex items-center space-x-3 text-paper font-bold uppercase tracking-[0.2em] text-xs hover:text-brand transition-colors group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink size={20} className="group-hover/link:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 border-[40px] border-paper/5 rounded-full pointer-events-none group-hover:border-paper/10 group-hover:scale-110 transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
