import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { DaovosWordmark } from '../brand';
import './service-journey.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('journeyPrecision', '0.16, 1, 0.3, 1');
CustomEase.create('journeyMechanical', '0.25, 0, 0, 1');

const SERVICES = [
  ['01', '000', ['CUSTOM', 'WEBSITES'], 'DIGITAL HOMES', 'DISTINCT BY DESIGN', 'A complete digital home shaped around the brand, its audience, and the way it needs to grow.', 'BUSINESS / PORTFOLIO / BRAND', RadialHome],
  ['02', '001', ['LANDING', 'EXPERIENCES'], 'ONE DECISIVE ROUTE', 'ATTENTION INTO ACTION', 'Focused launch environments that turn one clear message into one measurable action.', 'CAMPAIGN / PRODUCT / CONVERSION', FocusField],
  ['03', '002', ['COMMERCE', 'SYSTEMS'], 'DISCOVERY TO PURCHASE', 'EVERY STEP CONNECTED', 'Storefront systems where catalogue, product detail, and checkout move as one continuous experience.', 'CATALOGUE / CHECKOUT / RETENTION', CommerceOrbit],
  ['04', '003', ['INTERFACE', 'SYSTEMS'], 'COMPLEXITY MADE CLEAR', 'ORGANIZED FOR USE', 'Responsive interfaces that turn dense content and behavior into a product people understand.', 'UI / UX / DESIGN SYSTEMS', InterfaceState],
  ['05', '004', ['CARE +', 'OPTIMIZATION'], 'KEPT IN MOTION', 'THE SYSTEM STAYS LIVE', 'Long-term technical care keeps the experience fast, current, and dependable after launch.', 'MAINTENANCE / MOBILE / ITERATION', ContinuityField]
];

const RADIAL_LINES = Array.from({ length: 32 }, (_, index) => {
  const angle = (index / 32) * Math.PI * 2;
  const inner = index % 2 ? 67 : 62;
  const outer = index % 4 ? 99 : 108;
  return {
    x1: 120 + Math.cos(angle) * inner,
    y1: 120 + Math.sin(angle) * inner,
    x2: 120 + Math.cos(angle) * outer,
    y2: 120 + Math.sin(angle) * outer
  };
});

function RadialHome() {
  return (
    <div className="service-journey__radial service-journey__art-object" aria-hidden="true">
      <svg viewBox="0 0 240 240">
        <g className="service-journey__radial-rays">
          {RADIAL_LINES.map((line, index) => <line key={index} {...line} />)}
        </g>
        <circle className="service-journey__radial-ring" cx="120" cy="120" r="54" />
        <circle className="service-journey__radial-core" cx="120" cy="120" r="42" />
      </svg>
      <span>BUILT AROUND YOU</span>
    </div>
  );
}

function FocusField() {
  return (
    <div className="service-journey__focus-field service-journey__art-object" aria-hidden="true">
      <div className="service-journey__focus-orbits"><i /><i /><i /></div>
      <div className="service-journey__focus-core"><b /></div>
      <span className="service-journey__focus-axis" />
      <strong>ONE</strong>
    </div>
  );
}

function CommerceOrbit() {
  return (
    <div className="service-journey__commerce-orbit service-journey__art-object" aria-hidden="true">
      <svg viewBox="0 0 560 330">
        <path className="service-journey__commerce-route" d="M42 168 C130 34 213 294 310 161 S462 74 520 164" />
        <circle cx="42" cy="168" r="12" />
        <circle cx="310" cy="161" r="18" />
        <circle cx="520" cy="164" r="12" />
      </svg>
      <div className="service-journey__commerce-node service-journey__commerce-node--a">DISCOVER</div>
      <div className="service-journey__commerce-node service-journey__commerce-node--b">DECIDE</div>
      <div className="service-journey__commerce-node service-journey__commerce-node--c">PURCHASE</div>
    </div>
  );
}

function InterfaceState() {
  return (
    <div className="service-journey__interface-state service-journey__art-object" aria-hidden="true">
      <div className="service-journey__interface-window service-journey__interface-window--back"><i /><i /><i /></div>
      <div className="service-journey__interface-window service-journey__interface-window--front">
        <header><i /><i /><i /></header>
        <main><b /><span /><span /><span /></main>
      </div>
      <div className="service-journey__interface-cursor">↗</div>
    </div>
  );
}

function ContinuityField() {
  return (
    <div className="service-journey__continuity service-journey__art-object" aria-hidden="true">
      <svg viewBox="0 0 520 360">
        {[46, 72, 100, 130, 162].map((radius) => <ellipse key={radius} cx="260" cy="180" rx={radius * 1.28} ry={radius} />)}
        <ellipse className="service-journey__continuity-core" cx="260" cy="180" rx="28" ry="44" />
      </svg>
      <span>LIVE / CURRENT / DEPENDABLE</span>
    </div>
  );
}

export const ServiceJourney = () => {
  const rootRef = useRef(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const stage = root.querySelector('.service-journey__stage');
    const track = root.querySelector('.service-journey__track');
    const panels = gsap.utils.toArray('.service-journey__panel', root);
    const titleLines = panels.map((panel) => gsap.utils.toArray('.service-journey__title-line > span', panel));
    const artStages = gsap.utils.toArray('.service-journey__art-stage', root);
    const artObjects = gsap.utils.toArray('.service-journey__art-object', root);
    const serials = gsap.utils.toArray('.service-journey__serial', root);
    const progress = root.querySelector('.service-journey__progress-fill');
    const chrome = gsap.utils.toArray('.service-journey__chrome', root);
    const finale = root.querySelector('.service-journey__finale');
    const finaleContent = root.querySelector('.service-journey__finale-content');
    const finaleHalves = gsap.utils.toArray('.service-journey__finale-half', root);
    const finaleWordmark = root.querySelector('.service-journey__finale-wordmark-clip');
    const finaleLines = gsap.utils.toArray('.service-journey__finale-line > span', root);
    const finaleSeam = root.querySelector('.service-journey__finale-seam');
    const finaleAction = root.querySelector('.service-journey__finale-action');
    const ambientTargets = gsap.utils.toArray('.service-journey__radial-rays, .service-journey__focus-orbits, .service-journey__continuity svg', root);
    const mm = gsap.matchMedia();

    mm.add({
      desktop: '(min-width: 1180px) and (prefers-reduced-motion: no-preference)',
      tablet: '(min-width: 760px) and (max-width: 1179px) and (prefers-reduced-motion: no-preference)',
      mobile: '(max-width: 759px) and (prefers-reduced-motion: no-preference)',
      reduce: '(prefers-reduced-motion: reduce)'
    }, (context) => {
      const { desktop, tablet, mobile, reduce } = context.conditions;

      if (reduce) {
        gsap.set([stage, track, panels, artStages, artObjects, serials, progress, chrome, finale, finaleContent, finaleHalves, finaleWordmark, finaleLines, finaleSeam, finaleAction], { clearProps: 'all' });
        return undefined;
      }

      const scrollScreens = desktop ? 8.4 : tablet ? 7.5 : 6.8;
      const incomingDepth = mobile ? -60 : -110;

      gsap.set(track, { x: 0, yPercent: 0, z: 0, force3D: true });
      gsap.set(panels, { z: incomingDepth, scale: 0.97, opacity: 0.34, force3D: true });
      gsap.set(panels[0], { z: 0, scale: 1, opacity: 1 });
      gsap.set(artStages, { scaleX: 0.08, transformOrigin: 'left center', force3D: true });
      gsap.set(artStages[0], { scaleX: 1 });
      gsap.set(artObjects, { scale: 0.82, rotation: 5, autoAlpha: 0.28, transformOrigin: '50% 50%', force3D: true });
      gsap.set(artObjects[0], { scale: 1, rotation: 0, autoAlpha: 1 });
      gsap.set(serials, { yPercent: 18, autoAlpha: 0.24 });
      gsap.set(serials[0], { yPercent: 0, autoAlpha: 1 });
      titleLines.forEach((lines, index) => gsap.set(lines, { yPercent: index === 0 ? 0 : 112 }));
      gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });

      gsap.set(finale, { yPercent: 104, z: -160, scale: 0.97, autoAlpha: 0, force3D: true });
      gsap.set(finaleContent, { autoAlpha: 1 });
      gsap.set(finaleHalves[0], mobile ? { yPercent: -100 } : { xPercent: -100 });
      gsap.set(finaleHalves[1], mobile ? { yPercent: 100 } : { xPercent: 100 });
      gsap.set(finaleWordmark, { autoAlpha: 0, scaleX: 0.05, transformOrigin: 'center', force3D: true });
      gsap.set(finaleLines, { yPercent: 112 });
      gsap.set(finaleSeam, mobile
        ? { scaleX: 0, scaleY: 1, transformOrigin: 'left center' }
        : { scaleX: 1, scaleY: 0, transformOrigin: 'center top' });
      gsap.set(finaleAction, { autoAlpha: 0, y: 24 });

      const ambient = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
      ambient
        .to(ambientTargets[0], { rotation: 7, duration: 9, ease: 'sine.inOut', transformOrigin: '50% 50%' }, 0)
        .to(ambientTargets[1], { rotation: -9, duration: 11, ease: 'sine.inOut', transformOrigin: '50% 50%' }, 0)
        .to(ambientTargets[2], { rotationY: 11, duration: 8, ease: 'sine.inOut', transformOrigin: '50% 50%' }, 0);

      const timeline = gsap.timeline({ defaults: { ease: 'journeyPrecision' } });
      timeline
        .addLabel('state-01')
        .to({}, { duration: 1.2 });

      for (let index = 1; index < panels.length; index += 1) {
        const label = `state-0${index + 1}`;
        timeline
          .addLabel(label)
          .to(track, { x: () => -index * window.innerWidth, duration: 1.28, ease: 'none', force3D: true }, label)
          .to(panels[index - 1], { z: 70, scale: 1.025, opacity: 0.12, duration: 0.82, ease: 'journeyMechanical', force3D: true }, label)
          .to(artObjects[index - 1], { scale: 1.12, rotation: index % 2 ? -8 : 8, autoAlpha: 0.08, duration: 0.72, ease: 'journeyMechanical', force3D: true }, label)
          .to(panels[index], { z: 0, scale: 1, opacity: 1, duration: 1.02, force3D: true }, `${label}+=0.16`)
          .to(artStages[index], { scaleX: 1, duration: 0.9, ease: 'journeyMechanical', force3D: true }, `${label}+=0.12`)
          .to(artObjects[index], { scale: 1, rotation: 0, autoAlpha: 1, duration: 0.98, force3D: true }, `${label}+=0.18`)
          .to(titleLines[index], { yPercent: 0, duration: 0.72, stagger: 0.08, ease: 'journeyMechanical' }, `${label}+=0.25`)
          .to(serials[index], { yPercent: 0, autoAlpha: 1, duration: 0.72 }, `${label}+=0.34`)
          .to({}, { duration: 0.76 });
      }

      timeline
        .addLabel('project-intake')
        .set(finale, { autoAlpha: 1 }, 'project-intake')
        .to(track, { yPercent: -100, z: 90, scale: 1.025, duration: 1.12, ease: 'journeyMechanical', force3D: true }, 'project-intake')
        .to(chrome, { autoAlpha: 0, y: -18, duration: 0.36, ease: 'power2.in' }, 'project-intake')
        .to(finale, { yPercent: 0, z: 0, scale: 1, duration: 1.14, force3D: true }, 'project-intake+=0.08')
        .to(finaleHalves, { xPercent: 0, yPercent: 0, duration: 1, ease: 'journeyMechanical', force3D: true }, 'project-intake+=0.16')
        .to(finaleSeam, { scaleX: 1, scaleY: 1, duration: 0.76 }, 'project-intake+=0.56')
        .to(finaleWordmark, { autoAlpha: 1, scaleX: 1, duration: 0.9, force3D: true }, 'project-intake+=0.55')
        .to(finaleLines, { yPercent: 0, duration: 0.7, stagger: 0.08 }, 'project-intake+=0.72')
        .to(finaleAction, { autoAlpha: 1, y: 0, duration: 0.64 }, 'project-intake+=0.96')
        .to({}, { duration: 1.1 });

      timeline.to(progress, { scaleX: 1, duration: timeline.duration(), ease: 'none' }, 0);

      const trigger = ScrollTrigger.create({
        id: 'service-journey',
        trigger: root,
        start: 'top top',
        end: () => `+=${Math.round(window.innerHeight * scrollScreens)}`,
        animation: timeline,
        pin: stage,
        pinSpacing: true,
        scrub: 0.72,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        onEnter: () => ambient.play(),
        onEnterBack: () => ambient.play(),
        onLeave: () => ambient.pause(),
        onLeaveBack: () => ambient.pause()
      });

      return () => {
        trigger.kill();
        ambient.kill();
      };
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
    <section ref={rootRef} className="service-journey" aria-label="What DAOVOS makes">
      <div className="service-journey__stage">
        <header className="service-journey__header service-journey__chrome">
          <span>02 // WHAT WE MAKE</span>
          <span>SCROLL TO MOVE THROUGH THE SYSTEM</span>
        </header>

        <div className="service-journey__track">
          {SERVICES.map(([number, serial, title, side, kicker, copy, note, Art]) => (
            <article className={`service-journey__panel service-journey__panel--${number}`} key={number}>
              <div className="service-journey__edge-word" aria-hidden="true"><span>{side}</span></div>
              <div className="service-journey__panel-meta"><span>DAOVOS / SERVICE STATE {number}</span><span>05 SYSTEMS</span></div>
              <div className="service-journey__copy">
                <p className="service-journey__kicker">{kicker}</p>
                <h2>
                  <span className="service-journey__title-line"><span>{title[0]}</span></span>
                  <span className="service-journey__title-line"><span>{title[1]}</span></span>
                </h2>
                <p className="service-journey__statement">{copy}</p>
                <p className="service-journey__detail">{note}</p>
              </div>
              <div className="service-journey__serial" aria-hidden="true">{serial}</div>
              <figure className="service-journey__art-stage"><Art /></figure>
              <div className="service-journey__state-dot" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="service-journey__progress service-journey__chrome" aria-hidden="true">
          <span>DAOVOS / SERVICE INDEX</span><i><b className="service-journey__progress-fill" /></i><span>05 STATES</span>
        </div>

        <Finale />
      </div>
    </section>
  );
};

function Finale() {
  return (
    <section className="service-journey__finale" aria-label="Start a project with DAOVOS">
      <div className="service-journey__finale-content">
        <div className="service-journey__finale-half service-journey__finale-half--dark">
          <header><span>03 // PROJECT INPUT</span><span>YOU / THE IDEA</span></header>
          <div className="service-journey__finale-copy service-journey__finale-copy--idea">
            <p>THE STARTING POINT</p>
            <h2><span className="service-journey__finale-line"><span>YOU BRING</span></span><span className="service-journey__finale-line"><span>THE IDEA.</span></span></h2>
            <p className="service-journey__finale-note">Ambition, context, and a reason to make something unmistakably yours.</p>
          </div>
          <footer>IDEA / AMBITION / CONTEXT</footer>
        </div>

        <div className="service-journey__finale-half service-journey__finale-half--light">
          <header><span>DAOVOS / PROJECT OUTPUT</span><span>INTAKE / OPEN</span></header>
          <div className="service-journey__finale-copy service-journey__finale-copy--build">
            <p>THE BUILT RESPONSE</p>
            <h2><span className="service-journey__finale-line"><span>WE BUILD</span></span><span className="service-journey__finale-line"><span>THE EXPERIENCE.</span></span></h2>
            <div className="service-journey__finale-action">
              <p>From first interface to long-term care, DAOVOS turns the idea into a clear, durable digital experience.</p>
              <a href="mailto:hello@daovos.com"><span>START A PROJECT</span><span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <footer>DESIGN / DEVELOPMENT / CARE</footer>
        </div>

        <div className="service-journey__finale-wordmark" aria-hidden="true">
          <div className="service-journey__finale-wordmark-clip"><DaovosWordmark width={1024} color="currentColor" className="service-journey__finale-splitmark" /></div>
        </div>
        <i className="service-journey__finale-seam" aria-hidden="true" />
      </div>
    </section>
  );
}

export default ServiceJourney;
