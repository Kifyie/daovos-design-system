import React from 'react';

/**
 * DAOVOS Authoritative Symbol Component
 * Uses the canonical 6-module geometry organized around a central vertical structure.
 * Module 1: Top Center (478.50, 240.80, w: 66.30, h: 162.70)
 * Module 2: Top Left   (380.50, 322.50, w: 63.80, h: 81.00)
 * Module 3: Top Right  (578.70, 322.50, w: 63.80, h: 81.00)
 * Module 4: Bot Left   (380.50, 419.20, w: 63.80, h: 77.90)
 * Module 5: Bot Center (478.50, 419.20, w: 66.30, h: 156.00)
 * Module 6: Bot Right  (578.70, 419.20, w: 63.80, h: 77.90)
 */
export const DaovosSymbol = ({
  size = 48,
  color = 'currentColor',
  className = '',
  style = {},
  moduleOffsets = [0, 0, 0, 0, 0, 0], // Optional offsets for motion choreography
  opacity = 1
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}
      className={`daovos-symbol ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', opacity, ...style }}
    >
      <g transform="translate(256, 256) scale(1.1) translate(-511.5, -408)">
        {/* Module 1: Center Top */}
        <rect
          x={478.50 + (moduleOffsets[0]?.x || 0)}
          y={240.80 + (moduleOffsets[0]?.y || 0)}
          width="66.30"
          height="162.70"
          style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
        {/* Module 2: Left Top */}
        <rect
          x={380.50 + (moduleOffsets[1]?.x || 0)}
          y={322.50 + (moduleOffsets[1]?.y || 0)}
          width="63.80"
          height="81.00"
          style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
        {/* Module 3: Right Top */}
        <rect
          x={578.70 + (moduleOffsets[2]?.x || 0)}
          y={322.50 + (moduleOffsets[2]?.y || 0)}
          width="63.80"
          height="81.00"
          style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
        {/* Module 4: Left Bottom */}
        <rect
          x={380.50 + (moduleOffsets[3]?.x || 0)}
          y={419.20 + (moduleOffsets[3]?.y || 0)}
          width="63.80"
          height="77.90"
          style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
        {/* Module 5: Center Bottom */}
        <rect
          x={478.50 + (moduleOffsets[4]?.x || 0)}
          y={419.20 + (moduleOffsets[4]?.y || 0)}
          width="66.30"
          height="156.00"
          style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
        {/* Module 6: Right Bottom */}
        <rect
          x={578.70 + (moduleOffsets[5]?.x || 0)}
          y={419.20 + (moduleOffsets[5]?.y || 0)}
          width="63.80"
          height="77.90"
          style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
      </g>
    </svg>
  );
};

export default DaovosSymbol;
