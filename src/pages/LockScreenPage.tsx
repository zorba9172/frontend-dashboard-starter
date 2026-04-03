import React from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gradients, palette } from '../theme';
import userImg from '../assets/images/user.jpg';

const LockScreenPage: React.FC = () => {
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
        <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

          <Avatar
            src={userImg}
            sx={{ width: 100, height: 100, mb: 2, border: `3px solid ${palette.primary.main}` }}
          />

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Levi Siregar
          </Typography>

          <Box component="form" noValidate sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Enter your password"
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
              Unlock
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LockScreenPage;
