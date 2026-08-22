import React from 'react';

/**
 * DAOVOS Hero Bottom-Left Specification Block
 * Matches the reference layout: bold technical uppercase title + descriptive narrative.
 */
export const HeroBottomLeft = ({
  title = 'LIMITED ALLOCATION',
  description = 'Own the next-generation digital system engineered for architectural precision, modular reliability and monumental scale.'
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
      <h3
        style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: '18px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--daovos-color-bone-white)',
          marginBottom: '8px'
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: '13px',
          lineHeight: 1.55,
          color: 'rgba(244, 238, 232, 0.65)',
          margin: 0
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default HeroBottomLeft;
