import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';

/**
 * Returns ECharts-compatible theme tokens derived from the current MUI theme.
 * All chart components should use these tokens so dark/light mode is automatic.
 */
export function useChartTheme() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return useMemo(() => ({
    isDark,
    // axis / grid
    axisLineColor: isDark ? '#2B2B2B' : '#e9e2f8',
    axisLabelColor: isDark ? '#828690' : '#787878',
    splitLineColor: isDark ? '#2B2B2B' : '#eee',
    // tooltip
    tooltipBg: isDark ? '#202020' : '#fff',
    tooltipBorder: isDark ? '#333' : '#e9e2f8',
    tooltipTextColor: isDark ? '#ddd' : '#464a53',
    // text
    textColor: isDark ? '#ddd' : '#464a53',
    textSecondary: isDark ? '#828690' : '#787878',
    // surfaces
    trackBg: isDark ? '#2a2535' : '#F1EAFF',
    cardBg: isDark ? '#202020' : '#fff',
  }), [isDark]);
}
