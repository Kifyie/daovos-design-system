import React, { useState, useEffect } from 'react';

/**
 * DAOVOS Text Mask Reveal Component
 * Uses clipping / masking rather than generic fade-up.
 * Typography emerges vertically behind an architectural mask datum.
 */
export const TextMaskReveal = ({
  children,
  trigger = true,
  duration = 760, // ms
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  delay = 0, // ms
  className = '',
  style = {}
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (trigger) {
      const timer = setTimeout(() => setActive(true), delay);
      return () => clearTimeout(timer);
    } else {
      setActive(false);
    }
  }, [trigger, delay]);

  return (
    <div
      className={`daovos-text-mask-wrapper ${className}`}
      style={{
        overflow: 'hidden',
        display: 'inline-block',
        verticalAlign: 'bottom',
        ...style
      }}
    >
      <div
        style={{
          transform: active ? 'translateY(0%)' : 'translateY(105%)',
          opacity: active ? 1 : 0,
          transition: `transform ${duration}ms ${easing}, opacity ${duration * 0.7}ms ${easing}`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TextMaskReveal;
