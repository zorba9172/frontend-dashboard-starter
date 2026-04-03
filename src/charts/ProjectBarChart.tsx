import React, { useMemo } from 'react';
import EChart from './EChart';
import { useChartTheme } from './useChartTheme';
import { chartColors } from '../theme';

const ProjectBarChart: React.FC = () => {
  const t = useChartTheme();

  const option = useMemo(() => ({
    tooltip: {
      trigger: 'axis' as const,
      backgroundColor: t.tooltipBg,
      borderColor: t.tooltipBorder,
      textStyle: { color: t.tooltipTextColor },
      formatter: (params: any) =>
        params.map((p: any) => `${p.marker} ${p.seriesName}: <b>$ ${p.value}k</b>`).join('<br/>'),
    },
    grid: { left: 40, right: 16, top: 16, bottom: 32 },
    xAxis: {
      type: 'category' as const,
      data: ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
      axisLine: { lineStyle: { color: t.axisLineColor } },
      axisLabel: { color: t.axisLabelColor, fontFamily: 'Inter Variable', fontSize: 13 },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value' as const,
      axisLabel: { color: t.axisLabelColor, fontFamily: 'Inter Variable', fontSize: 13 },
      splitLine: { lineStyle: { color: t.splitLineColor } },
    },
    series: [
      {
        name: 'Running',
        type: 'bar' as const,
        data: [50, 18, 70, 40, 90, 70, 20],
        barWidth: '30%',
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: {
            type: 'linear' as const,
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: chartColors.orange },
              { offset: 1, color: '#FFc89d' },
            ],
          },
        },
        barGap: '20%',
      },
      {
        name: 'Cycling',
        type: 'bar' as const,
        data: [80, 40, 55, 20, 45, 30, 80],
        barWidth: '30%',
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: {
            type: 'linear' as const,
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: chartColors.pink },
              { offset: 1, color: '#FF9ee6' },
            ],
          },
        },
      },
    ],
  }), [t]);

  return <EChart option={option} height={400} />;
};

export default ProjectBarChart;
