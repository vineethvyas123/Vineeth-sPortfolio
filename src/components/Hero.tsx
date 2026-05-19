/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Bot, Cpu, Sparkles } from "lucide-react";
import { PROFILE } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 mb-8"
          >
            <span className="w-12 h-px bg-brand/30" />
            <span className="label-caps !text-brand font-bold tracking-[0.3em]">The Future of Autonomy</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-ink">
            Architecting <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand/60">Autonomous AI</span> <br />
            for Enterprise.
          </h1>

          <p className="text-xl text-ink/50 max-w-xl mb-12 leading-relaxed font-medium">
            Strategic AI Technologist specialized in bridging the gap between legacy enterprise workflows and adaptive, multi-agent intelligence.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-ink text-paper rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand transition-all shadow-xl shadow-ink/10"
            >
              Explore Portfolio
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ backgroundColor: "var(--color-ink)", color: "var(--color-paper)" }}
              className="px-10 py-5 bg-transparent border-2 border-ink text-ink rounded-2xl font-bold uppercase tracking-widest text-xs transition-all"
            >
              Our Philosophy
            </motion.a>
          </div>
        </motion.div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative"
          >
            <div className="modern-card p-1 aspect-square bg-white border-[1px] border-line shadow-2xl shadow-ink/5 overflow-hidden group">
              <div className="absolute inset-0 bg-dot-pattern opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="absolute inset-0 bg-radial-gradient(circle at center, var(--color-brand-10), transparent)" />
              
              <div className="h-full flex flex-col items-center justify-center relative z-10">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-12"
                >
                  <div className="w-64 h-64 rounded-full border border-brand/10 p-8 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-brand/5 animate-ping duration-[3s]" />
                    <div className="w-48 h-48 rounded-full bg-ink flex items-center justify-center shadow-2xl shadow-brand/20 relative z-10 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent pointer-events-none" />
                      <Bot size={80} className="text-brand" />
                    </div>
                  </div>
                </motion.div>
                
                <div className="text-center px-12">
                  <div className="text-sm font-bold uppercase tracking-[0.4em] text-ink/30 mb-4">System Visualization</div>
                  <div className="text-3xl font-bold text-ink mb-2 tracking-tight">Agentic Mesh</div>
                  <div className="text-[10px] font-mono text-brand font-bold tracking-widest uppercase py-1 px-3 bg-brand/5 rounded-full inline-block">Status: Multi-Chain Active</div>
                </div>
              </div>

              {/* Data Accents */}
              <div className="absolute top-12 left-12">
                <div className="label-caps !text-ink/20 mb-1">Process Rate</div>
                <div className="text-ink font-mono text-xs">1,240 ops/s</div>
              </div>
              <div className="absolute bottom-12 right-12 text-right">
                <div className="label-caps !text-ink/20 mb-1">Integrity</div>
                <div className="text-brand font-mono text-xs">99.99%</div>
              </div>
            </div>
          </motion.div>

          {/* Architectural Framing */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-r border-t border-line" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-line" />
        </div>
      </div>
    </section>
  );
}

function Workflow({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}
