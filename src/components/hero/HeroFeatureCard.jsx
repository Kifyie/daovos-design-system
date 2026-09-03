import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * DAOVOS Hero Feature Slab (Bottom-Right)
 * Flat hairline architectural surface — square corners, no elevation.
 * Corner brackets draw in on hover; arrow action slides on hover.
 */
export const HeroFeatureSlab = ({
  title = 'ACCEPTING NEW COMMISSIONS',
  description = 'Two build slots remain for Q3 2026. Enterprise-scale systems, engineered end-to-end.',
  actionText = 'Start a project'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hero-slab flex-col justify-between"
      style={{
        width: '280px',
        padding: '18px 20px',
        zIndex: 25,
        boxSizing: 'border-box'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div className="flex-row items-center gap-2" style={{ marginBottom: '10px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              background: 'var(--daovos-color-bone-white)',
              display: 'inline-block'
            }}
          />
          <h4
            style={{
              fontFamily: 'var(--font-family-mono)',
              color: 'var(--daovos-color-bone-white)',
              margin: 0,
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase'
            }}
          >
            {title}
          </h4>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-family-body)',
            color: 'rgba(244, 238, 232, 0.75)',
            lineHeight: 1.55,
            fontSize: '12px',
            margin: 0
          }}
        >
          {description}
        </p>
      </div>

      <div
        className="slab-action flex-row items-center justify-between"
        style={{
          marginTop: '16px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(237, 230, 223, 0.12)',
          cursor: 'pointer'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: isHovered ? 'var(--daovos-color-pure-white)' : 'var(--daovos-color-bone-white)',
            transition: 'color var(--motion-duration-micro) var(--motion-ease-precision)'
          }}
        >
          {actionText}
        </span>
        <ArrowUpRight
          className="slab-arrow"
          size={14}
          strokeWidth={1.5}
          color="var(--daovos-color-bone-white)"
        />
      </div>
    </div>
  );
};

export default HeroFeatureSlab;
