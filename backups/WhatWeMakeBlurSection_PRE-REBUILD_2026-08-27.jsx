import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import './what-we-make.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('whatWeMakePrecision', '0.16,1,0.3,1');
CustomEase.create('whatWeMakeMechanical', '0.25,0,0,1');

const OUTPUTS = [
  {
    index: '01',
    title: 'CUSTOM WEBSITES',
    label: 'IDENTITY → DIGITAL HOME',
    description: 'Distinctive, responsive websites built around the brand instead of a recycled template.',
    deliverables: ['BUSINESS WEBSITES', 'PORTFOLIO SITES', 'BRAND PLATFORMS'],
    variant: 'website'
  },
  {
    index: '02',
    title: 'LANDING EXPERIENCES',
    label: 'ATTENTION → ACTION',
    description: 'Focused launch pages and campaign experiences engineered to make one message land clearly.',
    deliverables: ['LANDING PAGES', 'PRODUCT LAUNCHES', 'CAMPAIGN PAGES'],
    variant: 'landing'
  },
  {
    index: '03',
    title: 'COMMERCE SYSTEMS',
    label: 'PRODUCT → PURCHASE',
    description: 'Structured storefronts that make discovery, decision, and checkout feel like one continuous system.',
    deliverables: ['E-COMMERCE', 'PRODUCT CATALOGUES', 'CONVERSION FLOWS'],
    variant: 'commerce'
  },
  {
    index: '04',
    title: 'UI / UX SYSTEMS',
    label: 'COMPLEXITY → CLARITY',
    description: 'Interface systems that organize content, behavior, and responsive states into a coherent product.',
    deliverables: ['INTERFACE DESIGN', 'DESIGN SYSTEMS', 'RESPONSIVE UX'],
    variant: 'product'
  },
  {
    index: '05',
    title: 'CARE + OPTIMIZATION',
    label: 'LIVE → ALWAYS BETTER',
    description: 'Long-term technical care that keeps the experience fast, current, and reliable after launch.',
    deliverables: ['MAINTENANCE', 'MOBILE OPTIMIZATION', 'ITERATIVE REDESIGNS'],
    variant: 'care'
  }
];

const DrawLine = (props) => <line className="wwm-draw" pathLength="1" {...props} />;

const OutputSchematic = ({ variant }) => (
  <svg className="wwm-schematic" viewBox="0 0 520 260" aria-hidden="true">
    {variant === 'website' && <>
      <g className="wwm-node">
        <rect className="wwm-draw" pathLength="1" x="70" y="34" width="380" height="192" />
        <DrawLine x1="70" y1="74" x2="450" y2="74" />
        <circle cx="92" cy="54" r="4" />
        <circle cx="108" cy="54" r="4" />
        <rect className="wwm-draw" pathLength="1" x="94" y="98" width="144" height="96" />
        <DrawLine x1="266" y1="106" x2="420" y2="106" />
        <DrawLine x1="266" y1="132" x2="388" y2="132" />
        <DrawLine x1="266" y1="174" x2="420" y2="174" />
      </g>
      <path className="wwm-draw" pathLength="1" d="M28 130H70M450 130H492" />
    </>}

    {variant === 'landing' && <>
      <g className="wwm-node">
        <rect className="wwm-draw" pathLength="1" x="166" y="22" width="188" height="216" />
        <rect className="wwm-draw" pathLength="1" x="188" y="48" width="144" height="70" />
        <DrawLine x1="188" y1="140" x2="312" y2="140" />
        <DrawLine x1="188" y1="162" x2="286" y2="162" />
        <rect className="wwm-draw" pathLength="1" x="188" y="188" width="70" height="24" />
      </g>
      <path className="wwm-draw wwm-vector" pathLength="1" d="M76 196C112 126 126 92 166 70" />
      <path className="wwm-draw wwm-vector" pathLength="1" d="M150 70H166V86" />
      <path className="wwm-draw wwm-vector" pathLength="1" d="M354 188C402 178 428 144 446 94" />
      <path className="wwm-draw wwm-vector" pathLength="1" d="M434 102L446 94L450 110" />
    </>}

    {variant === 'commerce' && <>
      <g className="wwm-node">
        {[72, 174, 276].map((x, index) => (
          <g key={x}>
            <rect className="wwm-draw" pathLength="1" x={x} y="48" width="78" height="108" />
            <rect className="wwm-draw" pathLength="1" x={x + 12} y="60" width="54" height="50" />
            <DrawLine x1={x + 12} y1="126" x2={x + 62 - index * 5} y2="126" />
          </g>
        ))}
        <rect className="wwm-draw" pathLength="1" x="378" y="96" width="76" height="60" />
        <path className="wwm-draw" pathLength="1" d="M389 108H398L404 139H440L446 116H400" />
      </g>
      <path className="wwm-draw wwm-vector" pathLength="1" d="M110 184H416" />
      <circle className="wwm-node" cx="110" cy="184" r="5" />
      <circle className="wwm-node" cx="416" cy="184" r="5" />
    </>}

    {variant === 'product' && <>
      <g className="wwm-node">
        <rect className="wwm-draw" pathLength="1" x="46" y="44" width="258" height="170" />
        <DrawLine x1="46" y1="78" x2="304" y2="78" />
        <DrawLine x1="120" y1="78" x2="120" y2="214" />
        <rect className="wwm-draw" pathLength="1" x="334" y="28" width="130" height="206" />
        <DrawLine x1="334" y1="62" x2="464" y2="62" />
        <rect className="wwm-draw" pathLength="1" x="352" y="88" width="94" height="62" />
        <DrawLine x1="352" y1="176" x2="432" y2="176" />
        <DrawLine x1="352" y1="196" x2="410" y2="196" />
      </g>
      <path className="wwm-draw wwm-vector" pathLength="1" d="M304 130H334" />
      <circle className="wwm-node" cx="319" cy="130" r="4" />
    </>}

    {variant === 'care' && <>
      <g className="wwm-node">
        <circle className="wwm-draw wwm-orbit" pathLength="1" cx="260" cy="130" r="96" />
        <circle className="wwm-draw wwm-orbit" pathLength="1" cx="260" cy="130" r="58" />
        <rect className="wwm-draw" pathLength="1" x="222" y="92" width="76" height="76" />
        <DrawLine x1="222" y1="130" x2="298" y2="130" />
        <DrawLine x1="260" y1="92" x2="260" y2="168" />
      </g>
      {[0, 90, 180, 270].map((rotation) => (
        <g className="wwm-node" style={{ transformOrigin: '260px 130px', transform: `rotate(${rotation}deg)` }} key={rotation}>
          <rect className="wwm-draw" pathLength="1" x="250" y="16" width="20" height="20" />
          <DrawLine x1="260" y1="36" x2="260" y2="72" />
        </g>
      ))}
    </>}
  </svg>
);

export const WhatWeMakeBlurSection = () => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  useGSAP(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return undefined;

    const indexItems = gsap.utils.toArray('.wwm-index-item', root);
    const details = gsap.utils.toArray('.wwm-detail', root);
    const counters = gsap.utils.toArray('.wwm-counter-number', root);
    const progress = root.querySelector('.wwm-progress-fill');
    const mm = gsap.matchMedia();
    let mounted = true;

    mm.add(
      {
        animate: '(prefers-reduced-motion: no-preference)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
      },
      ({ conditions }) => {
        if (conditions.reduceMotion) {
          root.classList.add('wwm-static');
          return () => root.classList.remove('wwm-static');
        }

        root.classList.remove('wwm-static');
        let activeIndex = 0;

        gsap.set(indexItems, {
          autoAlpha: 0.16,
          x: 18,
          scale: 0.965,
          filter: 'blur(7px)',
          transformOrigin: 'left center'
        });
        gsap.set(indexItems[0], { autoAlpha: 1, x: 0, scale: 1, filter: 'blur(0px)' });
        gsap.set(details, { autoAlpha: 0, y: 34, filter: 'blur(8px)' });
        gsap.set(details[0], { autoAlpha: 1, y: 0, filter: 'blur(0px)' });
        gsap.set(counters, { autoAlpha: 0, yPercent: 70 });
        gsap.set(counters[0], { autoAlpha: 1, yPercent: 0 });
        gsap.set(progress, { scaleY: 0, transformOrigin: 'center top' });
        gsap.set(details[0].querySelectorAll('.wwm-draw'), { strokeDashoffset: 0 });

        const setActiveCounter = (nextIndex) => {
          if (nextIndex === activeIndex) return;
          gsap.to(counters[activeIndex], {
            autoAlpha: 0,
            yPercent: -70,
            duration: 0.3,
            ease: 'whatWeMakePrecision',
            overwrite: true
          });
          gsap.fromTo(counters[nextIndex], {
            autoAlpha: 0,
            yPercent: 70
          }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.3,
            ease: 'whatWeMakePrecision',
            overwrite: true
          });
          activeIndex = nextIndex;
        };

        const timeline = gsap.timeline({
          defaults: { ease: 'whatWeMakePrecision' },
          scrollTrigger: {
            id: 'what-we-make-blur',
            trigger: root,
            pin: stage,
            start: 'top top',
            end: () => `+=${Math.max(window.innerHeight * 4.1, 2800)}`,
            scrub: 0.72,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 0,
            onUpdate: (self) => {
              gsap.set(progress, { scaleY: self.progress });
              const nextIndex = Math.min(OUTPUTS.length - 1, Math.round(self.progress * (OUTPUTS.length - 1)));
              setActiveCounter(nextIndex);
            }
          }
        });

        timeline.to({}, { duration: 0.58 });

        OUTPUTS.slice(1).forEach((_, itemIndex) => {
          const index = itemIndex + 1;
          const at = index * 1.28;
          const detail = details[index];

          timeline
            .to(indexItems[index - 1], {
              autoAlpha: 0.16,
              x: -12,
              scale: 0.965,
              filter: 'blur(7px)',
              duration: 0.48
            }, at)
            .to(indexItems[index], {
              autoAlpha: 1,
              x: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.58
            }, at)
            .to(details[index - 1], {
              autoAlpha: 0,
              y: -28,
              filter: 'blur(8px)',
              duration: 0.42
            }, at)
            .fromTo(detail, {
              autoAlpha: 0,
              y: 34,
              filter: 'blur(8px)'
            }, {
              autoAlpha: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.58
            }, at + 0.08)
            .fromTo(detail.querySelectorAll('.wwm-draw'), {
              strokeDashoffset: 1
            }, {
              strokeDashoffset: 0,
              duration: 0.72,
              stagger: { amount: 0.24, from: 'start' },
              ease: 'none'
            }, at + 0.12)
            .fromTo(detail.querySelectorAll('.wwm-node'), {
              autoAlpha: 0,
              scale: 0.86,
              transformOrigin: 'center center'
            }, {
              autoAlpha: 1,
              scale: 1,
              duration: 0.5,
              stagger: { amount: 0.2, from: 'center' },
              ease: 'whatWeMakeMechanical'
            }, at + 0.16);

          if (OUTPUTS[index].variant === 'care') {
            timeline.to(detail.querySelectorAll('.wwm-orbit'), {
              rotation: (orbitIndex) => orbitIndex ? -120 : 90,
              transformOrigin: 'center center',
              duration: 0.9,
              ease: 'none'
            }, at + 0.16);
          }
        });

        timeline.to({}, { duration: 0.72 });
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
      root.classList.remove('wwm-static');
    };
  }, { scope: rootRef });

  return (
    <section className="wwm-root" ref={rootRef} aria-label="What DAOVOS makes">
      <div className="wwm-stage" ref={stageRef}>
        <header className="wwm-chrome wwm-chrome--top mono">
          <span>02 // WHAT WE MAKE</span>
          <span>OUTPUT REGISTER / 05</span>
        </header>

        <div className="wwm-layout">
          <div className="wwm-editorial">
            <span className="wwm-kicker mono">DAOVOS DIGITAL STUDIO — OUTPUTS</span>
            <h2>WE MAKE THE<br />DIGITAL PART<br />FEEL INEVITABLE.</h2>

            <div className="wwm-detail-stack">
              {OUTPUTS.map((output) => (
                <article className="wwm-detail" key={output.title}>
                  <span className="wwm-detail-label mono">{output.label}</span>
                  <p>{output.description}</p>
                  <div className="wwm-deliverables mono">
                    {output.deliverables.map((deliverable, index) => (
                      <span key={deliverable}><i>0{index + 1}</i>{deliverable}</span>
                    ))}
                  </div>
                  <div className="wwm-schematic-frame">
                    <OutputSchematic variant={output.variant} />
                    <span className="wwm-schematic-tag mono">LIVE OUTPUT SCHEMATIC / {output.index}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="wwm-output-index" aria-label="DAOVOS output categories">
            <span className="wwm-index-heading mono">SELECTED OUTPUT RANGE</span>
            {OUTPUTS.map((output) => (
              <div className="wwm-index-item" key={output.title}>
                <span className="mono">{output.index}</span>
                <strong>{output.title}</strong>
              </div>
            ))}
            <a className="wwm-reference mono" href="https://skiper-ui.com/v1/skiper44" target="_blank" rel="noreferrer">
              SCROLL STUDY / SKIPER 44 ↗
            </a>
          </div>
        </div>

        <footer className="wwm-chrome wwm-chrome--bottom mono">
          <span>SCROLL TO INSPECT</span>
          <div className="wwm-progress-track" aria-hidden="true"><span className="wwm-progress-fill" /></div>
          <div className="wwm-counter">
            {OUTPUTS.map((output) => <span className="wwm-counter-number" key={output.index}>{output.index}</span>)}
            <span className="wwm-counter-total">/ 05</span>
          </div>
        </footer>

        <span className="wwm-ghost" aria-hidden="true">MAKE</span>
      </div>
    </section>
  );
};

export default WhatWeMakeBlurSection;
