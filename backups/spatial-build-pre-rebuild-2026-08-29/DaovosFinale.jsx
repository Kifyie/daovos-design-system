import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { DaovosWordmark } from '../brand';
import { DaovosDitherField, createDitherModel } from './DaovosDitherField';
import './daovos-finale.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('finalePrecision', '0.16,1,0.3,1');
CustomEase.create('finaleMechanical', '0.25,0,0,1');

const OUTPUT_REGISTER = [
  'CUSTOM WEBSITES',
  'LANDING EXPERIENCES',
  'COMMERCE SYSTEMS',
  'INTERFACE SYSTEMS',
  'CARE + OPTIMIZATION'
];

export const DaovosFinale = () => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const modelRef = useRef(createDitherModel({
    frequency: 1.2,
    amplitude: 0.74,
    pixelSize: 8,
    levels: 3,
    contrast: 1.08,
    rotation: 0,
    warp: 1.2,
    pattern: 4,
    seed: 5.73,
    tone: 0
  }));

  useGSAP(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return undefined;

    const field = root.querySelector('.finale-field');
    const shutters = gsap.utils.toArray('.finale-shutter', root);
    const prelude = root.querySelector('.finale-prelude');
    const seal = root.querySelector('.finale-seal');
    const seam = root.querySelector('.finale-seam');
    const wordmark = root.querySelector('.finale-wordmark-wrap');
    const titleLines = gsap.utils.toArray('.finale-title-line > span', root);
    const revealParts = gsap.utils.toArray('.finale-reveal', root);
    const registerItems = gsap.utils.toArray('.finale-register-item', root);
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
          root.classList.add('finale-static');
          return () => root.classList.remove('finale-static');
        }

        root.classList.remove('finale-static');
        const model = modelRef.current;
        gsap.set(shutters[0], { scaleY: 0, transformOrigin: 'center top' });
        gsap.set(shutters[1], { scaleY: 0, transformOrigin: 'center bottom' });
        gsap.set(seal, { autoAlpha: 0 });
        gsap.set(seam, { scaleX: 0, transformOrigin: 'center center' });
        gsap.set(wordmark, { autoAlpha: 0, scaleY: 0.08, transformOrigin: 'center center' });
        // The seal owns visibility, so the title itself stays resolved. This
        // prevents partial scrub states with the invitation but no headline.
        gsap.set(titleLines, { yPercent: 0 });
        gsap.set(revealParts, { autoAlpha: 0, y: 18 });
        gsap.set(registerItems, { autoAlpha: 0, x: -16 });

        const timeline = gsap.timeline({
          defaults: { ease: 'finalePrecision' },
          scrollTrigger: {
            id: 'daovos-finale',
            trigger: root,
            pin: stage,
            start: 'top top',
            end: () => `+=${Math.max(window.innerHeight * (isDesktop ? 2.25 : 1.65), isDesktop ? 1800 : 1300)}`,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 0
          }
        });

        timeline
          .fromTo(prelude.querySelectorAll('span, strong'), {
            autoAlpha: 0,
            y: 16
          }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.42,
            stagger: 0.08
          }, 0)
          .to(model, {
            frequency: 1.7,
            amplitude: 0.5,
            pixelSize: 5,
            levels: 5,
            contrast: 1.42,
            duration: 0.78
          }, 0)
          .to(prelude, { autoAlpha: 0, duration: 0.34 }, 0.62)
          .to(shutters, {
            scaleY: 1,
            duration: 0.78,
            stagger: 0.06,
            ease: 'finaleMechanical'
          }, 0.56)
          .to(field, {
            scaleY: 0.018,
            scaleX: 0.88,
            duration: 0.74,
            ease: 'finaleMechanical'
          }, 0.72)
          .to(model, { tone: 1, duration: 0.62 }, 0.66)
          .set(seal, { autoAlpha: 1 }, 1.12)
          .to(seam, { scaleX: 1, duration: 0.66, ease: 'finaleMechanical' }, 1.14)
          .to(wordmark, {
            autoAlpha: 1,
            scaleY: 1,
            duration: 0.72,
            ease: 'finaleMechanical'
          }, 1.24)
          .to(revealParts, {
            autoAlpha: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.055
          }, 1.54)
          .to(registerItems, {
            autoAlpha: 1,
            x: 0,
            duration: 0.38,
            stagger: 0.05
          }, 1.54)
          .to(field, { autoAlpha: 0, duration: 0.28 }, 1.62)
          .to({}, { duration: 0.58 });

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
      root.classList.remove('finale-static');
    };
  }, { scope: rootRef });

  return (
    <section className="finale-root" ref={rootRef} aria-label="DAOVOS final project invitation">
      <div className="finale-stage" ref={stageRef}>
        <div className="finale-field">
          <DaovosDitherField model={modelRef.current} />
        </div>

        <div className="finale-prelude mono" aria-hidden="true">
          <span>ALL FIVE DOCKS REGISTERED</span>
          <strong>THE SYSTEM HAS ARRIVED.</strong>
        </div>

        <div className="finale-shutter finale-shutter--top" aria-hidden="true" />
        <div className="finale-shutter finale-shutter--bottom" aria-hidden="true" />

        <div className="finale-seal">
          <header className="finale-chrome mono">
            <span>03 // DAOVOS SIGN-OFF</span>
            <span>PROJECT INTAKE / OPEN</span>
          </header>

          <div className="finale-wordmark-wrap" aria-label="DAOVOS">
            <DaovosWordmark width={1024} color="currentColor" />
          </div>

          <div className="finale-resolution">
            <div className="finale-title">
              <div className="finale-title-line"><span>YOU BRING</span></div>
              <div className="finale-title-line"><span>THE IDEA.</span></div>
            </div>

            <div className="finale-invitation">
              <span className="finale-reveal finale-invitation-label mono">THE NEXT SYSTEM / YOURS</span>
              <p className="finale-reveal">DAOVOS turns ambitious ideas into clear, durable digital experiences—from first interface to long-term care.</p>
              <a className="finale-reveal finale-project-link mono" href="mailto:hello@daovos.com?subject=Project%20inquiry">
                <span>START A PROJECT</span><i>↗</i>
              </a>
            </div>
          </div>

          <div className="finale-register mono" aria-label="DAOVOS output register">
            {OUTPUT_REGISTER.map((item, index) => (
              <span className="finale-register-item" key={item}><i>0{index + 1}</i>{item}</span>
            ))}
          </div>

          <footer className="finale-footer mono">
            <span>STRUCTURE · PRECISION · MODULARITY · RELIABILITY · SCALE · PROGRESS</span>
            <span>EST. MMXXVI — END / BEGIN</span>
          </footer>

          <span className="finale-seam" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default DaovosFinale;
