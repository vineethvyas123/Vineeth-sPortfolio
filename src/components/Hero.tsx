/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Mail, Cpu, ShieldCheck, Zap, Server } from "lucide-react";
import { PROFILE } from "../constants";

// Native Count-up element
function StatCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-white/[0.01] border border-white/5 border-l-2 border-l-[#fbbf24] p-4 rounded-xl flex flex-col justify-center min-h-[100px] shadow-md backdrop-blur-md">
      <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#fbbf24] leading-none mb-1.5">
        {count}%
      </div>
      <div className="font-mono text-[9px] sm:text-[10px] text-slate-400 tracking-widest uppercase font-medium leading-tight">
        {label}
      </div>
    </div>
  );
}

// Typewriter status text
function TypewriterText({ text, active }: { text: string; active: boolean }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let idx = 0;
    const timer = setInterval(() => {
      if (idx < text.length) {
        setDisplayed((prev) => prev + text.charAt(idx));
        idx++;
      } else {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, [text, active]);

  return (
    <span className="text-[10px] text-[#3b82f6] font-mono font-bold mt-1.5 block min-h-[15px]">
      Status: {displayed}
    </span>
  );
}

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3200);
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
    <section 
      id="hero" 
      className="hero-section relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-[#030307]"
    >
      {/* Background Radial Glow Blobs */}
      <div className="absolute top-1/4 left-1/12 w-[450px] h-[450px] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Texts & Hero Presentation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:col-span-7 min-w-0 flex flex-col justify-center"
        >
          {/* Section label (200ms) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-label mb-6"
          >
            The Future of Autonomy
          </motion.div>

          {/* H1 lines stagger (350ms, 500ms) */}
          <div className="mb-6 overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.05] tracking-tight text-white mb-2"
            >
              12 years of Enterprise BPM.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-shimmer font-display text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.05] tracking-tight font-bold"
            >
              Now building the AI systems that replace it.
            </motion.div>
          </div>

          {/* Body Text (650ms) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-slate-400 text-base sm:text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-normal"
          >
            Strategic Enterprise AI Architect &amp; BPM (PEGA, Appian, Camunda, Bonitasoft) Automation Specialist specialized in bridging the gap between legacy workflows and autonomous multi-agent systems.
          </motion.p>

          {/* CTAs (650ms) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#3b82f6] text-white rounded-xl font-display font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 text-center"
            >
              <span>EXPLORE PORTFOLIO</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.02, borderColor: "#3b82f6", backgroundColor: "rgba(59,130,246,0.06)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/15 text-white bg-white/[0.01] rounded-xl font-display font-semibold text-xs uppercase tracking-[0.14em] transition-all duration-300 text-center"
            >
              OUR PHILOSOPHY
            </motion.a>
          </motion.div>

          {/* STATS ROW (800ms) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 border-t border-white/5 pt-8"
          >
            <StatCounter target={45} label="Overhead Reduced" />
            <StatCounter target={60} label="Faster Approvals" />
            <StatCounter target={80} label="Inquiry Automation" />
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Pipeline Monitor panel (900ms) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:col-span-5 relative"
        >
          {/* Main Obsidian Pipeline Card Container with subtle breathing glow */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 1px rgba(255, 255, 255, 0.05), 0 32px 80px rgba(0,0,0,0.7)",
                "0 0 0 1px rgba(59, 130, 246, 0.15), 0 32px 80px rgba(0,0,0,0.7)",
                "0 0 0 1px rgba(255, 255, 255, 0.05), 0 32px 80px rgba(0,0,0,0.7)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col gap-5 w-full p-6 bg-[#08080f] rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                Agent Pipeline Monitor
              </div>
            </div>

            {/* Steps Timeline Connector */}
            <div className="absolute left-[39px] top-[103px] bottom-[85px] w-px bg-white/5">
              {/* Pulsing visual connection path animate */}
              <motion.div
                className="absolute w-full bg-gradient-to-b from-[#3b82f6] to-[#60a5fa] h-12"
                initial={{ top: "-10%" }}
                animate={{ top: ["-10%", "110%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ filter: "drop-shadow(0 0 4px #3b82f6)" }}
              />
            </div>

            {/* steps container */}
            <div className="flex flex-col gap-3 relative z-10">
              {pipelineSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.title}
                    className={`flex items-start gap-4 p-3 rounded-xl border transition-all duration-500 ${
                      isActive
                        ? "bg-white/[0.02] border-white/10 shadow-lg scale-[1.01]"
                        : "border-transparent opacity-35 hover:opacity-50"
                    }`}
                  >
                    {/* Circle icon marker */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-[#3b82f6] text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                          : "bg-white/5 text-white/50"
                      }`}
                    >
                      <Icon size={16} />
                    </div>

                    {/* Step details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className={`text-xs font-display font-semibold tracking-tight transition-colors ${
                            isActive ? "text-white" : "text-white/60"
                          }`}
                        >
                          {step.title}
                        </h4>
                        {isActive && (
                          <span className="flex h-1.5 w-1.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3b82f6]"></span>
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-white/40 leading-relaxed font-sans mt-0.5 truncate">
                        {step.desc}
                      </p>
                      
                      <TypewriterText text={step.subtext} active={isActive} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Data latency & Status bar */}
            <div className="flex items-center justify-between border-t border-white/5 pt-3.5 text-[9px] font-mono text-white/30">
              <div className="flex items-center gap-1.5">
                <Server size={10} className="text-slate-400" />
                <span>Pipeline Latency: <strong className="text-white/50">142ms</strong></span>
              </div>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <span>Status: <strong className="text-emerald-400">RUNNING</strong></span>
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
