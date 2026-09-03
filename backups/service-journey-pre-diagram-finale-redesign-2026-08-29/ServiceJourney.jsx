import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { DaovosSymbol, DaovosWordmark } from '../brand';
import './service-journey.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('journeyPrecision', '0.16, 1, 0.3, 1');
CustomEase.create('journeyMechanical', '0.25, 0, 0, 1');
CustomEase.create('journeySettle', '0.65, 0, 0.35, 1');

const SERVICES = [
  {
    number: '01',
    title: ['CUSTOM', 'WEBSITES'],
    kicker: 'DIGITAL HOMES / DISTINCT BY DESIGN',
    copy: 'A complete digital home shaped around the brand, its audience, and the way it needs to grow.',
    detail: 'BUSINESS · PORTFOLIO · BRAND',
    Illustration: GlobeIllustration
  },
  {
    number: '02',
    title: ['LANDING', 'EXPERIENCES'],
    kicker: 'ONE MESSAGE / ONE DECISIVE ROUTE',
    copy: 'Focused launch environments that turn attention into one clear, measurable action.',
    detail: 'CAMPAIGN · PRODUCT · CONVERSION',
    Illustration: LaunchIllustration
  },
  {
    number: '03',
    title: ['COMMERCE', 'SYSTEMS'],
    kicker: 'DISCOVERY / DECISION / PURCHASE',
    copy: 'Storefront systems where catalogue, product detail, and checkout move as one continuous experience.',
    detail: 'CATALOGUE · CHECKOUT · RETENTION',
    Illustration: CommerceIllustration
  },
  {
    number: '04',
    title: ['INTERFACE', 'SYSTEMS'],
    kicker: 'COMPLEXITY / ORGANIZED FOR USE',
    copy: 'Responsive interfaces that turn dense content and behavior into a product people understand.',
    detail: 'UI / UX · DESIGN SYSTEMS · PRODUCTS',
    Illustration: InterfaceIllustration
  },
  {
    number: '05',
    title: ['CARE +', 'OPTIMIZATION'],
    kicker: 'LIVE SYSTEMS / KEPT IN MOTION',
    copy: 'Long-term technical care that keeps the experience fast, current, and dependable after launch.',
    detail: 'MAINTENANCE · MOBILE · ITERATION',
    Illustration: ContinuityIllustration
  }
];

function GlobeIllustration() {
  return (
    <svg className="journey-art journey-art--globe" viewBox="0 0 760 560" role="img" aria-label="A dithered globe representing a custom digital home">
      <defs>
        <pattern id="journey-dither" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle className="journey-globe__dot" cx="3" cy="3" r="2.2" />
          <circle className="journey-globe__dot" cx="10" cy="10" r="1.3" />
        </pattern>
        <clipPath id="journey-globe-clip"><circle cx="380" cy="278" r="204" /></clipPath>
      </defs>
      <g className="journey-globe__orbit">
        <ellipse cx="380" cy="278" rx="300" ry="112" />
        <circle className="journey-globe__satellite" cx="666" cy="246" r="10" />
      </g>
      <g className="journey-globe__sphere">
        <circle className="journey-art__solid" cx="380" cy="278" r="204" />
        <rect className="journey-globe__dither" x="176" y="74" width="408" height="408" fill="url(#journey-dither)" clipPath="url(#journey-globe-clip)" />
        <ellipse className="journey-globe__line" cx="380" cy="278" rx="88" ry="204" />
        <ellipse className="journey-globe__line" cx="380" cy="278" rx="158" ry="204" />
        <path className="journey-globe__line" d="M178 242H582M178 316H582" />
        <path className="journey-globe__coast" d="M244 176l52 10 31 32-20 35 34 22-9 53-48 21-27 48m191-219-35 24 12 45 40 14 22 51-29 53-20 37" />
      </g>
      <path className="journey-art__measure" d="M70 490H690" />
      <circle cx="70" cy="490" r="4" /><circle cx="690" cy="490" r="4" />
    </svg>
  );
}

function LaunchIllustration() {
  return (
    <svg className="journey-art journey-art--launch" viewBox="0 0 760 560" role="img" aria-label="A sequence of focused frames representing landing experiences">
      <rect className="journey-launch__frame journey-launch__frame--one" x="86" y="86" width="258" height="342" />
      <rect className="journey-launch__frame journey-launch__frame--two" x="232" y="138" width="356" height="272" />
      <rect className="journey-launch__field" x="356" y="192" width="298" height="176" />
      <path className="journey-launch__route" d="M104 384C190 354 222 238 314 246S450 350 624 224" />
      <path className="journey-launch__arrow" d="M590 206l34 18-28 26" />
      <circle className="journey-launch__point journey-launch__point--one" cx="104" cy="384" r="12" />
      <circle className="journey-launch__point journey-launch__point--two" cx="314" cy="246" r="12" />
      <circle className="journey-launch__point journey-launch__point--three" cx="624" cy="224" r="18" />
      <line className="journey-art__measure" x1="86" y1="472" x2="654" y2="472" />
    </svg>
  );
}

function CommerceIllustration() {
  return (
    <svg className="journey-art journey-art--commerce" viewBox="0 0 760 560" role="img" aria-label="A flowing product and checkout system">
      <g className="journey-commerce__lanes">
        <path d="M76 166H684" /><path d="M76 278H684" /><path d="M76 390H684" />
      </g>
      <g className="journey-commerce__products">
        <rect x="116" y="126" width="80" height="80" />
        <circle cx="288" cy="166" r="40" />
        <rect x="392" y="126" width="132" height="80" />
        <rect x="196" y="238" width="132" height="80" />
        <circle cx="438" cy="278" r="40" />
        <rect x="530" y="238" width="80" height="80" />
        <circle cx="158" cy="390" r="40" />
        <rect x="302" y="350" width="80" height="80" />
        <rect x="486" y="350" width="132" height="80" />
      </g>
      <g className="journey-commerce__gate">
        <path d="M654 98v360" />
        <path d="M630 430l24 28 24-28" />
      </g>
      <circle className="journey-commerce__pulse" cx="654" cy="278" r="18" />
    </svg>
  );
}

function InterfaceIllustration() {
  return (
    <svg className="journey-art journey-art--interface" viewBox="0 0 760 560" role="img" aria-label="Responsive interface planes organized into a design system">
      <rect className="journey-interface__shell" x="74" y="76" width="612" height="408" />
      <path className="journey-interface__bar" d="M74 138H686" />
      <circle cx="104" cy="107" r="6" /><circle cx="126" cy="107" r="6" /><circle cx="148" cy="107" r="6" />
      <rect className="journey-interface__panel journey-interface__panel--hero" x="110" y="176" width="302" height="160" />
      <rect className="journey-interface__panel journey-interface__panel--side" x="442" y="176" width="208" height="76" />
      <rect className="journey-interface__panel journey-interface__panel--side" x="442" y="270" width="208" height="66" />
      <rect className="journey-interface__panel journey-interface__panel--foot" x="110" y="366" width="540" height="78" />
      <path className="journey-interface__cursor" d="M378 224l38 86 18-30 34 30 18-18-34-30 30-18z" />
    </svg>
  );
}

function ContinuityIllustration() {
  return (
    <svg className="journey-art journey-art--continuity" viewBox="0 0 760 560" role="img" aria-label="A continuous orbit representing ongoing technical care">
      <g className="journey-continuity__rings">
        <circle cx="380" cy="280" r="214" />
        <circle cx="380" cy="280" r="160" />
        <circle cx="380" cy="280" r="106" />
      </g>
      <path className="journey-continuity__loop" d="M204 280c0-92 96-92 176 0s176 92 176 0-96-92-176 0-176 92-176 0z" />
      <g className="journey-continuity__ticks">
        <path d="M380 46v40M380 474v40M146 280h40M574 280h40" />
      </g>
      <circle className="journey-continuity__core" cx="380" cy="280" r="34" />
      <circle className="journey-continuity__node journey-continuity__node--one" cx="204" cy="280" r="12" />
      <circle className="journey-continuity__node journey-continuity__node--two" cx="556" cy="280" r="12" />
    </svg>
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
    const artFrames = gsap.utils.toArray('.service-journey__art-frame', root);
    const progress = root.querySelector('.service-journey__progress-fill');
    const chrome = gsap.utils.toArray('.service-journey__chrome', root);
    const finale = root.querySelector('.service-journey__finale');
    const finaleContent = root.querySelector('.service-journey__finale-content');

    const mm = gsap.matchMedia();

    mm.add({
      desktop: '(min-width: 1180px) and (prefers-reduced-motion: no-preference)',
      tablet: '(min-width: 760px) and (max-width: 1179px) and (prefers-reduced-motion: no-preference)',
      mobile: '(max-width: 759px) and (prefers-reduced-motion: no-preference)',
      reduce: '(prefers-reduced-motion: reduce)'
    }, (context) => {
      const { desktop, tablet, mobile, reduce } = context.conditions;

      if (reduce) {
        gsap.set([stage, track, panels, artFrames, finale, finaleContent, chrome], { clearProps: 'all' });
        return undefined;
      }

      const scrollScreens = desktop ? 7.1 : tablet ? 6.25 : 5.7;
      const panelDepth = mobile ? -120 : -240;
      const departedDepth = mobile ? 90 : 180;

      gsap.set(track, { x: 0, yPercent: 0, z: 0, force3D: true });
      gsap.set(panels, {
        z: panelDepth,
        scale: mobile ? 0.96 : 0.92,
        opacity: 0.28,
        transformOrigin: '50% 50%',
        force3D: true
      });
      gsap.set(panels[0], { z: 0, scale: 1, opacity: 1 });
      gsap.set(artFrames, { rotationY: mobile ? 0 : -4, transformOrigin: '50% 50%', force3D: true });
      gsap.set(finale, { yPercent: 105, z: -220, scale: 0.96, autoAlpha: 0, force3D: true });
      gsap.set(finaleContent, { autoAlpha: 1, y: 54 });
      gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });

      const timeline = gsap.timeline({ defaults: { ease: 'journeySettle' } });

      timeline
        .addLabel('world')
        .fromTo('.journey-globe__sphere', {
          scale: 0.78,
          rotation: -8,
          transformOrigin: '50% 50%'
        }, {
          scale: 1,
          rotation: 0,
          duration: 1.15,
          ease: 'journeyPrecision'
        }, 'world')
        .fromTo('.journey-globe__orbit', {
          rotation: -14,
          transformOrigin: '50% 50%'
        }, {
          rotation: 8,
          duration: 1.4,
          ease: 'journeySettle'
        }, 'world')
        .fromTo('.journey-globe__line, .journey-globe__coast', {
          strokeDasharray: 900,
          strokeDashoffset: 900
        }, {
          strokeDashoffset: 0,
          duration: 1.15,
          stagger: 0.06,
          ease: 'journeyPrecision'
        }, 'world+=0.06')
        .to({}, { duration: 0.58 });

      const chapterAnimations = [
        null,
        (label) => timeline
          .fromTo('.journey-launch__frame', { scale: 0.82, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.82, stagger: 0.1, ease: 'journeyPrecision' }, `${label}+=0.22`)
          .fromTo('.journey-launch__route, .journey-launch__arrow', { strokeDasharray: 900, strokeDashoffset: 900 }, { strokeDashoffset: 0, duration: 0.96, stagger: 0.08, ease: 'journeyPrecision' }, `${label}+=0.22`)
          .fromTo('.journey-launch__point', { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, `${label}+=0.54`),
        (label) => timeline
          .fromTo('.journey-commerce__products > *', { x: (index) => index % 2 ? 70 : -70, opacity: 0.2 }, { x: 0, opacity: 1, duration: 0.82, stagger: 0.055, ease: 'journeyMechanical' }, `${label}+=0.18`)
          .fromTo('.journey-commerce__pulse', { scale: 0.25, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.7, ease: 'journeyPrecision' }, `${label}+=0.55`),
        (label) => timeline
          .fromTo('.journey-interface__panel', { scaleY: 0.2, transformOrigin: 'center top' }, { scaleY: 1, duration: 0.8, stagger: 0.08, ease: 'journeyPrecision' }, `${label}+=0.22`)
          .fromTo('.journey-interface__cursor', { x: -90, y: 80, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.9, ease: 'journeyMechanical' }, `${label}+=0.44`),
        (label) => timeline
          .fromTo('.journey-continuity__rings', { rotation: -22, transformOrigin: '50% 50%' }, { rotation: 12, duration: 1.05, ease: 'journeySettle' }, `${label}+=0.18`)
          .fromTo('.journey-continuity__loop', { strokeDasharray: 1200, strokeDashoffset: 1200 }, { strokeDashoffset: 0, duration: 1.05, ease: 'journeyPrecision' }, `${label}+=0.18`)
          .fromTo('.journey-continuity__node', { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.58, stagger: 0.14, ease: 'back.out(1.6)' }, `${label}+=0.58`)
      ];

      for (let index = 1; index < panels.length; index += 1) {
        const label = `chapter-${index + 1}`;
        timeline
          .addLabel(label)
          .to(track, {
            x: () => -index * window.innerWidth,
            duration: 1.18,
            ease: 'journeySettle',
            force3D: true
          }, label)
          .to(panels[index - 1], {
            z: departedDepth,
            scale: mobile ? 1.015 : 1.05,
            opacity: 0.16,
            duration: 0.92,
            ease: 'journeyMechanical',
            force3D: true
          }, label)
          .to(panels[index], {
            z: 0,
            scale: 1,
            opacity: 1,
            duration: 1.08,
            ease: 'journeyPrecision',
            force3D: true
          }, `${label}+=0.12`)
          .to(artFrames[index - 1], {
            rotationY: mobile ? 0 : 5,
            xPercent: -4,
            duration: 0.9,
            ease: 'journeySettle',
            force3D: true
          }, label)
          .to(artFrames[index], {
            rotationY: 0,
            xPercent: 0,
            duration: 1.05,
            ease: 'journeyPrecision',
            force3D: true
          }, `${label}+=0.12`);

        chapterAnimations[index]?.(label);
        timeline.to({}, { duration: 0.62 });
      }

      timeline
        .addLabel('vertical-resolution')
        .set(finale, { autoAlpha: 1 }, 'vertical-resolution')
        .to(track, {
          yPercent: -100,
          z: departedDepth,
          scale: 1.035,
          duration: 1.18,
          ease: 'journeyMechanical',
          force3D: true
        }, 'vertical-resolution')
        .to(chrome, {
          autoAlpha: 0,
          y: -20,
          duration: 0.38,
          ease: 'power2.in'
        }, 'vertical-resolution')
        .to(finale, {
          yPercent: 0,
          z: 0,
          scale: 1,
          duration: 1.18,
          ease: 'journeyPrecision',
          force3D: true
        }, 'vertical-resolution+=0.08')
        .to(finaleContent, {
          y: 0,
          duration: 1,
          ease: 'journeyPrecision'
        }, 'vertical-resolution+=0.12')
        .to({}, { duration: 1.05 });

      const duration = timeline.duration();
      timeline.to(progress, { scaleX: 1, duration, ease: 'none' }, 0);

      const trigger = ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: () => `+=${Math.round(window.innerHeight * scrollScreens)}`,
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
    <section ref={rootRef} className="service-journey" aria-label="What DAOVOS makes">
      <div className="service-journey__stage">
        <header className="service-journey__header service-journey__chrome">
          <span>02 // WHAT WE MAKE</span>
          <span>VERTICAL INPUT / HORIZONTAL PASSAGE</span>
        </header>

        <div className="service-journey__track">
          {SERVICES.map(({ number, title, kicker, copy, detail, Illustration }) => (
            <article className={`service-journey__panel service-journey__panel--${number}`} key={number}>
              <div className="service-journey__copy">
                <p className="service-journey__kicker">{number} / {kicker}</p>
                <h2><span>{title[0]}</span><span>{title[1]}</span></h2>
                <p className="service-journey__statement">{copy}</p>
                <p className="service-journey__detail">{detail}</p>
              </div>
              <figure className="service-journey__art-frame">
                <Illustration />
              </figure>
            </article>
          ))}
        </div>

        <div className="service-journey__progress service-journey__chrome" aria-hidden="true">
          <span>WHAT WE MAKE</span>
          <i><b className="service-journey__progress-fill" /></i>
          <span>05 CHAPTERS</span>
        </div>

        <section className="service-journey__finale" aria-label="Start a project with DAOVOS">
          <div className="service-journey__finale-content">
            <header>
              <span>03 // THE NEXT SYSTEM</span>
              <span>PROJECT INTAKE / OPEN</span>
            </header>
            <div className="service-journey__finale-mark">
              <DaovosWordmark width={1024} color="currentColor" />
            </div>
            <div className="service-journey__finale-body">
              <div className="service-journey__finale-title">
                <DaovosSymbol size={62} color="currentColor" />
                <h2>DESIGN.<br />BUILD.<br />KEEP MOVING.</h2>
              </div>
              <div className="service-journey__finale-action">
                <p>DAOVOS turns ambitious ideas into clear, durable digital experiences—from first interface to long-term care.</p>
                <a href="mailto:hello@daovos.com"><span>START A PROJECT</span><span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <footer>
              <span>STRUCTURE · PRECISION · MODULARITY · RELIABILITY · SCALE · PROGRESS</span>
              <span>EST. MMXXVI — END / BEGIN</span>
            </footer>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServiceJourney;
