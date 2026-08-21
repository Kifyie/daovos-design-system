import React, { useState } from 'react';
import { motionTokens } from '../../tokens/motion';

/**
 * DAOVOS Easing Curves & Kinetic Displacement Visualizer
 */
export const EasingCurvesVisualizer = () => {
  const [activeEasing, setActiveEasing] = useState('Precision');
  const [isPlaying, setIsPlaying] = useState(false);

  const selected = motionTokens.easings.find((e) => e.name === activeEasing) || motionTokens.easings[0];

  const triggerAnimation = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 50);
  };

  return (
    <div className="surface-raised" style={{ padding: 'var(--space-6)', border: '1px solid var(--color-border-subtle)' }}>
      {/* Header */}
      <div className="flex-row justify-between" style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div>
          <span className="type-micro text-muted">KINETIC MATHEMATICS</span>
          <h4 className="type-h3" style={{ marginTop: '2px' }}>DAOVOS Easing Curves</h4>
        </div>
        <button
          onClick={triggerAnimation}
          className="radius-technical type-label"
          style={{
            padding: '8px 16px',
            backgroundColor: 'var(--color-bg-inverse)',
            color: 'var(--color-text-inverse)',
            border: '1px solid var(--color-border-strong)'
          }}
        >
          ▶ TEST DISPLACEMENT
        </button>
      </div>

      {/* Grid: Curve Graph + Motion Test Tracks */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 'var(--space-6)' }}>
        {/* Curve Selector & SVG Chart */}
        <div className="flex-col gap-3">
          <div className="flex-col gap-1">
            {motionTokens.easings.map((e) => (
              <button
                key={e.name}
                onClick={() => {
                  setActiveEasing(e.name);
                  triggerAnimation();
                }}
                className="type-label flex-row justify-between radius-subtle"
                style={{
                  padding: '8px 12px',
                  backgroundColor: activeEasing === e.name ? 'var(--color-bg-inverse)' : 'var(--color-bg-primary)',
                  color: activeEasing === e.name ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <span>{e.name}</span>
                <span className="type-micro mono" style={{ opacity: 0.8 }}>{e.token.replace('--motion-ease-', '')}</span>
              </button>
            ))}
          </div>

          {/* SVG Cubic-Bezier Coordinate Graph */}
          <div
            className="surface-sunken flex-col items-center justify-between"
            style={{
              padding: '16px',
              border: '1px solid var(--color-border-subtle)',
              position: 'relative'
            }}
          >
            <div className="type-micro text-muted mono" style={{ alignSelf: 'flex-start' }}>
              CURVE: {selected.curve}
            </div>

            <svg viewBox="0 0 200 200" width="180" height="180" style={{ overflow: 'visible', margin: '12px 0' }}>
              {/* Grid Background */}
              <line x1="20" y1="20" x2="180" y2="20" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="20" y1="180" x2="180" y2="180" stroke="var(--color-border-subtle)" strokeWidth="1" />
              <line x1="20" y1="20" x2="20" y2="180" stroke="var(--color-border-subtle)" strokeWidth="1" />
              <line x1="180" y1="20" x2="180" y2="180" stroke="var(--color-border-subtle)" strokeWidth="1" strokeDasharray="3 3" />

              {/* Diagonal Reference */}
              <line x1="20" y1="180" x2="180" y2="20" stroke="var(--color-border-subtle)" strokeWidth="1" />

              {/* Cubic Bezier Curve (Mapped from [0,0] at (20,180) to [1,1] at (180,20)) */}
              {(() => {
                const [p1x, p1y, p2x, p2y] = selected.points;
                const startX = 20;
                const startY = 180;
                const endX = 180;
                const endY = 20;
                const cp1x = 20 + p1x * 160;
                const cp1y = 180 - p1y * 160;
                const cp2x = 20 + p2x * 160;
                const cp2y = 180 - p2y * 160;

                return (
                  <>
                    {/* Control Handle Lines */}
                    <line x1={startX} y1={startY} x2={cp1x} y2={cp1y} stroke="var(--color-text-muted)" strokeWidth="1" />
                    <line x1={endX} y1={endY} x2={cp2x} y2={cp2y} stroke="var(--color-text-muted)" strokeWidth="1" />
                    <circle cx={cp1x} cy={cp1y} r="3" fill="var(--color-text-primary)" />
                    <circle cx={cp2x} cy={cp2y} r="3" fill="var(--color-text-primary)" />

                    {/* Bezier Path */}
                    <path
                      d={`M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`}
                      fill="none"
                      stroke="var(--color-text-primary)"
                      strokeWidth="2.5"
                    />
                  </>
                );
              })()}
            </svg>

            <span className="type-micro text-secondary" style={{ textAlign: 'center', lineHeight: 1.4 }}>
              {selected.description}
            </span>
          </div>
        </div>

        {/* Live Displacement Tracks Comparison */}
        <div className="flex-col gap-4">
          <span className="type-micro text-muted">SIMULTANEOUS KINETIC COMPARISON (760ms Editorial Duration)</span>

          <div className="flex-col gap-3">
            {motionTokens.easings.map((e) => (
              <div
                key={e.name}
                className="surface-sunken flex-col gap-1"
                style={{
                  padding: '12px 16px',
                  border: `1px solid ${activeEasing === e.name ? 'var(--color-border-strong)' : 'var(--color-border-subtle)'}`
                }}
              >
                <div className="flex-row justify-between">
                  <span className="type-micro mono font-semibold">{e.name.toUpperCase()}</span>
                  <span className="type-micro text-muted mono">{e.curve}</span>
                </div>

                {/* Track */}
                <div
                  style={{
                    position: 'relative',
                    height: '24px',
                    backgroundColor: 'var(--color-bg-primary)',
                    borderRadius: 'var(--radius-subtle)',
                    border: '1px solid var(--color-border-subtle)',
                    overflow: 'hidden',
                    marginTop: '4px'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: '2px',
                      bottom: '2px',
                      width: '48px',
                      backgroundColor: activeEasing === e.name ? 'var(--color-bg-inverse)' : 'var(--daovos-color-graphite)',
                      borderRadius: 'var(--radius-subtle)',
                      transform: isPlaying ? 'translateX(calc(100cqi - 52px))' : 'translateX(0px)',
                      containerType: 'inline-size',
                      transition: `transform 760ms ${e.curve}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasingCurvesVisualizer;
