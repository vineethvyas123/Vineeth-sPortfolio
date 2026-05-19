/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Workflow, Bot, Zap, ChevronRight } from "lucide-react";
import { PILLARS } from "../constants";

type IconType = "Workflow" | "Bot" | "Zap";

const icons: Record<IconType, any> = {
  Workflow: Workflow,
  Bot: Bot,
  Zap: Zap,
};

export default function Expertise() {
  return (
    <section id="expertise" className="bg-white">
      <div className="section-container !pt-4">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-caps mb-4"
          >
            Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Expertise Pillars</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = icons[pillar.icon as IconType];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="modern-card p-10 group cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="mb-8 p-5 rounded-2xl bg-paper border border-line w-fit group-hover:bg-brand group-hover:text-paper transition-all duration-500 shadow-sm group-hover:shadow-brand/20"
                >
                  <Icon size={36} />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-ink/60 mb-10 leading-relaxed font-medium">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {pillar.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 82, 255, 0.05)", borderColor: "var(--color-brand)" }}
                      className="px-3 py-1 bg-paper rounded-lg text-[10px] font-bold uppercase tracking-wider text-ink/60 border border-line transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand group-hover:translate-x-2 transition-transform">
                  <span>Explore specialization</span>
                  <ChevronRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
