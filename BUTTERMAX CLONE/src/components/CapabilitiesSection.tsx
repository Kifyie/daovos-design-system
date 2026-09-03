"use client";

import React from "react";
import { BUTTERMAX_STUDIO } from "@/data/buttermaxData";
import { Zap, CheckCircle, Flame, Layers } from "lucide-react";

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 md:p-14 border border-white/10 relative overflow-hidden bg-noise">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-butter/10 border border-butter/30 text-butter text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Full Suite Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
              Production <span className="text-butter">Capabilities</span>
            </h2>
            <p className="mt-4 text-white/70 text-base leading-relaxed font-light">
              From creative concept to GPU-accelerated WebGL codebases, we engineer every single detail with buttery precision.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {BUTTERMAX_STUDIO.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/90 flex items-center gap-2 hover:border-butter/40 hover:bg-butter/10 transition-colors"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-butter" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Tech Badge Canvas Mock */}
          <div className="lg:col-span-6 bg-dark-950 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-white/40">buttermax_engine.glsl</span>
            </div>

            <div className="font-mono text-xs text-white/80 space-y-2 leading-relaxed">
              <p className="text-butter">// Buttermax Realtime Pipeline</p>
              <p><span className="text-pink-400">precision</span> highp float;</p>
              <p><span className="text-blue-400">uniform</span> float u_time;</p>
              <p><span className="text-blue-400">uniform</span> vec2 u_resolution;</p>
              <p className="text-white/40">// Smooth fluid deformation</p>
              <p><span className="text-yellow-300">vec4</span> renderButter(<span className="text-purple-300">vec2</span> uv) &#123;</p>
              <p className="pl-4">float melt = sin(uv.x * 10.0 + u_time) * 0.5 + 0.5;</p>
              <p className="pl-4">return vec4(1.0, 0.9, 0.0, melt);</p>
              <p>&#125;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
