import React, { useState } from 'react';

/**
 * DAOVOS Input & Textarea Controls
 * Architectural rectangular geometry with monospace technical labeling and focus hairlines.
 */
export const Input = ({
  label = '',
  placeholder = '',
  value,
  onChange,
  type = 'text',
  error = '',
  hint = '',
  disabled = false,
  className = '',
  style = {}
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`daovos-form-field flex-col gap-1 ${className}`} style={{ width: '100%', ...style }}>
      {label && (
        <label className="type-micro text-secondary mono flex-row justify-between">
          <span>{label}</span>
          {hint && <span className="text-muted">{hint}</span>}
        </label>
      )}
      <div
        className="surface-sunken radius-control flex-row items-center"
        style={{
          border: `1px solid ${
            error
              ? 'var(--daovos-color-graphite)'
              : isFocused
              ? 'var(--color-focus-ring)'
              : 'var(--color-border-subtle)'
          }`,
          transition: 'border-color var(--motion-duration-micro) var(--motion-ease-precision)',
          overflow: 'hidden'
        }}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="type-body-m"
          style={{
            width: '100%',
            padding: '10px 14px',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--color-text-primary)'
          }}
        />
      </div>
      {error && <span className="type-micro mono" style={{ color: 'var(--daovos-color-graphite)' }}>{error}</span>}
    </div>
  );
};

export const Textarea = ({
  label = '',
  placeholder = '',
  value,
  onChange,
  rows = 4,
  error = '',
  hint = '',
  disabled = false,
  className = '',
  style = {}
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`daovos-form-field flex-col gap-1 ${className}`} style={{ width: '100%', ...style }}>
      {label && (
        <label className="type-micro text-secondary mono flex-row justify-between">
          <span>{label}</span>
          {hint && <span className="text-muted">{hint}</span>}
        </label>
      )}
      <div
        className="surface-sunken radius-control"
        style={{
          border: `1px solid ${
            error
              ? 'var(--daovos-color-graphite)'
              : isFocused
              ? 'var(--color-focus-ring)'
              : 'var(--color-border-subtle)'
          }`,
          transition: 'border-color var(--motion-duration-micro) var(--motion-ease-precision)',
          overflow: 'hidden'
        }}
      >
        <textarea
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="type-body-m"
          style={{
            width: '100%',
            padding: '10px 14px',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            resize: 'vertical',
            color: 'var(--color-text-primary)'
          }}
        />
      </div>
      {error && <span className="type-micro mono" style={{ color: 'var(--daovos-color-graphite)' }}>{error}</span>}
    </div>
  );
};

export default Input;
