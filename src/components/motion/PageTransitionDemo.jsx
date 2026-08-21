import React, { useState } from 'react';
import { DaovosSymbol } from '../brand/DaovosSymbol';

/**
 * DAOVOS Page Transition Language Simulator
 * Demonstrates architectural transitions:
 * 1. Modular Surface Slat Wipe (6 staggered modular vertical slabs)
 * 2. Structural Curtain Split (Bilateral architectural division)
 * 3. Symbol Kinetic Lock Transition
 */
export const PageTransitionDemo = () => {
  const [transitionState, setTransitionState] = useState('idle'); // 'idle' | 'running'
  const [activeTransition, setActiveTransition] = useState('slats'); // 'slats' | 'curtain' | 'symbol'
  const [currentChapter, setCurrentChapter] = useState('SPECIFICATION_ALPHA');

  const triggerTransition = (type) => {
    setActiveTransition(type);
    setTransitionState('running');

    setTimeout(() => {
      setCurrentChapter((prev) =>
        prev === 'SPECIFICATION_ALPHA' ? 'SPECIFICATION_BETA' : 'SPECIFICATION_ALPHA'
      );
    }, 450);

    setTimeout(() => {
      setTransitionState('idle');
    }, 900);
  };

  return (
    <div className="surface-raised" style={{ padding: 'var(--space-6)', border: '1px solid var(--color-border-subtle)' }}>
      {/* Header */}
      <div className="flex-row justify-between" style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div>
          <span className="type-micro text-muted">TRANSITION ARCHITECTURE</span>
          <h4 className="type-h3" style={{ marginTop: '2px' }}>Modular Page Transitions</h4>
        </div>
        <div className="flex-row gap-2">
          <button
            onClick={() => triggerTransition('slats')}
            disabled={transitionState === 'running'}
            className="radius-technical type-label"
            style={{
              padding: '6px 12px',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)',
              border: '1px solid var(--color-border-strong)'
            }}
          >
            01 / MODULAR SLATS
          </button>
          <button
            onClick={() => triggerTransition('curtain')}
            disabled={transitionState === 'running'}
            className="radius-technical type-label"
            style={{
              padding: '6px 12px',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)',
              border: '1px solid var(--color-border-strong)'
            }}
          >
            02 / STRUCTURAL CURTAIN
          </button>
          <button
            onClick={() => triggerTransition('symbol')}
            disabled={transitionState === 'running'}
            className="radius-technical type-label"
            style={{
              padding: '6px 12px',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)',
              border: '1px solid var(--color-border-strong)'
            }}
          >
            03 / SYMBOL CONVERGENCE
          </button>
        </div>
      </div>

      {/* Simulator Viewport Frame */}
      <div
        className="surface-sunken texture-micro-grid"
        style={{
          position: 'relative',
          minHeight: '280px',
          border: '1px solid var(--color-border-subtle)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'var(--space-8)'
        }}
      >
        {/* Viewport Content */}
        <div className="flex-col items-center gap-2 text-center" style={{ zIndex: 10 }}>
          <span className="type-micro text-muted mono">CURRENT ACTIVE VIEWPORT</span>
          <h3 className="type-h2 text-primary">{currentChapter}</h3>
          <span className="type-body-s text-secondary">
            System architectural geometry loaded into active execution context.
          </span>
        </div>

        {/* Transition Overlay 1: Modular Slats Wipe (6 Columns) */}
        {activeTransition === 'slats' && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              pointerEvents: 'none',
              zIndex: 50
            }}
          >
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--daovos-color-near-black)',
                  transform:
                    transitionState === 'running'
                      ? 'scaleY(1)'
                      : 'scaleY(0)',
                  transformOrigin: idx % 2 === 0 ? 'top' : 'bottom',
                  transition: `transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 40}ms`
                }}
              />
            ))}
          </div>
        )}

        {/* Transition Overlay 2: Structural Curtain (Bilateral Split) */}
        {activeTransition === 'curtain' && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              pointerEvents: 'none',
              zIndex: 50
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--daovos-color-near-black)',
                transform: transitionState === 'running' ? 'translateX(0%)' : 'translateX(-100%)',
                transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
            <div
              style={{
                backgroundColor: 'var(--daovos-color-near-black)',
                transform: transitionState === 'running' ? 'translateX(0%)' : 'translateX(100%)',
                transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>
        )}

        {/* Transition Overlay 3: Symbol Kinetic Lock */}
        {activeTransition === 'symbol' && transitionState === 'running' && (
          <div
            className="flex-col items-center justify-between"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(17, 17, 18, 0.94)',
              justifyContent: 'center',
              pointerEvents: 'none',
              zIndex: 50
            }}
          >
            <DaovosSymbol size={64} color="var(--daovos-color-bone-white)" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTransitionDemo;
