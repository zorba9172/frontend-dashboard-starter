import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  LinearProgress,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { EChart, SparklineChart, useChartTheme } from '../charts';
import { palette, chartColors } from '../theme';

const COLORS = {
  primary: palette.primary.main,
  orange: chartColors.orange,
  pink: chartColors.pink,
  yellow: palette.warning.main,
  cyan: chartColors.cyan,
};

interface StatWidgetProps {
  title: string;
  value: string;
  chart: React.ReactNode;
}

const StatWidget: React.FC<StatWidgetProps> = ({ title, value, chart }) => (
  <Card>
    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>{title}</Typography>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>{value}</Typography>
      </Box>
      <Box sx={{ width: 100, height: 50 }}>{chart}</Box>
    </CardContent>
  </Card>
);

const WidgetPage: React.FC = () => {
  const theme = useTheme();
  const t = useChartTheme();
  const isDark = t.isDark;

  return (
    <Box sx={{ py: 2 }}>
      {/* ═══ ROW 1: Stat cards ═══ */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
          <StatWidget
            title="Total Students"
            value="3,280"
            chart={<SparklineChart data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]} color={COLORS.primary} type="area" />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
          <StatWidget
            title="New Students"
            value="245"
            chart={<SparklineChart data={[35, 55, 25, 70, 45, 60, 30]} color={COLORS.orange} type="bar" />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
          <StatWidget
            title="Total Course"
            value="28"
            chart={
              <EChart
                height={60}
                width={60}
                option={{
                  series: [{
                    type: 'gauge',
                    startAngle: 220,
                    endAngle: -40,
                    min: 0,
                    max: 100,
                    pointer: { show: false },
                    progress: {
                      show: true,
                      width: 8,
                      roundCap: true,
                      itemStyle: { color: COLORS.pink },
                    },
                    axisLine: { lineStyle: { width: 8, color: [[1, isDark ? t.splitLineColor : alpha(palette.primary.main, 0.1)]] } },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: false },
                    detail: { show: false },
                    data: [{ value: 75 }],
                  }],
                }}
              />
            }
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
          <StatWidget
            title="Fees Collection"
            value="$18,240"
            chart={<SparklineChart data={[12, 30, 18, 45, 32, 55, 40, 60, 35]} color={COLORS.cyan} />}
          />
        </Grid>
      </Grid>

      {/* ═══ ROW 2: Medium charts ═══ */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, xl: 4 }}>
          <Card>
            <CardHeader title="Active Users" />
            <CardContent>
              <EChart
                height={250}
                option={{
                  tooltip: {
                    trigger: 'axis',
                    backgroundColor: t.tooltipBg,
                    borderColor: t.tooltipBorder,
                    textStyle: { color: t.tooltipTextColor },
                  },
                  grid: { left: 40, right: 16, top: 8, bottom: 32 },
                  xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: { color: t.axisLabelColor },
                    axisLine: { show: false },
                    axisTick: { show: false },
                  },
                  yAxis: {
                    type: 'value',
                    axisLabel: { color: t.axisLabelColor },
                    splitLine: { lineStyle: { color: t.splitLineColor, type: 'dashed' } },
                  },
                  series: [{
                    type: 'bar',
                    data: [44, 55, 41, 67, 22, 43, 36],
                    barWidth: '45%',
                    itemStyle: { color: COLORS.primary, borderRadius: [6, 6, 0, 0] },
                  }],
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, xl: 4 }}>
          <Card>
            <CardHeader title="Sales Analysis" />
            <CardContent>
              <EChart
                height={250}
                option={{
                  tooltip: {
                    trigger: 'axis',
                    backgroundColor: t.tooltipBg,
                    borderColor: t.tooltipBorder,
                    textStyle: { color: t.tooltipTextColor },
                  },
                  legend: {
                    right: 0,
                    top: 0,
                    textStyle: { color: t.textSecondary },
                  },
                  grid: { left: 40, right: 16, top: 32, bottom: 32 },
                  xAxis: {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    axisLabel: { color: t.axisLabelColor },
                    axisLine: { show: false },
                    axisTick: { show: false },
                  },
                  yAxis: {
                    type: 'value',
                    axisLabel: { color: t.axisLabelColor },
                    splitLine: { lineStyle: { color: t.splitLineColor, type: 'dashed' } },
                  },
                  series: [
                    {
                      name: 'Sales',
                      type: 'line',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 80],
                      smooth: true,
                      symbol: 'none',
                      lineStyle: { width: 3, color: COLORS.primary },
                      itemStyle: { color: COLORS.primary },
                    },
                    {
                      name: 'Revenue',
                      type: 'line',
                      data: [5, 20, 30, 45, 35, 55, 48, 70, 65],
                      smooth: true,
                      symbol: 'none',
                      lineStyle: { width: 3, color: COLORS.orange },
                      itemStyle: { color: COLORS.orange },
                    },
                  ],
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, xl: 4 }}>
          <Card>
            <CardHeader title="Top Products" />
            <CardContent>
              {[
                { name: 'Product A', value: 85, color: COLORS.primary },
                { name: 'Product B', value: 72, color: COLORS.orange },
                { name: 'Product C', value: 60, color: COLORS.pink },
              ].map((product) => (
                <Box key={product.name} sx={{ mb: 3, '&:last-child': { mb: 0 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{product.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.value}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={product.value}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: isDark ? alpha(theme.palette.common.white, 0.1) : alpha(product.color, 0.15),
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 5,
                        backgroundColor: product.color,
                        backgroundImage: 'none',
                      },
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ═══ ROW 3: Large charts ═══ */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, xl: 6 }}>
          <Card>
            <CardHeader title="Visitor Activity" />
            <CardContent>
              <EChart
                height={300}
                option={{
                  tooltip: {
                    trigger: 'axis',
                    backgroundColor: t.tooltipBg,
                    borderColor: t.tooltipBorder,
                    textStyle: { color: t.tooltipTextColor },
                  },
                  legend: {
                    right: 0,
                    top: 0,
                    textStyle: { color: t.textSecondary },
                  },
                  grid: { left: 40, right: 16, top: 32, bottom: 32 },
                  xAxis: {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisLabel: { color: t.axisLabelColor },
                    axisLine: { show: false },
                    axisTick: { show: false },
                    boundaryGap: false,
                  },
                  yAxis: {
                    type: 'value',
                    axisLabel: { color: t.axisLabelColor },
                    splitLine: { lineStyle: { color: t.splitLineColor, type: 'dashed' } },
                  },
                  series: [
                    {
                      name: 'Visitors',
                      type: 'line',
                      data: [31, 40, 28, 51, 42, 109, 100, 120, 80, 95, 110, 90],
                      smooth: true,
                      symbol: 'none',
                      lineStyle: { width: 2, color: COLORS.primary },
                      itemStyle: { color: COLORS.primary },
                      areaStyle: {
                        color: {
                          type: 'linear',
                          x: 0, y: 0, x2: 0, y2: 1,
                          colorStops: [
                            { offset: 0, color: `${COLORS.primary}50` },
                            { offset: 1, color: `${COLORS.primary}05` },
                          ],
                        },
                      },
                    },
                    {
                      name: 'Page Views',
                      type: 'line',
                      data: [11, 32, 45, 32, 34, 52, 41, 80, 60, 55, 70, 62],
                      smooth: true,
                      symbol: 'none',
                      lineStyle: { width: 2, color: COLORS.cyan },
                      itemStyle: { color: COLORS.cyan },
                      areaStyle: {
                        color: {
                          type: 'linear',
                          x: 0, y: 0, x2: 0, y2: 1,
                          colorStops: [
                            { offset: 0, color: `${COLORS.cyan}50` },
                            { offset: 1, color: `${COLORS.cyan}05` },
                          ],
                        },
                      },
                    },
                  ],
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, xl: 6 }}>
          <Card>
            <CardHeader title="Weekly Sales" />
            <CardContent>
              <EChart
                height={300}
                option={{
                  tooltip: {
                    trigger: 'axis',
                    backgroundColor: t.tooltipBg,
                    borderColor: t.tooltipBorder,
                    textStyle: { color: t.tooltipTextColor },
                  },
                  legend: {
                    right: 0,
                    top: 0,
                    textStyle: { color: t.textSecondary },
                  },
                  grid: { left: 40, right: 16, top: 32, bottom: 32 },
                  xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: { color: t.axisLabelColor },
                    axisLine: { show: false },
                    axisTick: { show: false },
                  },
                  yAxis: {
                    type: 'value',
                    axisLabel: { color: t.axisLabelColor },
                    splitLine: { lineStyle: { color: t.splitLineColor, type: 'dashed' } },
                  },
                  series: [
                    {
                      name: 'Online',
                      type: 'bar',
                      stack: 'total',
                      data: [44, 55, 41, 67, 22, 43, 36],
                      barWidth: '40%',
                      itemStyle: { color: COLORS.primary, borderRadius: [0, 0, 0, 0] },
                    },
                    {
                      name: 'Offline',
                      type: 'bar',
                      stack: 'total',
                      data: [13, 23, 20, 8, 13, 27, 18],
                      itemStyle: { color: COLORS.yellow, borderRadius: [6, 6, 0, 0] },
                    },
                  ],
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WidgetPage;
