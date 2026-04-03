import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ProfileRadialChart } from '../../charts';
import { palette } from '../../theme';

const slides = [
  {
    title: 'Fillow Company Profile Website Project',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
  },
  {
    title: 'Fillow Company Profile Website Project',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
  },
  {
    title: 'Fillow Company Profile Website Project',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
  },
];

const ProfileProjectCard: React.FC = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          {/* Slider */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <IconButton size="small" onClick={prev} sx={{ bgcolor: theme.palette.action.hover }}>
                <ArrowBackIosNewIcon sx={{ fontSize: '0.8rem' }} />
              </IconButton>
              <IconButton size="small" onClick={next} sx={{ bgcolor: theme.palette.action.hover }}>
                <ArrowForwardIosIcon sx={{ fontSize: '0.8rem' }} />
              </IconButton>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 2 }}>
              {slides[currentSlide].title}
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              {slides[currentSlide].description}
            </Typography>
          </Box>

          {/* Radial Chart */}
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <ProfileRadialChart />
            <Typography variant="body1" sx={{ fontWeight: 600, mt: -1 }}>
              On Progress <Typography component="span" sx={{ color: palette.success.main }}>70%</Typography>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileProjectCard;
