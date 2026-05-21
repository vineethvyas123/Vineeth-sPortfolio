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
      className="bg-[#F7F7F5] border-t border-b border-line/10 pt-4 pb-12 md:pt-6 md:pb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-container !pt-0">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-caps mb-2 fade-in"
          >
            Thought Leadership
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#0E0B3D] fade-in"
          >
            Published <span className="text-ink/30 italic">Writing</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink/60 mt-4 text-base sm:text-lg md:text-xl font-medium max-w-3xl leading-relaxed fade-in"
          >
            Technical articles from the field — practical guides built from real enterprise delivery experience on BPM platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: isDelay ? 0.1 : 0 
                }}
                className={`group block p-6 md:p-8 modern-card bg-white border border-line/10 hover:border-brand/35 transition-all duration-300 shadow-sm ${
                  isDelay ? "fade-in fade-in-delay-1" : "fade-in"
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="font-mono uppercase text-[10px] sm:text-xs tracking-wider text-ink/40 mb-3 block">
                      {article.platform}
                    </span>
                    <h3 className="text-[15px] font-medium text-indigo-600 leading-relaxed mb-4 block group-hover:text-indigo-800 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <div className="text-ink/45 flex items-center gap-1 group-hover:text-brand transition-colors font-bold uppercase tracking-wider text-[10px] mt-4">
                    <span>Read article</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
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
