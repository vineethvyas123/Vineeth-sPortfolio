/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Bot, Cpu, Sparkles, Mail, ShieldCheck, Zap, Server } from "lucide-react";
import { PROFILE } from "../constants";

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const pipelineSteps = [
    {
      title: "Email Intake",
      desc: "Inbound customer request is fetched, parsed, and scrubbed.",
      icon: Mail,
      subtext: "Extracting invoice context...",
    },
    {
      title: "AI Orchestrator",
      desc: "CrewAI router classifies intent and spins up dedicated agents.",
      icon: Cpu,
      subtext: "Routing tasks with LangChain...",
    },
    {
      title: "Validator Agent",
      desc: "Validates extraction accuracy and runs system integrity checks.",
      icon: ShieldCheck,
      subtext: "99.9% accuracy matching...",
    },
    {
      title: "Decision Engine",
      desc: "Triggers API calls to sync databases with Camunda, Appian & PEGA.",
      icon: Zap,
      subtext: "Action Committed. System Synced",
    },
  ];

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-28 pb-20 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:col-span-7 min-w-0"
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[54px] font-bold leading-[1.15] tracking-tight mb-8 text-[#0E0B3D]">
            <span className="block lg:whitespace-nowrap break-words">12 years of Enterprise BPM.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-brand/70 font-extrabold pb-2 block mt-2 sm:mt-0 sm:inline line-clamp-none whitespace-normal">
              Now building the AI systems that replace it.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-ink/50 max-w-xl mb-12 leading-relaxed font-medium">
            Strategic Enterprise AI Architect &amp; BPM (PEGA, Appian, Camunda, Bonitasoft) Automation Specialist specialized in bridging the gap between legacy workflows and autonomous multi-agent systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-4 sm:px-10 sm:py-5 bg-ink text-paper rounded-2xl font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-brand transition-all shadow-xl shadow-ink/10 text-center"
            >
              Explore Portfolio
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ backgroundColor: "var(--color-brand)", color: "var(--color-paper)", borderColor: "var(--color-brand)" }}
              className="px-6 py-4 sm:px-10 sm:py-5 bg-transparent border-2 border-ink text-ink rounded-2xl font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-colors text-center"
            >
              Our Philosophy
            </motion.a>
          </div>

          {/* Metrics Strip */}
          <div className="pt-8 border-t border-line/30 grid grid-cols-3 gap-2 sm:gap-6 md:gap-8">
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2563EB] font-mono leading-none">45%</div>
              <div className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase text-ink/40 tracking-wider mt-2 group-hover:text-ink transition-colors">overhead reduced</div>
            </div>
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2563EB] font-mono leading-none">60%</div>
              <div className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase text-ink/40 tracking-wider mt-2 group-hover:text-ink transition-colors">faster approvals</div>
            </div>
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2563EB] font-mono leading-none">80%</div>
              <div className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase text-ink/40 tracking-wider mt-2 group-hover:text-ink transition-colors">inquiry automation</div>
            </div>
          </div>
        </motion.div>

        <div className="w-full lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full relative"
          >
            {/* Main Obsidian Pipeline Card Container */}
            <div className="relative flex flex-col gap-6 w-full p-6 md:p-8 bg-[#0B0A1B] rounded-[32px] border border-white/5 shadow-2xl shadow-ink/20 overflow-hidden">
              {/* Background Ambient Node Glows */}
              <div className="absolute top-0 right-1/4 w-36 h-36 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 w-36 h-36 bg-brand/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[9px] font-mono text-white/40 tracking-widest uppercase">Agent Pipeline Monitor</div>
              </div>

              {/* Pulsing Vertical Edge Path (Connecting Timeline Line) */}
              <div className="absolute left-[47px] md:left-[55px] top-[140px] bottom-[110px] w-0.5 bg-white/5">
                {/* Active scrolling stroke path animation */}
                <motion.div
                  className="absolute w-full bg-gradient-to-b from-[#2563EB] to-[#0052FF]"
                  initial={{ height: 0, top: 0 }}
                  animate={{
                    height: ["0%", "100%", "0%"],
                    top: ["0%", "0%", "100%"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ filter: "drop-shadow(0 0 4px #2563EB)" }}
                />
              </div>

              {/* Steps Layout */}
              <div className="flex flex-col gap-4 relative z-10">
                {pipelineSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={step.title}
                      className={`flex items-start gap-4 md:gap-5 p-3.5 rounded-2xl border transition-all duration-500 ${
                        isActive
                          ? "bg-white/[0.04] border-white/10 shadow-lg shadow-black/40 scale-[1.02]"
                          : "border-transparent opacity-40 hover:opacity-60"
                      }`}
                    >
                      {/* Left icon bubble indicator */}
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? "bg-[#2563EB] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                            : "bg-white/5 text-white/50"
                        }`}
                      >
                        <Icon size={18} className={isActive ? "animate-pulse" : ""} />
                      </div>

                      {/* Info label */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`text-sm font-semibold tracking-tight transition-colors ${
                              isActive ? "text-white" : "text-white/60"
                            }`}
                          >
                            {step.title}
                          </h3>
                          {isActive && (
                            <span className="flex h-2 w-2 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-white/40 leading-relaxed font-medium mt-1 truncate">
                          {step.desc}
                        </p>
                        
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[10px] text-[#2563EB] font-mono mt-1.5 font-bold"
                          >
                            Status: {step.subtext}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Data and throughput indicators */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono text-white/30">
                <div className="flex items-center gap-1.5">
                  <Server size={10} />
                  <span>Pipeline Latency: <strong className="text-white/50 font-bold">142ms</strong></span>
                </div>
                <span>Status: <strong className="text-emerald-400 font-bold">RUNNING</strong></span>
              </div>
            </div>

            {/* Architectural Frame Corners */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-r border-t border-line pointer-events-none hidden md:block" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-line pointer-events-none hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
