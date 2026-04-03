import React from 'react';
import { Card, CardContent, Box, Typography, Button, useTheme } from '@mui/material';
import { gradients, palette } from '../../theme';
import chartImg from '../../assets/images/chart.png';

const HeroBannerCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        background: gradients.tryal,
        border: 'none',
        overflow: 'hidden',
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ flex: '1 1 55%', minWidth: 200, mb: { xs: 2, sm: 0 } }}>
            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                fontWeight: 700,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                mb: 1,
                lineHeight: 1.3,
              }}
            >
              Manage your project in one touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mb: 2.5,
                lineHeight: 1.6,
                fontSize: '0.875rem',
              }}
            >
              Let Fillow manage your project automatically with our best AI systems
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.common.white,
                color: palette.primary.main,
                borderRadius: '1.75rem',
                fontWeight: 600,
                fontSize: '1rem',
                px: 3,
                py: 1,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              Try Free Now
            </Button>
          </Box>
          <Box
            sx={{
              flex: '1 1 40%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: 150,
            }}
          >
            <Box
              component="img"
              src={chartImg}
              alt="Chart illustration"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: 200,
                filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.15))',
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeroBannerCard;
