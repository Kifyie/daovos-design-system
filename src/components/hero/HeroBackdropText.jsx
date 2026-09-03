import React from 'react';

/**
 * DAOVOS Hero Backdrop Monumental Typography
 * Rendered in bespoke 'Calentha'. Gradient + drift/sheen animation live in
 * hero.css (.hero-backdrop-title) so background-position can animate.
 * Parallax depth via .hero-parallax-deep (moves opposite the display type).
 */
export const HeroBackdropText = ({ text = 'DAOVOS' }) => {
  return (
    <div
      className="hero-parallax-deep"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        textAlign: 'center',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 5,
        overflow: 'visible'
      }}
    >
      <h1 className="hero-backdrop-title">{text}</h1>
    </div>
  );
};

export default HeroBackdropText;
