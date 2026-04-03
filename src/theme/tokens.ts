// ============================================================
// Design Tokens — extracted 1:1 from the Fillow template SCSS
// ============================================================

// ── Primary palette (maps to $primary / $secondary / etc.) ──
export const palette = {
  primary: {
    main: '#886CC0',
    light: '#a590cf',    // lighten($primary, 10)
    dark: '#6c4bae',     // darken($primary, 10)
    darker: '#402c67',   // darken($primary, 30)
    contrastText: '#fff',
  },
  secondary: {
    main: '#FFA7D7',
    light: '#ffdaee',    // lighten($secondary, 10)
    dark: '#e88fbe',
    contrastText: '#fff',
  },
  success: {
    main: '#09BD3C',
    light: '#d4f5dc',
    dark: '#07941e',
    contrastText: '#fff',
  },
  info: {
    main: '#D653C1',
    light: '#f0d1ec',
    dark: '#b340a3',
    contrastText: '#fff',
  },
  warning: {
    main: '#FFCF6D',
    light: '#fff0d1',
    dark: '#e6b44e',
    contrastText: '#000',
  },
  danger: {
    main: '#FC2E53',
    light: '#fd607c',
    dark: '#d91e41',
    contrastText: '#fff',
  },
} as const;

// ── 15 color palette options (color_1 … color_15) ──
export const colorPalette = [
  '#FFFFFF', // color_1
  '#6610f2', // color_2
  '#886CC0', // color_3  (primary)
  '#4d06a5', // color_4
  '#dc3545', // color_5
  '#fd7e14', // color_6
  '#ffc107', // color_7
  '#ff5ed2', // color_8
  '#20c997', // color_9
  '#17a2b8', // color_10
  '#94618E', // color_11
  '#343a40', // color_12
  '#83418b', // color_13
  '#4885ed', // color_14
  '#4cb32b', // color_15
] as const;

// ── Chart accent colors (used across ApexCharts / Chart.js) ──
export const chartColors = {
  orange: '#FFA26D',
  pink: '#FF5ED2',
  pinkSoft: '#FF86B1',
  green: '#26E023',
  cyan: '#61CFF1',
  yellowSoft: '#FFDA7C',
  magenta: '#FF63E6',
  primaryTrack: '#F1EAFF',
} as const;

// ── Gradient definitions ──
export const gradients = {
  gradient1: 'linear-gradient(180deg, #FFA26D 0%, #FFCF6D 100%)',
  gradient2: 'linear-gradient(180deg, #4dedf5 0%, #480ceb 100%)',
  gradient3: 'linear-gradient(180deg, #51f5ae 0%, #3fbcda 100%)',
  tryal: 'linear-gradient(212.43deg, #886CC0 19.43%, #AA6CC0 87.63%)',
  progressGradient: 'linear-gradient(90deg, #FFA26D 0%, #FFCF6D 100%)',
} as const;

// ── Typography ──
// Heebo is placed first for Hebrew support, Roboto for Latin, Inter for display
export const typography = {
  fontFamilyBase: '"Heebo Variable", "Roboto", "Inter Variable", sans-serif',
  fontFamilyTitle: '"Heebo Variable", "Roboto", "Inter Variable", sans-serif',
  fontFamilyInter: '"Inter Variable", "Heebo Variable", sans-serif',
  fontFamilyOpenSans: '"Open Sans", "Heebo Variable", sans-serif',
  fontFamilyNunitoSans: '"Nunito Sans", "Heebo Variable", sans-serif',
  fontSizeBase: '1rem',      // 16px
  h1: '2.5rem',      // 40px
  h2: '2rem',        // 32px
  h3: '1.625rem',    // 26px
  h4: '1.25rem',     // 20px
  h5: '1.125rem',    // 18px
  h6: '1rem',        // 16px
  headingWeight: 500,
  // ── Weight scale ──
  weight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
} as const;

// ── Spacing & Radius ──
export const spacing = {
  radius: '0.625rem',     // 10px
  radiusLg: '1.75rem',    // 28px — $rounded
  borderRadius: '0.625rem',
  gridGutter: '30px',
} as const;

// ── Shadow ──
export const shadows = {
  card: '0 1px 3px 0 rgba(0,0,0,0.04)',
  cardDark: '0 1px 3px 0 rgba(0,0,0,0.12)',
} as const;

// ── Sidebar dimensions ──
export const layout = {
  sidebarWidth: 260,
  sidebarCollapsedWidth: 72,
  headerHeight: 80,
} as const;

// ── Light mode tokens ──
export const lightTokens = {
  background: '#f3f0f9',
  paper: '#ffffff',
  textPrimary: '#464a53',
  textSecondary: '#828690',
  border: '#e9e2f8',
  heading: '#3d4465',
  headingDark: '#000',
  divider: '#eaeaea',
  muted: '#89879f',
  bodyBg: '#f3f0f9',
  cardBg: '#ffffff',
  sidebarBg: '#ffffff',
  headerBg: '#ffffff',
} as const;

// ── Dark mode tokens ──
export const darkTokens = {
  background: '#161717',
  paper: '#202020',
  textPrimary: '#dddddd',
  textSecondary: '#828690',
  border: '#2B2B2B',
  heading: '#dddddd',
  headingDark: '#ffffff',
  divider: '#2B2B2B',
  muted: '#828690',
  bodyBg: '#161717',
  cardBg: '#202020',
  sidebarBg: '#202020',
  headerBg: '#202020',
} as const;

// ── Semantic UI tokens (eliminates all hardcoded values in components) ──
export const semantic = {
  // Icon default gray — used for MoreVert, hamburger, header icons
  iconMuted: '#717579',
  iconDisabled: '#A5A5A5',
  // Neutral backgrounds for progress tracks, inactive elements
  trackLight: '#e0e0e0',
  trackDark: '#333333',
  inactiveLight: '#ECECEC',
  inactiveDark: '#333333',
  // Elevated search / input backgrounds
  searchBgLight: '#f5f5f5',
  // Star / favorite
  starColor: '#FFCF6D',
  // Online indicator
  onlineColor: '#09BD3C',
  // Category label dots
  categoryWork: '#886CC0',
  categoryPrivate: '#09BD3C',
  categorySupport: '#FFCF6D',
  categorySocial: '#FC2E53',
} as const;

// ── Breakpoints (matching template grid) ──
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
} as const;
