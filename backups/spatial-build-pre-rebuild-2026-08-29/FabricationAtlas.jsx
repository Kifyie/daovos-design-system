import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { DaovosDitherField, createDitherModel } from './DaovosDitherField';
import './fabrication-atlas.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('atlasPrecision', '0.16,1,0.3,1');
CustomEase.create('atlasMechanical', '0.25,0,0,1');

const OUTPUTS = [
  {
    index: '01',
    title: ['CUSTOM', 'WEBSITES'],
    label: 'DIGITAL HOME / DISTINCT BY DESIGN',
    statement: 'A complete digital home shaped around the brand, its audience, and the way it needs to grow.',
    scope: ['BUSINESS WEBSITES', 'PORTFOLIO SITES', 'BRAND PLATFORMS'],
    patternLabel: 'TOPOGRAPHIC RELIEF',
    side: 'left',
    model: { pattern: 0, seed: 0.37, frequency: 2.25, amplitude: 0.42, pixelSize: 5, levels: 4, contrast: 1.34, rotation: -0.16, warp: 0.64 }
  },
  {
    index: '02',
    title: ['LANDING', 'EXPERIENCES'],
    label: 'ATTENTION / DIRECTED TO ACTION',
    statement: 'Focused launch environments that give one idea enough structure, pace, and force to land.',
    scope: ['LANDING PAGES', 'PRODUCT LAUNCHES', 'CAMPAIGN PAGES'],
    patternLabel: 'DIRECTED SIGNAL BANDS',
    side: 'right',
    model: { pattern: 1, seed: 1.24, frequency: 5.2, amplitude: 0.22, pixelSize: 3, levels: 3, contrast: 1.55, rotation: 0.42, warp: 1.12 }
  },
  {
    index: '03',
    title: ['COMMERCE', 'SYSTEMS'],
    label: 'PRODUCT / DISCOVERY TO PURCHASE',
    statement: 'Storefront systems where catalogue, product detail, and checkout read as one continuous experience.',
    scope: ['E-COMMERCE', 'PRODUCT CATALOGUES', 'CONVERSION FLOWS'],
    patternLabel: 'MODULAR CELL MATRIX',
    side: 'right',
    model: { pattern: 2, seed: 2.81, frequency: 3.4, amplitude: 0.58, pixelSize: 5, levels: 5, contrast: 1.28, rotation: -0.28, warp: 0.48 }
  },
  {
    index: '04',
    title: ['INTERFACE', 'SYSTEMS'],
    label: 'COMPLEXITY / ORGANIZED FOR USE',
    statement: 'Responsive interface systems that turn dense content and behavior into a product people understand.',
    scope: ['UI / UX DESIGN', 'DESIGN SYSTEMS', 'RESPONSIVE PRODUCTS'],
    patternLabel: 'RADIAL LOGIC NETWORK',
    side: 'right',
    model: { pattern: 3, seed: 4.12, frequency: 7.6, amplitude: 0.18, pixelSize: 2, levels: 4, contrast: 1.72, rotation: 0.12, warp: 1.48 }
  },
  {
    index: '05',
    title: ['CARE +', 'OPTIMIZATION'],
    label: 'LIVE SYSTEM / KEPT IN MOTION',
    statement: 'Long-term technical care that keeps the experience fast, current, and dependable after launch.',
    scope: ['MAINTENANCE', 'MOBILE OPTIMIZATION', 'ITERATIVE REDESIGNS'],
    patternLabel: 'DIAGNOSTIC WEAVE',
    side: 'left',
    model: { pattern: 4, seed: 5.73, frequency: 1.7, amplitude: 0.66, pixelSize: 3, levels: 6, contrast: 1.36, rotation: -0.42, warp: 0.88 }
  }
];

const DESKTOP_DOCKS = [
  { x: 0.19, y: 0, scaleX: 0.84, scaleY: 1.04 },
  { x: -0.19, y: 0.03, scaleX: 1.06, scaleY: 0.78 },
  { x: -0.22, y: -0.025, scaleX: 0.9, scaleY: 0.86 },
  { x: 0.2, y: 0.045, scaleX: 0.92, scaleY: 1.02 },
  { x: -0.04, y: 0.02, scaleX: 1.2, scaleY: 0.74 }
];

const MOBILE_DOCKS = [
  { x: 0, y: -0.05, scaleX: 0.92, scaleY: 0.9 },
  { x: -0.035, y: -0.04, scaleX: 1.08, scaleY: 0.72 },
  { x: 0.04, y: -0.06, scaleX: 0.72, scaleY: 1.02 },
  { x: -0.03, y: -0.035, scaleX: 1.02, scaleY: 0.82 },
  { x: 0, y: -0.05, scaleX: 1.16, scaleY: 0.68 }
];

export const FabricationAtlas = () => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const visualRef = useRef(null);
  const modelRef = useRef(createDitherModel(OUTPUTS[0].model));

  useGSAP(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const visual = visualRef.current;
    if (!root || !stage || !visual) return undefined;

    const scenes = gsap.utils.toArray('.atlas-scene', root);
    const archiveItems = gsap.utils.toArray('.atlas-archive-item', root);
    const counterNumbers = gsap.utils.toArray('.atlas-counter-number', root);
    const progressFill = root.querySelector('.atlas-progress-fill');
    const movingDatum = root.querySelector('.atlas-moving-datum');
    const transfer = root.querySelector('.atlas-transfer');
    const visualDecor = root.querySelectorAll('.atlas-visual-readout, .atlas-visual-corner');
    const patternNames = gsap.utils.toArray('.atlas-pattern-name', root);
    const mm = gsap.matchMedia();
    let mounted = true;

    mm.add(
      {
        isDesktop: '(min-width: 901px)',
        isMobile: '(max-width: 900px)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions;
        if (reduceMotion) {
          root.classList.add('atlas-static');
          return () => root.classList.remove('atlas-static');
        }

        root.classList.remove('atlas-static');
        const docks = isDesktop ? DESKTOP_DOCKS : MOBILE_DOCKS;
        const model = modelRef.current;
        const dockTimes = [0];
        let activeIndex = 0;

        gsap.set(scenes, { autoAlpha: 0, pointerEvents: 'none' });
        gsap.set(scenes[0], { autoAlpha: 1 });
        // Inactive scenes are hidden as complete units. Keep their headlines in
        // the readable resting position so scrub/seek can never expose body copy
        // while a headline is still trapped below its mask.
        gsap.set(scenes.slice(1).flatMap((scene) => [...scene.querySelectorAll('.atlas-title-line > span')]), { yPercent: 0 });
        gsap.set(archiveItems, { autoAlpha: 0.2 });
        gsap.set(archiveItems[0], { autoAlpha: 1 });
        gsap.set(counterNumbers, { autoAlpha: 0, yPercent: 75 });
        gsap.set(counterNumbers[0], { autoAlpha: 1, yPercent: 0 });
        gsap.set(progressFill, { scaleX: 0, transformOrigin: 'left center' });
        gsap.set(movingDatum, { xPercent: -50, left: '0%' });
        gsap.set(transfer, { autoAlpha: 0 });
        gsap.set(patternNames, { autoAlpha: 0 });
        gsap.set(patternNames[0], { autoAlpha: 1 });

        const firstDock = docks[0];
        gsap.set(visual, {
          xPercent: -50,
          yPercent: -50,
          x: () => window.innerWidth * firstDock.x,
          y: () => window.innerHeight * firstDock.y,
          scaleX: 0.025,
          scaleY: firstDock.scaleY,
          transformOrigin: 'center center'
        });

        const setActiveCounter = (nextIndex) => {
          if (nextIndex === activeIndex) return;
          gsap.to(counterNumbers[activeIndex], {
            autoAlpha: 0,
            yPercent: -75,
            duration: 0.3,
            ease: 'atlasPrecision',
            overwrite: true
          });
          gsap.fromTo(counterNumbers[nextIndex], {
            autoAlpha: 0,
            yPercent: 75
          }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.3,
            ease: 'atlasPrecision',
            overwrite: true
          });
          activeIndex = nextIndex;
        };

        let timeline;
        timeline = gsap.timeline({
          defaults: { ease: 'atlasPrecision' },
          scrollTrigger: {
            id: 'fabrication-atlas',
            trigger: root,
            pin: stage,
            start: 'top top',
            end: () => `+=${Math.max(window.innerHeight * (isDesktop ? 3.9 : 2.9), isDesktop ? 2800 : 2100)}`,
            scrub: 0.68,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
            onUpdate: (self) => {
              gsap.set(progressFill, { scaleX: self.progress });
              gsap.set(movingDatum, { left: `${self.progress * 100}%` });
              const playhead = timeline?.time() ?? 0;
              let nextIndex = 0;
              dockTimes.forEach((dockTime, dockIndex) => {
                if (playhead >= dockTime) nextIndex = dockIndex;
              });
              setActiveCounter(nextIndex);
            }
          }
        });

        timeline
          .to(visual, {
            scaleX: firstDock.scaleX,
            duration: 0.72,
            ease: 'atlasMechanical'
          }, 0)
          .fromTo(scenes[0].querySelectorAll('.atlas-copy-part'), {
            autoAlpha: 0,
            x: -28
          }, {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.055
          }, 0.18)
          .fromTo(scenes[0].querySelectorAll('.atlas-title-line > span'), {
            yPercent: 118
          }, {
            yPercent: 0,
            duration: 0.62,
            stagger: 0.07,
            ease: 'atlasMechanical'
          }, 0.12)
          .to({}, { duration: 0.3 });

        OUTPUTS.slice(1).forEach((output, itemIndex) => {
          const index = itemIndex + 1;
          const previous = scenes[index - 1];
          const next = scenes[index];
          const dock = docks[index];
          const at = 0.95 + itemIndex * 1.18;
          dockTimes.push(at + 0.32);

          timeline
            .to(previous.querySelectorAll('.atlas-copy-part:not(.atlas-title-mask)'), {
              autoAlpha: 0,
              x: output.side === 'left' ? 24 : -24,
              duration: 0.26,
              stagger: 0.025
            }, at)
            .to(visual, {
              scaleY: 0.018,
              duration: 0.28,
              ease: 'atlasMechanical'
            }, at + 0.04)
            .set(visual, {
              x: () => window.innerWidth * dock.x,
              y: () => window.innerHeight * dock.y,
              scaleX: dock.scaleX
            }, at + 0.32)
            .set(model, output.model, at + 0.32)
            .set(patternNames[index - 1], { autoAlpha: 0 }, at + 0.3)
            .set(patternNames[index], { autoAlpha: 1 }, at + 0.32)
            .set(previous, { autoAlpha: 0 }, at + 0.32)
            .set(next.querySelectorAll('.atlas-title-line > span'), { yPercent: 0 }, at + 0.32)
            .set(next, { autoAlpha: 1 }, at + 0.32)
            .to(visual, {
              scaleY: dock.scaleY,
              duration: 0.64,
              ease: 'atlasMechanical'
            }, at + 0.32)
            .to(archiveItems[index - 1], { autoAlpha: 0.46, duration: 0.26 }, at + 0.08)
            .to(archiveItems[index], { autoAlpha: 1, duration: 0.36 }, at + 0.18)
            .fromTo(next.querySelectorAll('.atlas-copy-part:not(.atlas-title-mask)'), {
              autoAlpha: 0,
              x: output.side === 'left' ? -28 : 28
            }, {
              autoAlpha: 1,
              x: 0,
              duration: 0.48,
              stagger: 0.05
            }, at + 0.42);
        });

        const exitAt = 0.95 + (OUTPUTS.length - 1) * 1.18 + 0.88;
        const lastScene = scenes[scenes.length - 1];
        timeline
          .to(lastScene.querySelectorAll('.atlas-copy-part'), {
            autoAlpha: 0,
            y: -20,
            duration: 0.4,
            stagger: 0.025
          }, exitAt)
          .to(visual, {
            x: 0,
            y: 0,
            scaleX: isDesktop ? 2.05 : 1.5,
            scaleY: isDesktop ? 1.62 : 1.38,
            duration: 0.86,
            ease: 'atlasMechanical'
          }, exitAt)
          .to(model, {
            frequency: 1.2,
            amplitude: 0.74,
            pixelSize: 8,
            levels: 3,
            contrast: 1.08,
            rotation: 0,
            warp: 1.2,
            duration: 0.86
          }, exitAt)
          .to(visualDecor, { autoAlpha: 0, duration: 0.28 }, exitAt + 0.12)
          .to(transfer, { autoAlpha: 1, duration: 0.38 }, exitAt + 0.36)
          .to({}, { duration: 0.42 });

        return undefined;
      },
      root
    );

    document.fonts?.ready
      .then(() => {
        if (mounted) ScrollTrigger.refresh();
      })
      .catch(() => {});

    return () => {
      mounted = false;
      mm.revert();
      root.classList.remove('atlas-static');
    };
  }, { scope: rootRef });

  return (
    <section className="atlas-root" ref={rootRef} aria-label="DAOVOS capabilities and output systems">
      <div className="atlas-stage" ref={stageRef}>
        <header className="atlas-chrome atlas-chrome--top mono">
          <span>02 // FABRICATION ATLAS</span>
          <span>LIVE MATERIAL FIELD / 05 DOCKS</span>
        </header>

        <div className="atlas-field-grid" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
        </div>

        <div className="atlas-visual-window" ref={visualRef}>
          <DaovosDitherField model={modelRef.current} />
          <span className="atlas-visual-corner atlas-visual-corner--a" />
          <span className="atlas-visual-corner atlas-visual-corner--b" />
          <div className="atlas-visual-readout mono">
            <span>ONLINE FIELD / REACT BITS DITHER</span>
            <span className="atlas-pattern-name-stack">
              {OUTPUTS.map((output) => (
                <i className="atlas-pattern-name" key={output.index}>{output.patternLabel}</i>
              ))}
            </span>
          </div>
        </div>

        <div className="atlas-scene-stack">
          {OUTPUTS.map((output) => (
            <article className={`atlas-scene atlas-scene--${output.side} atlas-scene--${output.index}`} key={output.index}>
              <span className="atlas-copy-part atlas-eyebrow mono">DOCK {output.index} / {output.label}</span>
              <div className="atlas-copy-part atlas-title-mask">
                {output.title.map((line) => (
                  <div className="atlas-title-line" key={line}><span>{line}</span></div>
                ))}
              </div>
              <p className="atlas-copy-part atlas-statement">{output.statement}</p>
              <div className="atlas-copy-part atlas-scope mono">
                {output.scope.map((item, index) => (
                  <span key={item}><i>0{index + 1}</i>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="atlas-archive mono" aria-label="Output dock index">
          {OUTPUTS.map((output) => (
            <span className="atlas-archive-item" key={output.index}>
              <i>{output.index}</i>{output.title.join(' ')}
            </span>
          ))}
        </aside>

        <div className="atlas-transfer mono" aria-hidden="true">
          <span>FIELD EXPANDED</span>
          <strong>TRANSFER / FINAL ACT</strong>
        </div>

        <footer className="atlas-chrome atlas-chrome--bottom mono">
          <span>VERTICAL INPUT → SPATIAL FABRICATION</span>
          <div className="atlas-progress-track" aria-hidden="true">
            <span className="atlas-progress-fill" />
            <i className="atlas-moving-datum" />
            {OUTPUTS.map((output, index) => <b style={{ '--atlas-stop': index }} key={output.index} />)}
          </div>
          <div className="atlas-counter">
            {OUTPUTS.map((output) => <span className="atlas-counter-number" key={output.index}>{output.index}</span>)}
            <span className="atlas-counter-total">/ 05</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FabricationAtlas;
