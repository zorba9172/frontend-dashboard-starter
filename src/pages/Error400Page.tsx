import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gradients } from '../theme';

const Error400Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '6rem',
            fontWeight: 800,
            background: gradients.tryal,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          400
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Bad Request
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          Your Request resulted in an error.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/dashboard')}
          sx={{
            borderRadius: '1.75rem',
            px: 4,
            py: 1.4,
            background: gradients.tryal,
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              background: gradients.tryal,
              filter: 'brightness(1.1)',
            },
          }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default Error400Page;
