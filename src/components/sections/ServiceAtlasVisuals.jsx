import React from 'react';

const IMAGE_ROOT = '/images/service-journey';

const RAYS = Array.from({ length: 52 }, (_, index) => {
  const angle = (index / 52) * Math.PI * 2;
  const inner = index % 4 === 0 ? 66 : index % 2 === 0 ? 74 : 82;
  const outer = index % 5 === 0 ? 184 : index % 3 === 0 ? 166 : 150;
  return {
    x1: 200 + Math.cos(angle) * inner,
    y1: 200 + Math.sin(angle) * inner,
    x2: 200 + Math.cos(angle) * outer,
    y2: 200 + Math.sin(angle) * outer
  };
});

function MediaFrame({ src, alt, position = '50% 50%', className = '' }) {
  return (
    <div className={`service-visual__frame ${className}`}>
      <img className="service-visual__media" src={`${IMAGE_ROOT}/${src}`} alt={alt} style={{ objectPosition: position }} />
      <i className="service-visual__shutter" aria-hidden="true" />
    </div>
  );
}

function TitleFragment({ lines, variant = 'display', inverse = false }) {
  return (
    <div className={`service-visual__title service-visual__title--${variant}${inverse ? ' service-visual__title--inverse' : ''}`}>
      {lines.map((line) => <span key={line}>{line}</span>)}
    </div>
  );
}

function RadialBurst() {
  return (
    <svg className="service-visual__svg" viewBox="0 0 400 400" aria-hidden="true">
      <g className="service-visual__ray-group">
        {RAYS.map((ray, index) => <line className="service-visual__ray" pathLength="1" key={index} {...ray} />)}
      </g>
      <circle className="service-visual__disc" cx="200" cy="200" r="66" />
      <circle className="service-visual__disc service-visual__disc--bone" cx="200" cy="200" r="11" />
    </svg>
  );
}

function OrbitField() {
  const ticks = Array.from({ length: 24 }, (_, index) => {
    const angle = (index / 24) * Math.PI * 2;
    const inner = index % 3 === 0 ? 126 : 132;
    const outer = index % 3 === 0 ? 145 : 140;
    return {
      x1: 260 + Math.cos(angle) * inner,
      y1: 170 + Math.sin(angle) * inner,
      x2: 260 + Math.cos(angle) * outer,
      y2: 170 + Math.sin(angle) * outer
    };
  });

  return (
    <svg className="service-visual__svg" viewBox="0 0 520 340" aria-hidden="true">
      <line className="service-visual__axis" x1="34" y1="170" x2="486" y2="170" />
      <line className="service-visual__axis" x1="260" y1="24" x2="260" y2="316" />
      <g className="service-visual__orbit-group" transform="translate(260 170)">
        {[38, 70, 102, 136].map((radius) => <circle className="service-visual__orbit" cx="0" cy="0" r={radius} key={radius} />)}
        <ellipse className="service-visual__orbit" cx="0" cy="0" rx="205" ry="96" transform="rotate(-18)" />
        <ellipse className="service-visual__orbit" cx="0" cy="0" rx="205" ry="96" transform="rotate(28)" />
      </g>
      <g className="service-visual__orbit-ticks">
        {ticks.map((tick, index) => <line className="service-visual__orbit" key={index} {...tick} />)}
      </g>
      <path className="service-visual__sweep" pathLength="1" d="M28 251C128 60 356 62 492 246" />
      <path className="service-visual__sweep" pathLength="1" d="M28 90C151 264 368 274 492 94" />
      <circle className="service-visual__disc" cx="260" cy="170" r="48" />
      <circle className="service-visual__disc service-visual__disc--bone" cx="260" cy="170" r="10" />
      <circle className="service-visual__disc" cx="91" cy="94" r="10" />
      <circle className="service-visual__disc" cx="430" cy="244" r="10" />
    </svg>
  );
}

function SignalBands() {
  const cells = Array.from({ length: 60 }, (_, index) => ({
    x: 18 + (index % 6) * 49,
    y: 20 + Math.floor(index / 6) * 47,
    filled: (index * 7 + Math.floor(index / 6) * 3) % 5 < 3
  }));

  return (
    <svg className="service-visual__svg" viewBox="0 0 320 520" aria-hidden="true">
      <g className="service-visual__matrix">
        {cells.map((cell, index) => (
          <rect
            className={cell.filled ? 'service-visual__bar' : 'service-visual__stack-frame'}
            x={cell.x}
            y={cell.y}
            width="31"
            height="30"
            key={index}
          />
        ))}
      </g>
      <path className="service-visual__sweep service-visual__sweep--heavy" pathLength="1" d="M16 458C74 430 95 351 160 328S222 164 304 68" />
      <circle className="service-visual__disc" cx="160" cy="328" r="34" />
      <circle className="service-visual__disc service-visual__disc--bone" cx="160" cy="328" r="8" />
      <circle className="service-visual__disc" cx="304" cy="68" r="9" />
    </svg>
  );
}

function StackedFrames() {
  return (
    <svg className="service-visual__svg" viewBox="0 0 500 340" aria-hidden="true">
      <g className="service-visual__frame-stack">
        {[0, 1, 2, 3, 4].map((index) => (
          <rect className="service-visual__stack-frame" x={42 + index * 34} y={38 + index * 22} width="278" height="190" key={index} />
        ))}
      </g>
      <path className="service-visual__sweep" pathLength="1" d="M36 286C140 226 240 308 350 226S450 156 484 180" />
      <circle className="service-visual__disc" cx="398" cy="218" r="52" />
      <circle className="service-visual__disc service-visual__disc--bone" cx="398" cy="218" r="10" />
    </svg>
  );
}

const VORTEX_RINGS = Array.from({ length: 18 }, (_, index) => ({
  radius: 34 + index * 18,
  width: index % 3 === 0 ? 8 : 5,
  dash: `${18 + (index % 5) * 7} ${14 + (index % 4) * 9}`,
  rotation: (index * 47) % 360,
  opacity: 0.28 + index * 0.038
}));

function VortexField() {
  return (
    <svg className="service-visual__svg service-visual__svg--inverse" viewBox="0 0 760 760" aria-hidden="true">
      <g transform="translate(380 380)">
        {VORTEX_RINGS.map((ring, index) => (
          <circle
            className="service-visual__vortex-ring"
            cx="0"
            cy="0"
            r={ring.radius}
            fill="none"
            strokeWidth={ring.width}
            strokeDasharray={ring.dash}
            opacity={ring.opacity}
            transform={`rotate(${ring.rotation})`}
            key={ring.radius}
            data-direction={index % 2 ? 'reverse' : 'forward'}
          />
        ))}
        <circle className="service-visual__disc service-visual__disc--bone" r="24" />
      </g>
    </svg>
  );
}

export function HomeVisual() {
  return (
    <div className="service-visual service-visual--home">
      <MediaFrame src="custom-websites.jpg" alt="Monumental architectural facade organized by a strict structural grid" position="64% 58%" />
      <div className="service-visual__artbox service-visual__artbox--burst"><RadialBurst /></div>
      <TitleFragment lines={['BUILT', 'TO BELONG']} variant="hero" inverse />
      <span className="service-visual__caption">STRUCTURE / IDENTITY / SCALE</span>
    </div>
  );
}

export function FocusVisual() {
  return (
    <div className="service-visual service-visual--focus">
      <MediaFrame src="landing-experiences.jpg" alt="A single figure held inside a focused beam of light" position="52% 46%" />
      <div className="service-visual__artbox service-visual__artbox--orbit"><OrbitField /></div>
      <i className="service-visual__block" aria-hidden="true" />
      <TitleFragment lines={['ONE', 'CLEAR MOVE']} variant="display" inverse />
      <span className="service-visual__caption">ATTENTION → ACTION</span>
    </div>
  );
}

export function SignalInterlude() {
  return (
    <div className="service-visual service-visual--signal">
      <div className="service-visual__artbox service-visual__artbox--signal" aria-hidden="true" />
      <MediaFrame
        src="interface-systems.jpg"
        alt="Abstract monochrome interface texture cropped into a narrow signal window"
        position="18% 48%"
        className="service-visual__signal-crop service-visual__signal-crop--primary"
      />
      <MediaFrame
        src="interface-systems.jpg"
        alt="Detail of an abstract monochrome interface texture"
        position="82% 38%"
        className="service-visual__signal-crop service-visual__signal-crop--detail"
      />
      <i className="service-visual__block service-visual__signal-aperture" aria-hidden="true" />
      <span className="service-visual__signal-index" aria-hidden="true">INPUT 01 / OUTPUT 03</span>
      <TitleFragment lines={['SIGNAL', 'INTO ACTION']} variant="hero" inverse />
      <span className="service-visual__caption">CAMPAIGN SIGNAL / RESPONSE</span>
    </div>
  );
}

export function CommerceVisual() {
  return (
    <div className="service-visual service-visual--commerce">
      <MediaFrame src="commerce-systems.jpg" alt="A rigorously organized retail system displayed across modular shelves" position="50% 46%" />
      <div className="service-visual__artbox service-visual__artbox--bands"><SignalBands /></div>
      <TitleFragment lines={['FROM CART', 'TO CARE']} variant="sans" inverse />
      <span className="service-visual__caption">DISCOVER → DECIDE → PURCHASE</span>
    </div>
  );
}

export function InterfaceVisual() {
  return (
    <div className="service-visual service-visual--interface">
      <MediaFrame src="interface-systems.jpg" alt="An abstract signal field reorganized into a responsive visual system" position="55% 50%" />
      <div className="service-visual__artbox service-visual__artbox--stack"><StackedFrames /></div>
      <TitleFragment lines={['ORDER', 'THE COMPLEX']} variant="display" inverse />
      <span className="service-visual__caption">CONTENT / HIERARCHY / RESPONSE</span>
    </div>
  );
}

export function CareVisual() {
  return (
    <div className="service-visual service-visual--care">
      <MediaFrame src="care-optimization.jpg" alt="A dense technical infrastructure kept connected and operational" position="62% 50%" />
      <div className="service-visual__artbox service-visual__artbox--vortex"><VortexField /></div>
      <TitleFragment lines={['STAY', 'IN MOTION']} variant="hero" inverse />
    </div>
  );
}
