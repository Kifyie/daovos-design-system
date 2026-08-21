import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

/**
 * DAOVOS Button Control
 * Primary controls favor Near Black against Bone White or the inverse.
 * Variants:
 * - 'primary': Solid inversion with arrow shift
 * - 'secondary': Hairline border with subtle surface fill wipe
 * - 'ghost': Clean text with directional arrow translation
 * - 'icon': Square architectural tool button
 */
export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'icon'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon = null,
  arrow = true,
  disabled = false,
  onClick,
  className = '',
  style = {},
  type = 'button'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPadding = () => {
    if (variant === 'icon') {
      if (size === 'sm') return '6px';
      if (size === 'lg') return '14px';
      return '10px';
    }
    if (size === 'sm') return '6px 14px';
    if (size === 'lg') return '14px 28px';
    return '10px 20px';
  };

  const getFontSize = () => {
    if (size === 'sm') return 'var(--font-size-micro)';
    if (size === 'lg') return 'var(--font-size-body-m)';
    return 'var(--font-size-label)';
  };

  const getStyles = () => {
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontFamily: variant === 'ghost' ? 'var(--font-family-mono)' : 'var(--font-family-mono)',
      fontSize: getFontSize(),
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      borderRadius: 'var(--radius-interactive)',
      padding: getPadding(),
      transition: 'all var(--motion-duration-micro) var(--motion-ease-precision)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid transparent',
      textDecoration: 'none',
      ...style
    };

    if (variant === 'primary') {
      return {
        ...base,
        backgroundColor: isHovered ? 'var(--daovos-color-graphite)' : 'var(--color-bg-inverse)',
        color: 'var(--color-text-inverse)',
        borderColor: 'var(--color-bg-inverse)'
      };
    }

    if (variant === 'secondary') {
      return {
        ...base,
        backgroundColor: isHovered ? 'var(--color-bg-surface-raised)' : 'transparent',
        color: 'var(--color-text-primary)',
        borderColor: 'var(--color-border-strong)'
      };
    }

    if (variant === 'ghost') {
      return {
        ...base,
        backgroundColor: 'transparent',
        color: isHovered ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        borderBottom: `1px solid ${isHovered ? 'var(--color-text-primary)' : 'transparent'}`
      };
    }

    if (variant === 'icon') {
      return {
        ...base,
        backgroundColor: isHovered ? 'var(--color-bg-surface-raised)' : 'transparent',
        color: 'var(--color-text-primary)',
        borderColor: 'var(--color-border-subtle)',
        borderRadius: 'var(--radius-technical)'
      };
    }

    return base;
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`daovos-button btn-${variant} ${className}`}
      style={getStyles()}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} strokeWidth={1.5} />}
      {children}
      {arrow && variant !== 'icon' && (
        <span
          style={{
            display: 'inline-flex',
            transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
            transition: 'transform var(--motion-duration-micro) var(--motion-ease-precision)'
          }}
        >
          <ArrowUpRight size={size === 'sm' ? 12 : 14} strokeWidth={2} />
        </span>
      )}
    </button>
  );
};

export default Button;
