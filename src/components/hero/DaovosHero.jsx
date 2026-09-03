import React, { useEffect, useRef, useState } from 'react';
import { HeroBackdropText } from './HeroBackdropText';
import { Logo3DCanvas } from './Logo3DCanvas';
import { HeroAccentOverlay } from './HeroAccentOverlay';
import { HeroBottomLeft } from './HeroBottomLeft';
import { HeroFeatureSlab } from './HeroFeatureCard';
import { HeroIntroReveal } from './HeroIntroReveal';
import { HeroHud } from './HeroHud';
import { LineWaves } from './LineWaves';
import { RippleDistortion } from './RippleDistortion';
import { HeroGrain } from './HeroGrain';
import { HeroBlueprintReveal } from './HeroBlueprintReveal';
import { HeroTopRail } from './HeroTopRail';
import './hero.css';

/**
 * DAOVOS Master Full-Page Hero Section
 * Orchestrated entrance → ambient parallax → instrument HUD.
 * The 3D emblem (Logo3DCanvas) is untouched; all depth layers live around it.
 */
export const DaovosHero = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [blueprintActive, setBlueprintActive] = useState(true);
  const sectionRef = useRef(null);

  // Reveal choreography: intro plates part → blueprint hairlines trace the
  // grid (~1.05s) → hero content lands as the blueprint dissolves.
  const handleIntroComplete = () => {
    setTimeout(() => setHasEntered(true), 1050);
    setTimeout(() => setBlueprintActive(false), 1250);
  };

  // Mouse parallax engine — lerps normalized cursor into --par-x / --par-y.
  // Depth layers consume the vars in hero.css. The 3D canvas is not affected.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const loop = () => {
      current.x += (target.x - current.x) * 0.045;
      current.y += (target.y - current.y) * 0.045;
      const el = sectionRef.current;
      if (el) {
        el.style.setProperty('--par-x', current.x.toFixed(4));
        el.style.setProperty('--par-y', current.y.toFixed(4));
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="daovos-hero-section"
      style={{
        width: '100vw',
        minHeight: '100vh',
        height: '100vh',
        backgroundColor: '#0a0a0d',
        color: 'var(--daovos-color-bone-white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* 0. Fullscreen 2D SVG Logo Opening Preloader & Dual-Blade Shutter Reveal */}
      <HeroIntroReveal onComplete={handleIntroComplete} />

      {/* 0b. Blueprint hairline reveal — grid traces, then dissolves under content */}
      <HeroBlueprintReveal active={blueprintActive} />

      {/* 1a. Ripple Distortion substrate — dimmed concrete plate, cursor ripples through it */}
      <div
        className="hero-ripple-bg"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          opacity: 0.16,
          filter: 'contrast(1.05)'
        }}
      >
        <RippleDistortion
          src="/images/specimens/hero.jpeg"
          brushSize={180}
          strength={0.22}
          swirl={0.8}
          rings={4}
          spread={6}
          fade={3}
          spacing={18}
          dispersion={0.012}
          glint={0.12}
          tint="#EDE6DF"
          tintAmount={0.05}
          grayscale={true}
          trigger="hover"
          quality="medium"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* 1. LineWaves Background — quieter, slower, masked away from center */}
      <div
        className="hero-linewaves-bg"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          filter: 'blur(1.5px)',
          opacity: 0.42,
          transform: 'scale(1.02)'
        }}
      >
        <LineWaves
          speed={0.2}
          innerLineCount={68}
          outerLineCount={68}
          warpIntensity={1.6}
          rotation={-84}
          edgeFadeWidth={0.2}
          colorCycleSpeed={1.0}
          brightness={0.07}
          color1="#EDE6DF"
          color2="#EDE6DF"
          color3="#EDE6DF"
          enableMouseInteraction={true}
          mouseInfluence={2.0}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* 2. Soft Vignette & Edge Feathering (rebalanced — waves now self-mask) */}
      <div
        className="hero-feather-gradient-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 47%, rgba(10, 10, 13, 0.08) 0%, rgba(10, 10, 13, 0.42) 62%, rgba(10, 10, 13, 0.86) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '140px',
          background: 'linear-gradient(to bottom, rgba(10, 10, 13, 0.8) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          background: 'linear-gradient(to top, rgba(10, 10, 13, 0.85) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      {/* 3. Floor light spill — grounds the emblem without touching the model */}
      <div className="hero-floor-glow" />

      {/* 3b. Film grain plate — material warmth over the scene */}
      <HeroGrain />

      {/* 4. Non-interactive studio masthead */}
      <HeroTopRail entered={hasEntered} />

      {/* 5. Middle Visual Core (Backdrop Monument + 3D Emblem + Flanking Type) */}
      <div
        className="hero-visual-core"
        style={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          overflow: 'visible'
        }}
      >
        {/* Layer A: Monumental Backdrop Text — visible, breathing, parallax deep */}
        <div
          style={{
            transform: hasEntered ? 'scale(1)' : 'scale(0.94)',
            opacity: hasEntered ? 1 : 0,
            transition: 'all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none'
          }}
        >
          <HeroBackdropText text="DAOVOS" />
        </div>

        {/* Layer B: Centerpiece 3D Extruded Logo — UNTOUCHED */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transform: hasEntered ? 'scale(1)' : 'scale(0.85)',
            opacity: hasEntered ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.35s'
          }}
        >
          <Logo3DCanvas
            scale={0.76}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Layer C: Flanking Display Type — tucks behind the emblem (z 8 < 10) */}
        <div
          style={{
            transform: hasEntered ? 'translateY(0)' : 'translateY(20px)',
            opacity: hasEntered ? 1 : 0,
            transition: 'opacity 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 8
          }}
        >
          <HeroAccentOverlay
            leftText="DIGITAL"
            rightText="SYSTEMS"
            subText="Engineered for scale."
            entered={hasEntered}
          />
        </div>
      </div>

      {/* 6. Bottom Row: Specification Narrative + Feature Slab (independent entrances) */}
      <div
        className="hero-bottom-row flex-row justify-between items-end"
        style={{
          padding: '0 clamp(24px, 5vw, 64px) clamp(24px, 4vh, 48px)',
          position: 'relative',
          zIndex: 30,
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            transform: hasEntered ? 'translateY(0)' : 'translateY(28px)',
            opacity: hasEntered ? 1 : 0,
            transition: 'transform 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, opacity 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
          }}
        >
          <HeroBottomLeft
            title="ARCHITECTURAL DIGITAL SYSTEMS"
            description="DAOVOS engineers modular visual operating systems — architectural precision, structural reliability, monumental scale."
          />
        </div>

        <div
          style={{
            transform: hasEntered ? 'translateY(0)' : 'translateY(44px)',
            opacity: hasEntered ? 1 : 0,
            transition: 'transform 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.68s, opacity 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.68s'
          }}
        >
          <HeroFeatureSlab
            title="ACCEPTING NEW COMMISSIONS"
            description="Two build slots remain for Q3 2026. Enterprise-scale systems, engineered end-to-end."
            actionText="Start a project"
          />
        </div>
      </div>

      {/* 7. HUD — registration marks, rails, telemetry, scroll cue (fades in last) */}
      <HeroHud entered={hasEntered} />
    </section>
  );
};

export default DaovosHero;
