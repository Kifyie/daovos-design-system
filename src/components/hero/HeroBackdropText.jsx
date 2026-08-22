import React from 'react';

/**
 * DAOVOS Hero Backdrop Monumental Typography
 * Spans the background behind the 3D extruded logo with subtle architectural gradient fade.
 */
export const HeroBackdropText = ({ text = 'DAOVOS' }) => {
  return (
    <div
      className="hero-backdrop-text-container"
      style={{
        position: 'absolute',
        top: '46%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '92%',
        textAlign: 'center',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 5
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: 'clamp(5rem, 16vw, 17rem)',
          fontWeight: 700,
          letterSpacing: '0.04em',
          lineHeight: 0.85,
          textTransform: 'uppercase',
          margin: 0,
          background: 'linear-gradient(180deg, rgba(244, 238, 232, 0.22) 0%, rgba(244, 238, 232, 0.04) 75%, rgba(244, 238, 232, 0.0) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 2px 20px rgba(0,0,0,0.4))'
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default HeroBackdropText;
