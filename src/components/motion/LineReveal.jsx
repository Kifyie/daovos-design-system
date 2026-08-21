import React, { useState, useEffect } from 'react';

/**
 * DAOVOS Line Reveal Component
 * 1px structural hairline drawing across coordinate datum.
 */
export const LineReveal = ({
  trigger = true,
  duration = 760,
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  delay = 0,
  orientation = 'horizontal',
  variant = 'subtle',
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

  if (orientation === 'vertical') {
    return (
      <div
        className={`line-divider-vertical ${className}`}
        style={{
          transformOrigin: 'top',
          transform: active ? 'scaleY(1)' : 'scaleY(0)',
          transition: `transform ${duration}ms ${easing}`,
          ...style
        }}
      />
    );
  }

  return (
    <div
      className={`line-divider ${variant === 'strong' ? 'line-divider-strong' : ''} ${className}`}
      style={{
        transformOrigin: 'left',
        transform: active ? 'scaleX(1)' : 'scaleX(0)',
        transition: `transform ${duration}ms ${easing}`,
        ...style
      }}
    />
  );
};

export default LineReveal;
