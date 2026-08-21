import React from 'react';

/**
 * DAOVOS Container Primitive
 * Provides responsive ~5% external margins and maximum architectural grid span.
 */
export const Container = ({
  children,
  className = '',
  maxWidth = '1440px',
  style = {},
  as: Component = 'div'
}) => {
  return (
    <Component
      className={`daovos-container ${className}`}
      style={{ maxWidth, ...style }}
    >
      {children}
    </Component>
  );
};

export default Container;
