import React, { useEffect, useRef } from 'react';
import { DaovosHero } from '../hero/DaovosHero';
import { Logo3DCanvas } from '../hero/Logo3DCanvas';
import { WhoWeAre } from './WhoWeAre';
import './who.css';

/**
 * Hero Transition Stage — "The Gate" v2
 *
 * The 6 cuboids are the site map. On scroll:
 *   1. Formation breaks — five blocks scatter into the void
 *   2. The center-top cuboid re-centers, advances, grows into the
 *      WHO WE ARE monument (dark 3D world throughout)
 *   3. Hero chrome dissolves; the section headline lands on the monument
 *   4. Pin releases and the flowing WHO WE ARE section continues seamlessly
 *
 * A persistent Logo3DCanvas rides above the hero (whose internal twin is
 * suppressed via CSS) so the emblem never unmounts during the transition.
 */
export const HeroTransitionStage = ({ onSpecimenClick }) => {
  const gateRef = useRef(0);
  const pinRef = useRef(null);
  const heroLayerRef = useRef(null);
  const vignetteRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    let raf = 0;

    const sstep = (a, b, x) => {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const pin = pinRef.current;
      if (!pin) return;

      const vh = window.innerHeight || 1;
      const pinH = pin.offsetHeight || vh;
      const travel = Math.max(1, pinH - vh);

      // p = 0 at rest; 1 when the pin zone is fully consumed
      const raw = -pin.getBoundingClientRect().top / travel;
      const p = Math.min(1, Math.max(0, raw));

      gateRef.current = p;

      // Hero chrome (nav / HUD / copy) dissolves as the formation breaks
      if (heroLayerRef.current) {
        heroLayerRef.current.style.opacity = (1 - sstep(0.4, 0.78, p)).toFixed(3);
        heroLayerRef.current.style.pointerEvents =
          p > 0.35 ? 'none' : 'auto';
      }

      // Contrast veil behind the arriving headline
      if (vignetteRef.current) {
        vignetteRef.current.style.opacity = (sstep(0.5, 1, p) * 0.6).toFixed(3);
      }

      // Section headline lands on the monument
      if (captionRef.current) {
        const op = sstep(0.68, 0.97, p);
        captionRef.current.style.opacity = op.toFixed(3);
        captionRef.current.style.transform = `translate3d(0, ${((1 - op) * 46).toFixed(1)}px, 0)`;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="hts-stage">
      <div className="hts-pin" ref={pinRef}>
        <div className="hts-sticky">
          {/* Original hero (its internal canvas twin is CSS-suppressed) */}
          <div className="hts-hero-layer" ref={heroLayerRef}>
            <DaovosHero onSpecimenClick={onSpecimenClick} />
          </div>

          {/* The persistent emblem — performs the Gate choreography */}
          <div className="hts-model-layer" aria-hidden="true">
            <Logo3DCanvas scale={0.76} gateRef={gateRef} />
          </div>

          {/* Contrast veil + arriving section headline */}
          <div className="hts-vignette" ref={vignetteRef} aria-hidden="true" />
          <div className="hts-caption" ref={captionRef} aria-hidden="true">
            <span className="hts-caption-label mono">01 // WHO WE ARE</span>
            <h2 className="hts-caption-line">YOU BRING THE IDEA.</h2>
            <h2 className="hts-caption-line hts-caption-stroke">WE TURN IT DIGITAL.</h2>
            <p className="hts-caption-lead type-body-s">
              A DIGITAL STUDIO ENGINEERING IDEAS INTO POLISHED WEB EXPERIENCES
            </p>
          </div>
        </div>
      </div>

      <WhoWeAre panelRef={null} />
    </div>
  );
};

export default HeroTransitionStage;
