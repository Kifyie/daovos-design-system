import React from 'react';

/**
 * DAOVOS Display Heading Component
 * Supports monumental architectural sizing, disciplined uppercase tracking,
 * and integrated sub-heading / index tag.
 */
export const DisplayHeading = ({
  title,
  subhead = '',
  index = '',
  size = 'xl', // 'xl' | 'l' | '1' | '2' | '3'
  align = 'left', // 'left' | 'center' | 'right'
  asymmetric = false,
  className = '',
  style = {}
}) => {
  const sizeClass = `type-display-${size}`;

  return (
    <div
      className={`daovos-display-heading flex-col ${align === 'center' ? 'items-center text-center' : align === 'right' ? 'items-end text-right' : 'items-start text-left'} ${className}`}
      style={{
        gap: 'var(--space-2)',
        maxWidth: asymmetric ? '85%' : '100%',
        ...style
      }}
    >
      {(index || subhead) && (
        <div className="flex-row items-center gap-2">
          {index && <span className="type-micro text-muted mono">{index}</span>}
          {index && subhead && <span className="type-micro text-muted">/</span>}
          {subhead && <span className="type-label text-secondary">{subhead}</span>}
        </div>
      )}
      <h2 className={`${sizeClass} text-primary`} style={{ textWrap: 'balance' }}>
        {title}
      </h2>
    </div>
  );
};

/**
 * DAOVOS Section Index
 * e.g. "01 / SPECIFICATION" with 1px architectural divider
 */
export const SectionIndex = ({
  number = '01',
  title = '',
  tag = '',
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`daovos-section-index flex-col gap-2 ${className}`}
      style={{ width: '100%', ...style }}
    >
      <div className="flex-row justify-between items-center">
        <div className="flex-row items-center gap-3">
          <span className="type-label text-primary mono font-semibold">{number}</span>
          <span className="type-label text-muted">/</span>
          <span className="type-label text-secondary">{title}</span>
        </div>
        {tag && <span className="type-micro text-muted mono">{tag}</span>}
      </div>
      <div className="line-divider" />
    </div>
  );
};

export default DisplayHeading;
