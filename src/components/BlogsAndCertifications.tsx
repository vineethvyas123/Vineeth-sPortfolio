/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, BookOpen, ArrowUpRight, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS, BLOGS } from "../constants";

export default function BlogsAndCertifications() {
  return (
    <motion.section 
      id="leadership" 
      className="bg-paper/50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-container !pt-4 grid md:grid-cols-2 gap-16">
        {/* Certifications */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 rounded-xl bg-[#0E0B3D] text-white border border-white/5 shadow-lg shadow-ink/5">
              <Award size={28} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0E0B3D]">Certifications</h2>
          </div>
          
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-5 modern-card bg-white border border-line/10 hover:border-brand/35 transition-all duration-300 flex items-start gap-4 shadow-sm"
              >
                <div className="p-2.5 bg-brand/5 border border-brand/10 rounded-xl text-[#2563EB] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0E0B3D] tracking-tight">{cert.name}</h3>
                  <div className="flex items-center space-x-3 mt-1.5 text-xs text-ink/50 font-medium">
                    <span>{cert.issuer}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-line/30" />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blogs / Thought Leadership */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 rounded-xl bg-[#0E0B3D] text-white border border-white/5 shadow-lg shadow-ink/5">
              <BookOpen size={28} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0E0B3D]">Thought Leadership</h2>
          </div>
          
          <div className="space-y-4">
            {BLOGS.map((blog, i) => (
              <motion.a
                key={i}
                href={blog.link}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group block p-8 modern-card bg-white border border-line/10 hover:border-brand/40 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-6">
                    <span className="label-caps mb-3 block">{blog.date}</span>
                    <h3 className="text-xl font-bold text-ink group-hover:text-[#2563EB] transition-colors leading-snug tracking-tight">
                      {blog.title}
                    </h3>
                  </div>
                  <ArrowUpRight size={20} className="text-ink/20 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </motion.a>
            ))}
            
            <div className="p-8 border-2 border-dashed border-line rounded-2xl text-center bg-paper/30">
              <p className="text-ink/40 text-sm font-medium">
                More articles on Agentic AI and Enterprise Transformation being drafted...
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
