import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { palette } from '../theme';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart, GaugeChart, RadarChart, ScatterChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  ToolboxComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
// Register all ECharts components once
echarts.use([
  BarChart,
  LineChart,
  PieChart,
  GaugeChart,
  RadarChart,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  ToolboxComponent,
  CanvasRenderer,
]);

// Use Record type for maximum flexibility with ECharts' complex option types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ChartOption = Record<string, any>;

export interface EChartProps {
  option: ChartOption;
  height?: number | string;
  width?: number | string;
  loading?: boolean;
  onInit?: (chart: echarts.ECharts) => void;
  sx?: Record<string, unknown>;
}

const EChart: React.FC<EChartProps> = ({
  option,
  height = 300,
  width = '100%',
  loading = false,
  onInit,
  sx,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Initialize chart
  useEffect(() => {
    if (!containerRef.current) return;

    const chart = echarts.init(containerRef.current, undefined, {
      renderer: 'canvas',
      useDirtyRect: true, // optimization: partial re-render
    });

    chartRef.current = chart;
    onInit?.(chart);

    return () => {
      chart.dispose();
      chartRef.current = null;
    };
  }, []);

  // Update options reactively
  useEffect(() => {
    if (!chartRef.current) return;

    chartRef.current.setOption(option, {
      notMerge: false,
      lazyUpdate: true, // optimization: batch updates
    });
  }, [option]);

  // Loading state
  useEffect(() => {
    if (!chartRef.current) return;
    if (loading) {
      chartRef.current.showLoading('default', {
        text: '',
        color: palette.primary.main,
        maskColor: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.7)',
      });
    } else {
      chartRef.current.hideLoading();
    }
  }, [loading, isDark]);

  // Responsive resize — uses ResizeObserver (no polling)
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !chartRef.current) return;

    const ro = new ResizeObserver(() => {
      chartRef.current?.resize({ animation: { duration: 200 } });
    });
    ro.observe(container);

    return () => ro.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width,
        height,
        minHeight: 0,
        ...sx,
      }}
    />
  );
};

export default React.memo(EChart);
export { echarts };
