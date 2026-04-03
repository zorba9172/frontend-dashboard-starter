import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import { EmailDonutChart } from '../../charts';
import { palette, chartColors } from '../../theme';

const categories = [
  { label: 'Primary (27%)', color: palette.primary.main, value: '763' },
  { label: 'Promotion (11%)', color: chartColors.green, value: '321' },
  { label: 'Forum (22%)', color: chartColors.cyan, value: '69' },
  { label: 'Socials (15%)', color: chartColors.yellowSoft, value: '154' },
  { label: 'Spam (25%)', color: chartColors.pinkSoft, value: '696' },
];

const EmailCategoriesCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ px: 3, pt: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
          Email Categories
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          Lorem ipsum dolor sit amet
        </Typography>
      </Box>

      <CardContent sx={{ flex: 1 }}>
        <EmailDonutChart />

        <Box sx={{ mt: 3, mb: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '1rem' }}>
            Legend
          </Typography>
        </Box>

        {categories.map((cat, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '6px',
                  bgcolor: cat.color,
                }}
              />
              <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '1rem' }}>
                {cat.label}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '1rem' }}>
              {cat.value}
            </Typography>
          </Box>
        ))}
      </CardContent>

      <Box sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          sx={{ borderRadius: '1.75rem' }}
        >
          Update Progress
        </Button>
      </Box>
    </Card>
  );
};

export default EmailCategoriesCard;
