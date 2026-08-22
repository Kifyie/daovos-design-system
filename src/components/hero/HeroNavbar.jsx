import React from 'react';
import { DaovosLockup } from '../brand/DaovosLockup';
import { ArrowUpRight } from 'lucide-react';

/**
 * DAOVOS Hero Top Navigation Bar
 * Matches the reference layout: Left Brand, Centered Navigation, Right Action Button.
 */
export const HeroNavbar = ({ onSpecimenClick }) => {
  return (
    <nav
      className="hero-navbar flex-row justify-between items-center"
      style={{
        width: '100%',
        padding: '24px 36px',
        position: 'relative',
        zIndex: 50
      }}
    >
      {/* Left: Brand Lockup */}
      <div className="flex-row items-center gap-3">
        <DaovosLockup symbolSize={30} wordmarkWidth={115} color="var(--daovos-color-bone-white)" />
      </div>

      {/* Center: Navigation Links */}
      <div
        className="flex-row items-center gap-8"
        style={{
          display: 'flex'
        }}
      >
        {['Studio', 'Who We Are', 'Process', 'Recognition'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
            className="type-label"
            style={{
              color: 'rgba(244, 238, 232, 0.75)',
              letterSpacing: '0.12em',
              textTransform: 'none',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'color var(--motion-duration-micro) var(--motion-ease-precision)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 238, 232, 0.75)')}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right: Action Button */}
      <div className="flex-row items-center gap-3">
        {onSpecimenClick && (
          <button
            onClick={onSpecimenClick}
            className="type-micro mono"
            style={{
              padding: '6px 12px',
              backgroundColor: 'transparent',
              color: 'rgba(244, 238, 232, 0.6)',
              border: '1px solid rgba(244, 238, 232, 0.15)',
              borderRadius: 'var(--radius-subtle)',
              cursor: 'pointer'
            }}
          >
            VOS SPECIMEN ↗
          </button>
        )}
        <button
          className="type-label flex-row items-center gap-2"
          style={{
            padding: '8px 20px',
            backgroundColor: 'transparent',
            color: 'var(--daovos-color-bone-white)',
            border: '1px solid rgba(244, 238, 232, 0.35)',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'none',
            cursor: 'pointer',
            transition: 'all var(--motion-duration-micro) var(--motion-ease-precision)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--daovos-color-bone-white)';
            e.currentTarget.style.color = 'var(--daovos-color-near-black)';
            e.currentTarget.style.borderColor = 'var(--daovos-color-bone-white)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--daovos-color-bone-white)';
            e.currentTarget.style.borderColor = 'rgba(244, 238, 232, 0.35)';
          }}
        >
          <span>Initiate Project</span>
          <ArrowUpRight size={13} strokeWidth={2} />
        </button>
      </div>
    </nav>
  );
};

export default HeroNavbar;
