/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, BookOpen, ArrowUpRight } from "lucide-react";
import { CERTIFICATIONS, BLOGS } from "../constants";

export default function BlogsAndCertifications() {
  return (
    <section className="bg-paper/50">
      <div className="section-container !pt-4 grid md:grid-cols-2 gap-16">
        {/* Certifications */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 rounded-xl bg-ink text-paper shadow-lg shadow-ink/5">
              <Award size={28} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          </div>
          
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5, backgroundColor: "var(--color-paper)" }}
                className="flex items-center space-x-5 p-5 modern-card bg-white transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                <span className="text-ink font-semibold tracking-tight">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blogs / Thought Leadership */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 rounded-xl bg-ink text-paper shadow-lg shadow-ink/5">
              <BookOpen size={28} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Thought Leadership</h2>
          </div>
          
          <div className="space-y-4">
            {BLOGS.map((blog, i) => (
              <motion.a
                key={i}
                href={blog.link}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group block p-8 modern-card bg-white hover:border-brand/40 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-6">
                    <span className="label-caps mb-3 block">{blog.date}</span>
                    <h3 className="text-xl font-bold text-ink group-hover:text-brand transition-colors leading-snug tracking-tight">
                      {blog.title}
                    </h3>
                  </div>
                  <ArrowUpRight size={20} className="text-ink/20 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </motion.a>
            ))}
            
            <div className="p-8 border-2 border-dashed border-line rounded-2xl text-center bg-paper/30">
              <p className="text-ink/40 text-sm font-medium">
                More articles on Agentic AI and Enterprise Transformation being drafted...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
