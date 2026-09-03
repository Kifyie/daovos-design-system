import React from 'react';

/**
 * DAOVOS Hero Film Grain
 * Faint SVG fractal-noise plate over the scene. Static (no animation churn),
 * pointer-transparent, sits above the background layers but below content.
 */
const NOISE_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const HeroGrain = () => (
  <div
    className="hero-grain"
    style={{ backgroundImage: NOISE_URI }}
    aria-hidden="true"
  />
);

export default HeroGrain;
