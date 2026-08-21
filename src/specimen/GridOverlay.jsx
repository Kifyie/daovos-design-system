import React from 'react';

/**
 * DAOVOS Grid Overlay Component
 * Renders 12 architectural column guides with 24px gutters and 5% margins.
 */
export const GridOverlay = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9000,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 'var(--grid-margin-desktop)',
        paddingRight: 'var(--grid-margin-desktop)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--grid-max-width)',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          columnGap: 'var(--grid-gutter-desktop)',
          height: '100%'
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((col) => (
          <div
            key={col}
            style={{
              backgroundColor: 'rgba(17, 17, 18, 0.03)',
              borderLeft: '1px solid rgba(17, 17, 18, 0.08)',
              borderRight: '1px solid rgba(17, 17, 18, 0.08)',
              height: '100%',
              position: 'relative'
            }}
          >
            <span
              className="type-micro mono"
              style={{
                position: 'absolute',
                top: '8px',
                left: '4px',
                color: 'var(--color-text-muted)',
                opacity: 0.6
              }}
            >
              C{col}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridOverlay;
