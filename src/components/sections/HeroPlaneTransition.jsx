import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { DaovosWordmark } from '../brand';
import './hero-plane-transition.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('exchangePrecision', '0.16,1,0.3,1');
CustomEase.create('exchangeMechanical', '0.25,0,0,1');

const WORDMARK_ROWS = [
  { id: '01', direction: 1, duration: 25 },
  { id: '02', direction: -1, duration: 31 },
  { id: '03', direction: 1, duration: 28 },
  { id: '04', direction: -1, duration: 34 },
  { id: '05', direction: 1, duration: 27 }
];

const PREVIEW_COLUMNS = Array.from({ length: 11 }, (_, index) => index + 1);
const PREVIEW_ROWS = Array.from({ length: 7 }, (_, index) => index + 1);

const WordmarkGroup = ({ rowId, duplicate }) => (
  <div className="hero-plane-wordmark-group" aria-hidden="true">
    {[0, 1, 2].map((index) => (
      <DaovosWordmark
        className="hero-plane-wordmark"
        color="currentColor"
        width={560}
        key={`${rowId}-${duplicate}-${index}`}
      />
    ))}
  </div>
);

/**
 * Scroll-scrubbed exchange between the live hero and a preview of WHO WE ARE.
 * The children are the real hero, so its visual state is preserved as the
 * outgoing plane. The destination below remains the single live WHO section.
 */
export const HeroPlaneTransition = ({ children }) => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const stage = stageRef.current;
      if (!root || !stage) return undefined;

      const outgoing = root.querySelector('.hero-plane-outgoing');
      const incoming = root.querySelector('.hero-plane-incoming');
      const previewContent = root.querySelector('.hero-plane-preview-content');
      const fieldMeta = gsap.utils.toArray('.hero-plane-field-meta', root);
      const rowTracks = gsap.utils.toArray('.hero-plane-wordmark-track', root);
      const loops = [];
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
            root.classList.add('hero-plane-reduced');
            gsap.set(outgoing, { clearProps: 'all' });
            return () => root.classList.remove('hero-plane-reduced');
          }

          root.classList.remove('hero-plane-reduced');

          const planeScale = isDesktop ? 0.46 : 0.58;
          const heroExit = isDesktop ? -132 : -118;
          const incomingStart = isDesktop ? 118 : 106;

          gsap.set(outgoing, {
            yPercent: 0,
            scale: 1,
            autoAlpha: 1,
            transformOrigin: '50% 50%'
          });
          gsap.set(incoming, {
            yPercent: incomingStart,
            scale: planeScale,
            autoAlpha: 1,
            transformOrigin: '50% 50%'
          });
          gsap.set(previewContent, { autoAlpha: 1, scale: 1 });
          gsap.set(fieldMeta, { autoAlpha: 0, y: 10 });

          rowTracks.forEach((track, index) => {
            const row = WORDMARK_ROWS[index];
            const forward = row.direction > 0;
            const loop = gsap.fromTo(
              track,
              { xPercent: forward ? -50 : 0 },
              {
                xPercent: forward ? 0 : -50,
                duration: row.duration,
                repeat: -1,
                ease: 'none',
                paused: true
              }
            );
            loops.push(loop);
          });

          const loopControl = ScrollTrigger.create({
            trigger: root,
            start: 'top bottom',
            end: 'bottom top',
            onToggle: (self) => loops.forEach((loop) => loop.paused(!self.isActive))
          });
          loops.forEach((loop) => loop.paused(!loopControl.isActive));

          const timeline = gsap.timeline({
            defaults: { ease: 'exchangePrecision' },
            scrollTrigger: {
              id: 'hero-plane-exchange',
              trigger: root,
              pin: stage,
              pinSpacing: false,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.75,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: 10,
              onEnter: () => gsap.set(stage, { autoAlpha: 1 }),
              onEnterBack: () => gsap.set(stage, { autoAlpha: 1 }),
              onLeaveBack: () => gsap.set(stage, { autoAlpha: 1 }),
              onLeave: () => gsap.set(stage, { autoAlpha: 0 })
            }
          });

          timeline
            .addLabel('pullBack', 0)
            .to(fieldMeta, {
              autoAlpha: 1,
              y: 0,
              duration: 0.12,
              stagger: 0.025,
              ease: 'none'
            }, 'pullBack+=0.06')
            .to(outgoing, {
              scale: planeScale,
              duration: 0.27,
              ease: 'exchangeMechanical'
            }, 'pullBack')
            .addLabel('exchange', 0.29)
            .to(outgoing, {
              yPercent: heroExit,
              duration: 0.31,
              ease: 'exchangeMechanical'
            }, 'exchange')
            .to(incoming, {
              yPercent: 0,
              duration: 0.35,
              ease: 'exchangeMechanical'
            }, 'exchange+=0.03')
            .addLabel('receive', 0.66)
            .to(incoming, {
              scale: 1,
              duration: 0.29,
              ease: 'exchangeMechanical'
            }, 'receive')
            .to(fieldMeta, {
              autoAlpha: 0,
              y: -8,
              duration: 0.13,
              ease: 'none'
            }, 'receive+=0.08')
            .to(previewContent, {
              autoAlpha: 0,
              scale: 0.985,
              duration: 0.08,
              ease: 'none'
            }, 'receive+=0.27')
            .addLabel('handoff', 1);

          return () => {
            loopControl.kill();
            loops.splice(0).forEach((loop) => loop.kill());
          };
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
        root.classList.remove('hero-plane-reduced');
      };
    },
    { scope: rootRef }
  );

  return (
    <div className="hero-plane-root" ref={rootRef}>
      <div className="hero-plane-stage" ref={stageRef}>
        <div className="hero-plane-field" aria-hidden="true">
          <span className="hero-plane-field-meta hero-plane-field-meta--top mono">
            TRANSFER FIELD // HERO → WHO WE ARE
          </span>

          <div className="hero-plane-wordmark-rows">
            {WORDMARK_ROWS.map((row) => (
              <div className="hero-plane-wordmark-row" key={row.id}>
                <div className="hero-plane-wordmark-track">
                  <WordmarkGroup rowId={row.id} duplicate="a" />
                  <WordmarkGroup rowId={row.id} duplicate="b" />
                </div>
              </div>
            ))}
          </div>

          <span className="hero-plane-field-meta hero-plane-field-meta--bottom mono">
            PLANE 00 / PLANE 01 — SCROLL TO EXCHANGE
          </span>
          <span className="hero-plane-field-index mono">00—01</span>
        </div>

        <div className="hero-plane-surface hero-plane-outgoing">
          {children}
          <span className="hero-plane-edge" aria-hidden="true" />
        </div>

        <div className="hero-plane-surface hero-plane-incoming" aria-hidden="true">
          <div className="hero-plane-preview-grid">
            {PREVIEW_COLUMNS.map((index) => (
              <span
                className="hero-plane-preview-line hero-plane-preview-line--vertical"
                style={{ '--preview-line': index }}
                key={`column-${index}`}
              />
            ))}
            {PREVIEW_ROWS.map((index) => (
              <span
                className="hero-plane-preview-line hero-plane-preview-line--horizontal"
                style={{ '--preview-line': index }}
                key={`row-${index}`}
              />
            ))}
          </div>
          <div className="hero-plane-preview-content">
            <span className="hero-plane-preview-ghost">STUDIO</span>

            <div className="hero-plane-preview-rail">
              <span className="mono">WHO WE ARE</span>
              <i />
              <span className="mono">01 / 04</span>
            </div>

            <div className="hero-plane-preview-copy">
              <span className="hero-plane-preview-label mono">THE STUDIO</span>
              <p>NOT AN AGENCY.</p>
              <p className="hero-plane-preview-outline">A DIGITAL STUDIO.</p>
            </div>

            <span className="hero-plane-preview-coordinate mono">
              NEXT SECTION // 01
            </span>
          </div>
          <span className="hero-plane-edge" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default HeroPlaneTransition;
