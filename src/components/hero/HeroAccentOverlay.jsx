import React from 'react';

/**
 * DAOVOS Hero Accent Typographic Layer
 * Matches the reference image's expressive layered calligraphic accent text
 * overlapping across the 3D centerpiece.
 */
export const HeroAccentOverlay = ({
  leftText = 'MODERN',
  rightText = 'ARMOR',
  subText = 'Created for scale.'
}) => {
  return (
    <div
      className="hero-accent-overlay"
      style={{
        position: 'absolute',
        top: '52%',
        left: '0',
        right: '0',
        transform: 'translateY(-50%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 6%',
        pointerEvents: 'none',
        zIndex: 20
      }}
    >
      {/* Left Expressive Accent Block */}
      <div className="flex-col items-start" style={{ textAlign: 'left' }}>
        <span
          style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
            fontWeight: 700,
            lineHeight: 0.9,
            color: '#9e47ff',
            letterSpacing: '0.01em',
            textShadow: '0 0 25px rgba(158, 71, 255, 0.45), 0 2px 10px rgba(0,0,0,0.8)'
          }}
        >
          {leftText}
        </span>
        {subText && (
          <span
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: 'clamp(1.25rem, 2.8vw, 2.5rem)',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.95)',
              marginTop: '4px',
              letterSpacing: '0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,0.9)'
            }}
          >
            {subText}
          </span>
        )}
      </div>

      {/* Right Expressive Accent Block */}
      <div className="flex-col items-end" style={{ textAlign: 'right' }}>
        <span
          style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
            fontWeight: 700,
            lineHeight: 0.9,
            color: '#9e47ff',
            letterSpacing: '0.01em',
            textShadow: '0 0 25px rgba(158, 71, 255, 0.45), 0 2px 10px rgba(0,0,0,0.8)'
          }}
        >
          {rightText}
        </span>
      </div>
    </div>
  );
};

export default HeroAccentOverlay;
