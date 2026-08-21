import React from 'react';

/**
 * DAOVOS Media Primitive
 * Frame container enforcing canonical image treatments:
 * RAW, MONOCHROME, MUTED, MATERIAL, HALFTONE
 */
export const Media = ({
  src,
  alt = '',
  treatment = 'raw', // 'raw' | 'monochrome' | 'muted' | 'material' | 'halftone'
  aspectRatio = '16/9', // '16/9' | '4/3' | '1/1' | '3/4' | '21/9'
  caption = '',
  index = '',
  className = '',
  style = {}
}) => {
  return (
    <figure className={`daovos-media-wrapper ${className}`} style={{ margin: 0, ...style }}>
      <div
        className={`daovos-media-frame treatment-${treatment}`}
        style={{ aspectRatio }}
      >
        <img src={src} alt={alt} loading="lazy" />
      </div>
      {(caption || index) && (
        <figcaption
          className="flex-row justify-between items-center gap-2"
          style={{
            marginTop: 'var(--space-2)',
            paddingTop: 'var(--space-1)',
            borderTop: '1px solid var(--color-border-subtle)'
          }}
        >
          {caption && <span className="type-body-s text-secondary">{caption}</span>}
          {index && <span className="type-micro text-muted mono">{index}</span>}
        </figcaption>
      )}
    </figure>
  );
};

export default Media;
