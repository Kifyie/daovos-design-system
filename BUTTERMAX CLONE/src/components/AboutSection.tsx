"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Palette, Cpu, ArrowRight } from "lucide-react";
import { BUTTERMAX_STUDIO } from "@/data/buttermaxData";

export const AboutSection: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-dark-900 border-t border-white/5 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-butter/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-butter/10 border border-butter/30 text-butter text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Philosophy</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Who <span className="text-butter">We Are</span>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 leading-tight">
              "{BUTTERMAX_STUDIO.heading}"
            </p>
            <p className="mt-6 text-lg text-white/60 font-light leading-relaxed">
              {BUTTERMAX_STUDIO.description}
            </p>
          </div>
        </div>

        {/* Services / Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUTTERMAX_STUDIO.services.map((srv, idx) => {
            const icons = [
              <Palette className="w-6 h-6 text-butter" key="1" />,
              <Code2 className="w-6 h-6 text-butter" key="2" />,
              <Cpu className="w-6 h-6 text-butter" key="3" />,
            ];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-butter/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-butter/20 transition-colors">
                    {icons[idx]}
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-butter transition-colors">
                    {srv.category}
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {srv.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-white/60 font-mono flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-butter" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
                  <span>SPECIALIZATION 0{idx + 1}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-butter" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
