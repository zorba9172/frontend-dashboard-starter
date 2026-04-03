import React from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gradients, palette } from '../theme';

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: gradients.tryal,
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 480, width: '100%', borderRadius: '1rem', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
        <CardContent sx={{ p: 4 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '10px',
                background: gradients.tryal,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 1,
              }}
            >
              <Typography variant="h5" sx={{ color: palette.primary.contrastText, fontWeight: 700 }}>
                F
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: palette.primary.main }}>
              Fillow
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 700, textAlign: 'center', mb: 1 }}>
            Forgot Password
          </Typography>

          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', mb: 3 }}>
            Enter your email to reset password
          </Typography>

          <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                borderRadius: '1.75rem',
                py: 1.4,
                background: gradients.tryal,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                '&:hover': {
                  background: gradients.tryal,
                  filter: 'brightness(1.1)',
                },
              }}
            >
              SUBMIT
            </Button>
          </Box>

          <Typography variant="body2" sx={{ textAlign: 'center', mt: 3 }}>
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/login')}
              sx={{ color: palette.primary.main, fontWeight: 600, textDecoration: 'none', cursor: 'pointer' }}
            >
              Back to Sign In
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ForgotPasswordPage;
