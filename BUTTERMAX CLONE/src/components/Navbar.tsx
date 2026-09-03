"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenContact: () => void;
  projectCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, projectCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-dark-950/80 backdrop-blur-xl border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 text-white font-extrabold text-xl tracking-tight"
          >
            <div className="w-8 h-8 rounded-lg bg-butter flex items-center justify-center text-black font-black text-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-[0_0_15px_rgba(255,230,0,0.4)]">
              B
            </div>
            <span className="group-hover:text-butter transition-colors duration-300">
              BUTTERMAX<span className="text-butter">.</span>
            </span>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-2 rounded-full border border-white/10">
            <button
              onClick={() => scrollTo("projects")}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span>Work</span>
              <span className="px-1.5 py-0.5 rounded-full bg-butter/20 text-butter text-[10px] font-bold">
                {projectCount}
              </span>
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              Studio
            </button>
            <button
              onClick={() => scrollTo("capabilities")}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              Capabilities
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Audio Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2.5 rounded-full glass-pill hover:text-butter transition-colors text-white/60"
              title={isMuted ? "Unmute Sound" : "Mute Sound"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-butter animate-pulse" />}
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={onOpenContact}
              className="btn-butter px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenContact}
              className="btn-butter px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
            >
              Talk
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] z-30 bg-dark-950/95 backdrop-blur-2xl px-6 py-8 flex flex-col gap-6 md:hidden border-t border-white/10"
          >
            <div className="flex flex-col gap-4 text-2xl font-bold">
              <button
                onClick={() => scrollTo("projects")}
                className="text-left py-2 text-white/80 hover:text-butter flex items-center justify-between border-b border-white/5"
              >
                <span>Selected Works</span>
                <span className="text-sm px-2 py-0.5 rounded-full bg-butter/20 text-butter">
                  {projectCount}
                </span>
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-left py-2 text-white/80 hover:text-butter border-b border-white/5"
              >
                Who We Are
              </button>
              <button
                onClick={() => scrollTo("capabilities")}
                className="text-left py-2 text-white/80 hover:text-butter border-b border-white/5"
              >
                Capabilities & Tech
              </button>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn-butter w-full py-4 rounded-2xl text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-white/40">
                Crafted with buttery smooth precision
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
