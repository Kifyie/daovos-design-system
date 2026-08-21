import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

/**
 * DAOVOS Select Control
 */
export const Select = ({
  label = '',
  options = [],
  value,
  onChange,
  disabled = false,
  className = '',
  style = {}
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`daovos-form-field flex-col gap-1 ${className}`} style={{ width: '100%', ...style }}>
      {label && <label className="type-micro text-secondary mono">{label}</label>}
      <div
        className="surface-sunken radius-control flex-row items-center justify-between"
        style={{
          position: 'relative',
          border: `1px solid ${isFocused ? 'var(--color-focus-ring)' : 'var(--color-border-subtle)'}`,
          paddingRight: '12px',
          transition: 'border-color var(--motion-duration-micro) var(--motion-ease-precision)'
        }}
      >
        <select
          value={value}
          onChange={onChange}
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
            color: 'var(--color-text-primary)',
            appearance: 'none',
            cursor: 'pointer'
          }}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={14} className="text-secondary" style={{ pointerEvents: 'none', flexShrink: 0 }} />
      </div>
    </div>
  );
};

/**
 * DAOVOS Checkbox & Radio Controls
 */
export const Checkbox = ({
  checked = false,
  onChange,
  label = '',
  disabled = false,
  className = '',
  style = {}
}) => {
  return (
    <label
      className={`daovos-checkbox flex-row items-center gap-2 ${className}`}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.4 : 1,
        ...style
      }}
    >
      <div
        onClick={() => !disabled && onChange && onChange(!checked)}
        className="flex-row items-center justify-between radius-technical"
        style={{
          width: '18px',
          height: '18px',
          border: `1px solid ${checked ? 'var(--color-border-strong)' : 'var(--color-border-medium)'}`,
          backgroundColor: checked ? 'var(--color-bg-inverse)' : 'var(--color-bg-surface)',
          color: 'var(--color-text-inverse)',
          justifyContent: 'center',
          transition: 'all var(--motion-duration-micro) var(--motion-ease-precision)'
        }}
      >
        {checked && <Check size={12} strokeWidth={2.5} />}
      </div>
      {label && <span className="type-body-s text-primary">{label}</span>}
    </label>
  );
};

export const Radio = ({
  checked = false,
  onChange,
  label = '',
  disabled = false,
  className = '',
  style = {}
}) => {
  return (
    <label
      className={`daovos-radio flex-row items-center gap-2 ${className}`}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.4 : 1,
        ...style
      }}
    >
      <div
        onClick={() => !disabled && onChange && onChange(!checked)}
        className="flex-row items-center justify-between"
        style={{
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          border: `1px solid ${checked ? 'var(--color-border-strong)' : 'var(--color-border-medium)'}`,
          backgroundColor: 'var(--color-bg-surface)',
          justifyContent: 'center',
          transition: 'all var(--motion-duration-micro) var(--motion-ease-precision)'
        }}
      >
        {checked && (
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-inverse)'
            }}
          />
        )}
      </div>
      {label && <span className="type-body-s text-primary">{label}</span>}
    </label>
  );
};

/**
 * DAOVOS Switch Control
 */
export const Switch = ({
  checked = false,
  onChange,
  label = '',
  disabled = false,
  className = '',
  style = {}
}) => {
  return (
    <label
      className={`daovos-switch flex-row items-center gap-3 ${className}`}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.4 : 1,
        ...style
      }}
    >
      <div
        onClick={() => !disabled && onChange && onChange(!checked)}
        className="radius-control"
        style={{
          width: '40px',
          height: '22px',
          padding: '2px',
          backgroundColor: checked ? 'var(--color-bg-inverse)' : 'var(--color-bg-surface-raised)',
          border: '1px solid var(--color-border-subtle)',
          transition: 'all var(--motion-duration-micro) var(--motion-ease-precision)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          className="radius-subtle"
          style={{
            width: '16px',
            height: '16px',
            backgroundColor: checked ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
            transform: checked ? 'translateX(18px)' : 'translateX(0px)',
            transition: 'transform var(--motion-duration-micro) var(--motion-ease-precision)'
          }}
        />
      </div>
      {label && <span className="type-body-s text-primary">{label}</span>}
    </label>
  );
};

export default Select;
