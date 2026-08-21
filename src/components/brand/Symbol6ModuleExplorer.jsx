import React, { useState, useEffect } from 'react';

/**
 * Interactive 6-Module Geometric & Kinetic Explorer
 * Explores the 6 rectangular modules of the DAOVOS symbol as a motion primitive.
 */
export const Symbol6ModuleExplorer = () => {
  const [activeState, setActiveState] = useState('locked');
  const [selectedModule, setSelectedModule] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const modules = [
    { id: 1, name: 'M1: Center Top', x: 478.50, y: 240.80, w: 66.30, h: 162.70, role: 'Upper central structural mast' },
    { id: 2, name: 'M2: Left Top',   x: 380.50, y: 322.50, w: 63.80, h: 81.00,  role: 'Upper left balance wing' },
    { id: 3, name: 'M3: Right Top',  x: 578.70, y: 322.50, w: 63.80, h: 81.00,  role: 'Upper right balance wing' },
    { id: 4, name: 'M4: Left Bot',   x: 380.50, y: 419.20, w: 63.80, h: 77.90,  role: 'Lower left load anchor' },
    { id: 5, name: 'M5: Center Bot', x: 478.50, y: 419.20, w: 66.30, h: 156.00, role: 'Lower central structural root' },
    { id: 6, name: 'M6: Right Bot',  x: 578.70, y: 419.20, w: 63.80, h: 77.90,  role: 'Lower right load anchor' }
  ];

  // Calculate kinetic offsets based on motion state
  const getTransform = (id) => {
    switch (activeState) {
      case 'fragmentation':
        if (id === 1) return 'translate(0px, -60px) scale(0.95)';
        if (id === 2) return 'translate(-80px, -40px) scale(0.9)';
        if (id === 3) return 'translate(80px, -40px) scale(0.9)';
        if (id === 4) return 'translate(-80px, 50px) scale(0.9)';
        if (id === 5) return 'translate(0px, 70px) scale(0.95)';
        if (id === 6) return 'translate(80px, 50px) scale(0.9)';
        return 'translate(0px, 0px)';
      case 'separation':
        if (id === 1) return 'translate(0px, -40px)';
        if (id === 2 || id === 4) return 'translate(-50px, 0px)';
        if (id === 3 || id === 6) return 'translate(50px, 0px)';
        if (id === 5) return 'translate(0px, 40px)';
        return 'translate(0px, 0px)';
      case 'alignment':
        if (id === 1) return 'translate(0px, -80px)';
        if (id === 2) return 'translate(98px, -40px)';
        if (id === 3) return 'translate(-100px, 0px)';
        if (id === 4) return 'translate(98px, 40px)';
        if (id === 5) return 'translate(0px, 80px)';
        if (id === 6) return 'translate(-100px, 120px)';
        return 'translate(0px, 0px)';
      case 'convergence':
        if (id === 1) return 'translate(0px, -15px)';
        if (id === 2) return 'translate(20px, 10px)';
        if (id === 3) return 'translate(-20px, 10px)';
        if (id === 4) return 'translate(20px, -10px)';
        if (id === 5) return 'translate(0px, 15px)';
        if (id === 6) return 'translate(-20px, -10px)';
        return 'translate(0px, 0px)';
      case 'reconstruction':
        if (id === 1) return 'translate(0px, 0px) scaleY(1)';
        if (id === 2) return 'translate(0px, 0px) scaleY(1)';
        if (id === 3) return 'translate(0px, 0px) scaleY(1)';
        if (id === 4) return 'translate(0px, 0px) scaleY(1)';
        if (id === 5) return 'translate(0px, 0px) scaleY(1)';
        if (id === 6) return 'translate(0px, 0px) scaleY(1)';
        return 'translate(0px, 0px)';
      case 'locked':
      default:
        return 'translate(0px, 0px)';
    }
  };

  const states = [
    { id: 'locked', label: '01 / LOCKED', desc: 'Canonical monolithic structure' },
    { id: 'fragmentation', label: '02 / FRAGMENTATION', desc: 'Centrifugal kinetic dispersion' },
    { id: 'separation', label: '03 / SEPARATION', desc: 'Axis-aligned structural cleavage' },
    { id: 'alignment', label: '04 / ALIGNMENT', desc: 'Datum-linear single-axis registration' },
    { id: 'convergence', label: '05 / CONVERGENCE', desc: 'High-velocity inward compression' },
    { id: 'reconstruction', label: '06 / RECONSTRUCTION', desc: 'Mechanical sequential locking' }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveState((prev) => {
        const currentIndex = states.findIndex((s) => s.id === prev);
        const nextIndex = (currentIndex + 1) % states.length;
        return states[nextIndex].id;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="surface-raised" style={{ padding: 'var(--space-6)', border: '1px solid var(--color-border-subtle)' }}>
      {/* Header Telemetry */}
      <div className="flex-row justify-between" style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div>
          <span className="type-micro text-muted">MODULE GEOMETRY & KINETICS</span>
          <h4 className="type-h3" style={{ marginTop: '2px' }}>6-Module Motion Primitive</h4>
        </div>
        <div className="flex-row gap-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="radius-technical type-label"
            style={{
              padding: '6px 12px',
              backgroundColor: isAutoPlaying ? 'var(--color-bg-inverse)' : 'var(--color-bg-primary)',
              color: isAutoPlaying ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
              border: '1px solid var(--color-border-strong)'
            }}
          >
            {isAutoPlaying ? '■ STOP SEQUENCE' : '▶ AUTO-PLAY SEQUENCE'}
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 300px', gap: 'var(--space-6)' }}>
        {/* Vector Stage */}
        <div
          className="surface-sunken texture-micro-grid flex-row items-center justify-between"
          style={{
            position: 'relative',
            minHeight: '380px',
            border: '1px solid var(--color-border-subtle)',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Datum lines */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', backgroundColor: 'var(--color-line-registration)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', backgroundColor: 'var(--color-line-registration)', pointerEvents: 'none' }} />

          {/* Coordinate stamp */}
          <div style={{ position: 'absolute', top: '12px', left: '12px' }} className="type-micro text-muted">
            STATE: {activeState.toUpperCase()} // DATUM [256, 256]
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="260"
            height="260"
            style={{ overflow: 'visible' }}
          >
            <g transform="translate(256, 256) scale(1.1) translate(-511.5, -408)">
              {modules.map((m) => {
                const isSelected = selectedModule === m.id;
                return (
                  <rect
                    key={m.id}
                    x={m.x}
                    y={m.y}
                    width={m.w}
                    height={m.h}
                    fill={isSelected ? 'var(--daovos-color-graphite)' : 'var(--color-text-primary)'}
                    stroke={isSelected ? 'var(--daovos-color-pure-white)' : 'none'}
                    strokeWidth="2"
                    onClick={() => setSelectedModule(m.id)}
                    style={{
                      cursor: 'pointer',
                      transform: getTransform(m.id),
                      transformOrigin: `${m.x + m.w / 2}px ${m.y + m.h / 2}px`,
                      transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                );
              })}
            </g>
          </svg>
        </div>

        {/* State Selector & Module Inspector */}
        <div className="flex-col gap-4">
          <div className="flex-col gap-1">
            <span className="type-micro text-muted">KINETIC CHOREOGRAPHY</span>
            <div className="flex-col gap-1" style={{ marginTop: '4px' }}>
              {states.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveState(s.id);
                    setIsAutoPlaying(false);
                  }}
                  className="type-label flex-col items-start radius-subtle"
                  style={{
                    padding: '8px 12px',
                    textAlign: 'left',
                    backgroundColor: activeState === s.id ? 'var(--color-bg-inverse)' : 'var(--color-bg-primary)',
                    color: activeState === s.id ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
                    border: '1px solid var(--color-border-subtle)',
                    transition: 'all var(--motion-duration-micro) var(--motion-ease-precision)'
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{s.label}</span>
                  <span style={{ fontSize: '10px', opacity: 0.8, textTransform: 'none', letterSpacing: 0 }}>{s.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Module Telemetry Card */}
          <div className="surface-sunken" style={{ padding: '12px', border: '1px solid var(--color-border-subtle)' }}>
            <span className="type-micro text-muted">
              {selectedModule ? `MODULE M${selectedModule} TELEMETRY` : 'MODULE SELECTION'}
            </span>
            {selectedModule ? (
              <div style={{ marginTop: '8px' }} className="flex-col gap-1">
                {(() => {
                  const m = modules.find((mod) => mod.id === selectedModule);
                  return (
                    <>
                      <div className="type-body-s" style={{ fontWeight: 600 }}>{m.name}</div>
                      <div className="type-micro text-secondary mono">
                        POS: X={m.x.toFixed(2)} Y={m.y.toFixed(2)}
                      </div>
                      <div className="type-micro text-secondary mono">
                        DIM: W={m.w.toFixed(2)} H={m.h.toFixed(2)}
                      </div>
                      <div className="type-micro text-muted" style={{ marginTop: '4px' }}>
                        {m.role}
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="type-micro text-muted" style={{ marginTop: '8px' }}>
                Click any of the 6 modules on the stage to inspect precise SVG coordinates and structural roles.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symbol6ModuleExplorer;
