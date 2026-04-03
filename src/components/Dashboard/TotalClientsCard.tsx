import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { ClientsColumnChart } from '../../charts';
import { palette } from '../../theme';

const TotalClientsCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Card>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', px: 2.5, pb: 0 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '1rem', mb: 2, whiteSpace: 'nowrap' }}>
            Total Clients
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '2rem' }}>
              68
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <ArrowDropUpIcon sx={{ color: palette.success.main, fontSize: '1.5rem' }} />
              <Typography variant="caption" sx={{ color: palette.success.main, display: 'block', fontSize: '0.875rem', fontWeight: 400 }}>
                +0,5%
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <ClientsColumnChart />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalClientsCard;
