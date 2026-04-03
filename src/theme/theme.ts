import { createTheme, type ThemeOptions } from '@mui/material/styles';
import {
  palette,
  lightTokens,
  darkTokens,
  typography as typoTokens,
  spacing as spacingTokens,
  shadows as shadowTokens,
  breakpoints,
  layout,
  gradients,
} from './tokens';

// ── Shared options across light & dark ──
const sharedOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
    },
  },
  shape: {
    borderRadius: 10, // 0.625rem
  },
  typography: {
    fontFamily: typoTokens.fontFamilyBase,
    fontSize: 16,
    fontWeightLight: typoTokens.weight.light,       // 300
    fontWeightRegular: typoTokens.weight.regular,    // 400
    fontWeightMedium: typoTokens.weight.semiBold,    // 600
    fontWeightBold: typoTokens.weight.extraBold,     // 800
    h1: {
      fontSize: '2.5rem',           // 40px
      fontWeight: typoTokens.weight.extraBold,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',             // 32px
      fontWeight: typoTokens.weight.bold,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.625rem',         // 26px
      fontWeight: typoTokens.weight.bold,
      lineHeight: 1.35,
    },
    h4: {
      fontSize: '1.25rem',          // 20px
      fontWeight: typoTokens.weight.semiBold,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.125rem',         // 18px
      fontWeight: typoTokens.weight.semiBold,
      lineHeight: 1.45,
    },
    h6: {
      fontSize: '1rem',             // 16px
      fontWeight: typoTokens.weight.semiBold,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1.0625rem',        // 17px
      fontWeight: typoTokens.weight.medium,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '1rem',             // 16px
      fontWeight: typoTokens.weight.medium,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',             // 16px
      fontWeight: typoTokens.weight.regular,
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.9375rem',        // 15px
      fontWeight: typoTokens.weight.regular,
      lineHeight: 1.65,
    },
    caption: {
      fontSize: '0.875rem',         // 14px
      fontWeight: typoTokens.weight.regular,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: '0.8125rem',        // 13px
      fontWeight: typoTokens.weight.semiBold,
      lineHeight: 1.5,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: typoTokens.weight.semiBold,
      textTransform: 'none',
      fontSize: '1rem',             // 16px
    },
  },
};

// ── Component overrides generator ──
function getComponentOverrides(mode: 'light' | 'dark'): ThemeOptions['components'] {
  const tokens = mode === 'light' ? lightTokens : darkTokens;
  return {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          overflowY: 'scroll',
          overflowX: 'hidden',
        },
        body: {
          height: '100%',
          overflow: 'auto',
          backgroundColor: tokens.bodyBg,
          color: tokens.textPrimary,
          fontFamily: typoTokens.fontFamilyBase,
          scrollbarColor: `${palette.primary.main} transparent`,
          '&::-webkit-scrollbar': { width: 6 },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: palette.primary.main,
            borderRadius: 3,
          },
        },
        '#root': {
          minHeight: '100%',
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: tokens.cardBg,
          borderRadius: spacingTokens.radius,
          boxShadow: mode === 'light' ? shadowTokens.card : shadowTokens.cardDark,
          border: `1px solid ${tokens.border}`,
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          '&:hover': {
            boxShadow: mode === 'light'
              ? '0rem 0.25rem 3rem 0rem rgba(82,63,105,0.15)'
              : '0rem 0.25rem 3rem 0rem rgba(0,0,0,0.4)',
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '1.5rem 1.5rem 0',
        },
        title: {
          fontSize: '1.25rem',
          fontWeight: 700,
          color: tokens.heading,
        },
        subheader: {
          fontSize: '0.875rem',
          fontWeight: 400,
          color: tokens.textSecondary,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '1.5rem',
          '&:last-child': { paddingBottom: '1.5rem' },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: spacingTokens.radiusLg,
          padding: '0.625rem 1.5rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          background: gradients.tryal,
          '&:hover': {
            background: gradients.tryal,
            filter: 'brightness(1.1)',
          },
        },
        outlinedPrimary: {
          borderColor: palette.primary.main,
          color: palette.primary.main,
          '&:hover': {
            backgroundColor: `${palette.primary.main}10`,
            borderColor: palette.primary.main,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: spacingTokens.radius,
          fontWeight: 700,
          fontSize: '0.75rem',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 10,
          borderRadius: 5,
          backgroundColor: mode === 'light' ? '#e0e0e0' : '#333',
        },
        bar: {
          borderRadius: 5,
          backgroundImage: gradients.progressGradient,
        },
      },
    },
    MuiTextField: {
      defaultProps: { size: 'small' },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: spacingTokens.radius,
            backgroundColor: tokens.cardBg,
            '& fieldset': { borderColor: tokens.border },
            '&:hover fieldset': { borderColor: palette.primary.light },
            '&.Mui-focused fieldset': { borderColor: palette.primary.main },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: spacingTokens.radius,
          marginBottom: 4,
          '&.Mui-selected': {
            backgroundColor: `${palette.primary.main}15`,
            color: palette.primary.main,
            '&:hover': {
              backgroundColor: `${palette.primary.main}20`,
            },
          },
          '&:hover': {
            backgroundColor: `${palette.primary.main}08`,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: tokens.sidebarBg,
          borderRight: `1px solid ${tokens.border}`,
          width: layout.sidebarWidth,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.headerBg,
          color: tokens.textPrimary,
          boxShadow: 'none',
          borderBottom: `1px solid ${tokens.border}`,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: 700,
          fontSize: '0.65rem',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: tokens.divider,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          minHeight: 40,
          '&.Mui-selected': {
            color: palette.primary.main,
            fontWeight: 600,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: palette.primary.main,
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: tokens.cardBg,
          border: `1px solid ${tokens.border}`,
          borderRadius: spacingTokens.radius,
          boxShadow: mode === 'light' ? shadowTokens.card : shadowTokens.cardDark,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '&:hover': {
            backgroundColor: `${palette.primary.main}08`,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: mode === 'light' ? '#333' : '#fff',
          color: mode === 'light' ? '#fff' : '#333',
          fontSize: '0.75rem',
          borderRadius: 4,
        },
      },
    },
  };
}

// ── Light theme ──
export const lightTheme = createTheme({
  ...sharedOptions,
  palette: {
    mode: 'light',
    primary: palette.primary,
    secondary: palette.secondary,
    success: { main: palette.success.main, light: palette.success.light, dark: palette.success.dark },
    info: { main: palette.info.main, light: palette.info.light, dark: palette.info.dark },
    warning: { main: palette.warning.main, light: palette.warning.light, dark: palette.warning.dark },
    error: { main: palette.danger.main, light: palette.danger.light, dark: palette.danger.dark },
    background: {
      default: lightTokens.bodyBg,
      paper: lightTokens.paper,
    },
    text: {
      primary: lightTokens.textPrimary,
      secondary: lightTokens.textSecondary,
    },
    divider: lightTokens.divider,
  },
  components: getComponentOverrides('light'),
});

// ── Dark theme ──
export const darkTheme = createTheme({
  ...sharedOptions,
  palette: {
    mode: 'dark',
    primary: palette.primary,
    secondary: palette.secondary,
    success: { main: palette.success.main, light: palette.success.light, dark: palette.success.dark },
    info: { main: palette.info.main, light: palette.info.light, dark: palette.info.dark },
    warning: { main: palette.warning.main, light: palette.warning.light, dark: palette.warning.dark },
    error: { main: palette.danger.main, light: palette.danger.light, dark: palette.danger.dark },
    background: {
      default: darkTokens.bodyBg,
      paper: darkTokens.paper,
    },
    text: {
      primary: darkTokens.textPrimary,
      secondary: darkTokens.textSecondary,
    },
    divider: darkTokens.divider,
  },
  components: getComponentOverrides('dark'),
});
