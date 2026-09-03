import React, { useEffect, useState } from 'react';

/**
 * DAOVOS Hero Accent Typographic Layer
 * 'DIGITAL' and 'SYSTEMS' flank the 3D emblem and tuck behind it (z below canvas).
 * Per-letter architectural mask reveal, DM Mono typewriter subtext, parallax depth.
 * All layout/transform logic lives in hero.css (parallax vars + media queries).
 */

const MaskedWord = ({ text, entered, baseDelay = 0, style }) => {
  return (
    <span className="mask-word" style={style}>
      {text.split('').map((ch, i) => (
        <span key={`${ch}-${i}`} className="mask-letter-clip">
          <span
            className="mask-letter"
            style={{ transitionDelay: `${baseDelay + i * 0.055}s` }}
          >
            {ch}
          </span>
        </span>
      ))}
    </span>
  );
};

const Typewriter = ({ text, entered, startDelay = 1400, speed = 26 }) => {
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (!entered) {
      setOutput('');
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOutput(text);
      return;
    }
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [entered, text, startDelay, speed]);

  return (
    <span style={{ fontVariantNumeric: 'tabular-nums' }}>
      {output}
      {entered && output.length < text.length && <span className="tw-caret" />}
    </span>
  );
};

export const HeroAccentOverlay = ({
  leftText = 'DIGITAL',
  rightText = 'SYSTEMS',
  subText = 'Engineered for scale.',
  entered = false
}) => {
  const displayStyle = {
    fontFamily: '"CaskoLuxury", serif',
    fontSize: 'clamp(2.2rem, 5.2vw, 5.6rem)',
    fontWeight: 400,
    lineHeight: 1.0,
    color: '#EDE6DF',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    textShadow: '0 2px 18px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0,0,0,0.6)'
  };

  return (
    <div
      className={`hero-accent-overlay hero-accent-stacked ${entered ? 'is-entered' : ''}`}
      style={{ zIndex: 8 }}
    >
      {/* Left Accent Block — parallax depth, nudged toward the emblem */}
      <div className="hero-parallax-mid" style={{ position: 'relative', textAlign: 'left' }}>
        <div style={{ transform: 'translateX(clamp(12px, 2.4vw, 40px))' }}>
          <span style={{ display: 'block' }}>
            <MaskedWord text={leftText} entered={entered} baseDelay={0.55} style={displayStyle} />
            {subText && (
              <span
                className="hero-subtext"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 2,
                  fontFamily: 'var(--font-family-mono)',
                  fontSize: 'clamp(0.7rem, 1vw, 0.95rem)',
                  fontWeight: 400,
                  color: 'rgba(237, 230, 223, 0.72)',
                  marginTop: '14px',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 8px rgba(0, 0, 0, 0.7)',
                  minHeight: '1.2em'
                }}
              >
                <Typewriter text={subText.toUpperCase()} entered={entered} />
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Right Accent Block */}
      <div className="hero-parallax-mid" style={{ textAlign: 'right' }}>
        <div style={{ transform: 'translateX(calc(clamp(12px, 2.4vw, 40px) * -1))' }}>
          <MaskedWord text={rightText} entered={entered} baseDelay={0.7} style={displayStyle} />
        </div>
      </div>
    </div>
  );
};

export default HeroAccentOverlay;
