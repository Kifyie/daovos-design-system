import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { LiquidEther } from '../hero/LiquidEther';
import { DaovosWordmark } from '../brand';
import './who.css';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP);

// Brand Precision ease — cubic-bezier(0.16, 1, 0.3, 1) from the DAOVOS motion tokens
CustomEase.create('precision', '0.16,1,0.3,1');

const SLIDES = [
  { index: '01', ghost: 'STUDIO', label: 'THE STUDIO', solid: 'NOT AN AGENCY.', accent: 'A DIGITAL STUDIO.' },
  { index: '02', ghost: 'IDEA', label: 'THE PROMISE', solid: 'YOU BRING', accent: 'THE IDEA.' },
  { index: '03', ghost: 'DIGITAL', label: 'THE PROMISE', solid: 'WE TURN IT', accent: 'DIGITAL.' },
  { index: '04', ghost: 'DAOVOS', label: 'THE STANDARD', solid: 'PREMIUM.', accent: 'WITHOUT THE GATE.' }
];

const HANDOFF_GRID_COLUMNS = Array.from({ length: 11 }, (_, index) => index + 1);
const HANDOFF_GRID_ROWS = Array.from({ length: 7 }, (_, index) => index + 1);
const HANDOFF_WORDMARKS = Array.from({ length: 4 }, (_, index) => index);
const HANDOFF_STAR_POINTS = Array.from({ length: 24 }, (_, index) => {
  const angle = (-Math.PI / 2) + (index * Math.PI / 12);
  const radius = index % 2 === 0 ? 86 : 42;
  return `${100 + Math.cos(angle) * radius},${100 + Math.sin(angle) * radius}`;
}).join(' ');

/**
 * DAOVOS — WHO WE ARE (v6, "The Manifesto Pin")
 * Splash entry → pinned scroll-scrubbed statement sequence (4 slides,
 * SplitText masked chars, ghost words, progress rail) → horizontal system
 * manifesto. The signature fabrication sequence is mounted after this
 * component so the Hermes choreography remains an isolated boundary.
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

    // ================= PINNED MANIFESTO =================
    const slides = gsap.utils.toArray('.who-slide', root);
    const ghosts = gsap.utils.toArray('.who-ghost-word', root);
    const counters = gsap.utils.toArray('.who-counter-num', root);
    const outgoingPlane = root.querySelector('.who-plane-outgoing');
    const incomingPlane = root.querySelector('.who-atlas-incoming');
    const incomingScene = root.querySelector('.who-build-title-scene');
    const incomingVerticalLines = gsap.utils.toArray('.who-atlas-preview-line--vertical', root);
    const incomingHorizontalLines = gsap.utils.toArray('.who-atlas-preview-line--horizontal', root);
    const incomingTitleBlocks = gsap.utils.toArray('.who-build-title-block', root);
    const incomingTitleLines = gsap.utils.toArray('.who-build-title > span', root);
    const titleStarWheel = root.querySelector('.who-build-star-wheel');
    const titleStarRotor = root.querySelector('.who-build-star-rotor');
    const titleOrbit = root.querySelector('.who-build-orbit');
    const titleOrbitRotor = root.querySelector('.who-build-orbit-rotor');
    const compactViewport = window.matchMedia('(max-width: 900px)').matches;
    const planeScale = compactViewport ? 0.58 : 0.46;

    gsap.set(slides, { autoAlpha: 0 });
    gsap.set(ghosts, { autoAlpha: 0 });
    gsap.set(counters, { autoAlpha: 0 });
    gsap.set(counters[0], { autoAlpha: 1 });
    gsap.set(outgoingPlane, {
      xPercent: 0,
      scale: 1,
      autoAlpha: 1,
      transformOrigin: '50% 50%'
    });
    gsap.set(incomingPlane, {
      xPercent: -118,
      scale: planeScale,
      autoAlpha: 1,
      transformOrigin: '50% 50%'
    });
    gsap.set(incomingScene, { autoAlpha: 1 });
    incomingVerticalLines.forEach((line, index) => {
      gsap.set(line, {
        scaleY: 0,
        transformOrigin: index % 2 ? 'center bottom' : 'center top'
      });
    });
    incomingHorizontalLines.forEach((line, index) => {
      gsap.set(line, {
        scaleX: 0,
        transformOrigin: index % 2 ? 'right center' : 'left center'
      });
    });
    gsap.set(incomingTitleBlocks[0], {
      scaleY: 0,
      transformOrigin: 'center top'
    });
    gsap.set(incomingTitleBlocks[1], {
      scaleX: 0,
      transformOrigin: 'right center'
    });
    gsap.set(incomingTitleLines[0], { clipPath: 'inset(0 100% 0 0)' });
    gsap.set(incomingTitleLines[1], { clipPath: 'inset(0 0 0 100%)' });
    gsap.set(titleStarWheel, { clipPath: 'inset(0 100% 0 0)' });
    gsap.set(titleOrbit, { clipPath: 'inset(100% 0 0 0)' });
    gsap.set([titleStarRotor, titleOrbitRotor], { svgOrigin: '100 100' });

    const titleAmbient = gsap.timeline({ paused: true });
    titleAmbient
      .to(titleStarRotor, { rotation: 360, duration: 18, repeat: -1, ease: 'none' }, 0)
      .to(titleOrbitRotor, { rotation: -360, duration: 14, repeat: -1, ease: 'none' }, 0);

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
        end: '+=700%',
        scrub: 1.05,
        pin: true,
        anticipatePin: 1,
        refreshPriority: 5,
        onEnter: () => titleAmbient.play(),
        onEnterBack: () => titleAmbient.play(),
        onLeave: () => titleAmbient.pause(),
        onLeaveBack: () => titleAmbient.pause()
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

    tl
      .addLabel('lateralPullback', 10)
      .to(outgoingPlane, {
        scale: planeScale,
        duration: 1.3,
        ease: 'precision'
      }, 'lateralPullback')
      .addLabel('lateralExchange', 11.3)
      .to(outgoingPlane, {
        xPercent: 132,
        duration: 1.6,
        ease: 'precision'
      }, 'lateralExchange')
      .to(incomingPlane, {
        xPercent: 0,
        duration: 1.75,
        ease: 'precision'
      }, 'lateralExchange+=0.1')
      .to(incomingVerticalLines, {
        scaleY: 1,
        duration: 1.15,
        stagger: { each: 0.035, from: 'edges' },
        ease: 'precision'
      }, 'lateralExchange+=0.05')
      .to(incomingHorizontalLines, {
        scaleX: 1,
        duration: 1.1,
        stagger: { each: 0.045, from: 'center' },
        ease: 'precision'
      }, 'lateralExchange+=0.18')
      .to(incomingTitleBlocks[0], {
        scaleY: 1,
        duration: 1.05,
        ease: 'precision'
      }, 'lateralExchange+=0.12')
      .to(incomingTitleBlocks[1], {
        scaleX: 1,
        duration: 1.05,
        ease: 'precision'
      }, 'lateralExchange+=0.3')
      .to(incomingTitleLines[0], {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.15,
        ease: 'precision'
      }, 'lateralExchange+=0.42')
      .to(incomingTitleLines[1], {
        clipPath: 'inset(0 0 0 0%)',
        duration: 1.3,
        ease: 'precision'
      }, 'lateralExchange+=0.7')
      .to(titleStarWheel, {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.05,
        ease: 'precision'
      }, 'lateralExchange+=0.72')
      .to(titleOrbit, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.05,
        ease: 'precision'
      }, 'lateralExchange+=0.86')
      .addLabel('atlasReceive', 13.15)
      .to(incomingPlane, {
        scale: 1,
        duration: 1.4,
        ease: 'precision'
      }, 'atlasReceive')
      .to(incomingScene, {
        autoAlpha: 1,
        duration: 2.1,
        ease: 'none'
      })
      .addLabel('atlasHandoff', 16.65);

    document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
  }, { scope: rootRef });

  return (
    <section className="who-root" ref={rootRef}>
      {/* ============ PINNED MANIFESTO ============ */}
        <div className="who-pin">
        <div className="who-plane-field" aria-hidden="true">
          <div className="who-plane-wordmark-columns">
            {HANDOFF_WORDMARKS.map((index) => (
              <div className="who-plane-wordmark-column" key={index}>
                <DaovosWordmark className="who-plane-wordmark" color="currentColor" width={560} />
              </div>
            ))}
          </div>
        </div>

        <div className="who-plane-surface who-plane-outgoing">
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
          <span className="who-plane-edge" aria-hidden="true" />
        </div>

        <div className="who-plane-surface who-atlas-incoming" aria-hidden="true">
          <div className="who-atlas-preview-grid">
            {HANDOFF_GRID_COLUMNS.map((index) => (
              <span className="who-atlas-preview-line who-atlas-preview-line--vertical" style={{ '--handoff-line': index }} key={`column-${index}`} />
            ))}
            {HANDOFF_GRID_ROWS.map((index) => (
              <span className="who-atlas-preview-line who-atlas-preview-line--horizontal" style={{ '--handoff-line': index }} key={`row-${index}`} />
            ))}
          </div>

          <div className="who-build-title-scene">
            <i className="who-build-title-block who-build-title-block--left" />
            <i className="who-build-title-block who-build-title-block--corner" />

            <div className="who-build-star-wheel who-build-kinetic">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <circle className="who-build-star-ring" cx="100" cy="100" r="92" />
                <g className="who-build-star-rotor">
                  <polygon className="who-build-star-shape" points={HANDOFF_STAR_POINTS} />
                  <circle className="who-build-star-hub" cx="100" cy="100" r="8" />
                </g>
              </svg>
            </div>

            <div className="who-build-orbit who-build-kinetic">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <line className="who-build-orbit-axis" x1="6" y1="100" x2="194" y2="100" />
                <line className="who-build-orbit-axis" x1="100" y1="6" x2="100" y2="194" />
                <g className="who-build-orbit-rotor">
                  <circle className="who-build-orbit-ring" cx="100" cy="100" r="76" />
                  <circle className="who-build-orbit-ring who-build-orbit-ring--inner" cx="100" cy="100" r="48" />
                  <circle className="who-build-orbit-node" cx="100" cy="24" r="6" />
                  <circle className="who-build-orbit-node" cx="176" cy="100" r="6" />
                  <circle className="who-build-orbit-node" cx="100" cy="176" r="6" />
                  <circle className="who-build-orbit-node" cx="24" cy="100" r="6" />
                </g>
                <circle className="who-build-orbit-core" cx="100" cy="100" r="13" />
              </svg>
            </div>

            <h2 className="who-build-title">
              <span>WHAT WE</span>
              <span>BUILD?</span>
            </h2>
          </div>
          <span className="who-plane-edge" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
