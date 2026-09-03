import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { DaovosSymbol, DaovosWordmark } from '../brand';
import './spatial-build-sequence.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('daovosPrecision', '0.16, 1, 0.3, 1');
CustomEase.create('daovosMechanical', '0.25, 0, 0, 1');
CustomEase.create('daovosSettle', '0.65, 0, 0.35, 1');

const PHASES = [
  {
    number: '01',
    verb: 'FRAME',
    title: ['CUSTOM', 'WEBSITES'],
    copy: 'A complete digital home shaped around the brand, its audience, and the way it needs to grow.',
    scope: ['BUSINESS WEBSITES', 'PORTFOLIO SYSTEMS', 'BRAND PLATFORMS']
  },
  {
    number: '02',
    verb: 'THRESHOLD',
    title: ['LANDING', 'EXPERIENCES'],
    copy: 'Focused launch environments that turn attention into one clear, measurable action.',
    scope: ['CAMPAIGN PAGES', 'PRODUCT LAUNCHES', 'CONVERSION FLOWS']
  },
  {
    number: '03',
    verb: 'EXCHANGE',
    title: ['COMMERCE', 'SYSTEMS'],
    copy: 'Storefronts where catalogue, product detail, and checkout move as one continuous experience.',
    scope: ['E-COMMERCE', 'PRODUCT CATALOGUES', 'PURCHASE SYSTEMS']
  },
  {
    number: '04',
    verb: 'CONTROL',
    title: ['INTERFACE', 'SYSTEMS'],
    copy: 'Responsive product interfaces that organize dense content and behavior into something people understand.',
    scope: ['UI / UX DESIGN', 'DESIGN SYSTEMS', 'RESPONSIVE PRODUCTS']
  },
  {
    number: '05',
    verb: 'CONTINUITY',
    title: ['CARE +', 'OPTIMIZATION'],
    copy: 'Long-term technical care that keeps the experience fast, current, and dependable after launch.',
    scope: ['MAINTENANCE', 'MOBILE OPTIMIZATION', 'ITERATIVE REDESIGN']
  }
];

const MODULES = [
  { width: 66, height: 163, depth: 34 },
  { width: 64, height: 81, depth: 28 },
  { width: 64, height: 81, depth: 28 },
  { width: 64, height: 78, depth: 28 },
  { width: 66, height: 156, depth: 34 },
  { width: 64, height: 78, depth: 28 }
];

const CONFIGURATIONS = [
  [
    { x: 0, y: -132, z: 72 },
    { x: -104, y: -42, z: 14 },
    { x: 104, y: -42, z: 14 },
    { x: -104, y: 66, z: -18 },
    { x: 0, y: 102, z: 54 },
    { x: 104, y: 66, z: -18 }
  ],
  [
    { x: 0, y: -128, z: 46, rz: 90 },
    { x: -124, y: -48, z: 4, ry: -8 },
    { x: 124, y: -48, z: 4, ry: 8 },
    { x: -124, y: 56, z: -18, ry: -8 },
    { x: 0, y: 130, z: 26, rz: 90 },
    { x: 124, y: 56, z: -18, ry: 8 }
  ],
  [
    { x: -114, y: -76, z: 270, rz: 90 },
    { x: 104, y: -76, z: 240, rz: 90 },
    { x: -82, y: -4, z: 72, rz: 90 },
    { x: 78, y: -4, z: 48, rz: 90 },
    { x: -50, y: 76, z: -150, rz: 90 },
    { x: 52, y: 76, z: -176, rz: 90 }
  ],
  [
    { x: -82, y: -106, z: 30, rz: 90 },
    { x: 82, y: -106, z: -10, rz: 90 },
    { x: -82, y: 0, z: -26, rz: 90 },
    { x: 82, y: 0, z: 30, rz: 90 },
    { x: -82, y: 106, z: -10, rz: 90 },
    { x: 82, y: 106, z: -26, rz: 90 }
  ],
  [
    { x: 0, y: -132, z: 90 },
    { x: -104, y: -42, z: 38 },
    { x: 104, y: -42, z: 38 },
    { x: -104, y: 66, z: 0 },
    { x: 0, y: 102, z: 72 },
    { x: 104, y: 66, z: 0 }
  ]
];

const WORLD_STATES = [
  { xPercent: 0, yPercent: 0, z: 0, rotationX: 10, rotationY: -18, rotationZ: 0, scale: 1 },
  { xPercent: 4, yPercent: -1, z: 12, rotationX: 2, rotationY: 15, rotationZ: -1, scale: 1.02 },
  { xPercent: 1, yPercent: 1, z: 90, rotationX: 54, rotationY: -8, rotationZ: -4, scale: 0.96 },
  { xPercent: -2, yPercent: 0, z: -8, rotationX: 0, rotationY: 0, rotationZ: 0, scale: 0.94 },
  { xPercent: 0, yPercent: 0, z: 32, rotationX: 6, rotationY: -7, rotationZ: 0, scale: 1.05 }
];

const Module = ({ index, width, height, depth }) => (
  <div
    className="build-volume__module"
    data-module={index + 1}
    style={{ '--module-width': `${width}px`, '--module-height': `${height}px`, '--module-depth': `${depth}px` }}
    aria-hidden="true"
  >
    <span className="build-volume__face build-volume__face--front" />
    <span className="build-volume__face build-volume__face--back" />
    <span className="build-volume__face build-volume__face--left" />
    <span className="build-volume__face build-volume__face--right" />
    <span className="build-volume__face build-volume__face--top" />
    <span className="build-volume__face build-volume__face--bottom" />
    <span className="build-volume__module-index">0{index + 1}</span>
  </div>
);

const applyConfiguration = (timeline, modules, configuration, at, scaleFactor = 1) => {
  timeline.to(modules, {
    x: (index) => configuration[index].x * scaleFactor,
    y: (index) => configuration[index].y * scaleFactor,
    z: (index) => configuration[index].z * scaleFactor,
    rotationX: (index) => configuration[index].rx || 0,
    rotationY: (index) => configuration[index].ry || 0,
    rotationZ: (index) => configuration[index].rz || 0,
    scale: (index) => configuration[index].scale || 1,
    duration: 1.05,
    stagger: { amount: 0.16, from: 'edges' },
    ease: 'daovosMechanical',
    force3D: true
  }, at);
};

export const SpatialBuildSequence = () => {
  const rootRef = useRef(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const stage = root.querySelector('.build-volume__stage');
    const world = root.querySelector('.build-volume__world');
    const modules = gsap.utils.toArray('.build-volume__module', root);
    const scenes = gsap.utils.toArray('.build-volume__scene', root);
    const markers = gsap.utils.toArray('.build-volume__chapter-marker', root);
    const planes = gsap.utils.toArray('.build-volume__depth-plane', root);
    const progress = root.querySelector('.build-volume__progress-fill');
    const resolution = root.querySelector('.build-volume__resolution');
    const resolutionContent = root.querySelector('.build-volume__resolution-content');
    const spatialLayer = root.querySelector('.build-volume__spatial-layer');
    const chapter = root.querySelector('.build-volume__chapter');

    const mm = gsap.matchMedia();

    mm.add({
      desktop: '(min-width: 1180px) and (prefers-reduced-motion: no-preference)',
      laptop: '(min-width: 760px) and (max-width: 1179px) and (prefers-reduced-motion: no-preference)',
      mobile: '(max-width: 759px) and (prefers-reduced-motion: no-preference)',
      reduce: '(prefers-reduced-motion: reduce)'
    }, (context) => {
      const { desktop, laptop, mobile, reduce } = context.conditions;

      if (reduce) {
        gsap.set([stage, world, modules, scenes, markers, planes, resolution, resolutionContent, spatialLayer, chapter], {
          clearProps: 'all'
        });
        return undefined;
      }

      const compact = mobile;
      const scaleFactor = mobile ? 0.68 : laptop ? 0.84 : 1;
      const scrollFactor = desktop ? 6.2 : laptop ? 5.35 : 4.4;

      gsap.set(scenes, { autoAlpha: 0, x: compact ? 0 : -20 });
      gsap.set(scenes[0], { autoAlpha: 1, x: 0 });
      gsap.set(markers, { opacity: 0.28, scaleX: 0.55, transformOrigin: 'left center' });
      gsap.set(markers[0], { opacity: 1, scaleX: 1 });
      gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(resolution, { autoAlpha: 0, scale: 0.48, z: -900, rotationX: 5, force3D: true });
      gsap.set(resolutionContent, { autoAlpha: 0, y: 30 });
      gsap.set(planes, {
        autoAlpha: (index) => 0.34 - index * 0.07,
        z: (index) => -280 + index * 210,
        rotationX: 8,
        rotationY: -10,
        force3D: true
      });
      gsap.set(world, {
        ...WORLD_STATES[0],
        z: -720,
        rotationX: 54,
        rotationY: -28,
        scale: compact ? 0.72 : 0.78,
        force3D: true
      });
      gsap.set(modules, {
        x: (index) => CONFIGURATIONS[0][index].x * scaleFactor,
        y: (index) => CONFIGURATIONS[0][index].y * scaleFactor,
        z: (index) => (CONFIGURATIONS[0][index].z - 220) * scaleFactor,
        rotationX: -12,
        rotationY: 16,
        transformOrigin: '50% 50%',
        force3D: true
      });

      const timeline = gsap.timeline({ defaults: { ease: 'daovosSettle' } });

      timeline
        .addLabel('entry', 0)
        .to(world, {
          ...WORLD_STATES[0],
          scale: compact ? 0.78 : WORLD_STATES[0].scale,
          duration: 1.35,
          ease: 'daovosPrecision',
          force3D: true
        }, 'entry')
        .to(planes, {
          autoAlpha: (index) => 0.54 - index * 0.08,
          z: (index) => (-220 + index * 190) * scaleFactor,
          rotationX: 0,
          rotationY: 0,
          duration: 1.3,
          stagger: 0.06,
          ease: 'daovosPrecision'
        }, 'entry+=0.08');

      applyConfiguration(timeline, modules, CONFIGURATIONS[0], 'entry+=0.08', scaleFactor);
      timeline.addLabel('frameHold', 1.55).to({}, { duration: 0.6 });

      for (let phase = 1; phase < PHASES.length; phase += 1) {
        const label = `phase${phase + 1}`;
        timeline.addLabel(label, `+=0.08`);
        timeline
          .to(scenes[phase - 1], {
            autoAlpha: 0,
            x: compact ? 0 : -18,
            duration: 0.22,
            ease: 'power2.in'
          }, label)
          .fromTo(scenes[phase], {
            autoAlpha: 0,
            x: compact ? 0 : 24
          }, {
            autoAlpha: 1,
            x: 0,
            duration: 0.42,
            ease: 'daovosPrecision',
            immediateRender: false
          }, `${label}+=0.2`)
          .to(markers[phase - 1], {
            opacity: 0.28,
            scaleX: 0.55,
            duration: 0.25,
            ease: 'power2.out'
          }, label)
          .to(markers[phase], {
            opacity: 1,
            scaleX: 1,
            duration: 0.45,
            ease: 'daovosPrecision'
          }, `${label}+=0.16`)
          .to(world, {
            ...WORLD_STATES[phase],
            scale: compact ? WORLD_STATES[phase].scale * 0.76 : laptop ? WORLD_STATES[phase].scale * 0.9 : WORLD_STATES[phase].scale,
            duration: 1.08,
            ease: phase === 2 ? 'daovosSettle' : 'daovosMechanical',
            force3D: true
          }, label)
          .to(planes, {
            rotationX: phase === 2 ? 54 : phase === 1 ? 4 : 0,
            rotationY: phase === 1 ? 14 : phase === 4 ? -7 : 0,
            z: (index) => ((phase === 2 ? -90 : -220) + index * (phase === 2 ? 170 : 190)) * scaleFactor,
            duration: 1.05,
            stagger: 0.04,
            ease: 'daovosMechanical'
          }, label);

        applyConfiguration(timeline, modules, CONFIGURATIONS[phase], label, scaleFactor);
        timeline.to({}, { duration: phase === PHASES.length - 1 ? 0.82 : 0.58 });
      }

      timeline
        .addLabel('resolution')
        .to(scenes[PHASES.length - 1], {
          autoAlpha: 0,
          x: compact ? 0 : -22,
          duration: 0.3,
          ease: 'power2.in'
        }, 'resolution')
        .to([chapter, markers], {
          autoAlpha: 0,
          duration: 0.34,
          ease: 'power2.in'
        }, 'resolution')
        .to(spatialLayer, {
          scale: 0.72,
          z: -320,
          autoAlpha: 0.18,
          duration: 0.72,
          ease: 'daovosMechanical',
          force3D: true
        }, 'resolution')
        .to(resolution, {
          autoAlpha: 1,
          scale: 1,
          z: 0,
          rotationX: 0,
          duration: 1.25,
          ease: 'daovosPrecision',
          force3D: true
        }, 'resolution+=0.2')
        .to(resolutionContent, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'daovosPrecision'
        }, 'resolution+=0.78')
        .to(spatialLayer, {
          autoAlpha: 0,
          duration: 0.3,
          ease: 'power2.out'
        }, 'resolution+=1.08')
        .to({}, { duration: 1.05 });

      const duration = timeline.duration();
      timeline.to(progress, { scaleX: 1, duration, ease: 'none' }, 0);

      const trigger = ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: () => `+=${Math.round(window.innerHeight * scrollFactor)}`,
        animation: timeline,
        pin: stage,
        pinSpacing: true,
        scrub: 0.72,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1
      });

      return () => trigger.kill();
    });

    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      mm.revert();
    };
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className="build-volume" aria-label="What DAOVOS builds">
      <div className="build-volume__stage">
        <div className="build-volume__ambient-grid" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
        </div>

        <div className="build-volume__chapter">
          <span>02 // BUILD VOLUME</span>
          <span>FIVE SYSTEM STATES / ONE PRACTICE</span>
        </div>

        <div className="build-volume__copy" aria-live="polite">
          {PHASES.map((phase) => (
            <article className="build-volume__scene" key={phase.number}>
              <p className="build-volume__eyebrow">STATE {phase.number} / {phase.verb}</p>
              <h2>
                <span>{phase.title[0]}</span>
                <span>{phase.title[1]}</span>
              </h2>
              <p className="build-volume__statement">{phase.copy}</p>
              <ol className="build-volume__scope">
                {phase.scope.map((item, index) => <li key={item}><b>0{index + 1}</b>{item}</li>)}
              </ol>
            </article>
          ))}
        </div>

        <div className="build-volume__spatial-layer" aria-hidden="true">
          <div className="build-volume__depth-plane build-volume__depth-plane--rear"><span>FAR / STRUCTURE</span></div>
          <div className="build-volume__depth-plane build-volume__depth-plane--mid"><span>MID / RELATION</span></div>
          <div className="build-volume__depth-plane build-volume__depth-plane--front"><span>NEAR / OUTPUT</span></div>
          <div className="build-volume__world">
            <div className="build-volume__axis build-volume__axis--x" />
            <div className="build-volume__axis build-volume__axis--y" />
            {MODULES.map((module, index) => <Module key={index} index={index} {...module} />)}
          </div>
        </div>

        <ol className="build-volume__chapters" aria-hidden="true">
          {PHASES.map((phase) => (
            <li className="build-volume__chapter-marker" key={phase.number}>
              <span>{phase.number}</span><i /><b>{phase.verb}</b>
            </li>
          ))}
        </ol>

        <div className="build-volume__progress" aria-hidden="true">
          <span>SCROLL / CONSTRUCT</span>
          <i><b className="build-volume__progress-fill" /></i>
          <span>RESOLVE / 06</span>
        </div>

        <div className="build-volume__resolution">
          <div className="build-volume__resolution-content">
            <header className="build-volume__resolution-header">
              <span>03 // SYSTEM RESOLVED</span>
              <span>PROJECT INTAKE / OPEN</span>
            </header>

            <div className="build-volume__resolution-mark">
              <DaovosWordmark width={1024} color="currentColor" />
            </div>

            <div className="build-volume__resolution-body">
              <div className="build-volume__resolution-title">
                <DaovosSymbol size={74} color="currentColor" />
                <h2>BUILT AS<br />ONE SYSTEM.</h2>
              </div>
              <div className="build-volume__resolution-action">
                <p>From first structure to long-term care, every layer is designed to work as one durable digital system.</p>
                <a href="mailto:hello@daovos.com">
                  <span>START A PROJECT</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              <ol className="build-volume__resolution-register">
                {PHASES.map((phase) => <li key={phase.number}><span>{phase.number}</span><b>{phase.title.join(' ')}</b></li>)}
              </ol>
            </div>

            <footer className="build-volume__resolution-footer">
              <span>STRUCTURE · PRECISION · MODULARITY · RELIABILITY · SCALE · PROGRESS</span>
              <span>EST. MMXXVI — END / BEGIN</span>
            </footer>
          </div>
        </div>
      </div>

      <div className="build-volume__reduced-list">
        {PHASES.map((phase) => (
          <article key={phase.number}>
            <span>{phase.number} / {phase.verb}</span>
            <h2>{phase.title.join(' ')}</h2>
            <p>{phase.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SpatialBuildSequence;
