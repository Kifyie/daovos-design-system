import React, { useState } from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';

/**
 * DAOVOS Hero Feature Card (Bottom-Right)
 * Matches the reference image's elevated floating information module.
 */
export const HeroFeatureCard = ({
  title = "THIS MONTH'S EXCLUSIVE",
  description = 'Pre-order now and unlock exclusive private architectural frameworks for enterprise scale.',
  actionText = 'See more info'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hero-feature-card flex-col justify-between"
      style={{
        width: '260px',
        padding: '20px',
        backgroundColor: 'rgba(26, 26, 30, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(244, 238, 232, 0.12)',
        borderRadius: '16px',
        boxShadow: '0 16px 36px rgba(0, 0, 0, 0.5)',
        zIndex: 25,
        transition: 'transform var(--motion-duration-interface) var(--motion-ease-precision), border-color var(--motion-duration-micro) var(--motion-ease-precision)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)',
        borderColor: isHovered ? 'rgba(244, 238, 232, 0.3)' : 'rgba(244, 238, 232, 0.12)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <h4
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--daovos-color-bone-white)',
            marginBottom: '8px'
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontFamily: 'var(--font-family-body)',
            fontSize: '12px',
            lineHeight: 1.5,
            color: 'rgba(244, 238, 232, 0.6)',
            margin: 0
          }}
        >
          {description}
        </p>
      </div>

      <div
        className="flex-row items-center gap-2"
        style={{
          marginTop: '16px',
          cursor: 'pointer'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-family-body)',
            fontSize: '12px',
            fontWeight: 500,
            color: isHovered ? 'var(--daovos-color-pure-white)' : 'rgba(244, 238, 232, 0.85)',
            transition: 'color var(--motion-duration-micro) var(--motion-ease-precision)'
          }}
        >
          {actionText}
        </span>
        <div
          className="flex-row items-center justify-between"
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 238, 232, 0.1)',
            justifyContent: 'center',
            color: 'rgba(244, 238, 232, 0.85)'
          }}
        >
          <Eye size={11} />
        </div>
      </div>
    </div>
  );
};

export default HeroFeatureCard;
