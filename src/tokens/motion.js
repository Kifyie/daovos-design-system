/**
 * DAOVOS Visual Operating System — Motion Tokens (JS Module)
 */

export const motionTokens = {
  durations: [
    { token: '--motion-duration-micro', value: '160ms', range: '120–240ms', role: 'Micro: Button state changes, icon translations, focus indicators' },
    { token: '--motion-duration-interface', value: '360ms', range: '300–600ms', role: 'Interface: Panels, tab switches, dropdown reveals, modal viewports' },
    { token: '--motion-duration-editorial', value: '760ms', range: '600–1000ms', role: 'Editorial: Text mask reveals, structural line draws, frame expansions' },
    { token: '--motion-duration-cinematic', value: '1200ms', range: '900–1600ms', role: 'Cinematic: Symbol assembly, full page section themes, monumental reveals' }
  ],
  easings: [
    {
      name: 'Precision',
      token: '--motion-ease-precision',
      curve: 'cubic-bezier(0.16, 1, 0.3, 1)',
      points: [0.16, 1, 0.3, 1],
      description: 'Rapid start, deceleration into an exact mechanical lock. Default DAOVOS easing.'
    },
    {
      name: 'Mechanical',
      token: '--motion-ease-mechanical',
      curve: 'cubic-bezier(0.25, 0, 0, 1)',
      points: [0.25, 0, 0, 1],
      description: 'Heavy initial displacement settling abruptly at terminal boundary.'
    },
    {
      name: 'Settle',
      token: '--motion-ease-settle',
      curve: 'cubic-bezier(0.65, 0, 0.35, 1)',
      points: [0.65, 0, 0.35, 1],
      description: 'Architectural damping with balanced acceleration and inertia.'
    },
    {
      name: 'Sharp',
      token: '--motion-ease-sharp',
      curve: 'cubic-bezier(0.4, 0, 0.2, 1)',
      points: [0.4, 0, 0.2, 1],
      description: 'High-velocity response for instantaneous tactile control feedback.'
    }
  ]
};
