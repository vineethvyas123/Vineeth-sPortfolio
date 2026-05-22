/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, ArrowUpRight, Check } from "lucide-react";
import { CERTIFICATIONS } from "../constants";

export default function BlogsAndCertifications() {
  return (
    <section 
      id="leadership" 
      className="bg-[#030307] py-12 border-b border-white/5 relative overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT: Certifications */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="section-label mb-0">
                Certifications
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3, borderColor: "#3b82f6" }}
                  className="card-glass p-5 bg-white/[0.01] border-white/5 flex items-start gap-4 shadow-sm select-none group/cert transition-all duration-300"
                >
                  {/* Glowing icon container with custom anim check */}
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#3b82f6] shrink-0 group-hover/cert:bg-[#3b82f6] group-hover/cert:text-white group-hover/cert:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300">
                    <div className="relative">
                      <ShieldCheck size={18} className="group-hover/cert:opacity-0 absolute inset-0 m-auto transition-opacity" />
                      <Check size={18} className="opacity-0 group-hover/cert:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Header Spacer */}
                    <h3 className="text-sm font-display font-bold text-white leading-snug tracking-tight mb-1">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                      <span>{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Thought Leadership "Coming Soon" */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="section-label mb-0">
                Thought Leadership
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Coming Soon Case Study 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.01, boxShadow: "0 0 16px rgba(251, 191, 36, 0.15)", borderColor: "#fbbf24" }}
                className="p-6 rounded-xl border border-dashed border-white/10 bg-[#05050c]/45 flex flex-col justify-between min-h-[140px] group transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#fbbf24]/10 border border-[#fbbf24]/20 font-mono text-[9px] font-bold text-[#fbbf24] tracking-widest uppercase">
                    COMING SOON
                  </span>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-[#fbbf24] transition-colors" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-display font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug">
                  Bridging the Gap: From Traditional BPM to Agentic AI
                </h3>
              </motion.div>

              {/* Coming Soon Case Study 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.01, boxShadow: "0 0 16px rgba(251, 191, 36, 0.15)", borderColor: "#fbbf24" }}
                className="p-6 rounded-xl border border-dashed border-white/10 bg-[#05050c]/45 flex flex-col justify-between min-h-[140px] group transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#fbbf24]/10 border border-[#fbbf24]/20 font-mono text-[9px] font-bold text-[#fbbf24] tracking-widest uppercase">
                    COMING SOON
                  </span>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-[#fbbf24] transition-colors" />
                </div>
                
                <h3 className="text-lg font-display font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug">
                  Building Scalable RAG Architectures for Enterprise Workflows
                </h3>
              </motion.div>

              {/* Status Indicator */}
              <div className="py-4 text-center">
                <p className="font-mono text-xs italic text-slate-400">
                  "More articles being drafted..."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
