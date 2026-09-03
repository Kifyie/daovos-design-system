import React from 'react';
import { DaovosLockup } from '../brand/DaovosLockup';

/**
 * Quiet, non-interactive hero masthead: brand and studio descriptor only.
 */
export const HeroTopRail = ({ entered }) => (
  <header className={`hero-top-rail${entered ? ' is-entered' : ''}`} aria-label="DAOVOS studio masthead">
    <div className="hero-top-rail__brand">
      <DaovosLockup
        symbolSize={27}
        wordmarkWidth={108}
        gap={12}
        color="currentColor"
      />
    </div>

    <p className="hero-top-rail__meta">INDEPENDENT DIGITAL STUDIO</p>
  </header>
);

export default HeroTopRail;
