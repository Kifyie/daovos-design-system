import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import './plane-shift.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('planePrecision', '0.16,1,0.3,1');
CustomEase.create('planeMechanical', '0.25,0,0,1');

const RAILS = Array.from({ length: 6 }, (_, index) => index);

/**
 * Content-free spatial handoff between the hero and WHO WE ARE.
 * The outgoing dark plane lifts away; a separate dark plane rises and locks in.
 */
export const PlaneShiftTransition = () => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const stage = stageRef.current;
      if (!root || !stage) return undefined;

      const outgoing = root.querySelector('.plane-shift-plane--outgoing');
      const incoming = root.querySelector('.plane-shift-plane--incoming');
      const datum = root.querySelector('.plane-shift-datum');
      const rails = gsap.utils.toArray('.plane-shift-rail', root);
      const registration = root.querySelector('.plane-shift-registration');

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
            root.classList.add('plane-shift-reduced');
            return () => root.classList.remove('plane-shift-reduced');
          }

          root.classList.remove('plane-shift-reduced');

          const outgoingTilt = isDesktop ? -24 : -15;
          const incomingTilt = isDesktop ? 24 : 15;
          const restingScale = isDesktop ? 0.82 : 0.9;

          gsap.set(outgoing, {
            yPercent: 0,
            rotationX: 0,
            scale: 1,
            z: 0,
            autoAlpha: 1,
            transformOrigin: '50% 100%'
          });
          gsap.set(incoming, {
            yPercent: 108,
            rotationX: incomingTilt,
            scale: restingScale,
            z: -180,
            autoAlpha: 1,
            transformOrigin: '50% 0%'
          });
          gsap.set(datum, { scaleX: 0, transformOrigin: 'center center' });
          gsap.set(rails, { scaleY: 0, transformOrigin: 'center center', autoAlpha: 0 });
          gsap.set(registration, { scale: 0.7, autoAlpha: 0, rotation: -45 });

          const timeline = gsap.timeline({
            defaults: { ease: 'planePrecision' },
            scrollTrigger: {
              id: 'plane-shift-handoff',
              trigger: root,
              pin: stage,
              start: 'top top',
              end: 'bottom top',
              pinSpacing: false,
              scrub: 0.65,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: -10
            }
          });

          timeline
            .addLabel('release', 0)
            .to(datum, {
              scaleX: 1,
              duration: 0.2,
              ease: 'planeMechanical'
            }, 'release')
            .to(rails, {
              scaleY: 1,
              autoAlpha: 0.34,
              duration: 0.24,
              stagger: { each: 0.018, from: 'center' },
              ease: 'planeMechanical'
            }, 'release+=0.03')
            .to(registration, {
              scale: 1,
              autoAlpha: 1,
              rotation: 0,
              duration: 0.2
            }, 'release+=0.06')
            .to(outgoing, {
              yPercent: -76,
              rotationX: outgoingTilt,
              scale: restingScale,
              z: -180,
              duration: 0.5,
              ease: 'planeMechanical'
            }, 'release+=0.04')
            .to(outgoing, {
              autoAlpha: 0,
              duration: 0.1,
              ease: 'none'
            }, 'release+=0.43')
            .addLabel('receive', 0.4)
            .to(incoming, {
              yPercent: 0,
              rotationX: 0,
              scale: 1,
              z: 0,
              duration: 0.5,
              ease: 'planeMechanical'
            }, 'receive')
            .to([datum, registration], {
              autoAlpha: 0,
              duration: 0.14,
              ease: 'none'
            }, 'receive+=0.34')
            .to(rails, {
              scaleY: 0,
              autoAlpha: 0,
              duration: 0.18,
              stagger: { each: 0.012, from: 'edges' },
              ease: 'planeMechanical'
            }, 'receive+=0.33');

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
        root.classList.remove('plane-shift-reduced');
      };
    },
    { scope: rootRef }
  );

  return (
    <section
      className="plane-shift-root"
      ref={rootRef}
      aria-label="Transition to Who We Are"
    >
      <div className="plane-shift-stage" ref={stageRef} aria-hidden="true">
        <div className="plane-shift-void">
          <span className="plane-shift-datum" />
          <div className="plane-shift-rails">
            {RAILS.map((index) => (
              <span
                className="plane-shift-rail"
                style={{ '--plane-rail-index': index }}
                key={index}
              />
            ))}
          </div>
          <span className="plane-shift-registration" />
        </div>

        <div className="plane-shift-plane plane-shift-plane--outgoing">
          <span className="plane-shift-edge plane-shift-edge--bottom" />
        </div>

        <div className="plane-shift-plane plane-shift-plane--incoming">
          <span className="plane-shift-edge plane-shift-edge--top" />
        </div>
      </div>
    </section>
  );
};

export default PlaneShiftTransition;
