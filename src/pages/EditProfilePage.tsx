import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  IconButton,
  Link,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import SchoolIcon from '@mui/icons-material/School';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { palette, gradients } from '../theme';

import profile from '../assets/images/profile/profile.png';

export default function EditProfilePage() {
  const theme = useTheme();
  const [gender, setGender] = useState('female');
  const [country, setCountry] = useState('russia');
  const [city, setCity] = useState('krasnodar');

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Edit Profile</Typography>
      <Grid container spacing={3}>
        {/* ── Left Sidebar Card ── */}
        <Grid size={{ xs: 12, xl: 3 }}>
          <Card>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              {/* Avatar with camera overlay */}
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                <Avatar
                  src={profile}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    border: `4px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  }}
                />
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    bottom: 4,
                    right: 4,
                    bgcolor: theme.palette.primary.main,
                    color: palette.primary.contrastText,
                    '&:hover': { bgcolor: theme.palette.primary.dark },
                    width: 32,
                    height: 32,
                  }}
                >
                  <CameraAltIcon fontSize="small" />
                </IconButton>
              </Box>

              <Typography variant="h5" sx={{ mb: 0.5 }}>John Brahim</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Developer</Typography>
              <Link
                href="#"
                underline="hover"
                sx={{ fontSize: '0.85rem', color: theme.palette.primary.main, display: 'block', mb: 2 }}
              >
                www.johnbrahim.dev
              </Link>

              <Divider sx={{ my: 2 }} />

              {/* Stats */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                {[
                  { icon: <ViewInArIcon sx={{ fontSize: 20 }} />, label: 'Models', value: '36' },
                  { icon: <CollectionsIcon sx={{ fontSize: 20 }} />, label: 'Gallery', value: '3' },
                  { icon: <SchoolIcon sx={{ fontSize: 20 }} />, label: 'Lessons', value: '1' },
                ].map((stat) => (
                  <Box key={stat.label} sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: theme.palette.primary.main, mb: 0.5 }}>{stat.icon}</Box>
                    <Typography variant="h6" fontWeight={700} color="primary">{stat.value}</Typography>
                    <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* ── Right Form Card ── */}
        <Grid size={{ xs: 12, xl: 9 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 0.5 }}>Account Setup</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Update your personal details and preferences
              </Typography>

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Name" defaultValue="John" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Surname" defaultValue="Brahim" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Specialty" defaultValue="Developer" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Skills" defaultValue="HTML,JavaScript,PHP" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Gender</InputLabel>
                    <Select value={gender} label="Gender" onChange={(e) => setGender(e.target.value)}>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Birth Date"
                    type="date"
                    defaultValue="1995-06-15"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Phone" defaultValue="+123456789" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Email" defaultValue="demo@gmail.com" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Country</InputLabel>
                    <Select value={country} label="Country" onChange={(e) => setCountry(e.target.value)}>
                      <MenuItem value="russia">Russia</MenuItem>
                      <MenuItem value="canada">Canada</MenuItem>
                      <MenuItem value="china">China</MenuItem>
                      <MenuItem value="india">India</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>City</InputLabel>
                    <Select value={city} label="City" onChange={(e) => setCity(e.target.value)}>
                      <MenuItem value="krasnodar">Krasnodar</MenuItem>
                      <MenuItem value="tyumen">Tyumen</MenuItem>
                      <MenuItem value="chelyabinsk">Chelyabinsk</MenuItem>
                      <MenuItem value="moscow">Moscow</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                    <Link href="#" underline="hover" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                      Forgot your password?
                    </Link>
                    <Button variant="contained" sx={{ borderRadius: 50, px: 5 }}>
                      UPDATE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
