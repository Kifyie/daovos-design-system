/**
 * DAOVOS Visual Operating System — Geometry Tokens (JS Module)
 */

export const geometryTokens = {
  radii: [
    { token: '--radius-none', value: '0px', role: 'Structural / Editorial: Grid containers, panels, dividers, images, layout blocks' },
    { token: '--radius-subtle', value: '2px', role: 'Technical Micro: Registration badges, status dots, micro code indicators' },
    { token: '--radius-sm', value: '4px', role: 'Technical Elements: Telemetry badges, code blocks, metadata tags' },
    { token: '--radius-md', value: '6px', role: 'Interactive Controls: Inputs, selectors, checkboxes, switches' },
    { token: '--radius-interactive', value: '8px', role: 'Primary Buttons: Interactive action triggers, key callouts' },
    { token: '--radius-lg', value: '12px', role: 'Maximum Justified: Strictly reserved for rare enclosed modals' }
  ],
  rules: [
    'Default to rectangular, modular, and architectural plumb forms (0px).',
    'Avoid excessive pills and oversized rounded cards.',
    'Keep interactive controls restrained to 6–8px.',
    'Maintain structural alignment with 1px dividers.'
  ]
};
