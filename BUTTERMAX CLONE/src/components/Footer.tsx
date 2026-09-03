"use client";

import React from "react";
import { ArrowUpRight, Heart, Sparkles, Mail, Send } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-24 pb-12 px-6 md:px-12 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Giant Callout Box */}
        <div className="glass-panel p-10 md:p-16 rounded-3xl border border-white/10 hover:border-butter/30 transition-colors relative overflow-hidden mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-butter/10 text-butter text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Project</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none max-w-4xl">
            Have An Idea? <br />
            <span className="text-butter">Let's Melt Together.</span>
          </h2>

          <p className="mt-6 text-white/70 text-lg max-w-xl font-light">
            We are currently accepting new client partnerships for Q3/Q4. Let's make your brand unforgettable.
          </p>

          <button
            onClick={onOpenContact}
            className="btn-butter mt-8 px-10 py-5 rounded-full text-sm font-extrabold uppercase tracking-wider flex items-center gap-3 group"
          >
            <span>Start Your Experience</span>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/10 text-sm">
          <div>
            <div className="font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-butter text-black font-black text-xs flex items-center justify-center">
                B
              </span>
              <span>BUTTERMAX</span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Award-winning digital studio engineering experiential websites, WebGL flagships, and buttery smooth products.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono text-butter tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-white/60 text-xs font-medium">
              <li><a href="#projects" className="hover:text-butter transition-colors">Spotify 2023 Wrapped</a></li>
              <li><a href="#projects" className="hover:text-butter transition-colors">Patreon Redesign</a></li>
              <li><a href="#projects" className="hover:text-butter transition-colors">GDK WebGL</a></li>
              <li><a href="#projects" className="hover:text-butter transition-colors">Chrome F1 Minigame</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono text-butter tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-white/60 text-xs font-medium">
              <li><a href="https://twitter.com/buttermax" target="_blank" rel="noreferrer" className="hover:text-butter transition-colors flex items-center gap-1">Twitter / X <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://instagram.com/buttermax" target="_blank" rel="noreferrer" className="hover:text-butter transition-colors flex items-center gap-1">Instagram <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://linkedin.com/company/buttermax" target="_blank" rel="noreferrer" className="hover:text-butter transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://awwwards.com" target="_blank" rel="noreferrer" className="hover:text-butter transition-colors flex items-center gap-1">Awwwards Profile <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono text-butter tracking-wider mb-4">
              Inquiries
            </h4>
            <a
              href="mailto:hello@buttermax.net"
              className="text-white/80 hover:text-butter transition-colors text-sm font-semibold flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-butter" />
              <span>hello@buttermax.net</span>
            </a>
            <div className="mt-4 text-xs text-white/40 font-mono">
              Los Angeles • London • Global
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <div>
            © {new Date().getFullYear()} BUTTERMAX STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span>CLONED DETERMINISTICALLY WITH DITTO ENGINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
