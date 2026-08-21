/**
 * DAOVOS Visual Operating System — Grid Tokens (JS Module)
 */

export const gridTokens = {
  desktop: {
    columns: 12,
    gutter: '24px',
    margin: '5%',
    maxWidth: '1440px'
  },
  tablet: {
    columns: 8,
    gutter: '24px',
    margin: '5%',
    breakpoint: '1024px'
  },
  mobile: {
    columns: 4,
    gutter: '16px',
    margin: '4%',
    breakpoint: '640px'
  },
  asymmetricFormulas: [
    { formula: '5 : 7', name: 'Editorial Narrative', left: '5 Columns (Topic/Index)', right: '7 Columns (Primary Thesis)' },
    { formula: '7 : 5', name: 'Inverted Display', left: '7 Columns (Display Visual)', right: '5 Columns (Technical Ledger)' },
    { formula: '4 : 8', name: 'Architectural Columnar', left: '4 Columns (Fixed Metadata)', right: '8 Columns (Content Stream)' },
    { formula: '3 : 9', name: 'Technical Index', left: '3 Columns (Index/Coordinates)', right: '9 Columns (Specification)' },
    { formula: '8 : 4', name: 'Primary Feature + Rail', left: '8 Columns (Hero Narrative)', right: '4 Columns (Telemetry Ledger)' },
    { formula: '2 : 10', name: 'Wide Span Margin', left: '2 Columns (Registration Marker)', right: '10 Columns (Panoramic Spread)' },
    { formula: '1 : 5 : 6', name: 'Triple Asymmetric', left: '1 Col (Marker)', mid: '5 Col (Metadata)', right: '6 Col (Visual Frame)' }
  ]
};
