/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const ARTICLES = [
  {
    title: "Configuring SQL Server with Bonita BPM Using JTDS",
    link: "https://www.evoketechnologies.com/blog/business-process-management/configuring-sql-server-bonita-bpm-jtds/",
    platform: "Evoke Technologies · BPM"
  },
  {
    title: "Building Custom Widgets with BonitaSoft UI Designer",
    link: "https://www.evoketechnologies.com/blog/tutorial/custom-widgets-bonita-bpm-ui-designer/",
    platform: "Evoke Technologies · BPM"
  },
  {
    title: "Bonita BPM Health Monitoring",
    link: "https://www.evoketechnologies.com/blog/bonita-bpm/bonita-bpm-health-monitoring/",
    platform: "Evoke Technologies · BPM"
  },
  {
    title: "How to Set Up Email to Case Integration in Bonita",
    link: "https://www.evoketechnologies.com/blog/business-blogs/how-to-set-up-email-to-case-integration-in-bonita/",
    platform: "Evoke Technologies · BPM"
  }
];

export default function Writing() {
  return (
    <motion.section
      id="writing"
      className="bg-[#030307] border-b border-white/5 py-12 md:py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            Thought Leadership
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Published <span className="font-sans italic text-slate-400 font-normal">Writing</span>
          </h2>

          <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed mt-4">
            Technical articles from the field — practical guides built from real enterprise delivery experience on BPM platforms.
          </p>
        </div>

        {/* 2-Column Grid of published items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {ARTICLES.map((article, index) => {
            const isDelay = index === 1 || index === 3;
            return (
              <motion.a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, borderColor: "#3b82f6", scale: 1.01, boxShadow: "0 0 24px rgba(59, 130, 246, 0.15)" }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: isDelay ? 0.08 : 0 
                }}
                className="group block p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.01] transition-all duration-300"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Source label */}
                    <span className="font-mono uppercase text-[10px] sm:text-xs tracking-[0.16em] text-slate-400/60 mb-3.5 block">
                      {article.platform}
                    </span>
                    
                    {/* Article title */}
                    <h3 className="font-sans text-[15px] sm:text-[17px] font-bold text-[#3b82f6] group-hover:text-blue-400 leading-relaxed mb-4 block transition-colors duration-200">
                      {article.title}
                    </h3>
                  </div>

                  {/* READ ARTICLE Action cue */}
                  <div className="text-white/40 flex items-center gap-1.5 group-hover:text-[#3b82f6] transition-colors font-mono uppercase tracking-[0.16em] text-[10px] mt-4 font-bold">
                    <span>READ ARTICLE</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
