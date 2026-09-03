"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Award, Globe, Zap } from "lucide-react";
import { BUTTERMAX_HERO } from "@/data/buttermaxData";

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-noise">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-butter/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 md:pt-16">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-xs font-semibold text-butter mb-8 border border-butter/30 shadow-[0_0_20px_rgba(255,230,0,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-butter animate-spin" style={{ animationDuration: '6s' }} />
          <span>AWARD-WINNING DIGITAL EXPERIENCES & WEBGL</span>
        </motion.div>

        {/* Main Giant Kinetic Headline */}
        <div className="space-y-1 md:space-y-3">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white leading-[0.9]"
            >
              The Gold
            </motion.h1>
          </div>

          <div className="overflow-hidden flex flex-wrap items-baseline gap-4 md:gap-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-butter leading-[0.9]"
            >
              Standard
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:inline-block text-xs uppercase font-mono tracking-widest text-white/50 border border-white/10 px-3 py-1.5 rounded-full"
            >
              [ 2024 SHOWCASE ]
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white leading-[0.9]"
            >
              In Buttery Smooth
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white/40 leading-[0.9] text-outline"
            >
              Production
            </motion.h1>
          </div>
        </div>

        {/* Subtitle & Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-6">
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
              {BUTTERMAX_HERO.tagline} We partner with pioneering brands to produce digital flagships, 3D interactive canvases, and hyper-responsive interfaces.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4">
            <button
              onClick={onExplore}
              className="btn-butter px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3 group"
              data-cursor="SCROLL"
            >
              <span>{BUTTERMAX_HERO.ctaText}</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </button>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {BUTTERMAX_HERO.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-butter/30 transition-colors group"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-butter transition-colors">
                {stat.value}
              </div>
              <div className="text-xs uppercase font-medium text-white/50 mt-1 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Banner */}
      <div className="mt-20 py-4 bg-dark-900 border-y border-white/5 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee gap-8 items-center text-xs font-mono uppercase tracking-widest text-white/40">
          <span>WEBGL & THREE.JS</span>
          <span className="text-butter">•</span>
          <span>AWARDS: 32X AWWWARDS</span>
          <span className="text-butter">•</span>
          <span>HIGH PERFORMANCE NEXT.JS</span>
          <span className="text-butter">•</span>
          <span>DYNAMIC 3D MODELING</span>
          <span className="text-butter">•</span>
          <span>CREATIVE DIRECTION</span>
          <span className="text-butter">•</span>
          <span>INTERACTIVE SHADERS</span>
          <span className="text-butter">•</span>
          <span>SPOTIFY 2023 WRAPPED</span>
          <span className="text-butter">•</span>
          <span>PATREON REDESIGN</span>
          <span className="text-butter">•</span>
        </div>
      </div>
    </section>
  );
};
