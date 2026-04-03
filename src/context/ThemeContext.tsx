import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../theme';

// ── Sidebar style options (matching template) ──
export type SidebarStyle = 'full' | 'compact' | 'mini' | 'modern' | 'overlay' | 'icon-hover';
export type LayoutMode = 'vertical' | 'horizontal';
export type Direction = 'ltr' | 'rtl';
export type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
  sidebarStyle: SidebarStyle;
  setSidebarStyle: (style: SidebarStyle) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  layoutMode: LayoutMode;
  setLayoutMode: (mode: LayoutMode) => void;
  direction: Direction;
  setDirection: (dir: Direction) => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'dashboard-theme-mode';

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored === 'dark' || stored === 'light') ? stored : 'light';
  });
  const [sidebarStyle, setSidebarStyle] = useState<SidebarStyle>('full');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('vertical');
  const [direction, setDirection] = useState<Direction>('ltr');
  const [primaryColor, setPrimaryColor] = useState('#886CC0');

  const setMode = useCallback((m: ThemeMode) => {
    setModeState(m);
    localStorage.setItem(STORAGE_KEY, m);
  }, []);

  const toggleMode = useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }, [mode, setMode]);

  // Responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 768 && w < 1024) {
        setSidebarStyle('mini');
      } else if (w < 768) {
        setSidebarOpen(false);
        setSidebarStyle('overlay');
      } else {
        setSidebarOpen(true);
        setSidebarStyle('full');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Direction attribute on html
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.className = direction;
  }, [direction]);

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const value = useMemo<ThemeContextValue>(() => ({
    mode,
    toggleMode,
    setMode,
    sidebarStyle,
    setSidebarStyle,
    sidebarOpen,
    setSidebarOpen,
    layoutMode,
    setLayoutMode,
    direction,
    setDirection,
    primaryColor,
    setPrimaryColor,
  }), [
    mode, toggleMode, setMode, sidebarStyle, sidebarOpen,
    layoutMode, direction, primaryColor,
  ]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used within ThemeContextProvider');
  return ctx;
};
