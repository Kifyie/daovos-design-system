import React from 'react';

/**
 * DAOVOS Hero Bottom-Left Specification Block
 * Mono technical title with hairline datum + descriptive narrative.
 */
export const HeroBottomLeft = ({
  title = 'ARCHITECTURAL DIGITAL SYSTEMS',
  description = 'DAOVOS engineers modular visual operating systems — architectural precision, structural reliability, monumental scale.'
}) => {
  return (
    <div
      className="hero-bottom-left flex-col"
      style={{
        maxWidth: '340px',
        textAlign: 'left',
        zIndex: 25
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '12px'
        }}
      >
        <div
          style={{
            width: '32px',
            height: '1px',
            background: 'rgba(237, 230, 223, 0.4)'
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontSize: '9px',
            letterSpacing: '0.28em',
            color: 'rgba(244, 238, 232, 0.45)'
          }}
        >
          01 // INTRO
        </span>
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-family-mono)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--daovos-color-bone-white)',
          marginBottom: '12px'
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: '13px',
          lineHeight: 1.7,
          color: 'rgba(244, 238, 232, 0.68)',
          margin: 0,
          maxWidth: '320px'
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default HeroBottomLeft;
