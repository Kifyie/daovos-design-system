import React from 'react';

/**
 * DAOVOS Divider Primitive
 * Precision 1px structural dividing lines with optional registration markers,
 * technical index numbers, and coordinate labels.
 */
export const Divider = ({
  variant = 'subtle', // 'subtle' | 'strong' | 'dashed'
  orientation = 'horizontal', // 'horizontal' | 'vertical'
  marker = null, // 'crosshair' | 'corner' | 'index' | null
  indexText = '',
  coordinate = '',
  className = '',
  style = {}
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        className={`line-divider-vertical ${className}`}
        style={{
          backgroundColor: variant === 'strong' ? 'var(--color-border-strong)' : 'var(--color-border-subtle)',
          ...style
        }}
      />
    );
  }

  const lineClass =
    variant === 'strong'
      ? 'line-divider-strong'
      : variant === 'dashed'
      ? 'line-dashed'
      : 'line-divider';

  if (!marker && !indexText && !coordinate) {
    return <hr className={`${lineClass} ${className}`} style={style} />;
  }

  return (
    <div
      className={`flex-row items-center gap-3 ${className}`}
      style={{ width: '100%', position: 'relative', ...style }}
    >
      {marker === 'crosshair' && (
        <span className="registration-crosshair" title="Grid Datum Marker" />
      )}
      {indexText && (
        <span className="type-micro text-muted mono" style={{ whiteSpace: 'nowrap' }}>
          {indexText}
        </span>
      )}
      <div className={lineClass} style={{ flex: 1 }} />
      {coordinate && (
        <span className="type-micro text-muted mono" style={{ whiteSpace: 'nowrap' }}>
          {coordinate}
        </span>
      )}
      {marker === 'crosshair' && (
        <span className="registration-crosshair" title="Grid Datum Marker" />
      )}
    </div>
  );
};

export default Divider;
