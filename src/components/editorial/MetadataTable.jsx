import React from 'react';

/**
 * DAOVOS Metadata Table Component
 * Precise 2-column or 4-column ledger format for project specifications,
 * technical telemetry, and architectural data.
 */
export const MetadataTable = ({
  data = [], // [{ label: 'SCOPE', value: 'SYSTEM ARCHITECTURE', note: 'VERIFIED' }]
  columns = 2, // 2 | 4
  title = '',
  index = '',
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`daovos-metadata-table surface-sunken radius-structural ${className}`}
      style={{
        border: '1px solid var(--color-border-subtle)',
        overflow: 'hidden',
        ...style
      }}
    >
      {(title || index) && (
        <div
          className="flex-row justify-between items-center"
          style={{
            padding: '12px 16px',
            borderBottom: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-bg-surface-raised)'
          }}
        >
          {title && <span className="type-label text-primary">{title}</span>}
          {index && <span className="type-micro text-muted mono">{index}</span>}
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: columns === 4 ? 'repeat(4, minmax(0, 1fr))' : 'repeat(2, minmax(0, 1fr))'
        }}
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex-col gap-1"
            style={{
              padding: '14px 16px',
              borderRight: (idx + 1) % columns !== 0 ? '1px solid var(--color-border-subtle)' : 'none',
              borderBottom: idx < data.length - (data.length % columns || columns) ? '1px solid var(--color-border-subtle)' : 'none'
            }}
          >
            <span className="type-micro text-muted mono">{item.label}</span>
            <span className="type-body-s text-primary font-medium">{item.value}</span>
            {item.note && <span className="type-micro text-secondary">{item.note}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * DAOVOS Technical Leaderboard / Metric Ticker
 */
export const TechnicalLeaderboard = ({
  metrics = [], // [{ value: '0.04ms', label: 'RUNTIME LATENCY', sub: 'OPTIMAL' }]
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`daovos-leaderboard grid-asym-3-9 ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${metrics.length}, minmax(0, 1fr))`,
        gap: 'var(--space-4)',
        ...style
      }}
    >
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="surface-raised flex-col gap-1"
          style={{
            padding: '16px 20px',
            borderLeft: '2px solid var(--color-border-strong)'
          }}
        >
          <span className="type-micro text-muted mono">{m.label}</span>
          <span className="type-h2 text-primary mono font-bold">{m.value}</span>
          {m.sub && <span className="type-micro text-secondary">{m.sub}</span>}
        </div>
      ))}
    </div>
  );
};

export default MetadataTable;
