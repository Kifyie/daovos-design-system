import React from 'react';

/**
 * DAOVOS Geometric Line Icon Suite
 * Standardized on 24x24 viewBox, 1.25px - 1.5px hairline stroke,
 * sharp geometric joins, monochrome precision.
 */

const BaseIcon = ({ children, size = 20, strokeWidth = 1.5, color = 'currentColor', className = '', style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`daovos-icon ${className}`}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
  >
    {children}
  </svg>
);

export const IconGrid12 = (props) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="0" />
    <line x1="7.5" y1="3" x2="7.5" y2="21" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="16.5" y1="3" x2="16.5" y2="21" />
  </BaseIcon>
);

export const IconCrosshair = (props) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="8" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </BaseIcon>
);

export const IconModule6 = (props) => (
  <BaseIcon {...props}>
    <rect x="10.5" y="3" width="3" height="7" />
    <rect x="5" y="6" width="3" height="4" />
    <rect x="16" y="6" width="3" height="4" />
    <rect x="5" y="12" width="3" height="4" />
    <rect x="10.5" y="12" width="3" height="9" />
    <rect x="16" y="12" width="3" height="4" />
  </BaseIcon>
);

export const IconPlumb = (props) => (
  <BaseIcon {...props}>
    <line x1="12" y1="2" x2="12" y2="14" />
    <polygon points="12,22 8,15 16,15" />
    <circle cx="12" cy="4" r="1.5" />
  </BaseIcon>
);

export const IconColumnsAsym = (props) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="6" height="18" />
    <rect x="11" y="3" width="10" height="18" />
  </BaseIcon>
);

export const IconLayers = (props) => (
  <BaseIcon {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </BaseIcon>
);

export const IconTerminal = (props) => (
  <BaseIcon {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </BaseIcon>
);

export const IconFrame = (props) => (
  <BaseIcon {...props}>
    <line x1="22" y1="6" x2="2" y2="6" />
    <line x1="22" y1="18" x2="2" y2="18" />
    <line x1="6" y1="2" x2="6" y2="22" />
    <line x1="18" y1="2" x2="18" y2="22" />
  </BaseIcon>
);

export const IconRuler = (props) => (
  <BaseIcon {...props}>
    <path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z" />
    <line x1="14.5" y1="5.5" x2="12" y2="8" />
    <line x1="11.5" y1="8.5" x2="8" y2="12" />
    <line x1="8.5" y1="11.5" x2="6" y2="14" />
  </BaseIcon>
);

export const IconArrowUpRight = (props) => (
  <BaseIcon {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </BaseIcon>
);

export const IconArrowRight = (props) => (
  <BaseIcon {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </BaseIcon>
);

export const IconCornerDownRight = (props) => (
  <BaseIcon {...props}>
    <polyline points="15 10 20 15 15 20" />
    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
  </BaseIcon>
);

export const IconSliders = (props) => (
  <BaseIcon {...props}>
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </BaseIcon>
);

export const IconActivity = (props) => (
  <BaseIcon {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </BaseIcon>
);

export const IconEye = (props) => (
  <BaseIcon {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </BaseIcon>
);

export const IconShield = (props) => (
  <BaseIcon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </BaseIcon>
);

export const IconSun = (props) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
  </BaseIcon>
);

export const IconMoon = (props) => (
  <BaseIcon {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </BaseIcon>
);

export const iconLibrary = [
  { name: 'Grid 12', component: IconGrid12, category: 'Architectural' },
  { name: 'Crosshair', component: IconCrosshair, category: 'Architectural' },
  { name: 'Module 6', component: IconModule6, category: 'Brand & Geometry' },
  { name: 'Plumb Datum', component: IconPlumb, category: 'Architectural' },
  { name: 'Asym 5:7', component: IconColumnsAsym, category: 'Architectural' },
  { name: 'Layers', component: IconLayers, category: 'Engineering' },
  { name: 'Terminal', component: IconTerminal, category: 'Engineering' },
  { name: 'Frame Line', component: IconFrame, category: 'Architectural' },
  { name: 'Ruler 8px', component: IconRuler, category: 'Specification' },
  { name: 'Arrow Up-Right', component: IconArrowUpRight, category: 'Navigation' },
  { name: 'Arrow Right', component: IconArrowRight, category: 'Navigation' },
  { name: 'Corner Flow', component: IconCornerDownRight, category: 'Navigation' },
  { name: 'Sliders', component: IconSliders, category: 'Controls' },
  { name: 'Activity', component: IconActivity, category: 'Telemetry' },
  { name: 'Eye Focus', component: IconEye, category: 'Controls' },
  { name: 'Shield Spec', component: IconShield, category: 'Engineering' },
  { name: 'Sun Light', component: IconSun, category: 'Environment' },
  { name: 'Moon Dark', component: IconMoon, category: 'Environment' }
];
