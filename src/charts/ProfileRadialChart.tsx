import React, { useMemo } from 'react';
import EChart from './EChart';
import { useChartTheme } from './useChartTheme';
import { palette, chartColors } from '../theme';

const ProfileRadialChart: React.FC = () => {
  const t = useChartTheme();

  const option = useMemo(() => ({
    series: [
      {
        type: 'gauge' as const,
        startAngle: 220,
        endAngle: -40,
        min: 0,
        max: 100,
        pointer: { show: false },
        progress: {
          show: true,
          width: 18,
          roundCap: true,
          itemStyle: {
            color: {
              type: 'linear' as const,
              x: 0, y: 0, x2: 1, y2: 0,
              colorStops: [
                { offset: 0, color: chartColors.magenta },
                { offset: 1, color: palette.primary.main },
              ],
            },
          },
        },
        axisLine: {
          lineStyle: {
            width: 18,
            color: [[1, t.trackBg]],
          },
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: {
          valueAnimation: true,
          formatter: '{value}%',
          fontSize: 22,
          fontWeight: 700,
          color: palette.primary.main,
          offsetCenter: [0, '10%'],
        },
        data: [{ value: 70 }],
      },
    ],
  }), [t]);

  return <EChart option={option} height={300} />;
};

export default ProfileRadialChart;
