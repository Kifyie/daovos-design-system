import React from 'react';
import { HeroNavbar } from './HeroNavbar';
import { HeroBackdropText } from './HeroBackdropText';
import { Logo3DCanvas } from './Logo3DCanvas';
import { HeroAccentOverlay } from './HeroAccentOverlay';
import { HeroBottomLeft } from './HeroBottomLeft';
import { HeroFeatureCard } from './HeroFeatureCard';

/**
 * DAOVOS Master Hero Section
 * Fully synthesized from the DAOVOS Visual Operating System
 * and faithfully referencing the composition from the uploaded design.
 */
export const DaovosHero = ({ onSpecimenClick }) => {
  return (
    <section
      className="daovos-hero-section"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 40px)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Deep Ambient Background Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(130, 60, 220, 0.08) 0%, rgba(10, 10, 12, 0.95) 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* Main Architectural Showcase Card Frame (Matching Reference) */}
      <div
        className="hero-stage-card texture-grain"
        style={{
          width: '100%',
          maxWidth: '1380px',
          minHeight: '820px',
          height: '88vh',
          backgroundColor: '#121215',
          borderRadius: '32px',
          border: '1px solid rgba(244, 238, 232, 0.08)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          padding: '0 0 clamp(24px, 4vw, 44px) 0'
        }}
      >
        {/* Subtle Ambient Vignette & Internal Lighting */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 45%, rgba(158, 71, 255, 0.06) 0%, rgba(18, 18, 21, 0.85) 75%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* 1. Top Navigation Bar */}
        <HeroNavbar onSpecimenClick={onSpecimenClick} />

        {/* 2. Middle Visual Core (Backdrop Typography + 3D Extruded Logo + Accent Overlays) */}
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

          {/* Layer B: Centerpiece 3D Extruded Logo (WebGL Three.js) */}
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
            <Logo3DCanvas style={{ width: '100%', height: '100%', maxHeight: '560px' }} />
          </div>

          {/* Layer C: Expressive Calligraphic Accent Layer (Overlapping 3D Centerpiece) */}
          <HeroAccentOverlay
            leftText="MODERN"
            rightText="ARMOR"
            subText="Created for scale."
          />
        </div>

        {/* 3. Bottom Row: Specifications Narrative + Floating Feature Card */}
        <div
          className="hero-bottom-row flex-row justify-between items-end"
          style={{
            padding: '0 clamp(24px, 4vw, 48px)',
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
      </div>
    </section>
  );
};

export default DaovosHero;
