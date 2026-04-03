import React, { useMemo } from 'react';
import EChart from './EChart';
import { useChartTheme } from './useChartTheme';
import { palette, semantic } from '../theme';

const ClientsColumnChart: React.FC = () => {
  const t = useChartTheme();

  const option = useMemo(() => ({
    grid: { left: 0, right: 0, top: 0, bottom: 0 },
    xAxis: {
      type: 'category' as const,
      data: ['S', 'M', 'T', 'W'],
      show: false,
    },
    yAxis: { type: 'value' as const, show: false },
    series: [
      {
        type: 'bar' as const,
        stack: 'total',
        data: [40, 55, 15, 55],
        barWidth: '40%',
        itemStyle: { color: t.isDark ? semantic.inactiveDark : semantic.inactiveLight, borderRadius: [0, 0, 0, 0] },
      },
      {
        type: 'bar' as const,
        stack: 'total',
        data: [40, 55, 35, 55],
        itemStyle: { color: palette.primary.main, borderRadius: [0, 0, 0, 0] },
      },
      {
        type: 'bar' as const,
        stack: 'total',
        data: [40, 17, 55, 55],
        itemStyle: { color: palette.primary.main, borderRadius: [4, 4, 0, 0] },
      },
    ],
    tooltip: { show: false },
  }), [t]);

  return <EChart option={option} height={150} />;
};

export default ClientsColumnChart;
