# DAOVOS Visual Operating System (VOS) & Living Specimen

The foundational **Visual Operating System** for **DAOVOS**, a premium architectural and engineering web-development agency.

---

## 1. Brand Synthesis & Character

DAOVOS synthesizes:
* **Premium Digital Design Studio**
* **Architectural Practice**
* **Engineering Company**
* **Precision Manufacturing**
* **Editorial Typography**

### Canonical Brand Qualities
$$\text{STRUCTURE} \;\times\; \text{PRECISION} \;\times\; \text{MODULARITY} \;\times\; \text{RELIABILITY} \;\times\; \text{SCALE} \;\times\; \text{PROGRESS}$$

---

## 2. Canonical Color System

### Canonical Brand Palette
| Token | Name | Hex | RGB | Role |
| :--- | :--- | :--- | :--- | :--- |
| `--daovos-color-bone-white` | **Bone White** | `#F4EEE8` | `244, 238, 232` | Canonical light surface & primary background |
| `--daovos-color-near-black` | **Near Black** | `#111112` | `17, 17, 18` | Canonical dark surface & primary ink |
| `--daovos-color-warm-stone` | **Warm Stone** | `#ABA6A1` | `171, 166, 161` | Secondary borders & editorial metadata |
| `--daovos-color-graphite` | **Graphite** | `#5A5958` | `90, 89, 88` | Muted lead-ins & technical tags |
| `--daovos-color-soft-concrete`| **Soft Concrete**| `#C1BBB6` | `193, 187, 182` | Hairline divisions & subtle panels |
| `--daovos-color-pure-white` | **Pure White** | `#FFFFFF` | `255, 255, 255` | Peak highlight & dark mode contrast |

### Interface Neutrals
* **Jet Black**: `#0A0A0A`
* **Charcoal**: `#171717`
* **Slate**: `#2B2B2E`
* **Steel**: `#6B6B6F`

---

## 3. 8px Base Spacing System

Base unit: `X = 8px`

| Token | Value | Multiplier | Usage |
| :--- | :--- | :--- | :--- |
| `--space-1` | `4px` | `0.5x` | Hairline offsets, badge insets |
| `--space-2` | `8px` | `1.0x` (Base) | Base unit, control paddings |
| `--space-3` | `12px` | `1.5x` | Button vertical insets |
| `--space-4` | `16px` | `2.0x` | Mobile gutters, input fields |
| `--space-6` | `24px` | `3.0x` | Desktop grid gutters |
| `--space-8` | `32px` | `4.0x` | Module separation |
| `--space-12`| `48px` | `6.0x` | Small section spacing |
| `--space-20`| `80px` | `10.0x` | Standard section rhythm |
| `--space-32`| `128px`| `16.0x` | Major editorial pauses |
| `--space-48`| `192px`| `24.0x` | Maximum spatial release |

---

## 4. Typography Scale & Hierarchy

* **Display Font**: Editorial Neo-Grotesk (`nm-medium` / Inter Display)
* **Body Font**: `Inter`, `-apple-system`, `sans-serif`
* **Monospace Font**: `DM Mono`, `Space Mono`, `monospace`

| Token | Size Range / Clamp | Line Height | Tracking | Role |
| :--- | :--- | :--- | :--- | :--- |
| `Display XL` | `clamp(4rem, 2.5rem + 4.5vw, 7.5rem)` | `0.95` | `-0.04em` | Monumental architectural headers |
| `Display L`  | `clamp(2.75rem, 1.8rem + 3vw, 5rem)` | `1.0` | `-0.03em` | Chapter anchors |
| `H1`         | `clamp(2.25rem, 1.6rem + 1.8vw, 3.5rem)` | `1.1` | `-0.025em` | Component titles & main subjects |
| `H2`         | `clamp(1.75rem, 1.3rem + 1.1vw, 2.5rem)` | `1.2` | `-0.02em` | Section sub-headers |
| `H3`         | `clamp(1.25rem, 1.05rem + 0.6vw, 1.75rem)`| `1.3` | `-0.015em` | Technical subsection heads |
| `Body L`     | `1.125rem` (18px) | `1.55` | `-0.01em` | Lead editorial text |
| `Body M`     | `1rem` (16px) | `1.6` | `0` | Interface & description body |
| `Body S`     | `0.875rem` (14px) | `1.5` | `0.01em` | Secondary footnotes & tables |
| `Label`      | `0.75rem` (12px) | `1.4` | `0.14em` | Uppercase technical metadata |
| `Micro`      | `0.625rem` (10px) | `1.3` | `0.20em` | Coordinates & rule stamps |

---

## 5. Responsive Grid & Disciplined Asymmetry

* **Desktop (12 Columns)**: 5% external margins, 24px gutters, max-width `1440px`.
* **Tablet (8 Columns)**: 5% external margins, 24px gutters.
* **Mobile (4 Columns)**: 4% external margins, 16px gutters.
* **Asymmetric Formulas**: `5:7`, `7:5`, `4:8`, `3:9`, `8:4`, `2:10`, `1:5:6`.

---

## 6. Restrained Geometry & Radii

* **Structural / Editorial**: `0px` (Plumb, sharp, architectural)
* **Technical Elements**: `2px – 4px` (Registration chips, tags, code snippets)
* **Interactive Controls**: `6px – 8px` (Buttons, inputs, toggles)
* **Rule**: Zero arbitrary giant rounded cards or bubbly aesthetics.

---

## 7. Imagery Treatment Modes

1. **RAW**: Natural architectural contrast, daylight desaturation (`contrast(1.08) saturate(0.85)`).
2. **MONOCHROME**: Pure silver and charcoal spectrum (`grayscale(100%) contrast(1.22)`).
3. **MUTED**: Warm Stone `#ABA6A1` split-tone blend (`sepia(18%) contrast(0.95)`).
4. **MATERIAL**: Tactile micro-contrast overlay (`contrast(1.3)` + 4px dot lattice).
5. **HALFTONE / GRAPHIC**: Precision dot-matrix screen raster (`contrast(1.8)` + 5px radial lattice).

---

## 8. Motion & Kinetic Architecture

* **Micro**: `160ms` (`--motion-duration-micro`)
* **Interface**: `360ms` (`--motion-duration-interface`)
* **Editorial**: `760ms` (`--motion-duration-editorial`)
* **Cinematic**: `1200ms` (`--motion-duration-cinematic`)

### Dedicated Easing Curves
* **Precision**: `cubic-bezier(0.16, 1, 0.3, 1)` (Rapid acceleration into crisp mechanical lock)
* **Mechanical**: `cubic-bezier(0.25, 0, 0, 1)` (Axis displacement with immediate stop)
* **Settle**: `cubic-bezier(0.65, 0, 0.35, 1)` (Architectural damping)
* **Sharp**: `cubic-bezier(0.4, 0, 0.2, 1)` (High-velocity tactile response)

---

## 9. 6-Module Symbol Motion Laboratory

The DAOVOS symbol consists of six rectangular modules:
1. **Module 1 (Center Top)**: `478.50, 240.80, 66.30 x 162.70`
2. **Module 2 (Left Top)**: `380.50, 322.50, 63.80 x 81.00`
3. **Module 3 (Right Top)**: `578.70, 322.50, 63.80 x 81.00`
4. **Module 4 (Left Bot)**: `380.50, 419.20, 63.80 x 77.90`
5. **Module 5 (Center Bot)**: `478.50, 419.20, 66.30 x 156.00`
6. **Module 6 (Right Bot)**: `578.70, 419.20, 63.80 x 77.90`

Kinetic choreography primitives:
`LOCKED` $\rightarrow$ `FRAGMENTATION` $\rightarrow$ `SEPARATION` $\rightarrow$ `ALIGNMENT` $\rightarrow$ `CONVERGENCE` $\rightarrow$ `RECONSTRUCTION`.

---

## 10. Running the Living Specimen

```bash
npm run dev
```
Visit `http://localhost:3000` to interact with the full living specimen workbench, live token inspector, grid overlay toggle, theme switcher, and motion player.
