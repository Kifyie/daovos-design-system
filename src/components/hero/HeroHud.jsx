import React, { useEffect, useRef, useState } from 'react';

/**
 * DAOVOS Hero HUD — Drafting Instrument Layer
 * Registration crosshairs, vertical side rails, live cursor telemetry,
 * UTC clock and scroll cue. Pure overlay: zero pointer events, no layout impact.
 */
export const HeroHud = ({ entered }) => {
  const coordRef = useRef(null);
  const [clock, setClock] = useState('');

  // Ticking UTC clock
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const p = (n) => String(n).padStart(2, '0');
      setClock(`UTC ${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Live cursor telemetry (CAD-style coordinate readout)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    let last = '';
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const x = String(Math.round(e.clientX)).padStart(4, '0');
        const y = String(Math.round(e.clientY)).padStart(4, '0');
        const next = `X ${x} — Y ${y}`;
        if (next !== last && coordRef.current) {
          coordRef.current.textContent = next;
          last = next;
        }
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const enteredClass = entered ? 'is-entered' : '';

  const corners = [
    { bottom: 22, left: 22 },
    { bottom: 22, right: 22 }
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 40, pointerEvents: 'none' }}>
      {/* Corner registration crosshairs */}
      {corners.map((pos, i) => (
        <svg
          key={i}
          className={`hud-corner ${enteredClass}`}
          style={{
            ...pos,
            transitionDelay: `${0.9 + i * 0.12}s`
          }}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <line x1="9" y1="0" x2="9" y2="18" stroke="#EDE6DF" strokeWidth="1" />
          <line x1="0" y1="9" x2="18" y2="9" stroke="#EDE6DF" strokeWidth="1" />
          <circle cx="9" cy="9" r="4.5" stroke="#EDE6DF" strokeWidth="1" />
        </svg>
      ))}

      {/* Scroll cue */}
      <div
        className="hud-bottom-center"
        style={{
          position: 'absolute',
          bottom: 18,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10
        }}
      >
        <div className={`hud-fade ${enteredClass}`} style={{ transitionDelay: '1.45s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div className="hud-scroll-line" />
          <span className="hud-telemetry" style={{ fontSize: 8, letterSpacing: '0.34em', opacity: 0.5 }}>
            SCROLL
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroHud;
