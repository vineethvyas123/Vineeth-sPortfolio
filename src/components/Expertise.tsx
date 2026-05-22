/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import React, { useState } from "react";
import { Workflow, Bot, Zap, ArrowRight } from "lucide-react";
import { PILLARS } from "../constants";

type IconType = "Workflow" | "Bot" | "Zap";

const icons: Record<IconType, any> = {
  Workflow: Workflow,
  Bot: Bot,
  Zap: Zap,
};

// Isolated card component for 3D Tilt effect
function ExpertiseCard({ pillar, index }: { pillar: any; index: number; key?: any }) {
  const Icon = icons[pillar.icon as IconType] || Workflow;
  
  // Individual mouse position hover tilt state
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Calculate degree rotates
    const rotateX = ((y / height) - 0.5) * -12; // range from -6 to 6
    const rotateY = ((x / width) - 0.5) * 12;   // range from -6 to 6
    
    setCoords({ rotateX, rotateY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setCoords({ rotateX: 0, rotateY: 0, isHovered: false });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "600px",
        transform: coords.isHovered 
          ? `perspective(600px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) translateY(-4px)`
          : "perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: coords.isHovered ? "none" : "transform 0.4s ease"
      }}
      className="card-glass p-8 md:p-10 bg-white/[0.01] border-white/5 cursor-default relative overflow-hidden group select-none flex flex-col justify-between"
    >
      {/* Visual background ambient node */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#3b82f6]/5 rounded-full blur-2xl group-hover:bg-[#3b82f6]/10 transition-colors" />

      <div>
        {/* Icon: dark rounded square with slightly lighter bg scaling on hover */}
        <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#3b82f6] group-hover:text-white group-hover:bg-[#3b82f6] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 mb-8 shrink-0">
          <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Title: Space Grotesk Bold */}
        <h3 className="text-xl font-display font-semibold mb-4 text-white">
          {pillar.title}
        </h3>

        {/* Description: Plus Jakarta Sans */}
        <p className="font-sans text-slate-400 text-sm md:text-[15px] leading-relaxed mb-8">
          {pillar.description}
        </p>

        {/* Tags: uppercase, cobalt text/border */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {pillar.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-2.5 py-1 bg-white/[0.02] border border-white/10 rounded-md font-mono text-[9px] font-medium tracking-wider text-slate-400 uppercase group-hover:border-[#3b82f6]/50 group-hover:text-slate-200 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Explore specialization Link */}
      <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-[#3b82f6] mt-auto">
        <span>EXPLORE SPECIALIZATION</span>
        <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <section 
      id="expertise" 
      className="bg-[#030307] py-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Capabilities
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Expertise <span className="font-sans italic text-slate-400 font-normal">Pillars</span>
          </h2>
        </div>

        {/* 3-Column Pillars list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((pillar, index) => (
            <ExpertiseCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
