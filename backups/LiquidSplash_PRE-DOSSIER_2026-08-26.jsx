import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * DAOVOS Liquid Splash — GSAP-driven liquid transition
 *
 * A canvas band overlapping the hero's bottom edge. ScrollTrigger scrub
 * drives the liquid level (0 = below view → 1 = settled header band) with
 * scrub-lag for the splash feel; gsap.ticker renders the wave field.
 * Below the section's top edge a safety fill keeps the backdrop layers
 * from leaking into the hero while the surface travels.
 */
export const LiquidSplash = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const levelRef = useRef({ value: 0.02 });

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const wrap = wrapRef.current;
      if (!canvas || !wrap) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const level = levelRef.current;

      let width = 0;
      let height = 0;
      let dpr = 1;

      const resize = () => {
        const rect = wrap.getBoundingClientRect();
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = Math.max(1, Math.round(rect.width));
        height = Math.max(1, Math.round(rect.height));
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
      };

      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(wrap);

      // Only render while near the viewport
      let running = true;
      const io = new IntersectionObserver(
        (entries) => {
          running = entries[0]?.isIntersecting ?? true;
        },
        { rootMargin: '20% 0px 20% 0px' }
      );
      io.observe(wrap);

      // Wave field: 3 superposed sine components per layer
      const surfaceAt = (x, t, lv, seed) => {
        const nx = x / width;
        const base = height - lv * height;
        const a1 = Math.sin(nx * 7.3 + t * 1.15 + seed) * 14;
        const a2 = Math.sin(nx * 13.1 - t * 0.85 + seed * 2.7) * 8;
        const a3 = Math.sin(nx * 23.7 + t * 1.9 + seed * 4.1) * 3.5;
        return base + a1 + a2 + a3;
      };

      const drawLayer = (t, lv, seed, fill, crest, crestAlpha) => {
        ctx.beginPath();
        ctx.moveTo(-4, height + 4);
        const step = 6;
        for (let x = -4; x <= width + 4; x += step) {
          ctx.lineTo(x, surfaceAt(x, t, lv, seed));
        }
        ctx.lineTo(width + 4, height + 4);
        ctx.closePath();
        ctx.fillStyle = fill;
        ctx.fill();

        if (crestAlpha > 0) {
          ctx.beginPath();
          for (let x = -4; x <= width + 4; x += step) {
            const y = surfaceAt(x, t, lv, seed);
            if (x === -4) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = crest;
          ctx.globalAlpha = crestAlpha;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      };

      const render = (time) => {
        if (!running) return;
        const t = time;

        // Safety fill: solid below the section's top edge (leak guard)
        const rect = wrap.getBoundingClientRect();
        const bodyRect = wrap.nextElementSibling?.getBoundingClientRect();
        const bodyTopY = bodyRect ? bodyRect.top - rect.top : height;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, width, height);
        if (bodyTopY < height) {
          ctx.fillStyle = '#0a0a0c';
          ctx.fillRect(0, Math.max(0, bodyTopY), width, height - Math.max(0, bodyTopY));
        }

        const lv = level.value;
        drawLayer(t * 0.8, Math.max(0, lv - 0.035), 2.4, 'rgba(16, 16, 20, 0.45)', 'rgba(237, 230, 223, 0.18)', 0.5);
        drawLayer(t * 1.1, Math.max(0, lv - 0.015), 5.1, 'rgba(12, 12, 16, 0.72)', 'rgba(237, 230, 223, 0.32)', 0.7);
        drawLayer(t, lv, 0, '#0a0a0c', '#ede6df', 0.85);
      };

      if (reduced) {
        // Static settled band, no scrub
        level.value = 0.55;
        gsap.ticker.add(render);
        return () => {
          gsap.ticker.remove(render);
          ro.disconnect();
          io.disconnect();
        };
      }

      // ScrollTrigger scrub drives the liquid level with splash-lag
      gsap.fromTo(
        level,
        { value: 0.02 },
        {
          value: 0.55,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: wrap.parentElement,
            start: 'top bottom',
            end: 'top top',
            scrub: 0.5
          }
        }
      );

      gsap.ticker.add(render);
      return () => {
        gsap.ticker.remove(render);
        ro.disconnect();
        io.disconnect();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === wrap.parentElement) trigger.kill();
        });
      };
    },
    { scope: wrapRef }
  );

  return (
    <div ref={wrapRef} className={`liquid-splash ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default LiquidSplash;
