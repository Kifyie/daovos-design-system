/**
 * DAOVOS Visual Operating System — Typography Tokens (JS Module)
 */

export const typographyTokens = {
  displayXL: {
    name: 'Display XL',
    family: 'nm / Neo-Grotesk Display',
    sizeClamp: 'clamp(4rem, 2.5rem + 4.5vw, 7.5rem)',
    sizeRange: '64px – 120px',
    lineHeight: '0.95',
    letterSpacing: '-0.04em',
    weight: '600 / Semibold',
    role: 'Monumental architectural headers and high-impact structural statements'
  },
  displayL: {
    name: 'Display L',
    family: 'nm / Neo-Grotesk Display',
    sizeClamp: 'clamp(2.75rem, 1.8rem + 3vw, 5rem)',
    sizeRange: '44px – 80px',
    lineHeight: '1.0',
    letterSpacing: '-0.03em',
    weight: '600 / Semibold',
    role: 'Major editorial section anchors and chapter titles'
  },
  h1: {
    name: 'H1 / Display M',
    family: 'nm / Neo-Grotesk Display',
    sizeClamp: 'clamp(2.25rem, 1.6rem + 1.8vw, 3.5rem)',
    sizeRange: '36px – 56px',
    lineHeight: '1.1',
    letterSpacing: '-0.025em',
    weight: '600 / Semibold',
    role: 'Component titles, module headings, and primary editorial subjects'
  },
  h2: {
    name: 'H2 / Display S',
    family: 'nm / Neo-Grotesk Display',
    sizeClamp: 'clamp(1.75rem, 1.3rem + 1.1vw, 2.5rem)',
    sizeRange: '28px – 40px',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
    weight: '500 / Medium',
    role: 'Sub-module headers, panel titles, and section breakdowns'
  },
  h3: {
    name: 'H3 / Technical Head',
    family: 'nm / Neo-Grotesk Display',
    sizeClamp: 'clamp(1.25rem, 1.05rem + 0.6vw, 1.75rem)',
    sizeRange: '20px – 28px',
    lineHeight: '1.3',
    letterSpacing: '-0.015em',
    weight: '500 / Medium',
    role: 'Feature titles, subsection callouts, and lead metric labels'
  },
  bodyL: {
    name: 'Body L',
    family: 'Inter / Grotesk Body',
    size: '1.125rem (18px)',
    lineHeight: '1.55',
    letterSpacing: '-0.01em',
    weight: '400 / Regular',
    role: 'Editorial introductory paragraphs, lead copy, and longform highlights'
  },
  bodyM: {
    name: 'Body M',
    family: 'Inter / Grotesk Body',
    size: '1rem (16px)',
    lineHeight: '1.6',
    letterSpacing: '0',
    weight: '400 / Regular',
    role: 'Standard interface body text, descriptions, and article copy'
  },
  bodyS: {
    name: 'Body S',
    family: 'Inter / Grotesk Body',
    size: '0.875rem (14px)',
    lineHeight: '1.5',
    letterSpacing: '0.01em',
    weight: '400 / Regular',
    role: 'Secondary copy, captions, footnotes, and compact tables'
  },
  label: {
    name: 'Label / Mono Tech',
    family: 'DM Mono / Technical Monospace',
    size: '0.75rem (12px)',
    lineHeight: '1.4',
    letterSpacing: '0.14em',
    weight: '600 / Semibold',
    role: 'Uppercase section indices, status badges, telemetry headers, and buttons'
  },
  micro: {
    name: 'Micro / Coordinates',
    family: 'DM Mono / Technical Monospace',
    size: '0.625rem (10px)',
    lineHeight: '1.3',
    letterSpacing: '0.20em',
    weight: '600 / Semibold',
    role: 'Grid coordinates, timestamps, engineering stamps, and hairline rule tags'
  }
};
