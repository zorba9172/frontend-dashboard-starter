import React, { useMemo } from 'react';
import EChart from './EChart';
import { palette } from '../theme';

interface SparklineChartProps {
  data: number[];
  width?: number | string;
  height?: number;
  color?: string;
  type?: 'line' | 'bar' | 'area';
}

const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  width = 100,
  height = 50,
  color = palette.primary.main,
  type = 'line',
}) => {
  const option = useMemo(() => ({
    grid: { left: 0, right: 0, top: 0, bottom: 0 },
    xAxis: {
      type: 'category' as const,
      data: data.map((_, i) => i),
      show: false,
      boundaryGap: type === 'bar',
    },
    yAxis: { type: 'value' as const, show: false },
    tooltip: { show: false },
    series: [
      type === 'bar'
        ? {
            type: 'bar' as const,
            data,
            barWidth: '60%',
            itemStyle: { color, borderRadius: [2, 2, 0, 0] },
          }
        : {
            type: 'line' as const,
            data,
            smooth: true,
            symbol: 'none',
            lineStyle: { width: 4, color },
            areaStyle: type === 'area'
              ? {
                  color: {
                    type: 'linear' as const,
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                      { offset: 0, color: `${color}60` },
                      { offset: 1, color: `${color}05` },
                    ],
                  },
                }
              : undefined,
          },
    ],
  }), [data, color, type]);

  return <EChart option={option} width={width} height={height} />;
};

export default SparklineChart;
