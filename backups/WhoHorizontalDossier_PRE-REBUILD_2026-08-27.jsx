import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import './who-horizontal.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('whoHorizontalPrecision', '0.16,1,0.3,1');
CustomEase.create('whoHorizontalMechanical', '0.25,0,0,1');

const PANELS = [
  {
    id: 'mission',
    index: '01',
    eyebrow: 'MISSION / ACCESS',
    title: 'QUALITY,',
    accent: 'WITHOUT THE GATE.',
    text: 'Make high-quality digital experiences accessible — strong design, modern technology, and a simple client experience.',
    signals: ['STRONG DESIGN', 'MODERN TECHNOLOGY', 'SIMPLE EXPERIENCE']
  },
  {
    id: 'vision',
    index: '02',
    eyebrow: 'VISION / SCALE',
    title: 'FROM WEB STUDIO',
    accent: 'TO DIGITAL COMPANY.',
    text: 'Grow from a web agency into a recognizable digital company providing everything a modern brand needs to build, launch, and grow online.',
    signals: ['WEB', 'BRAND', 'PRODUCTS', 'AUTOMATION']
  },
  {
    id: 'promise',
    index: '03',
    eyebrow: 'PROMISE / TRANSFORMATION',
    title: 'IDEA IN.',
    accent: 'EXPERIENCE OUT.',
    text: 'You bring the idea. Daovos turns it into a digital experience.',
    signals: ['LISTEN', 'DESIGN', 'BUILD', 'LAUNCH']
  },
  {
    id: 'capabilities',
    index: '04',
    eyebrow: 'CAPABILITIES / WEB SYSTEM',
    title: 'ONE STUDIO.',
    accent: 'THE FULL SYSTEM.',
    text: 'Strategy, interface, engineering, launch, and long-term support — assembled as one connected digital practice.',
    signals: []
  }
];

const SERVICES = [
  { label: 'WEB DESIGN', type: 'sidebar' },
  { label: 'DEVELOPMENT', type: 'source' },
  { label: 'LANDING PAGES', type: 'send' },
  { label: 'E-COMMERCE', type: 'dollar' },
  { label: 'UI/UX', type: 'plus' },
  { label: 'REDESIGNS', type: 'world' },
  { label: 'MAINTENANCE', type: 'bell' },
  { label: 'MOBILE OPTIMIZATION', type: 'menu' }
];

const SvgLine = (props) => (
  <line className="who-h-draw" pathLength="1" {...props} />
);

const MissionIllustration = () => (
  <svg className="who-h-schematic" viewBox="0 0 720 520" role="img" aria-label="Design, technology, and experience converging into one digital product">
    <g className="who-h-node">
      <rect x="28" y="72" width="156" height="72" />
      <text x="48" y="104">INPUT / 01</text>
      <text className="who-h-svg-label" x="48" y="128">DESIGN</text>
    </g>
    <g className="who-h-node">
      <rect x="28" y="224" width="156" height="72" />
      <text x="48" y="256">INPUT / 02</text>
      <text className="who-h-svg-label" x="48" y="280">TECHNOLOGY</text>
    </g>
    <g className="who-h-node">
      <rect x="28" y="376" width="156" height="72" />
      <text x="48" y="408">INPUT / 03</text>
      <text className="who-h-svg-label" x="48" y="432">EXPERIENCE</text>
    </g>

    <path className="who-h-draw" pathLength="1" d="M184 108H248L324 224" />
    <path className="who-h-draw" pathLength="1" d="M184 260H324" />
    <path className="who-h-draw" pathLength="1" d="M184 412H248L324 296" />
    <circle className="who-h-node" cx="324" cy="260" r="24" />
    <SvgLine x1="300" y1="260" x2="348" y2="260" />
    <SvgLine x1="324" y1="236" x2="324" y2="284" />

    <g className="who-h-node">
      <rect x="372" y="126" width="316" height="268" />
      <SvgLine x1="372" y1="174" x2="688" y2="174" />
      <circle cx="396" cy="150" r="4" />
      <circle cx="412" cy="150" r="4" />
      <circle cx="428" cy="150" r="4" />
      <rect x="400" y="208" width="132" height="132" />
      <SvgLine x1="556" y1="216" x2="660" y2="216" />
      <SvgLine x1="556" y1="244" x2="640" y2="244" />
      <SvgLine x1="556" y1="300" x2="660" y2="300" />
      <SvgLine x1="556" y1="328" x2="620" y2="328" />
    </g>

    <line className="who-h-scan" x1="388" y1="196" x2="672" y2="196" />
    <circle className="who-h-packet who-h-packet--a" cx="214" cy="108" r="5" />
    <circle className="who-h-packet who-h-packet--b" cx="214" cy="260" r="5" />
    <circle className="who-h-packet who-h-packet--c" cx="214" cy="412" r="5" />
    <text x="372" y="430">OUTPUT / ACCESSIBLE DIGITAL EXPERIENCE</text>
  </svg>
);

const VISION_MODULES = [
  { x: 70, y: 64, w: 150, h: 88, label: 'WEB' },
  { x: 500, y: 64, w: 150, h: 88, label: 'BRAND' },
  { x: 38, y: 216, w: 182, h: 88, label: 'PRODUCTS' },
  { x: 500, y: 216, w: 182, h: 88, label: 'AUTOMATION' },
  { x: 70, y: 368, w: 150, h: 88, label: 'COMMERCE' },
  { x: 500, y: 368, w: 150, h: 88, label: 'SYSTEMS' }
];

const VisionIllustration = () => (
  <svg className="who-h-schematic" viewBox="0 0 720 520" role="img" aria-label="A central web studio expanding into a modular digital company">
    <circle className="who-h-orbit who-h-draw" pathLength="1" cx="360" cy="260" r="192" />
    <circle className="who-h-orbit who-h-orbit--inner who-h-draw" pathLength="1" cx="360" cy="260" r="116" />

    {VISION_MODULES.map((module) => (
      <g className="who-h-vision-module who-h-node" key={module.label}>
        <rect x={module.x} y={module.y} width={module.w} height={module.h} />
        <text x={module.x + 16} y={module.y + 30}>SECTOR</text>
        <text className="who-h-svg-label" x={module.x + 16} y={module.y + 58}>{module.label}</text>
      </g>
    ))}

    <path className="who-h-draw" pathLength="1" d="M220 108L304 204" />
    <path className="who-h-draw" pathLength="1" d="M500 108L416 204" />
    <path className="who-h-draw" pathLength="1" d="M220 260H304" />
    <path className="who-h-draw" pathLength="1" d="M500 260H416" />
    <path className="who-h-draw" pathLength="1" d="M220 412L304 316" />
    <path className="who-h-draw" pathLength="1" d="M500 412L416 316" />

    <g className="who-h-core who-h-node">
      <rect x="304" y="204" width="112" height="112" />
      <rect x="324" y="224" width="72" height="72" />
      <SvgLine x1="304" y1="260" x2="416" y2="260" />
      <SvgLine x1="360" y1="204" x2="360" y2="316" />
      <text x="332" y="254">CORE</text>
      <text className="who-h-svg-label" x="332" y="278">DAOVOS</text>
    </g>

    <text x="24" y="500">EXPANSION MODEL / MODULAR / CONNECTED / RECOGNIZABLE</text>
  </svg>
);

const PromiseIllustration = () => (
  <svg className="who-h-schematic" viewBox="0 0 720 520" role="img" aria-label="An idea moving through design and development into a finished interface">
    <g className="who-h-idea who-h-node">
      <path d="M84 260L136 208L188 260L136 312Z" />
      <circle cx="136" cy="260" r="16" />
      <SvgLine x1="136" y1="178" x2="136" y2="152" />
      <SvgLine x1="136" y1="368" x2="136" y2="342" />
      <SvgLine x1="54" y1="260" x2="28" y2="260" />
      <SvgLine x1="244" y1="260" x2="218" y2="260" />
    </g>

    <SvgLine x1="188" y1="260" x2="512" y2="260" />
    {[244, 324, 404, 484].map((x, index) => (
      <g className="who-h-station who-h-node" key={x}>
        <rect x={x - 24} y="236" width="48" height="48" />
        <text x={x - 18} y="326">0{index + 1}</text>
      </g>
    ))}
    <circle className="who-h-promise-packet who-h-promise-packet--a" cx="204" cy="260" r="6" />
    <circle className="who-h-promise-packet who-h-promise-packet--b" cx="204" cy="260" r="3" />

    <g className="who-h-output who-h-node">
      <rect x="512" y="126" width="184" height="268" />
      <SvgLine x1="512" y1="174" x2="696" y2="174" />
      <circle cx="534" cy="150" r="4" />
      <circle cx="550" cy="150" r="4" />
      <rect x="536" y="204" width="136" height="76" />
      <SvgLine x1="536" y1="312" x2="640" y2="312" />
      <SvgLine x1="536" y1="340" x2="620" y2="340" />
      <SvgLine x1="536" y1="368" x2="660" y2="368" />
    </g>

    <text x="72" y="376">IDEA</text>
    <text x="214" y="376">LISTEN</text>
    <text x="294" y="376">DESIGN</text>
    <text x="382" y="376">BUILD</text>
    <text x="462" y="376">LAUNCH</text>
    <text x="512" y="430">DIGITAL EXPERIENCE / LIVE</text>
  </svg>
);

const ServiceGlyph = ({ type }) => {
  const common = { className: 'who-h-service-stroke', pathLength: '1' };

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      {type === 'sidebar' && <g className="who-h-glyph-shell">
        <rect {...common} x="10" y="12" width="44" height="40" />
        <line {...common} className="who-h-service-stroke who-h-glyph-divider" x1="25" y1="12" x2="25" y2="52" />
        <g className="who-h-glyph-bars">
          <line {...common} x1="31" y1="23" x2="47" y2="23" />
          <line {...common} x1="31" y1="32" x2="43" y2="32" />
          <line {...common} x1="31" y1="41" x2="47" y2="41" />
        </g>
      </g>}
      {type === 'source' && <>
        <path {...common} className="who-h-service-stroke who-h-glyph-left" d="M25 18L11 32L25 46" />
        <path {...common} className="who-h-service-stroke who-h-glyph-right" d="M39 18L53 32L39 46" />
        <line {...common} className="who-h-service-stroke who-h-glyph-slash" x1="37" y1="12" x2="27" y2="52" />
      </>}
      {type === 'send' && <g className="who-h-glyph-plane">
        <path {...common} d="M9 13L55 32L9 51L17 34L40 32L17 30Z" />
        <line {...common} x1="17" y1="34" x2="13" y2="46" />
      </g>}
      {type === 'dollar' && <>
        <circle {...common} className="who-h-glyph-coin" cx="32" cy="32" r="23" />
        <path {...common} className="who-h-glyph-dollar" d="M39 23C37 20 34 19 30 19C25 19 22 21 22 25C22 29 26 30 32 32C38 34 42 36 42 41C42 46 38 49 31 49C26 49 22 47 19 44M32 13V53" />
      </>}
      {type === 'plus' && <>
        <rect {...common} className="who-h-glyph-frame" x="10" y="10" width="44" height="44" />
        <g className="who-h-glyph-plus">
          <line {...common} x1="32" y1="20" x2="32" y2="44" />
          <line {...common} x1="20" y1="32" x2="44" y2="32" />
        </g>
      </>}
      {type === 'world' && <g className="who-h-glyph-world">
        <circle {...common} cx="32" cy="32" r="23" />
        <ellipse {...common} cx="32" cy="32" rx="10" ry="23" />
        <line {...common} x1="9" y1="32" x2="55" y2="32" />
        <path {...common} d="M13 22H51M13 42H51" />
      </g>}
      {type === 'bell' && <>
        <g className="who-h-glyph-bell">
          <path {...common} d="M17 43H47L43 37V28C43 21 38 16 32 16C26 16 21 21 21 28V37Z" />
          <line {...common} x1="15" y1="43" x2="49" y2="43" />
        </g>
        <path {...common} className="who-h-glyph-clapper" d="M28 48C29 51 35 51 36 48" />
      </>}
      {type === 'menu' && <g className="who-h-glyph-menu">
        <line {...common} x1="13" y1="20" x2="51" y2="20" />
        <line {...common} x1="13" y1="32" x2="51" y2="32" />
        <line {...common} x1="13" y1="44" x2="51" y2="44" />
      </g>}
    </svg>
  );
};

const InteractiveService = ({ service, index }) => {
  const buttonRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: buttonRef });

  const playMotion = contextSafe(() => {
    const button = buttonRef.current;
    if (!button) return;
    const type = service.type;
    const timeline = gsap.timeline({
      defaults: { duration: 0.34, ease: 'whoHorizontalPrecision' }
    });

    gsap.killTweensOf(button.querySelectorAll('svg *'));
    timeline
      .to(button, { backgroundColor: 'rgba(237, 230, 223, 0.08)', duration: 0.18 }, 0)
      .to(button.querySelector('.who-h-service-label'), { color: '#ede6df', x: 4, duration: 0.24 }, 0);

    if (type === 'sidebar') {
      timeline
        .to(button.querySelector('.who-h-glyph-divider'), { x: 7 }, 0)
        .to(button.querySelectorAll('.who-h-glyph-bars line'), { scaleX: 0.55, transformOrigin: 'right center', stagger: 0.055 }, 0)
        .to(button.querySelector('.who-h-glyph-divider'), { x: 0 }, 0.38)
        .to(button.querySelectorAll('.who-h-glyph-bars line'), { scaleX: 1, stagger: 0.045 }, 0.38);
    }
    if (type === 'source') {
      timeline
        .to(button.querySelector('.who-h-glyph-left'), { x: -6 }, 0)
        .to(button.querySelector('.who-h-glyph-right'), { x: 6 }, 0)
        .to(button.querySelector('.who-h-glyph-slash'), { rotation: 18, transformOrigin: 'center center' }, 0)
        .to(button.querySelectorAll('.who-h-glyph-left, .who-h-glyph-right'), { x: 0 }, 0.38)
        .to(button.querySelector('.who-h-glyph-slash'), { rotation: 0 }, 0.38);
    }
    if (type === 'send') {
      timeline
        .to(button.querySelector('.who-h-glyph-plane'), { x: 14, y: -8, rotation: -8, transformOrigin: 'center center' }, 0)
        .set(button.querySelector('.who-h-glyph-plane'), { x: -14, y: 8 })
        .to(button.querySelector('.who-h-glyph-plane'), { x: 0, y: 0, rotation: 0 }, 0.42);
    }
    if (type === 'dollar') {
      timeline
        .to(button.querySelector('.who-h-glyph-coin'), { rotation: 180, transformOrigin: 'center center' }, 0)
        .to(button.querySelector('.who-h-glyph-dollar'), { scaleY: 0.72, transformOrigin: 'center center' }, 0)
        .to(button.querySelector('.who-h-glyph-coin'), { rotation: 360 }, 0.36)
        .to(button.querySelector('.who-h-glyph-dollar'), { scaleY: 1 }, 0.36);
    }
    if (type === 'plus') {
      timeline
        .to(button.querySelector('.who-h-glyph-plus'), { rotation: 45, scale: 1.16, transformOrigin: 'center center' }, 0)
        .to(button.querySelector('.who-h-glyph-frame'), { rotation: -8, transformOrigin: 'center center' }, 0)
        .to(button.querySelectorAll('.who-h-glyph-plus, .who-h-glyph-frame'), { rotation: 0, scale: 1 }, 0.4);
    }
    if (type === 'world') {
      timeline
        .to(button.querySelector('.who-h-glyph-world'), { rotationY: 180, transformOrigin: 'center center', transformPerspective: 500 }, 0)
        .to(button.querySelector('.who-h-glyph-world'), { rotationY: 360 }, 0.38);
    }
    if (type === 'bell') {
      timeline
        .to(button.querySelector('.who-h-glyph-bell'), { rotation: 14, transformOrigin: 'center 16px', repeat: 3, yoyo: true, duration: 0.12 }, 0)
        .to(button.querySelector('.who-h-glyph-clapper'), { x: 5, repeat: 3, yoyo: true, duration: 0.12 }, 0);
    }
    if (type === 'menu') {
      timeline
        .to(button.querySelectorAll('.who-h-glyph-menu line'), { scaleX: 0.45, transformOrigin: (itemIndex) => itemIndex % 2 ? 'right center' : 'left center', stagger: 0.065 }, 0)
        .to(button.querySelectorAll('.who-h-glyph-menu line'), { scaleX: 1, stagger: 0.055 }, 0.38);
    }

    timeline
      .to(button, { backgroundColor: 'rgba(237, 230, 223, 0)', duration: 0.28 }, '>-0.08')
      .to(button.querySelector('.who-h-service-label'), { color: '#aba6a1', x: 0, duration: 0.28 }, '<');
  });

  const settle = contextSafe(() => {
    const button = buttonRef.current;
    if (!button) return;
    gsap.to(button.querySelector('svg'), {
      scale: 1,
      duration: 0.28,
      ease: 'whoHorizontalPrecision',
      overwrite: 'auto'
    });
  });

  return (
    <button
      className="who-h-service"
      ref={buttonRef}
      type="button"
      aria-label={`Animate ${service.label} capability icon`}
      onPointerEnter={playMotion}
      onPointerLeave={settle}
      onFocus={playMotion}
      onClick={playMotion}
    >
      <span className="who-h-service-index mono">0{index + 1}</span>
      <ServiceGlyph type={service.type} />
      <span className="who-h-service-label mono">{service.label}</span>
    </button>
  );
};

const CapabilitiesIllustration = () => (
  <div className="who-h-capability-board" aria-label="Interactive DAOVOS web capabilities">
    <div className="who-h-service-prompt mono">
      <span>TRY THE SYSTEM CONTROLS</span>
      <a href="https://skiper-ui.com/v1/skiper42" target="_blank" rel="noreferrer">MOTION REF / SKIPER 42 ↗</a>
    </div>
    <div className="who-h-service-matrix">
      {SERVICES.map((service, index) => (
        <InteractiveService service={service} index={index} key={service.label} />
      ))}
    </div>
  </div>
);

const Illustration = ({ id }) => {
  if (id === 'mission') return <MissionIllustration />;
  if (id === 'vision') return <VisionIllustration />;
  if (id === 'promise') return <PromiseIllustration />;
  return <CapabilitiesIllustration />;
};

export const WhoHorizontalDossier = () => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!root || !stage || !track) return undefined;

    const panels = gsap.utils.toArray('.who-h-panel', root);
    const counterNumbers = gsap.utils.toArray('.who-h-counter-num', root);
    const progressFill = root.querySelector('.who-h-progress-fill');
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
          root.classList.add('who-h-static');
          return () => root.classList.remove('who-h-static');
        }

        root.classList.remove('who-h-static');
        let activeIndex = 0;
        const getDistance = () => Math.max(0, track.scrollWidth - stage.clientWidth);
        const getScrollLength = () => {
          const multiplier = isDesktop ? 1.08 : 1.24;
          return Math.max(getDistance() * multiplier, window.innerHeight * 3);
        };

        gsap.set(progressFill, { scaleX: 0, transformOrigin: 'left center' });
        gsap.set(counterNumbers, { autoAlpha: 0 });
        gsap.set(counterNumbers[0], { autoAlpha: 1 });

        const setActivePanel = (nextIndex) => {
          if (nextIndex === activeIndex) return;
          gsap.to(counterNumbers[activeIndex], {
            autoAlpha: 0,
            yPercent: -70,
            duration: 0.36,
            ease: 'whoHorizontalPrecision',
            overwrite: true
          });
          gsap.fromTo(counterNumbers[nextIndex], {
            autoAlpha: 0,
            yPercent: 70
          }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.36,
            ease: 'whoHorizontalPrecision',
            overwrite: true
          });
          activeIndex = nextIndex;
        };

        const firstPanel = panels[0];
        const entryTimeline = gsap.timeline({
          defaults: { ease: 'whoHorizontalPrecision' },
          scrollTrigger: {
            trigger: root,
            start: 'top 84%',
            end: 'top top',
            scrub: 0.48
          }
        });

        entryTimeline
          .fromTo(firstPanel.querySelectorAll('.who-h-copy-part'), {
            autoAlpha: 0,
            y: 24
          }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05
          }, 0)
          .fromTo(firstPanel.querySelectorAll('.who-h-draw'), {
            strokeDashoffset: 1
          }, {
            strokeDashoffset: 0,
            duration: 0.72,
            stagger: { amount: 0.28, from: 'start' },
            ease: 'none'
          }, 0.06)
          .fromTo(firstPanel.querySelectorAll('.who-h-node'), {
            autoAlpha: 0,
            scale: 0.82,
            transformOrigin: 'center center'
          }, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.54,
            stagger: { amount: 0.3, from: 'center' },
            ease: 'whoHorizontalMechanical'
          }, 0.14)
          .fromTo(firstPanel.querySelectorAll('.who-h-packet'), {
            x: -44,
            autoAlpha: 0
          }, {
            x: 104,
            autoAlpha: 1,
            duration: 0.62,
            stagger: 0.08,
            ease: 'none'
          }, 0.24)
          .fromTo(firstPanel.querySelector('.who-h-scan'), {
            y: -34,
            autoAlpha: 0
          }, {
            y: 166,
            autoAlpha: 0.72,
            duration: 0.68,
            ease: 'none'
          }, 0.24);

        const horizontalTween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            id: 'who-horizontal-dossier',
            trigger: root,
            pin: stage,
            start: 'top top',
            end: () => `+=${getScrollLength()}`,
            scrub: 0.72,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
            onUpdate: (self) => {
              gsap.set(progressFill, { scaleX: self.progress });
              const nextIndex = Math.min(
                panels.length - 1,
                Math.round(self.progress * (panels.length - 1))
              );
              setActivePanel(nextIndex);
            }
          }
        });

        panels.forEach((panel, index) => {
          if (index === 0) return;

          const copyParts = panel.querySelectorAll('.who-h-copy-part');
          const drawLines = panel.querySelectorAll('.who-h-draw');
          const nodes = panel.querySelectorAll('.who-h-node');
          const timeline = gsap.timeline({
            defaults: { ease: 'whoHorizontalPrecision' },
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: 'left 80%',
              end: 'center 48%',
              scrub: 0.45
            }
          });

          timeline.addLabel('assemble', 0);

          timeline.fromTo(copyParts, {
            autoAlpha: 0,
            yPercent: 42
          }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.45,
            stagger: 0.045
          }, 'assemble');

          if (drawLines.length) {
            timeline.fromTo(drawLines, {
              strokeDashoffset: 1
            }, {
              strokeDashoffset: 0,
              duration: 0.62,
              stagger: { amount: 0.24, from: 'start' },
              ease: 'none'
            }, 'assemble+=0.04');
          }

          if (nodes.length) {
            timeline.fromTo(nodes, {
              autoAlpha: 0,
              scale: 0.82,
              transformOrigin: 'center center'
            }, {
              autoAlpha: 1,
              scale: 1,
              duration: 0.48,
              stagger: { amount: 0.28, from: 'center' },
              ease: 'whoHorizontalMechanical'
            }, 'assemble+=0.12');
          }

          if (panel.dataset.panel === 'vision') {
            timeline
              .fromTo(panel.querySelectorAll('.who-h-vision-module'), {
                x: (itemIndex) => (itemIndex % 2 === 0 ? 54 : -54),
                y: (itemIndex) => (itemIndex < 2 ? 42 : itemIndex > 3 ? -42 : 0)
              }, {
                x: 0,
                y: 0,
                duration: 0.58,
                stagger: 0.045,
                ease: 'whoHorizontalMechanical'
              }, 'assemble+=0.14')
              .to(panel.querySelectorAll('.who-h-orbit'), {
                rotation: (itemIndex) => itemIndex === 0 ? 84 : -112,
                transformOrigin: 'center center',
                duration: 0.84,
                ease: 'none'
              }, 'assemble+=0.1');
          }

          if (panel.dataset.panel === 'promise') {
            timeline
              .to(panel.querySelector('.who-h-idea'), {
                rotation: 180,
                transformOrigin: 'center center',
                duration: 0.72,
                ease: 'whoHorizontalMechanical'
              }, 'assemble+=0.08')
              .fromTo(panel.querySelectorAll('.who-h-promise-packet'), {
                x: 0,
                autoAlpha: 1
              }, {
                x: 302,
                autoAlpha: 0.18,
                duration: 0.74,
                stagger: 0.12,
                ease: 'none'
              }, 'assemble+=0.18');
          }

          if (panel.dataset.panel === 'capabilities') {
            timeline
              .fromTo(panel.querySelectorAll('.who-h-service'), {
                autoAlpha: 0,
                y: 32
              }, {
                autoAlpha: 1,
                y: 0,
                duration: 0.48,
                stagger: { amount: 0.36, from: 'start' }
              }, 'assemble+=0.08')
              .fromTo(panel.querySelectorAll('.who-h-service-stroke'), {
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0,
                duration: 0.56,
                stagger: { amount: 0.28, from: 'random' },
                ease: 'none'
              }, 'assemble+=0.18');
          }
        });

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
      root.classList.remove('who-h-static');
    };
  }, { scope: rootRef });

  return (
    <section className="who-h-root" ref={rootRef} aria-label="DAOVOS mission, vision, promise, and capabilities">
      <div className="who-h-stage" ref={stageRef}>
        <header className="who-h-chrome who-h-chrome--top">
          <span className="mono">01 // WHO WE ARE</span>
          <span className="who-h-chrome-datum" aria-hidden="true" />
          <span className="mono">HORIZONTAL SYSTEM DOSSIER — X/04</span>
        </header>

        <div className="who-h-track" ref={trackRef}>
          {PANELS.map((panel) => (
            <article className={`who-h-panel who-h-panel--${panel.id}`} data-panel={panel.id} key={panel.id}>
              <span className="who-h-panel-ghost mono" aria-hidden="true">{panel.index}</span>

              <div className="who-h-copy">
                <span className="who-h-eyebrow who-h-copy-part mono">{panel.eyebrow}</span>
                <div className="who-h-title-mask who-h-copy-part">
                  <h2>{panel.title}</h2>
                </div>
                <div className="who-h-title-mask who-h-copy-part">
                  <h2 className="who-h-title-outline">{panel.accent}</h2>
                </div>
                <p className="who-h-description who-h-copy-part">{panel.text}</p>

                {panel.signals.length > 0 && (
                  <div className="who-h-signals who-h-copy-part">
                    {panel.signals.map((signal, signalIndex) => (
                      <span className="mono" key={signal}>
                        <i>{String(signalIndex + 1).padStart(2, '0')}</i>
                        {signal}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="who-h-visual">
                <span className="who-h-visual-label mono">FIG. {panel.index} / LIVE SCHEMATIC</span>
                <Illustration id={panel.id} />
                <span className="who-h-visual-coordinate mono">DAO-{panel.index} / 26.08 / SYSTEM</span>
              </div>

              {panel.id === 'capabilities' && (
                <div className="who-h-final-stamp mono">
                  <span>STRUCTURE · PRECISION · MODULARITY · RELIABILITY · SCALE · PROGRESS</span>
                  <span>EST. MMXXVI — SPEC-DAOVOS-001</span>
                </div>
              )}
            </article>
          ))}
        </div>

        <footer className="who-h-chrome who-h-chrome--bottom">
          <span className="who-h-axis-label mono">SCROLL / X-AXIS</span>
          <div className="who-h-progress-track" aria-hidden="true">
            <span className="who-h-progress-fill" />
            {PANELS.slice(1).map((panel) => (
              <i style={{ '--who-h-stop': Number(panel.index) - 1 }} key={panel.index} />
            ))}
          </div>
          <div className="who-h-counter mono">
            {PANELS.map((panel) => (
              <span className="who-h-counter-num" key={panel.index}>{panel.index}</span>
            ))}
            <span className="who-h-counter-total">/ 04</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default WhoHorizontalDossier;
