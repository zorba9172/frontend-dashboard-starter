import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  LinearProgress,
  useTheme,
} from '@mui/material';
import { gradients, semantic } from '../../theme';

const ProgressTargetCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Card>
      <CardContent sx={{ px: 2.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '1rem', mb: 3, whiteSpace: 'nowrap' }}>
          Total Clients
        </Typography>
        <LinearProgress
          variant="determinate"
          value={40}
          sx={{
            height: 10,
            borderRadius: 5,
            bgcolor: theme.palette.mode === 'light' ? semantic.trackLight : semantic.trackDark,
            '& .MuiLinearProgress-bar': {
              backgroundImage: gradients.gradient1,
              borderRadius: 5,
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 1, pb: 1 }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            76 left from target
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.125rem' }}>
            42
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProgressTargetCard;
