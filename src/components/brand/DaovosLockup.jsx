import React from 'react';
import { DaovosSymbol } from './DaovosSymbol';
import { DaovosWordmark } from './DaovosWordmark';

/**
 * DAOVOS Authoritative Lockup Component
 * Combines the 6-module emblem with the bespoke wordmark.
 */
export const DaovosLockup = ({
  orientation = 'horizontal', // 'horizontal' | 'vertical'
  symbolSize = 36,
  wordmarkWidth = 140,
  color = 'currentColor',
  gap = 16,
  className = ''
}) => {
  return (
    <div
      className={`daovos-lockup ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        alignItems: 'center',
        gap: `${gap}px`
      }}
    >
      <DaovosSymbol size={symbolSize} color={color} />
      <DaovosWordmark width={wordmarkWidth} color={color} />
    </div>
  );
};

export default DaovosLockup;
