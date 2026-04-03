import React, { useMemo } from 'react';
import EChart from './EChart';

interface DonutProgressProps {
  value: number;
  bgColor: string;
  bgColor2: string;
  size?: number;
}

const DonutProgress: React.FC<DonutProgressProps> = ({
  value,
  bgColor,
  bgColor2,
  size = 80,
}) => {
  const option = useMemo(() => ({
    series: [
      {
        type: 'pie' as const,
        radius: ['60%', '90%'],
        silent: true,
        label: { show: false },
        data: [
          { value, itemStyle: { color: bgColor } },
          { value: 100 - value, itemStyle: { color: bgColor2 } },
        ],
        itemStyle: { borderWidth: 0 },
        animation: true,
        animationDuration: 800,
      },
    ],
    tooltip: { show: false },
  }), [value, bgColor, bgColor2]);

  return <EChart option={option} width={size} height={size} />;
};

export default DonutProgress;
