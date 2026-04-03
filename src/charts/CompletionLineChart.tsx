import React, { useMemo } from 'react';
import EChart from './EChart';
import { useChartTheme } from './useChartTheme';
import { palette } from '../theme';

const CompletionLineChart: React.FC = () => {
  const t = useChartTheme();

  const option = useMemo(() => ({
    tooltip: {
      trigger: 'axis' as const,
      backgroundColor: t.tooltipBg,
      borderColor: t.tooltipBorder,
      textStyle: { color: t.tooltipTextColor },
      formatter: (params: any) =>
        `${params[0].marker} $ ${params[0].value} hundred`,
    },
    grid: { left: 40, right: 16, top: 16, bottom: 32 },
    xAxis: {
      type: 'category' as const,
      data: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      axisLine: { lineStyle: { color: t.axisLineColor } },
      axisLabel: { color: t.axisLabelColor, fontFamily: 'Poppins', fontSize: 13 },
      axisTick: { show: false },
      splitLine: { show: true, lineStyle: { color: t.splitLineColor } },
    },
    yAxis: {
      type: 'value' as const,
      axisLabel: {
        color: t.axisLabelColor,
        fontFamily: 'Poppins',
        fontSize: 14,
        formatter: (v: number) => `${v}k`,
      },
      splitLine: { show: false },
    },
    series: [
      {
        type: 'line' as const,
        data: [20, 40, 20, 30, 50, 40, 60],
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 6, color: palette.primary.main },
        itemStyle: { color: palette.primary.main, borderColor: t.cardBg, borderWidth: 2 },
        areaStyle: { color: 'transparent' },
      },
    ],
  }), [t]);

  return <EChart option={option} height={300} />;
};

export default CompletionLineChart;
