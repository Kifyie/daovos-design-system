import React from 'react';

/**
 * DAOVOS Label / Badge Primitive
 * Monospace technical badges, status chips, and metadata indicators.
 */
export const Label = ({
  children,
  variant = 'default', // 'default' | 'outline' | 'solid' | 'inverse'
  size = 'label', // 'label' (12px) | 'micro' (10px)
  indicator = null, // 'live' | 'sync' | 'neutral' | null
  className = '',
  style = {}
}) => {
  const isMicro = size === 'micro';

  let bg = 'transparent';
  let color = 'var(--color-text-secondary)';
  let border = '1px solid var(--color-border-subtle)';

  if (variant === 'outline') {
    bg = 'transparent';
    border = '1px solid var(--color-border-medium)';
    color = 'var(--color-text-primary)';
  } else if (variant === 'solid') {
    bg = 'var(--color-bg-surface-raised)';
    border = '1px solid var(--color-border-subtle)';
    color = 'var(--color-text-primary)';
  } else if (variant === 'inverse') {
    bg = 'var(--color-bg-inverse)';
    border = '1px solid var(--color-bg-inverse)';
    color = 'var(--color-text-inverse)';
  }

  return (
    <span
      className={`daovos-label ${isMicro ? 'type-micro' : 'type-label'} radius-subtle flex-row items-center gap-1 ${className}`}
      style={{
        display: 'inline-flex',
        padding: isMicro ? '2px 6px' : '4px 8px',
        backgroundColor: bg,
        color: color,
        border: border,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...style
      }}
    >
      {indicator && (
        <span
          style={{
            width: isMicro ? '4px' : '6px',
            height: isMicro ? '4px' : '6px',
            borderRadius: '50%',
            backgroundColor:
              indicator === 'live'
                ? 'var(--daovos-color-near-black)'
                : indicator === 'sync'
                ? 'var(--daovos-color-warm-stone)'
                : 'currentColor',
            marginRight: '2px'
          }}
        />
      )}
      {children}
    </span>
  );
};

export default Label;
