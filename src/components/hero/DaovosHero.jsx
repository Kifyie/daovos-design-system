import React from 'react';
import { HeroNavbar } from './HeroNavbar';
import { HeroBackdropText } from './HeroBackdropText';
import { Logo3DCanvas } from './Logo3DCanvas';
import { HeroAccentOverlay } from './HeroAccentOverlay';
import { HeroBottomLeft } from './HeroBottomLeft';
import { HeroFeatureCard } from './HeroFeatureCard';

/**
 * DAOVOS Master Full-Page Hero Section
 * Fully synthesized from the DAOVOS Visual Operating System,
 * matching the reference composition across 100% viewport width and height.
 */
export const DaovosHero = ({ onSpecimenClick }) => {
  return (
    <section
      className="daovos-hero-section texture-grain"
      style={{
        width: '100vw',
        minHeight: '100vh',
        height: '100vh',
        backgroundColor: '#0c0c0f',
        color: 'var(--daovos-color-bone-white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* 1. Deep Ambient Radial Atmosphere & Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(142, 68, 240, 0.09) 0%, rgba(12, 12, 15, 0.96) 75%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* 2. Top Navigation Bar (Full Bleed) */}
      <HeroNavbar onSpecimenClick={onSpecimenClick} />

      {/* 3. Middle Visual Core (Backdrop Typography + 3D Extruded Logo + Accent Overlays) */}
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
        {/* Layer A: Monumental Backdrop Text */}
        <HeroBackdropText text="DAOVOS" />

        {/* Layer B: Centerpiece 3D Extruded Logo (WebGL Three.js scaled proportionally) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <Logo3DCanvas scale={0.62} style={{ width: '100%', height: '100%', maxHeight: '520px' }} />
        </div>

        {/* Layer C: Expressive Calligraphic Accent Layer (Overlapping 3D Centerpiece) */}
        <HeroAccentOverlay
          leftText="MODERN"
          rightText="ARMOR"
          subText="Created for scale."
        />
      </div>

      {/* 4. Bottom Row: Specifications Narrative + Floating Feature Card */}
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
        {/* Bottom-Left Narrative */}
        <HeroBottomLeft
          title="LIMITED ALLOCATION"
          description="Own the next-generation digital system engineered for architectural precision, modular reliability and monumental scale."
        />

        {/* Bottom-Right Elevated Card */}
        <HeroFeatureCard
          title="THIS MONTH'S EXCLUSIVE"
          description="Pre-order now and unlock exclusive private architectural frameworks for enterprise scale."
          actionText="See more info"
        />
      </div>
    </section>
  );
};

export default DaovosHero;
