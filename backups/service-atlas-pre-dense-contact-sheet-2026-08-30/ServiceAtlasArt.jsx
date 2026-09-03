import React from 'react';

/*
 * Static geometry adapted from the MIT-licensed Bklit UI chart components:
 * https://github.com/bklit/bklit-ui
 * Abstract SVG structures exported from Fffuel:
 * https://www.fffuel.co/ppperspective/
 * https://www.fffuel.co/vvvortex/
 *
 * All runtime motion is applied by GSAP in KineticServiceJourney.jsx.
 */

const RADAR_GRIDS = [
  'M-16.458,-22.652L-26.63,8.652L0,28L26.63,8.652L16.458,-22.652L-16.458,-22.652',
  'M-32.916,-45.305L-53.259,17.305L0,56L53.259,17.305L32.916,-45.305L-32.916,-45.305',
  'M-49.374,-67.957L-79.889,25.957L0,84L79.889,25.957L49.374,-67.957L-49.374,-67.957',
  'M-65.832,-90.61L-106.518,34.61L0,112L106.518,34.61L65.832,-90.61L-65.832,-90.61',
  'M-82.29,-113.262L-133.148,43.262L0,140L133.148,43.262L82.29,-113.262L-82.29,-113.262'
];

const RADAR_AXES = [[0, -140], [133.148, -43.262], [82.29, 113.262], [-82.29, 113.262], [-133.148, -43.262]];
const RADAR_AREAS = [
  'M 0,-100.8 L 90.541,-29.418 L 57.603,79.284 L -61.717,84.947 L -86.546,-28.121 Z',
  'M 0,-119 L 59.917,-19.468 L 32.916,45.305 L -24.687,33.979 L -117.17,-38.071 Z',
  'M 0,-63 L 119.833,-38.936 L 75.707,104.201 L -72.415,99.671 L -55.922,-18.17 Z'
];

export function BklitRadarArt() {
  return (
    <svg className="service-art service-art--radar" viewBox="0 0 400 400" role="img" aria-label="Layered audience and growth radar visualization">
      <g transform="translate(200 200)">
        {RADAR_GRIDS.map((path) => <path className="service-art__radar-grid" d={path} key={path} />)}
        {RADAR_AXES.map(([x, y]) => <line className="service-art__radar-axis" x1="0" y1="0" x2={x} y2={y} key={`${x}-${y}`} />)}
        {RADAR_AREAS.map((path, index) => <path className="service-art__radar-area service-art__pulse" d={path} key={path} style={{ '--area-index': index }} />)}
        <circle className="service-art__radar-core service-art__pulse" r="7" />
      </g>
    </svg>
  );
}

export function FffuelPerspectiveArt() {
  return (
    <svg className="service-art service-art--perspective" viewBox="0 0 800 800" role="img" aria-label="Abstract folded perspective planes">
      <g className="service-art__drift service-art__drift--one">
        <polygon points="800,0 511,289 289,289 578,0" />
        <line x1="578" y1="0" x2="289" y2="289" />
      </g>
      <g className="service-art__drift service-art__drift--two">
        <polygon points="800,0 511,289 511,511 800,222" />
        <line x1="511" y1="289" x2="800" y2="222" />
      </g>
      <rect className="service-art__drift service-art__drift--three" x="289" y="289" width="222" height="222" />
      <path className="service-art__perspective-axis" d="M0 511H800M511 0V800" />
    </svg>
  );
}

const SCATTER_POINTS = [
  [42, 216], [61, 193], [79, 205], [95, 169], [112, 182], [127, 148], [146, 158], [162, 126],
  [179, 139], [197, 104], [215, 119], [230, 88], [249, 96], [267, 72], [283, 83], [304, 48],
  [321, 64], [339, 38], [354, 52], [370, 27], [84, 229], [152, 191], [242, 146], [315, 105]
];

export function BklitScatterArt() {
  return (
    <svg className="service-art service-art--scatter" viewBox="0 0 420 280" role="img" aria-label="Campaign signal and response scatter visualization">
      <path className="service-art__chart-axis" d="M32 20V248H392M32 202H392M32 156H392M32 110H392M32 64H392" />
      <path className="service-art__scatter-trend" pathLength="1" d="M42 224C126 198 178 152 235 112S333 51 382 32" />
      {SCATTER_POINTS.map(([cx, cy], index) => (
        <circle className="service-art__scatter-point service-art__pulse" cx={cx} cy={cy} r={index % 5 === 0 ? 7 : 4} key={`${cx}-${cy}`} data-hollow={index % 3 === 0 ? '' : undefined} />
      ))}
    </svg>
  );
}

const SANKEY_LINKS = [
  ['M40 68C132 68 138 118 230 118', 20],
  ['M40 150C132 150 138 130 230 130', 13],
  ['M40 238C132 238 138 144 230 144', 9],
  ['M230 118C328 118 334 66 430 66', 18],
  ['M230 132C328 132 334 154 430 154', 12],
  ['M230 144C328 144 334 240 430 240', 8]
];

export function BklitSankeyArt() {
  return (
    <svg className="service-art service-art--sankey" viewBox="0 0 480 300" role="img" aria-label="Discovery to purchase flow visualization">
      {SANKEY_LINKS.map(([path, width]) => <path className="service-art__flow-link" d={path} pathLength="1" strokeWidth={width} key={path} />)}
      <g className="service-art__flow-nodes">
        <rect className="service-art__flow-node service-art__pulse" x="24" y="44" width="20" height="48" />
        <rect className="service-art__flow-node service-art__pulse" x="24" y="132" width="20" height="36" />
        <rect className="service-art__flow-node service-art__pulse" x="24" y="222" width="20" height="32" />
        <rect className="service-art__flow-node service-art__pulse" x="220" y="98" width="20" height="66" />
        <rect className="service-art__flow-node service-art__pulse" x="426" y="43" width="20" height="46" />
        <rect className="service-art__flow-node service-art__pulse" x="426" y="136" width="20" height="36" />
        <rect className="service-art__flow-node service-art__pulse" x="426" y="225" width="20" height="30" />
      </g>
      <path className="service-art__chart-axis" d="M24 280H446" />
    </svg>
  );
}

const SUNBURST_INNER = [
  'M0 0L-38.7118 31.2484A49.75 49.75 0 0 1-49.75 0Z',
  'M0 0L33.5192 36.7631A49.75 49.75 0 0 1-38.7118 31.2484Z',
  'M0 0L34.6813-35.6689A49.75 49.75 0 0 1 33.5192 36.7631Z',
  'M0 0L-49.75 0A49.75 49.75 0 0 1 34.6813-35.6689Z'
];

const SUNBURST_OUTER = [
  'M-99.5 0A99.5 99.5 0 0 1-48.7483-86.7401L-24.3742-43.3701A49.75 49.75 0 0 0-49.75 0Z',
  'M-48.7483-86.7401A99.5 99.5 0 0 1 25.9024-96.0693L12.9512-48.0347A49.75 49.75 0 0 0-24.3742-43.3701Z',
  'M25.9024-96.0693A99.5 99.5 0 0 1 69.3626-71.3378L34.6813-35.6689A49.75 49.75 0 0 0 12.9512-48.0347Z',
  'M69.3626-71.3378A99.5 99.5 0 0 1 99.3432 5.5838L49.6716 2.7919A49.75 49.75 0 0 0 34.6813-35.6689Z',
  'M99.3432 5.5838A99.5 99.5 0 0 1 85.4741 50.9356L42.737 25.4678A49.75 49.75 0 0 0 49.6716 2.7919Z',
  'M85.4741 50.9356A99.5 99.5 0 0 1 67.0385 73.5261L33.5192 36.7631A49.75 49.75 0 0 0 42.737 25.4678Z',
  'M67.0385 73.5261A99.5 99.5 0 0 1-38.7118 91.6507L-19.3559 45.8254A49.75 49.75 0 0 0 33.5192 36.7631Z',
  'M-38.7118 91.6507A99.5 99.5 0 0 1-99.5 0L-49.75 0A49.75 49.75 0 0 0-19.3559 45.8254Z'
];

export function BklitSunburstArt() {
  return (
    <svg className="service-art service-art--sunburst" viewBox="0 0 440 440" role="img" aria-label="Responsive interface hierarchy visualization">
      <g className="service-art__orbit" transform="translate(220 220)">
        {SUNBURST_OUTER.map((path, index) => <path className="service-art__sunburst-segment service-art__pulse" d={path} key={path} style={{ '--segment-index': index }} />)}
        {SUNBURST_INNER.map((path, index) => <path className="service-art__sunburst-segment service-art__sunburst-segment--inner service-art__pulse" d={path} key={path} style={{ '--segment-index': index + 2 }} />)}
        <circle className="service-art__sunburst-core" r="13" />
      </g>
      <path className="service-art__chart-axis" d="M24 220H416M220 24V416" />
    </svg>
  );
}

const VORTEX_RINGS = [
  [363, 11, '55 35', 16, 0.05], [346.5, 11, '19 15', 316, 0.10], [330, 10, '21 44', 213, 0.14],
  [313.5, 10, '21 33', 119, 0.19], [297, 10, '48 29', 115, 0.23], [280.5, 10, '19 23', 11, 0.28],
  [264, 9, '49 26', 261, 0.32], [247.5, 9, '51 37', 51, 0.37], [231, 9, '29 42', 133, 0.41],
  [214.5, 8, '31 38', 190, 0.46], [198, 8, '32 28', 53, 0.50], [181.5, 8, '11 42', 58, 0.55],
  [165, 8, '19 30', 268, 0.59], [148.5, 7, '21 23', 56, 0.64], [132, 7, '22 30', 238, 0.68],
  [115.5, 7, '24 22', 156, 0.73], [99, 6, '53 44', 163, 0.77], [82.5, 6, '26 48', 300, 0.82],
  [66, 6, '49 41', 57, 0.86], [49.5, 6, '31 51', 351, 0.91], [33, 5, '16 20', 191, 0.95],
  [16.5, 5, '34 38', 82, 1]
];

export function FffuelVortexArt() {
  return (
    <svg className="service-art service-art--vortex" viewBox="0 0 800 800" role="img" aria-label="Continuous optimization vortex pattern">
      <g transform="translate(400 400)">
        {VORTEX_RINGS.map(([radius, width, dash, rotation, opacity], index) => (
          <circle
            className="service-art__vortex-ring"
            cx="0"
            cy="0"
            r={radius}
            fill="none"
            strokeWidth={width}
            strokeDasharray={dash}
            opacity={opacity}
            transform={`rotate(${rotation})`}
            key={`${radius}-${index}`}
          />
        ))}
        <circle className="service-art__vortex-core service-art__pulse" r="13" />
      </g>
    </svg>
  );
}
