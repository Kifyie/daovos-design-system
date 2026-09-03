"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, CheckCircle2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$25k - $50k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl bg-dark-950 border border-white/15 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-butter/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-butter hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-butter mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold uppercase text-white">Inquiry Received</h3>
              <p className="text-white/60 mt-2 text-sm">
                We'll get back to you with a buttery smooth proposal within 24 hours.
              </p>
            </div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-butter/10 text-butter text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>New Project Inquiry</span>
              </div>
              <h2 className="text-3xl font-extrabold uppercase text-white tracking-tight">
                Let's Talk <span className="text-butter">Production</span>
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="block text-xs uppercase font-mono text-white/50 mb-1.5">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-butter"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-white/50 mb-1.5">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-butter"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-white/50 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm focus:outline-none focus:border-butter"
                  >
                    <option value="$15k - $25k">$15k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-white/50 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your brand, timeline, and vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-butter"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-butter w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
