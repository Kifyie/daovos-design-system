import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { LiquidEther } from '../hero/LiquidEther';
import { LiquidSplash } from './LiquidSplash';
import './who.css';

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, CustomEase, useGSAP);

// Brand Precision ease — cubic-bezier(0.16, 1, 0.3, 1) from the DAOVOS motion tokens
CustomEase.create('precision', '0.16,1,0.3,1');

const SLIDES = [
  { index: '01', ghost: 'STUDIO', label: 'THE STUDIO', solid: 'NOT AN AGENCY.', accent: 'A DIGITAL STUDIO.' },
  { index: '02', ghost: 'IDEA', label: 'THE PROMISE', solid: 'YOU BRING', accent: 'THE IDEA.' },
  { index: '03', ghost: 'DIGITAL', label: 'THE PROMISE', solid: 'WE TURN IT', accent: 'DIGITAL.' },
  { index: '04', ghost: 'DAOVOS', label: 'THE STANDARD', solid: 'PREMIUM.', accent: 'WITHOUT THE GATE.' }
];

const LEDGER = [
  {
    label: 'MISSION',
    text: 'Make high-quality digital experiences accessible — strong design, modern technology, a simple client experience.'
  },
  {
    label: 'VISION',
    text: 'Grow from a web agency into a recognizable digital company providing everything a modern brand needs to build, launch, and grow online.'
  },
  {
    label: 'PROMISE',
    text: 'You bring the idea. Daovos turns it into a digital experience.'
  }
];

const SERVICES = [
  'WEB DESIGN',
  'DEVELOPMENT',
  'LANDING PAGES',
  'E-COMMERCE',
  'UI/UX',
  'REDESIGNS',
  'MAINTENANCE',
  'MOBILE OPTIMIZATION'
];

/**
 * DAOVOS — WHO WE ARE (v6, "The Manifesto Pin")
 * Splash entry → pinned scroll-scrubbed statement sequence (4 slides,
 * SplitText masked chars, ghost words, progress rail) → dossier outro
 * (mission/vision/promise ledger + services ticker + stamp).
 * Single ambient fluid backdrop. Everything GSAP.
 */
export const WhoWeAreSection = () => {
  const rootRef = useRef(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('who-static');
      return;
    }

    const st = (trigger, start = 'top 82%') => ({ trigger, start, once: true });

    // ================= PINNED MANIFESTO =================
    const slides = gsap.utils.toArray('.who-slide', root);
    const ghosts = gsap.utils.toArray('.who-ghost-word', root);
    const counters = gsap.utils.toArray('.who-counter-num', root);

    gsap.set(slides, { autoAlpha: 0 });
    gsap.set(ghosts, { autoAlpha: 0 });
    gsap.set(counters, { autoAlpha: 0 });
    gsap.set(counters[0], { autoAlpha: 1 });

    // Split every slide's two lines once; chars animate per segment
    const slideSplits = slides.map((slide) =>
      SplitText.create(slide.querySelectorAll('.who-slide-line'), {
        type: 'lines,chars',
        mask: 'lines'
      })
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.who-pin',
        start: 'top top',
        end: '+=340%',
        scrub: 0.6,
        pin: true,
        anticipatePin: 1
      }
    });

    // Progress rail fills across the whole pin
    tl.fromTo('.who-rail-fill', { scaleY: 0 }, { scaleY: 1, ease: 'none', duration: 10 }, 0);

    const SEG = 2.5; // scroll units per slide
    slideSplits.forEach((split, i) => {
      const at = i * SEG;
      const isLast = i === slides.length - 1;
      const slide = slides[i];

      tl.to(ghosts[i], { autoAlpha: 0.07, duration: 0.5, ease: 'none' }, at);
      tl.to(counters[i], { autoAlpha: 1, duration: 0.3, ease: 'none' }, at);
      tl.to(slides[i], { autoAlpha: 1, duration: 0.35, ease: 'none' }, at);
      if (i > 0) {
        tl.to(counters[i - 1], { autoAlpha: 0, duration: 0.3, ease: 'none' }, at);
        tl.to(ghosts[i - 1], { autoAlpha: 0, duration: 0.5, ease: 'none' }, at);
      }

      tl.from(split.chars, {
        yPercent: 130,
        duration: 0.55,
        ease: 'precision',
        stagger: 0.018
      }, at + 0.1);
      tl.from(slide.querySelector('.who-slide-label'), {
        autoAlpha: 0,
        duration: 0.3,
        ease: 'none'
      }, at);

      if (!isLast) {
        tl.to(slides[i], { autoAlpha: 0, duration: 0.35, ease: 'none' }, at + SEG - 0.4);
        tl.to(split.chars, {
          yPercent: -130,
          duration: 0.5,
          ease: 'precision',
          stagger: 0.012
        }, at + SEG - 0.55);
        tl.to(slide.querySelector('.who-slide-label'), {
          autoAlpha: 0,
          duration: 0.3,
          ease: 'none'
        }, at + SEG - 0.5);
      }
    });

    // ================= OUTRO REVEALS =================
    gsap.from('.who-outro-head', {
      autoAlpha: 0,
      y: 24,
      duration: 0.9,
      ease: 'precision',
      scrollTrigger: st('.who-outro')
    });

    gsap.utils.toArray('.who-ledger-row').forEach((row) => {
      const label = row.querySelector('.who-ledger-label');
      const labelText = label?.textContent ?? '';

      gsap.from(row.querySelector('.who-row-line'), {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.1,
        ease: 'precision',
        scrollTrigger: st(row)
      });

      if (label) {
        gsap.to(label, {
          duration: 1.1,
          scrambleText: { text: labelText, chars: 'upperCase', speed: 1.3 },
          ease: 'none',
          scrollTrigger: st(row)
        });
      }

      const textSplit = SplitText.create(row.querySelector('.who-ledger-text'), {
        type: 'lines',
        autoSplit: true
      });
      gsap.from(textSplit.lines, {
        autoAlpha: 0,
        yPercent: 60,
        duration: 0.9,
        ease: 'precision',
        stagger: 0.08,
        scrollTrigger: st(row)
      });
    });

    gsap.from('.who-ticker', {
      autoAlpha: 0,
      y: 26,
      duration: 1,
      ease: 'precision',
      scrollTrigger: st('.who-ticker')
    });

    const qualities = root.querySelector('.who-qualities');
    const qualitiesText = qualities?.textContent ?? '';
    if (qualities) {
      gsap.to(qualities, {
        duration: 1.8,
        scrambleText: { text: qualitiesText, chars: 'upperCase', speed: 0.6 },
        ease: 'none',
        scrollTrigger: st(qualities, 'top 90%')
      });
    }

    gsap.from('.who-stamp', {
      autoAlpha: 0,
      y: 14,
      duration: 0.9,
      ease: 'precision',
      scrollTrigger: st('.who-stamp', 'top 98%')
    });

    document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
  }, { scope: rootRef });

  return (
    <section className="who-root" ref={rootRef}>
      {/* Scroll-scrubbed liquid splash over the hero */}
      <LiquidSplash />

      {/* ============ PINNED MANIFESTO ============ */}
      <div className="who-pin">
        {/* Ambient fluid backdrop */}
        <div className="who-ether" aria-hidden="true">
          <LiquidEther
            colors={['#0b0b0e', '#141419', '#3f3c39', '#ABA6A1']}
            mouseForce={18}
            cursorSize={90}
            autoDemo
            autoSpeed={0.4}
            autoIntensity={1.6}
            resolution={0.42}
            style={{ opacity: 0.55 }}
          />
        </div>

        {/* Ghost words */}
        <div className="who-ghost" aria-hidden="true">
          {SLIDES.map((s) => (
            <span key={s.ghost} className="who-ghost-word">
              {s.ghost}
            </span>
          ))}
        </div>

        {/* Progress rail */}
        <div className="who-rail" aria-hidden="true">
          <span className="who-rail-label mono">WHO WE ARE</span>
          <div className="who-rail-track">
            <div className="who-rail-fill" />
          </div>
          <div className="who-counter mono">
            {SLIDES.map((s) => (
              <span key={s.index} className="who-counter-num">
                {s.index}
              </span>
            ))}
            <span className="who-counter-total">/ 04</span>
          </div>
        </div>

        {/* Statement slides */}
        <div className="who-stage">
          {SLIDES.map((s) => (
            <div key={s.index} className="who-slide">
              <span className="who-slide-label mono">{s.label}</span>
              <h2 className="who-slide-line">{s.solid}</h2>
              <h2 className="who-slide-line who-slide-accent">{s.accent}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* ============ DOSSIER OUTRO ============ */}
      <div className="who-body">
        <div className="who-content">
          <div className="who-outro-head">
            <span className="who-outro-index mono">01 // WHO WE ARE</span>
            <span className="registration-crosshair" aria-hidden="true" />
            <span className="who-outro-meta mono">DAOVOS DIGITAL STUDIO — SECTOR: WEB</span>
          </div>

          <div className="who-ledger-rows">
            {LEDGER.map((row) => (
              <div key={row.label} className="who-ledger-row">
                <div className="who-row-line" aria-hidden="true" />
                <span className="who-ledger-label mono">{row.label}</span>
                <p className="who-ledger-text type-body-m">{row.text}</p>
              </div>
            ))}
          </div>

          <div className="who-ticker" aria-hidden="true">
            <div className="who-ticker-track">
              {[0, 1].map((dup) => (
                <div className="who-ticker-group" key={dup}>
                  {SERVICES.map((s) => (
                    <span className="who-ticker-item mono" key={s + dup}>
                      {s}
                      <span className="who-ticker-dot" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="who-foot">
            <span className="who-qualities mono">
              STRUCTURE · PRECISION · MODULARITY · RELIABILITY · SCALE · PROGRESS
            </span>
            <span className="who-stamp mono">EST. MMXXVI — SPEC-DAOVOS-001</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
