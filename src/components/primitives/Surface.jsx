import React from 'react';

/**
 * DAOVOS Surface Primitive
 * Material surfaces with disciplined architectural borders and textures.
 */
export const Surface = ({
  children,
  variant = 'base', // 'base' | 'raised' | 'sunken' | 'inverse' | 'paper' | 'concrete' | 'metal'
  padding = 6, // space token multiplier: 0, 2, 4, 6, 8, 12
  radius = 'structural', // 'structural' (0px) | 'technical' (4px) | 'control' (6px)
  border = true,
  texture = null, // 'grain' | 'micro-grid' | 'paper' | 'concrete' | 'metal'
  className = '',
  style = {}
}) => {
  let surfaceClass = 'surface-base';
  if (variant === 'raised') surfaceClass = 'surface-raised';
  if (variant === 'sunken') surfaceClass = 'surface-sunken';
  if (variant === 'inverse') surfaceClass = 'surface-inverse';

  let textureClass = '';
  if (texture || variant === 'paper' || variant === 'concrete' || variant === 'metal') {
    textureClass = `texture-${texture || variant}`;
  }

  const radiusClass = `radius-${radius}`;

  return (
    <div
      className={`daovos-surface ${surfaceClass} ${textureClass} ${radiusClass} ${className}`}
      style={{
        padding: padding ? `var(--space-${padding}, ${padding * 4}px)` : undefined,
        border: border ? '1px solid var(--color-border-subtle)' : 'none',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Surface;
