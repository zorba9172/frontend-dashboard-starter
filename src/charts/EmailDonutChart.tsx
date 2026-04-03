import React, { useMemo } from 'react';
import EChart from './EChart';
import { useChartTheme } from './useChartTheme';
import { palette, chartColors } from '../theme';

const EmailDonutChart: React.FC = () => {
  const t = useChartTheme();

  const option = useMemo(() => ({
    tooltip: {
      trigger: 'item' as const,
      backgroundColor: t.tooltipBg,
      borderColor: t.tooltipBorder,
      textStyle: { color: t.tooltipTextColor },
    },
    series: [
      {
        type: 'pie' as const,
        radius: ['50%', '75%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: {
          scaleSize: 8,
        },
        data: [
          { value: 27, name: 'Primary', itemStyle: { color: palette.primary.main } },
          { value: 11, name: 'Promotion', itemStyle: { color: chartColors.green } },
          { value: 22, name: 'Forum', itemStyle: { color: chartColors.cyan } },
          { value: 15, name: 'Socials', itemStyle: { color: chartColors.yellowSoft } },
          { value: 25, name: 'Spam', itemStyle: { color: chartColors.pinkSoft } },
        ],
        itemStyle: {
          borderColor: t.cardBg,
          borderWidth: 3,
          borderRadius: 6,
        },
      },
    ],
  }), [t]);

  return <EChart option={option} height={250} />;
};

export default EmailDonutChart;
