import React from 'react';

/**
 * DAOVOS Hero Blueprint Reveal
 * Plays immediately after the intro plates part. Technical hairlines trace
 * the layout datums (center axis + side margins), crosshair ticks register
 * at intersections, then everything dissolves as the hero content lands.
 * Pure overlay — zero pointer events, unmounted by parent after fade.
 */
export const HeroBlueprintReveal = ({ active }) => {
  return (
    <div
      className={`hero-blueprint ${active ? 'is-active' : 'is-dissolved'}`}
      aria-hidden="true"
    >
      {/* Center horizontal datum */}
      <div className="bp-line bp-h bp-h-center" />
      {/* Upper & lower tertiary horizontals */}
      <div className="bp-line bp-h bp-h-top" />
      <div className="bp-line bp-h bp-h-bottom" />

      {/* Margin verticals (match content padding) */}
      <div className="bp-line bp-v bp-v-left" />
      <div className="bp-line bp-v bp-v-right" />

      {/* Center vertical axis */}
      <div className="bp-line bp-v bp-v-center" />

      {/* Registration ticks at the four inner intersections */}
      <span className="bp-tick bp-tick-tl" />
      <span className="bp-tick bp-tick-tr" />
      <span className="bp-tick bp-tick-bl" />
      <span className="bp-tick bp-tick-br" />

      {/* Center coordinate label */}
      <span className="bp-label">DATUM 00 // GRID REGISTERED</span>
    </div>
  );
};

export default HeroBlueprintReveal;
