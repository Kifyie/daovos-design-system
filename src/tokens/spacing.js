/**
 * DAOVOS Visual Operating System — Spacing Tokens (JS Module)
 */

export const spacingScale = [
  { token: '--space-1', value: '4px', multiplier: '0.5x', role: 'Hairline offsets, badge insets, micro gaps' },
  { token: '--space-2', value: '8px', multiplier: '1.0x (Base)', role: 'Base unit X, control paddings, label margins' },
  { token: '--space-3', value: '12px', multiplier: '1.5x', role: 'Button vertical padding, compact stack gaps' },
  { token: '--space-4', value: '16px', multiplier: '2.0x', role: 'Mobile grid gutters, input padding, standard stack' },
  { token: '--space-6', value: '24px', multiplier: '3.0x', role: 'Desktop & tablet grid gutters, card padding' },
  { token: '--space-8', value: '32px', multiplier: '4.0x', role: 'Module separation, header vertical padding' },
  { token: '--space-12', value: '48px', multiplier: '6.0x', role: 'Small section spacing, major component offsets' },
  { token: '--space-16', value: '64px', multiplier: '8.0x', role: 'Medium section division, editorial spacing' },
  { token: '--space-20', value: '80px', multiplier: '10.0x', role: 'Standard section rhythm and negative space breaks' },
  { token: '--space-24', value: '96px', multiplier: '12.0x', role: 'Large section spacing, chapter boundaries' },
  { token: '--space-32', value: '128px', multiplier: '16.0x', role: 'Major editorial pauses, hero block margins' },
  { token: '--space-40', value: '160px', multiplier: '20.0x', role: 'Monumental architectural pauses' },
  { token: '--space-48', value: '192px', multiplier: '24.0x', role: 'Maximum spatial release and viewport transitions' }
];

export const semanticSpacing = {
  section: {
    xs: '32px (--space-8)',
    sm: '48px (--space-12)',
    md: '80px (--space-20)',
    lg: '128px (--space-32)',
    xl: '192px (--space-48)'
  },
  gutters: {
    desktop: '24px (12 cols, 5% margin)',
    tablet: '24px (8 cols, 5% margin)',
    mobile: '16px (4 cols, 4% margin)'
  }
};
