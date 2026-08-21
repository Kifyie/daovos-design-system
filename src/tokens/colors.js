/**
 * DAOVOS Visual Operating System — Color Tokens (JS Module)
 */

export const canonicalPalette = {
  boneWhite: {
    name: 'Bone White',
    hex: '#F4EEE8',
    rgb: '244, 238, 232',
    hsl: '30°, 32%, 93%',
    role: 'Canonical light surface and primary background foundation',
    type: 'canonical'
  },
  nearBlack: {
    name: 'Near Black',
    hex: '#111112',
    rgb: '17, 17, 18',
    hsl: '240°, 3%, 7%',
    role: 'Canonical dark surface, primary typography ink, and high-impact structural borders',
    type: 'canonical'
  },
  warmStone: {
    name: 'Warm Stone',
    hex: '#ABA6A1',
    rgb: '171, 166, 161',
    hsl: '30°, 6%, 65%',
    role: 'Muted editorial metadata, secondary structural borders, and subtle tone',
    type: 'canonical'
  },
  graphite: {
    name: 'Graphite',
    hex: '#5A5958',
    rgb: '90, 89, 88',
    hsl: '30°, 1%, 35%',
    role: 'Secondary body copy, technical labels, and muted lead-ins',
    type: 'canonical'
  },
  softConcrete: {
    name: 'Soft Concrete',
    hex: '#C1BBB6',
    rgb: '193, 187, 182',
    hsl: '27°, 9%, 74%',
    role: 'Hairline divisions, quiet metadata panels, and tertiary surfaces',
    type: 'canonical'
  },
  pureWhite: {
    name: 'Pure White',
    hex: '#FFFFFF',
    rgb: '255, 255, 255',
    hsl: '0°, 0%, 100%',
    role: 'Peak structural highlights and ultra-high-contrast elements',
    type: 'canonical'
  }
};

export const interfaceNeutrals = {
  jetBlack: {
    name: 'Jet Black',
    hex: '#0A0A0A',
    rgb: '10, 10, 10',
    hsl: '0°, 0%, 4%',
    role: 'Deepest spatial backdrops and recessed panels in inverse mode'
  },
  charcoal: {
    name: 'Charcoal',
    hex: '#171717',
    rgb: '23, 23, 23',
    hsl: '0°, 0%, 9%',
    role: 'Elevated dark surfaces and interactive module backgrounds'
  },
  slate: {
    name: 'Slate',
    hex: '#2B2B2E',
    rgb: '43, 43, 46',
    hsl: '240°, 3%, 17%',
    role: 'Interactive controls hover states and dark card boundaries'
  },
  steel: {
    name: 'Steel',
    hex: '#6B6B6F',
    rgb: '107, 107, 111',
    hsl: '240°, 2%, 43%',
    role: 'Secondary technical indicators and dark mode muted text'
  }
};

export const semanticTokens = {
  light: {
    'color.bg.primary': '#F4EEE8',
    'color.bg.surface': '#EDE6DF',
    'color.bg.surfaceRaised': '#E5DFD8',
    'color.bg.surfaceSunken': '#E0DAD3',
    'color.bg.inverse': '#111112',
    'color.text.primary': '#111112',
    'color.text.secondary': '#5A5958',
    'color.text.muted': '#ABA6A1',
    'color.text.inverse': '#F4EEE8',
    'color.border.subtle': 'rgba(17, 17, 18, 0.12)',
    'color.border.medium': 'rgba(17, 17, 18, 0.24)',
    'color.border.strong': '#111112',
    'color.line.grid': 'rgba(17, 17, 18, 0.07)',
    'color.line.registration': 'rgba(17, 17, 18, 0.35)'
  },
  dark: {
    'color.bg.primary': '#111112',
    'color.bg.surface': '#171717',
    'color.bg.surfaceRaised': '#2B2B2E',
    'color.bg.surfaceSunken': '#0A0A0A',
    'color.bg.inverse': '#F4EEE8',
    'color.text.primary': '#F4EEE8',
    'color.text.secondary': '#C1BBB6',
    'color.text.muted': '#ABA6A1',
    'color.text.inverse': '#111112',
    'color.border.subtle': 'rgba(244, 238, 232, 0.12)',
    'color.border.medium': 'rgba(244, 238, 232, 0.24)',
    'color.border.strong': '#F4EEE8',
    'color.line.grid': 'rgba(244, 238, 232, 0.06)',
    'color.line.registration': 'rgba(244, 238, 232, 0.35)'
  }
};
