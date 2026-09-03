import React, { useState, useEffect } from 'react';
import { Agentation } from 'agentation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { DaovosHero } from './components/hero';
import {
  HeroPlaneTransition,
  WhoWeAreSection,
  ServiceJourney
} from './components/sections';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

const SPECIMEN_ACCESS_ENABLED = false;
import {
  DaovosSymbol,
  DaovosWordmark,
  DaovosLockup,
  Symbol6ModuleExplorer
} from './components/brand';
import {
  Container,
  Grid,
  GridItem,
  Stack,
  Divider,
  Surface,
  Label,
  Media
} from './components/primitives';
import {
  Button,
  Link,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch
} from './components/controls';
import {
  DisplayHeading,
  SectionIndex,
  MetadataTable,
  TechnicalLeaderboard
} from './components/editorial';
import {
  iconLibrary,
  IconGrid12,
  IconCrosshair,
  IconModule6,
  IconPlumb,
  IconColumnsAsym,
  IconLayers,
  IconTerminal,
  IconRuler,
  IconArrowUpRight,
  IconSun,
  IconMoon,
  IconEye,
  IconShield,
  IconSliders,
  IconActivity
} from './components/icons/GeometricIcons';
import {
  EasingCurvesVisualizer,
  TextMaskReveal,
  LineReveal,
  PageTransitionDemo
} from './components/motion';
import { GridOverlay } from './specimen/GridOverlay';
import { canonicalPalette, interfaceNeutrals, semanticTokens } from './tokens/colors';
import { typographyTokens } from './tokens/typography';
import { spacingScale, semanticSpacing } from './tokens/spacing';
import { gridTokens } from './tokens/grid';
import { geometryTokens } from './tokens/geometry';
import { motionTokens } from './tokens/motion';

import { Copy, Check, Eye, Sun, Moon, MoveRight, Layers, Sliders, Play, Code, Compass, ArrowLeft } from 'lucide-react';

export default function App() {
  // Mode: 'website' (Default Hero Section) | 'specimen' (Design System Workbench)
  const [viewMode, setViewMode] = useState('website');

  // Global System State
  const [theme, setTheme] = useState('near-black'); // Default to Near Black for the architectural hero
  const [gridOverlay, setGridOverlay] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeChapter, setActiveChapter] = useState('brand');
  const [copiedToken, setCopiedToken] = useState('');

  // Interactive Chapter States
  const [testText, setTestText] = useState('ARCHITECTURAL STRUCTURE');
  const [iconSearch, setIconSearch] = useState('');
  const [iconSize, setIconSize] = useState(24);
  const [iconStroke, setIconStroke] = useState(1.5);
  const [imageTreatment, setImageTreatment] = useState('raw');
  const [activeGridAsym, setActiveGridAsym] = useState('5-7');
  const [motionTrigger, setMotionTrigger] = useState(true);
  const [exportFormat, setExportFormat] = useState('css');

  // Form Controls State
  const [inputValue, setInputValue] = useState('SPEC-DAO-2026-X');
  const [selectValue, setSelectValue] = useState('structural');
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [radioValue, setRadioValue] = useState('12col');
  const [switchValue, setSwitchValue] = useState(true);

  // Apply theme and reduced-motion to DOM root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (reducedMotion) {
      document.documentElement.setAttribute('data-reduced-motion', 'true');
    } else {
      document.documentElement.removeAttribute('data-reduced-motion');
    }
  }, [theme, reducedMotion]);

  // GSAP ScrollSmoother — buttery momentum scroll for the website view only.
  // Paused during the hero intro preloader (scrolling mid-intro would drag
  // the reveal choreography). Skipped under prefers-reduced-motion.
  useGSAP(() => {
    if (SPECIMEN_ACCESS_ENABLED && viewMode !== 'website') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.15,
      effects: false,
      normalizeScroll: false,
      ignoreMobileResize: true,
      paused: true
    });

    const unlock = setTimeout(() => smoother.paused(false), 2900);

    return () => {
      clearTimeout(unlock);
      smoother.kill();
    };
  }, { dependencies: [viewMode] });

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label || text);
    setTimeout(() => setCopiedToken(''), 2000);
  };

  const triggerMotionCycle = () => {
    setMotionTrigger(false);
    setTimeout(() => setMotionTrigger(true), 50);
  };

  const chapters = [
    { id: 'brand', number: '01', title: 'Brand & Geometry' },
    { id: 'colors', number: '02', title: 'Color System' },
    { id: 'typography', number: '03', title: 'Typography' },
    { id: 'spacing', number: '04', title: 'Spacing Rhythm' },
    { id: 'grid', number: '05', title: 'Responsive Grid' },
    { id: 'lines', number: '06', title: 'Structural Lines' },
    { id: 'imagery', number: '07', title: 'Imagery & Materials' },
    { id: 'icons', number: '08', title: 'Iconography' },
    { id: 'primitives', number: '09', title: 'Primitives & Controls' },
    { id: 'editorial', number: '10', title: 'Editorial Modules' },
    { id: 'motion', number: '11', title: 'Motion Laboratory' },
    { id: 'export', number: '12', title: 'Tokens & Export' }
  ];

  return (
    <>
      {!SPECIMEN_ACCESS_ENABLED || viewMode === 'website' ? (
        <main className="daovos-website-root" style={{ minHeight: '100vh', backgroundColor: '#0a0a0c' }}>
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <HeroPlaneTransition>
                <DaovosHero />
              </HeroPlaneTransition>
              <WhoWeAreSection />
              <ServiceJourney />
            </div>
          </div>
        </main>
      ) : (
        <div className="daovos-vos-app" style={{ minHeight: '100vh', paddingBottom: 'var(--space-32)' }}>
          {/* Grid Overlay */}
          <GridOverlay visible={gridOverlay} />

      {/* Global Architectural Navigation Bar */}
      <header
        className="surface-raised"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 'var(--z-navigation)',
          borderBottom: '1px solid var(--color-border-subtle)',
          padding: '12px var(--grid-margin-desktop)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div className="flex-row justify-between items-center" style={{ maxWidth: 'var(--grid-max-width)', margin: '0 auto' }}>
          {/* Logo & Back to Hero */}
          <div className="flex-row items-center gap-4">
            <button
              onClick={() => setViewMode('website')}
              className="type-micro mono flex-row items-center gap-1 radius-subtle"
              style={{
                padding: '6px 10px',
                backgroundColor: 'var(--color-bg-inverse)',
                color: 'var(--color-text-inverse)',
                border: '1px solid var(--color-border-strong)',
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={12} />
              <span>RETURN TO HERO</span>
            </button>
            <div className="line-divider-vertical" style={{ height: '20px' }} />
            <DaovosLockup symbolSize={26} wordmarkWidth={105} />
            <div className="flex-row items-center gap-2">
              <span className="type-micro mono text-muted">DESIGN SYSTEM</span>
              <Label size="micro" variant="solid" indicator="live">v1.0.0 SPECIMEN</Label>
            </div>
          </div>

          {/* Quick System Tool Controls */}
          <div className="flex-row items-center gap-3">
            {/* Grid Overlay Toggle */}
            <button
              onClick={() => setGridOverlay(!gridOverlay)}
              className="type-label flex-row items-center gap-1 radius-technical"
              style={{
                padding: '6px 10px',
                backgroundColor: gridOverlay ? 'var(--color-bg-inverse)' : 'var(--color-bg-primary)',
                color: gridOverlay ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
                border: '1px solid var(--color-border-subtle)'
              }}
              title="Toggle 12-Column Responsive Grid Guides"
            >
              <IconGrid12 size={14} />
              <span>GRID {gridOverlay ? 'ON' : 'OFF'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'bone-white' ? 'near-black' : 'bone-white')}
              className="type-label flex-row items-center gap-1 radius-technical"
              style={{
                padding: '6px 10px',
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border-subtle)'
              }}
              title="Switch Canvas Theme Mode"
            >
              {theme === 'bone-white' ? <IconMoon size={14} /> : <IconSun size={14} />}
              <span>{theme === 'bone-white' ? 'NEAR BLACK' : 'BONE WHITE'}</span>
            </button>

            {/* Reduced Motion Toggle */}
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className="type-label flex-row items-center gap-1 radius-technical"
              style={{
                padding: '6px 10px',
                backgroundColor: reducedMotion ? 'var(--daovos-color-graphite)' : 'var(--color-bg-primary)',
                color: reducedMotion ? 'var(--daovos-color-pure-white)' : 'var(--color-text-secondary)',
                border: '1px solid var(--color-border-subtle)'
              }}
              title="Toggle Accessibility Reduced Motion Mode"
            >
              <span>{reducedMotion ? 'MOTION: REDUCED' : 'MOTION: FULL'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Specimen Container */}
      <Container style={{ marginTop: 'var(--space-8)' }}>
        {/* Specimen Header & Architectural Manifesto */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <div className="flex-row justify-between items-start" style={{ marginBottom: 'var(--space-4)' }}>
            <div>
              <span className="type-micro text-muted mono">DAOVOS DESIGN SYSTEM SPECIFICATION // SPEC-01</span>
              <h1 className="type-display-l text-primary" style={{ marginTop: '4px' }}>
                Visual Operating System
              </h1>
            </div>
            <div className="text-right">
              <span className="type-micro text-muted mono">DISCIPLINE: ARCHITECTURAL & ENGINEERING</span>
              <div className="type-label text-secondary" style={{ marginTop: '2px' }}>
                STRUCTURE / PRECISION / MODULARITY
              </div>
            </div>
          </div>
          <Divider marker="crosshair" coordinate="CANONICAL VOS SPECIMEN // BONE WHITE & NEAR BLACK" />
        </div>

        {/* Chapter Jump Navigation Bar */}
        <div
          className="surface-sunken radius-structural flex-row gap-1"
          style={{
            padding: '4px',
            marginBottom: 'var(--space-12)',
            overflowX: 'auto',
            border: '1px solid var(--color-border-subtle)'
          }}
        >
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => {
                setActiveChapter(ch.id);
                document.getElementById(`chapter-${ch.id}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="type-micro mono radius-subtle flex-row items-center gap-1"
              style={{
                padding: '8px 12px',
                whiteSpace: 'nowrap',
                backgroundColor: activeChapter === ch.id ? 'var(--color-bg-inverse)' : 'transparent',
                color: activeChapter === ch.id ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
                transition: 'all var(--motion-duration-micro) var(--motion-ease-precision)'
              }}
            >
              <span style={{ opacity: 0.6 }}>{ch.number}</span>
              <span>{ch.title}</span>
            </button>
          ))}
        </div>

        {/* CHAPTER 01: BRAND & GEOMETRIC FOUNDATION */}
        <section id="chapter-brand" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="01" title="BRAND CHARACTER & GEOMETRIC FOUNDATION" tag="CANONICAL VECTORS" />

          <div style={{ marginTop: 'var(--space-6)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
            <div className="surface-raised flex-col gap-4" style={{ padding: 'var(--space-6)' }}>
              <span className="type-micro text-muted">BRAND SYNTHESIS & QUALITIES</span>
              <p className="type-body-l text-primary font-medium" style={{ lineHeight: 1.4 }}>
                DAOVOS synthesizes the discipline of an architectural practice, precision manufacturing, and the intelligence of a modern engineering company into an editorial digital language.
              </p>
              <div className="grid-asym-3-9" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2)' }}>
                {['STRUCTURE', 'PRECISION', 'MODULARITY', 'RELIABILITY', 'SCALE', 'PROGRESS'].map((q) => (
                  <div key={q} className="surface-sunken" style={{ padding: '8px 10px', border: '1px solid var(--color-border-subtle)' }}>
                    <span className="type-micro mono font-semibold">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-raised flex-col justify-between" style={{ padding: 'var(--space-6)' }}>
              <span className="type-micro text-muted">AUTHORITATIVE BRAND ARTWORK</span>
              <div className="flex-row items-center justify-between" style={{ padding: 'var(--space-4) 0' }}>
                <div className="flex-col items-center gap-2">
                  <DaovosSymbol size={56} />
                  <span className="type-micro mono text-muted">EMBLEM (6-MOD)</span>
                </div>
                <div className="flex-col items-center gap-2">
                  <DaovosWordmark width={180} />
                  <span className="type-micro mono text-muted">BESPOKE WORDMARK</span>
                </div>
                <div className="flex-col items-center gap-2">
                  <DaovosLockup symbolSize={36} wordmarkWidth={120} />
                  <span className="type-micro mono text-muted">COMBINED LOCKUP</span>
                </div>
              </div>
              <div className="type-micro text-secondary">
                Rendered strictly from canonical SVGs. No approximate fonts or CSS redraws.
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <Symbol6ModuleExplorer />
          </div>
        </section>

        {/* CHAPTER 02: CANONICAL COLOR SYSTEM */}
        <section id="chapter-colors" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="02" title="COLOR SYSTEM & MATERIAL CONTRAST" tag="CANONICAL PALETTE" />

          <div style={{ marginTop: 'var(--space-6)' }}>
            <span className="type-micro text-muted">CANONICAL BRAND PALETTE</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
              {Object.entries(canonicalPalette).map(([key, col]) => (
                <div
                  key={key}
                  onClick={() => copyToClipboard(col.hex, col.name)}
                  className="surface-raised radius-structural flex-col justify-between"
                  style={{
                    padding: '12px',
                    border: '1px solid var(--color-border-subtle)',
                    cursor: 'pointer'
                  }}
                  title={`Click to copy ${col.hex}`}
                >
                  <div
                    style={{
                      height: '72px',
                      backgroundColor: col.hex,
                      border: '1px solid rgba(0,0,0,0.08)',
                      borderRadius: 'var(--radius-subtle)',
                      marginBottom: '8px'
                    }}
                  />
                  <div className="flex-col gap-1">
                    <span className="type-label font-semibold">{col.name}</span>
                    <span className="type-micro mono text-secondary">{col.hex}</span>
                    <span className="type-micro mono text-muted">{col.hsl}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <span className="type-micro text-muted">INTERFACE NEUTRALS</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
              {Object.entries(interfaceNeutrals).map(([key, col]) => (
                <div
                  key={key}
                  onClick={() => copyToClipboard(col.hex, col.name)}
                  className="surface-raised radius-structural flex-col justify-between"
                  style={{
                    padding: '12px',
                    border: '1px solid var(--color-border-subtle)',
                    cursor: 'pointer'
                  }}
                  title={`Click to copy ${col.hex}`}
                >
                  <div
                    style={{
                      height: '56px',
                      backgroundColor: col.hex,
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-subtle)',
                      marginBottom: '8px'
                    }}
                  />
                  <div className="flex-col gap-1">
                    <span className="type-label font-semibold">{col.name}</span>
                    <span className="type-micro mono text-secondary">{col.hex}</span>
                    <span className="type-micro text-muted" style={{ fontSize: '10px' }}>{col.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {copiedToken && (
            <div
              className="surface-inverse radius-technical flex-row items-center gap-2"
              style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                padding: '10px 16px',
                zIndex: 9999,
                boxShadow: 'var(--elevation-overlay)'
              }}
            >
              <Check size={14} />
              <span className="type-micro mono">COPIED TO CLIPBOARD: {copiedToken}</span>
            </div>
          )}
        </section>

        {/* CHAPTER 03: RESPONSIVE TYPOGRAPHY */}
        <section id="chapter-typography" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="03" title="TYPOGRAPHY SPECIMEN & SCALE LADDER" tag="FLUID CLAMP MATRIX" />

          <div className="surface-sunken flex-row items-center gap-3" style={{ padding: '12px 16px', margin: 'var(--space-6) 0', border: '1px solid var(--color-border-subtle)' }}>
            <span className="type-micro text-muted mono">TEST INPUT:</span>
            <input
              type="text"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              className="type-body-m"
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--color-text-primary)',
                fontWeight: 600
              }}
              placeholder="Type test copy..."
            />
          </div>

          <div className="flex-col gap-4">
            {Object.entries(typographyTokens).map(([key, t]) => (
              <div
                key={key}
                className="surface-raised radius-structural flex-col gap-2"
                style={{ padding: 'var(--space-4) var(--space-6)', border: '1px solid var(--color-border-subtle)' }}
              >
                <div className="flex-row justify-between items-center" style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '6px' }}>
                  <div className="flex-row items-center gap-3">
                    <span className="type-label font-bold">{t.name}</span>
                    <span className="type-micro text-secondary mono">{t.family}</span>
                  </div>
                  <div className="flex-row items-center gap-3">
                    <span className="type-micro text-muted mono">LH: {t.lineHeight}</span>
                    <span className="type-micro text-muted mono">LS: {t.letterSpacing}</span>
                    <span className="type-micro mono font-semibold">{t.sizeClamp || t.size}</span>
                  </div>
                </div>

                <div className={`type-${key.replace(/([A-Z])/g, '-$1').toLowerCase()} text-primary`} style={{ textWrap: 'balance', margin: '4px 0' }}>
                  {testText}
                </div>
                <span className="type-micro text-muted">{t.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CHAPTER 04: SPACING SYSTEM */}
        <section id="chapter-spacing" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="04" title="SPACING SYSTEM & 8PX VERTICAL RHYTHM" tag="X = 8PX" />

          <div style={{ marginTop: 'var(--space-6)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
            <div className="surface-raised flex-col gap-2" style={{ padding: 'var(--space-6)' }}>
              <span className="type-micro text-muted">8PX BASELINE SCALE (X = 8PX)</span>
              <div className="flex-col gap-2" style={{ marginTop: '8px' }}>
                {spacingScale.map((s) => (
                  <div key={s.token} className="flex-row items-center gap-3">
                    <span className="type-micro mono" style={{ width: '80px' }}>{s.token}</span>
                    <span className="type-micro mono text-muted" style={{ width: '48px' }}>{s.value}</span>
                    <div
                      style={{
                        height: '14px',
                        width: s.value,
                        maxWidth: '240px',
                        backgroundColor: 'var(--daovos-color-near-black)',
                        borderRadius: 'var(--radius-subtle)',
                        opacity: 0.85
                      }}
                    />
                    <span className="type-micro text-secondary" style={{ fontSize: '10px' }}>{s.multiplier}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-raised flex-col justify-between" style={{ padding: 'var(--space-6)' }}>
              <div>
                <span className="type-micro text-muted">SEMANTIC SECTION SPACING</span>
                <div className="flex-col gap-3" style={{ marginTop: '12px' }}>
                  {Object.entries(semanticSpacing.section).map(([size, val]) => (
                    <div key={size} className="surface-sunken flex-row justify-between items-center" style={{ padding: '12px 16px', border: '1px solid var(--color-border-subtle)' }}>
                      <span className="type-label font-bold">SECTION {size.toUpperCase()}</span>
                      <span className="type-micro mono font-semibold text-secondary">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-sunken" style={{ padding: '12px 16px', marginTop: 'var(--space-4)', border: '1px solid var(--color-border-subtle)' }}>
                <span className="type-micro text-muted mono">DISCIPLINE RULE:</span>
                <p className="type-body-s text-secondary" style={{ marginTop: '4px' }}>
                  Zero arbitrary spacing values. Every margin, padding, stack, and section height derives strictly from the 8px multiplier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 05: RESPONSIVE GRID */}
        <section id="chapter-grid" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="05" title="RESPONSIVE GRID & DISCIPLINED ASYMMETRY" tag="12 / 8 / 4 COLUMNS" />

          <div className="flex-row items-center gap-2" style={{ margin: 'var(--space-6) 0' }}>
            <span className="type-micro text-muted mono">ASYMMETRIC FORMULAS:</span>
            {gridTokens.asymmetricFormulas.map((f) => (
              <button
                key={f.formula}
                onClick={() => setActiveGridAsym(f.formula.replace(' : ', '-'))}
                className="type-label radius-subtle"
                style={{
                  padding: '6px 12px',
                  backgroundColor: activeGridAsym === f.formula.replace(' : ', '-') ? 'var(--color-bg-inverse)' : 'var(--color-bg-surface-raised)',
                  color: activeGridAsym === f.formula.replace(' : ', '-') ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                {f.formula}
              </button>
            ))}
          </div>

          <div className="surface-raised" style={{ padding: 'var(--space-6)', border: '1px solid var(--color-border-subtle)' }}>
            <Grid asymmetric={activeGridAsym}>
              <div className="surface-sunken flex-col justify-between" style={{ padding: 'var(--space-6)', minHeight: '220px', border: '1px solid var(--color-border-subtle)' }}>
                <div>
                  <Label size="micro" variant="solid">LEFT COLUMN REGION</Label>
                  <h3 className="type-h2" style={{ marginTop: '8px' }}>Architectural Framing</h3>
                </div>
                <span className="type-micro mono text-muted">PRIMARY DISCIPLINE BLOCK</span>
              </div>

              <div className="surface-sunken flex-col justify-between" style={{ padding: 'var(--space-6)', minHeight: '220px', border: '1px solid var(--color-border-subtle)' }}>
                <div>
                  <Label size="micro" variant="outline">RIGHT COLUMN REGION</Label>
                  <p className="type-body-m text-secondary" style={{ marginTop: '8px' }}>
                    Asymmetric compositions avoid the predictable centered layout of generic SaaS products, producing rhythm, editorial hierarchy, and intentional negative space.
                  </p>
                </div>
                <div className="flex-row justify-between items-center" style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '8px' }}>
                  <span className="type-micro mono text-muted">SPEC [12-COL // 24PX GUTTER]</span>
                  <Link href="#chapter-editorial">VIEW SPECIFICATION</Link>
                </div>
              </div>
            </Grid>
          </div>
        </section>

        {/* CHAPTER 06: STRUCTURAL LINES */}
        <section id="chapter-lines" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="06" title="STRUCTURAL LINES & REGISTRATION MARKS" tag="1PX ARCHITECTURAL HAIRLINES" />

          <div style={{ marginTop: 'var(--space-6)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
            <div className="surface-raised flex-col gap-4" style={{ padding: 'var(--space-6)' }}>
              <span className="type-micro text-muted">DIVIDER & HAIRLINE TAXONOMY</span>

              <div className="flex-col gap-1">
                <span className="type-micro mono text-secondary">01 / SUBTLE HAIRLINE (DEFAULT)</span>
                <Divider variant="subtle" />
              </div>

              <div className="flex-col gap-1">
                <span className="type-micro mono text-secondary">02 / STRONG STRUCTURAL DATUM</span>
                <Divider variant="strong" />
              </div>

              <div className="flex-col gap-1">
                <span className="type-micro mono text-secondary">03 / TECHNICAL DASHED LEDGER</span>
                <Divider variant="dashed" />
              </div>

              <div className="flex-col gap-1">
                <span className="type-micro mono text-secondary">04 / WITH REGISTRATION CROSSHAIR & COORDINATE</span>
                <Divider marker="crosshair" indexText="DATUM 01" coordinate="LAT 52.5200° N" />
              </div>
            </div>

            <div className="surface-raised flex-col justify-between" style={{ padding: 'var(--space-6)' }}>
              <div>
                <span className="type-micro text-muted">RESTRAINED GEOMETRY & RADII</span>
                <div className="flex-col gap-2" style={{ marginTop: '12px' }}>
                  {geometryTokens.radii.map((r) => (
                    <div key={r.token} className="surface-sunken flex-row justify-between items-center" style={{ padding: '10px 14px', border: '1px solid var(--color-border-subtle)' }}>
                      <span className="type-label font-bold">{r.token} ({r.value})</span>
                      <span className="type-micro text-muted">{r.role}</span>
                    </div>
                  ))}
                </div>
              </div>
              <span className="type-micro text-secondary" style={{ marginTop: '12px' }}>
                Rule: Default to 0px structural edges. Never introduce giant bubbly cards or rounded pills.
              </span>
            </div>
          </div>
        </section>

        {/* CHAPTER 07: IMAGERY & MATERIALS */}
        <section id="chapter-imagery" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="07" title="IMAGERY LANGUAGE & MATERIALITY STUDIO" tag="NORMALIZED SHADERS" />

          <div className="flex-row items-center gap-2" style={{ margin: 'var(--space-6) 0' }}>
            <span className="type-micro text-muted mono">IMAGE TREATMENT MODES:</span>
            {['raw', 'monochrome', 'muted', 'material', 'halftone'].map((t) => (
              <button
                key={t}
                onClick={() => setImageTreatment(t)}
                className="type-label radius-subtle"
                style={{
                  padding: '6px 14px',
                  backgroundColor: imageTreatment === t ? 'var(--color-bg-inverse)' : 'var(--color-bg-surface-raised)',
                  color: imageTreatment === t ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            <Media
              src="/images/specimens/hero.jpeg"
              treatment={imageTreatment}
              aspectRatio="4/3"
              caption="Architectural Concrete Structure"
              index="FIG. 01 // CORE"
            />
            <Media
              src="/images/specimens/process_001.jpeg"
              treatment={imageTreatment}
              aspectRatio="4/3"
              caption="Precision Material Engineering"
              index="FIG. 02 // PROCESS"
            />
            <Media
              src="/images/specimens/process_002.jpeg"
              treatment={imageTreatment}
              aspectRatio="4/3"
              caption="Monolithic Spatial Geometry"
              index="FIG. 03 // SURFACE"
            />
          </div>

          <div style={{ marginTop: 'var(--space-8)' }}>
            <span className="type-micro text-muted">PROCEDURAL MATERIAL TEXTURES</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)', marginTop: 'var(--space-3)' }}>
              <div className="surface-raised texture-paper flex-col justify-between" style={{ height: '140px', padding: '16px', border: '1px solid var(--color-border-subtle)' }}>
                <span className="type-label font-bold">FINE PAPER GRAIN</span>
                <span className="type-micro mono text-muted">SVG DIFFUSE LIGHTING</span>
              </div>
              <div className="surface-raised texture-concrete flex-col justify-between" style={{ height: '140px', padding: '16px', border: '1px solid var(--color-border-subtle)' }}>
                <span className="type-label font-bold">CAST CONCRETE</span>
                <span className="type-micro mono text-muted">FRACTAL NOISE 0.45</span>
              </div>
              <div className="surface-raised texture-metal flex-col justify-between" style={{ height: '140px', padding: '16px', border: '1px solid var(--color-border-subtle)' }}>
                <span className="type-label font-bold text-inverse">BRUSHED METAL</span>
                <span className="type-micro mono text-muted">TITANIUM LINEAR LATTICE</span>
              </div>
              <div className="surface-raised texture-micro-grid flex-col justify-between" style={{ height: '140px', padding: '16px', border: '1px solid var(--color-border-subtle)' }}>
                <span className="type-label font-bold">24PX MICRO-GRID</span>
                <span className="type-micro mono text-muted">COORDINATE LATTICE</span>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 08: ICONOGRAPHY */}
        <section id="chapter-icons" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="08" title="UNIFIED GEOMETRIC ICONOGRAPHY" tag="24X24 LINE ICONS" />

          <div className="surface-raised flex-row justify-between items-center gap-4" style={{ padding: '12px 16px', margin: 'var(--space-6) 0', border: '1px solid var(--color-border-subtle)' }}>
            <div className="flex-row items-center gap-3">
              <span className="type-micro text-muted mono">SEARCH:</span>
              <input
                type="text"
                value={iconSearch}
                onChange={(e) => setIconSearch(e.target.value)}
                placeholder="Filter icons..."
                className="type-body-s"
                style={{
                  backgroundColor: 'var(--color-bg-surface-sunken)',
                  border: '1px solid var(--color-border-subtle)',
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-subtle)',
                  color: 'var(--color-text-primary)'
                }}
              />
            </div>

            <div className="flex-row items-center gap-4">
              <div className="flex-row items-center gap-2">
                <span className="type-micro mono text-muted">SIZE: {iconSize}PX</span>
                <input
                  type="range"
                  min="16"
                  max="40"
                  value={iconSize}
                  onChange={(e) => setIconSize(Number(e.target.value))}
                />
              </div>
              <div className="flex-row items-center gap-2">
                <span className="type-micro mono text-muted">STROKE: {iconStroke}PX</span>
                <input
                  type="range"
                  min="1"
                  max="2.5"
                  step="0.25"
                  value={iconStroke}
                  onChange={(e) => setIconStroke(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--space-3)' }}>
            {iconLibrary
              .filter((i) => i.name.toLowerCase().includes(iconSearch.toLowerCase()) || i.category.toLowerCase().includes(iconSearch.toLowerCase()))
              .map((item) => {
                const IconComp = item.component;
                return (
                  <div
                    key={item.name}
                    className="surface-raised radius-structural flex-col items-center justify-between"
                    style={{
                      padding: '16px 12px',
                      minHeight: '110px',
                      border: '1px solid var(--color-border-subtle)',
                      textAlign: 'center'
                    }}
                  >
                    <IconComp size={iconSize} strokeWidth={iconStroke} />
                    <div className="flex-col gap-1" style={{ marginTop: '8px' }}>
                      <span className="type-micro font-semibold">{item.name}</span>
                      <span className="type-micro text-muted" style={{ fontSize: '9px' }}>{item.category}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        {/* CHAPTER 09: PRIMITIVES & CONTROLS */}
        <section id="chapter-primitives" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="09" title="SYSTEM PRIMITIVES & INTERACTIVE CONTROLS" tag="INTERACTION MATRIX" />

          <div style={{ marginTop: 'var(--space-6)' }}>
            <span className="type-micro text-muted">BUTTON TAXONOMY & HOVER KINETICS</span>
            <div className="surface-raised flex-row items-center gap-4" style={{ padding: 'var(--space-6)', marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
              <Button variant="primary">PRIMARY ACTION</Button>
              <Button variant="secondary">SECONDARY HAIRLINE</Button>
              <Button variant="ghost">GHOST NAVIGATION</Button>
              <Button variant="icon" icon={IconCrosshair} />
              <Button variant="primary" disabled>DISABLED STATE</Button>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
            <div className="surface-raised flex-col gap-4" style={{ padding: 'var(--space-6)' }}>
              <span className="type-micro text-muted">INPUTS & SELECTORS</span>
              <Input
                label="TELEMETRY IDENTIFIER"
                hint="FORMAT: SPEC-XXX"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Select
                label="STRUCTURAL DISCIPLINE"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                options={[
                  { value: 'structural', label: 'Architectural Structuralism' },
                  { value: 'mechanical', label: 'Mechanical Precision' },
                  { value: 'editorial', label: 'Editorial Typography' }
                ]}
              />
              <Textarea
                label="SPECIFICATION STATEMENT"
                placeholder="Enter architectural criteria..."
                rows={3}
              />
            </div>

            <div className="surface-raised flex-col justify-between" style={{ padding: 'var(--space-6)' }}>
              <div>
                <span className="type-micro text-muted">SELECTION CONTROLS & TOGGLES</span>
                <div className="flex-col gap-4" style={{ marginTop: '16px' }}>
                  <Checkbox
                    checked={check1}
                    onChange={setCheck1}
                    label="Enable architectural 1px grid guides"
                  />
                  <Checkbox
                    checked={check2}
                    onChange={setCheck2}
                    label="Force monochrome shader normalization"
                  />
                  <Divider />
                  <Radio
                    checked={radioValue === '12col'}
                    onChange={() => setRadioValue('12col')}
                    label="12-Column Responsive Layout"
                  />
                  <Radio
                    checked={radioValue === '8col'}
                    onChange={() => setRadioValue('8col')}
                    label="8-Column Asymmetric System"
                  />
                  <Divider />
                  <Switch
                    checked={switchValue}
                    onChange={setSwitchValue}
                    label="Live mechanical telemetry synchronization"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 10: EDITORIAL MODULES */}
        <section id="chapter-editorial" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="10" title="EDITORIAL COMPOSITION MODULES" tag="METADATA & LEDGERS" />

          <div className="surface-raised" style={{ padding: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
            <DisplayHeading
              index="CHAPTER // 10"
              subhead="EDITORIAL DISCIPLINE"
              title="Architectural Precision at Monumental Scale"
              asymmetric={true}
            />
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <MetadataTable
              title="PROJECT TELEMETRY SPECIFICATION"
              index="SPEC-DAO-2026-X"
              columns={4}
              data={[
                { label: 'CLIENT DOMAIN', value: 'DAOVOS STUDIO', note: 'VERIFIED' },
                { label: 'GRID STRUCTURE', value: '12-COL / 24PX GUTTER', note: '5% MARGIN' },
                { label: 'BASE SPACING', value: '8PX BASELINE (X=8)', note: 'CANONICAL' },
                { label: 'COLOR SPECTRUM', value: 'BONE WHITE & NEAR BLACK', note: 'DUAL ROOT' },
                { label: 'DISPLAY TYPE', value: 'NEO-GROTESK NM', note: 'GEOMETRIC' },
                { label: 'BODY GROTESK', value: 'INTER / INTERFACE', note: '400 REGULAR' },
                { label: 'ACCESSIBILITY', value: 'WCAG AAA / REDUCED MOTION', note: 'COMPLIANT' },
                { label: 'RENDER TARGET', value: '60 FPS HARDWARE TRANSFORM', note: 'OPTIMIZED' }
              ]}
            />
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <TechnicalLeaderboard
              metrics={[
                { label: 'FRAME RATE', value: '60 FPS', sub: 'FLUID TRANSFORM' },
                { label: 'CANONICAL COLORS', value: '6 CORE', sub: 'ZERO RAINBOW ACCENTS' },
                { label: 'SPACING BASELINE', value: '8 PX', sub: '100% TOKENIZED' },
                { label: 'GRID COLUMNS', value: '12 COL', sub: 'ASYMMETRIC COMPOSITIONS' }
              ]}
            />
          </div>
        </section>

        {/* CHAPTER 11: MOTION LABORATORY */}
        <section id="chapter-motion" style={{ marginBottom: 'var(--space-24)' }}>
          <SectionIndex number="11" title="KINETIC & MOTION LABORATORY" tag="BEZIER EASINGS & REVEALS" />

          <div style={{ marginTop: 'var(--space-6)' }}>
            <EasingCurvesVisualizer />
          </div>

          <div className="surface-raised" style={{ padding: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
            <div className="flex-row justify-between items-center" style={{ marginBottom: 'var(--space-4)' }}>
              <span className="type-micro text-muted">ARCHITECTURAL TEXT MASK REVEAL (NO GENERIC FADE-UP)</span>
              <button
                onClick={triggerMotionCycle}
                className="radius-technical type-label"
                style={{
                  padding: '6px 12px',
                  backgroundColor: 'var(--color-bg-inverse)',
                  color: 'var(--color-text-inverse)',
                  border: '1px solid var(--color-border-strong)'
                }}
              >
                ▶ RE-TRIGGER REVEAL
              </button>
            </div>

            <div className="flex-col gap-2" style={{ padding: 'var(--space-4) 0' }}>
              <TextMaskReveal trigger={motionTrigger} delay={100}>
                <h2 className="type-display-l text-primary">Structure Precedes Decoration.</h2>
              </TextMaskReveal>
              <LineReveal trigger={motionTrigger} delay={300} variant="strong" />
              <TextMaskReveal trigger={motionTrigger} delay={500}>
                <p className="type-body-l text-secondary" style={{ marginTop: '8px' }}>
                  Typography emerges behind sharp architectural masks rather than floating with arbitrary bouncy easing.
                </p>
              </TextMaskReveal>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <PageTransitionDemo />
          </div>
        </section>

        {/* CHAPTER 12: CODE & TOKEN EXPORT */}
        <section id="chapter-export" style={{ marginBottom: 'var(--space-12)' }}>
          <SectionIndex number="12" title="DESIGN TOKENS & SYSTEM CODE EXPORT" tag="READY FOR CONSUMPTION" />

          <div className="flex-row items-center gap-2" style={{ margin: 'var(--space-6) 0' }}>
            <span className="type-micro text-muted mono">EXPORT FORMAT:</span>
            {['css', 'json', 'tailwind'].map((fmt) => (
              <button
                key={fmt}
                onClick={() => setExportFormat(fmt)}
                className="type-label radius-subtle"
                style={{
                  padding: '6px 14px',
                  backgroundColor: exportFormat === fmt ? 'var(--color-bg-inverse)' : 'var(--color-bg-surface-raised)',
                  color: exportFormat === fmt ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                {fmt.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="surface-sunken radius-structural" style={{ border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
            <div className="flex-row justify-between items-center" style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-bg-surface-raised)' }}>
              <span className="type-micro mono text-primary">
                {exportFormat === 'css' ? 'tokens/colors.css' : exportFormat === 'json' ? 'tokens/daovos-tokens.json' : 'tailwind.config.js'}
              </span>
              <button
                onClick={() => copyToClipboard(
                  exportFormat === 'css' ? ':root { --daovos-color-bone-white: #F4EEE8; ... }' : '{"tokens": { ... }}',
                  `${exportFormat.toUpperCase()} TOKENS`
                )}
                className="type-micro mono flex-row items-center gap-1 radius-subtle"
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'var(--color-bg-primary)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <Copy size={12} />
                <span>COPY ALL</span>
              </button>
            </div>
            <pre className="type-micro mono" style={{ padding: '16px', overflowX: 'auto', lineHeight: 1.5, color: 'var(--color-text-primary)' }}>
              {exportFormat === 'css' && `/** DAOVOS CSS Custom Properties **/
:root {
  /* Canonical Brand Palette */
  --daovos-color-bone-white: #F4EEE8;
  --daovos-color-near-black: #111112;
  --daovos-color-warm-stone: #ABA6A1;
  --daovos-color-graphite: #5A5958;
  --daovos-color-soft-concrete: #C1BBB6;
  --daovos-color-pure-white: #FFFFFF;

  /* Interface Neutrals */
  --daovos-color-jet-black: #0A0A0A;
  --daovos-color-charcoal: #171717;
  --daovos-color-slate: #2B2B2E;
  --daovos-color-steel: #6B6B6F;

  /* 8px Spacing Matrix */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;
  --space-4: 16px;  --space-6: 24px;  --space-8: 32px;
  --space-12: 48px; --space-20: 80px; --space-32: 128px;

  /* Motion Curves */
  --motion-ease-precision: cubic-bezier(0.16, 1, 0.3, 1);
  --motion-ease-mechanical: cubic-bezier(0.25, 0, 0, 1);
  --motion-ease-settle: cubic-bezier(0.65, 0, 0.35, 1);
  --motion-ease-sharp: cubic-bezier(0.4, 0, 0.2, 1);
}`}
              {exportFormat === 'json' && JSON.stringify({
                canonicalColors: canonicalPalette,
                interfaceNeutrals: interfaceNeutrals,
                spacingScale: spacingScale,
                grid: gridTokens,
                motion: motionTokens
              }, null, 2)}
              {exportFormat === 'tailwind' && `// tailwind.config.js - DAOVOS Preset
module.exports = {
  theme: {
    extend: {
      colors: {
        boneWhite: '#F4EEE8',
        nearBlack: '#111112',
        warmStone: '#ABA6A1',
        graphite: '#5A5958',
        softConcrete: '#C1BBB6',
        pureWhite: '#FFFFFF',
        jetBlack: '#0A0A0A',
        charcoal: '#171717',
        slate: '#2B2B2E',
        steel: '#6B6B6F',
      },
      spacing: {
        '1': '4px', '2': '8px', '3': '12px', '4': '16px',
        '6': '24px', '8': '32px', '12': '48px', '20': '80px',
        '32': '128px', '48': '192px'
      },
      transitionTimingFunction: {
        precision: 'cubic-bezier(0.16, 1, 0.3, 1)',
        mechanical: 'cubic-bezier(0.25, 0, 0, 1)',
        settle: 'cubic-bezier(0.65, 0, 0.35, 1)',
      }
    }
  }
};`}
            </pre>
          </div>
        </section>
      </Container>
    </div>
      )}
      <Agentation />
    </>
  );
}
