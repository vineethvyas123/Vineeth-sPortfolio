/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Brain, Network, Workflow, Terminal, Sparkles } from "lucide-react";
import { TECH_STACK } from "../constants";

// Map each category to a specific Lucide Icon
const CATEGORY_ICONS: Record<string, any> = {
  "AI & LLM": Brain,
  "AI Vibe Coding": Sparkles,
  "BPM Platforms": Network,
  "Orchestration": Workflow,
  "Backend": Terminal,
};

// Map each skill to an authentic proficiency score of 1 to 3 dots
const SKILL_PROFICIENCY: Record<string, number> = {
  // AI & LLM
  "LangChain": 3,
  "CrewAI": 3,
  "Lyzr": 2,
  "RAG": 3,
  "Vector DBs": 3,
  "OpenAI": 3,
  "Gemini": 3,
  "Claude": 3,
  
  // AI Vibe Coding
  "Cursor": 3,
  "Claude Code": 3,
  "Open Code": 3,
  "Antigravity": 3,
  
  // BPM Platforms
  "PEGA (CSSA)": 3,
  "Appian": 3,
  "Camunda": 3,
  "Bonita BPM": 3,
  "Fico Blaze": 2,
  
  // Orchestration
  "N8N": 3,
  "Make": 3,
  "Talend ETL": 2,
  "CrewAI Router": 3,
  "Flows Engine": 3,
  
  // Backend
  "Java": 3,
  "Spring Boot": 3,
  "MVC": 2,
  "Hibernate": 3,
  "Node.js": 2,
  "Python": 3,
};

export default function TechStack() {
  return (
    <motion.section 
      id="stack" 
      className="bg-[#F7F7F5] border-t border-b border-line/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-container !pt-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-caps mb-2"
          >
            Toolkit
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0E0B3D]">Technical Arsenal</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(TECH_STACK).map(([category, skills], index) => {
            const IconComponent = CATEGORY_ICONS[category] || Brain;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="modern-card p-6 bg-white hover:border-brand/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-paper border border-[#2563EB]/10 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconComponent size={18} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#0E0B3D]">{category}</h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  {skills.map((skill) => {
                    const level = SKILL_PROFICIENCY[skill] || 2;
                    return (
                      <div 
                        key={skill}
                        className="flex items-center justify-between px-3.5 py-2.5 bg-paper/30 rounded-xl border border-line/5 hover:border-[#2563EB]/25 hover:bg-white transition-all duration-300"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-ink/70">{skill}</span>
                        <div className="flex items-center space-x-1 shrink-0">
                          {[1, 2, 3].map((dot) => (
                            <div
                              key={dot}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                dot <= level ? "bg-[#2563EB]" : "bg-line/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
