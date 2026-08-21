import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * DAOVOS Architectural Link Control
 * Features 1px hairline underline displaced on hover with optional directional arrow.
 */
export const Link = ({
  children,
  href = '#',
  external = false,
  indicator = true,
  className = '',
  style = {}
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`daovos-link ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        color: isHovered ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
        textDecoration: 'none',
        borderBottom: `1px solid ${isHovered ? 'var(--color-text-primary)' : 'var(--color-border-subtle)'}`,
        paddingBottom: '2px',
        transition: 'all var(--motion-duration-micro) var(--motion-ease-precision)',
        ...style
      }}
    >
      <span>{children}</span>
      {indicator && (
        <span
          style={{
            transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
            transition: 'transform var(--motion-duration-micro) var(--motion-ease-precision)'
          }}
        >
          <ArrowUpRight size={12} strokeWidth={1.5} />
        </span>
      )}
    </a>
  );
};

export default Link;
