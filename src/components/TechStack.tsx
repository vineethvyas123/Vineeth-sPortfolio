/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import { Brain, Sparkles, Network, Workflow, Terminal } from "lucide-react";
import { TECH_STACK } from "../constants";

const CATEGORY_ICONS: Record<string, any> = {
  "AI & LLM": Brain,
  "AI Vibe Coding": Sparkles,
  "BPM Platforms": Network,
  "Orchestration": Workflow,
  "Backend": Terminal,
};

const SKILL_PROFICIENCY: Record<string, number> = {
  "LangChain": 3,
  "CrewAI": 3,
  "Lyzr": 2,
  "RAG": 3,
  "Vector DBs": 3,
  "OpenAI": 3,
  "Gemini": 3,
  "Claude": 3,
  "Cursor": 3,
  "Claude Code": 3,
  "Open Code": 3,
  "Antigravity": 3,
  "PEGA (CSSA)": 3,
  "Appian": 3,
  "Camunda": 3,
  "Bonita BPM": 3,
  "Fico Blaze": 2,
  "N8N": 3,
  "Make": 3,
  "Talend ETL": 2,
  "CrewAI Router": 3,
  "Flows Engine": 3,
  "Java": 3,
  "Spring Boot": 3,
  "MVC": 2,
  "Hibernate": 3,
  "Node.js": 2,
  "Python": 3,
};

// Use-case context text for each skill
const SKILL_CONTEXTS: Record<string, string> = {
  "LangChain": "Chains dynamic LLM workflows",
  "CrewAI": "Coordinates multi-agent groups",
  "Lyzr": "Enterprise agent builder tools",
  "RAG": "Injects custom database contexts",
  "Vector DBs": "Stores semantic memory index",
  "OpenAI": "Drives high-reasoning tasks",
  "Gemini": "Processes multi-modal flash steps",
  "Claude": "Refined logic and coding helper",
  "Cursor": "Proactive context codebase edit",
  "Claude Code": "Agentic terminal CLI edits",
  "Open Code": "Context-aware coding engine",
  "Antigravity": "Orchestrates build structures",
  "PEGA (CSSA)": "Architects core enterprise workflows",
  "Appian": "Deploys rapid visual process lines",
  "Camunda": "Executes flexible BPMN schemas",
  "Bonita BPM": "Drives high-performance Java engines",
  "Fico Blaze": "Evaluates complex business rules",
  "N8N": "Triggers visually hooked REST pipelines",
  "Make": "Automates multi-system tasks",
  "Talend ETL": "Pipes robust batch integrations",
  "CrewAI Router": "Forwards tasks to skilled agents",
  "Flows Engine": "Enforces state lifecycle stages",
  "Java": "Powering secure backend backbones",
  "Spring Boot": "Builds robust microservices layers",
  "MVC": "Structures clean separation of views",
  "Hibernate": "Maps objects to databases safely",
  "Node.js": "Maintains fast REST gateway routes",
  "Python": "AI utilities & prompt scripts",
};

export default function TechStack() {
  // Global hover tooltip anchor state
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section 
      id="stack" 
      className="bg-[#030307] py-12 border-t border-b border-white/5 relative overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4 justify-center"
          >
            Toolkit
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Technical <span className="font-sans italic text-slate-400 font-normal">Arsenal</span>
          </h2>
        </div>

        {/* 5-Column Dark Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(TECH_STACK).map(([category, skills], categoryIdx) => {
            const IconComponent = CATEGORY_ICONS[category] || Brain;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIdx * 0.08, duration: 0.6 }}
                className="card-glass p-5 bg-[#08080f]/75 border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header with cobalt theme */}
                  <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#3b82f6]">
                      <IconComponent size={15} />
                    </div>
                    <h3 className="font-mono text-[10px] font-bold tracking-[0.14em] text-white uppercase">
                      {category}
                    </h3>
                  </div>

                  {/* Skills lists */}
                  <div className="flex flex-col gap-2 relative">
                    {skills.map((skill) => {
                      const level = SKILL_PROFICIENCY[skill] || 2;
                      const isHovered = hoveredSkill === skill;
                      return (
                        <div 
                          key={skill}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.01] border hover:border-l-2 hover:border-transparent hover:border-l-[#3b82f6] border-white/5 hover:bg-white/[0.03] transition-all duration-200 relative"
                        >
                          <span className="font-mono text-xs text-slate-400 hover:text-white transition-colors">
                            {skill}
                          </span>
                          
                          {/* Dot Proficiency Indicators with Entry animation */}
                          <div className="flex items-center space-x-1 shrink-0 pl-2">
                            {[1, 2, 3].map((dot) => (
                              <div
                                key={dot}
                                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                                  dot <= level ? "bg-[#3b82f6]" : "bg-white/10"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Float Custom Context Tooltip */}
                          {isHovered && SKILL_CONTEXTS[skill] && (
                            <motion.div
                              initial={{ opacity: 0, y: 4, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-0 right-0 -bottom-8 bg-[#05050c] border border-[#3b82f6]/30 text-slate-200 tech-tooltip font-mono text-[9px] py-1 px-2.5 rounded shadow-xl z-20 pointer-events-none text-center backdrop-blur-md"
                            >
                              {SKILL_CONTEXTS[skill]}
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
