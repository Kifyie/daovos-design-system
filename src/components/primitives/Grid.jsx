import React from 'react';

/**
 * DAOVOS Grid Primitive
 * 12-Column Responsive Grid with support for asymmetric layout formulas.
 */
export const Grid = ({
  children,
  columns = 12,
  asymmetric = null, // '5-7' | '7-5' | '4-8' | '3-9' | '8-4'
  gap = 'var(--grid-gutter-desktop)',
  className = '',
  style = {}
}) => {
  if (asymmetric) {
    return (
      <div className={`grid-asym-${asymmetric} ${className}`} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`daovos-grid ${className}`}
      style={{
        columnGap: gap,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export const GridItem = ({
  children,
  span = 12,
  start = null,
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`col-span-${span} ${start ? `col-start-${start}` : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Grid;
