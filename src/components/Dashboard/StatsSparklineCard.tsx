import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { SparklineChart } from '../../charts';
import { palette } from '../../theme';

interface StatsSparklineCardProps {
  value: string;
  label: string;
  change: string;
  changeColor: string;
  data: number[];
  sparkWidth?: number;
}

const StatsSparklineCard: React.FC<StatsSparklineCardProps> = ({
  value,
  label,
  change,
  changeColor,
  data,
  sparkWidth = 100,
}) => {
  const theme = useTheme();

  return (
    <Card>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', px: 2.5 }}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '2rem' }}>
            {value}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: '1rem' }}>
            {label}
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            <Typography component="span" variant="body2" sx={{ color: changeColor, fontWeight: 500 }}>
              {change}
            </Typography>{' '}
            than last month
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SparklineChart data={data} width={sparkWidth} height={50} color={palette.primary.main} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsSparklineCard;
