import React from 'react';

/**
 * DAOVOS Stack Primitive
 * Disciplined vertical and horizontal spacing along the 8px baseline.
 */
export const Stack = ({
  children,
  direction = 'column', // 'column' | 'row'
  gap = 4, // 1, 2, 3, 4, 6, 8, 12, 16, 20, 24
  align = 'stretch',
  justify = 'flex-start',
  wrap = false,
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`daovos-stack ${direction === 'row' ? 'flex-row' : 'flex-col'} ${className}`}
      style={{
        gap: `var(--space-${gap}, ${gap * 4}px)`,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
