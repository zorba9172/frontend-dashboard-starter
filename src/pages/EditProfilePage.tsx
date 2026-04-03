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
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import userAvatar from '../assets/images/user.jpg';

export default function EditProfilePage() {
  const theme = useTheme();
  const [gender, setGender] = useState('male');
  const [country, setCountry] = useState('usa');
  const [city, setCity] = useState('new-york');

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Edit Profile</Typography>
      <Grid container spacing={3}>
        {/* Left Sidebar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                <Avatar
                  src={userAvatar}
                  sx={{ width: 120, height: 120, mx: 'auto', border: `4px solid ${alpha(theme.palette.primary.main, 0.2)}` }}
                />
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    bottom: 4,
                    right: 4,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': { bgcolor: 'primary.dark' },
                    width: 32,
                    height: 32,
                  }}
                >
                  <CameraAltIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography variant="h5" sx={{ mb: 0.5 }}>Mitchell C. Adams</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>mitchell.adams@mail.com</Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                {[
                  { label: 'Posts', value: '48' },
                  { label: 'Followers', value: '873k' },
                  { label: 'Following', value: '312' },
                ].map((stat) => (
                  <Box key={stat.label} sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight={700} color="primary">{stat.value}</Typography>
                    <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
                  </Box>
                ))}
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ textAlign: 'left', px: 2 }}>
                {[
                  { icon: <EmailIcon fontSize="small" />, text: 'mitchell.adams@mail.com' },
                  { icon: <PhoneIcon fontSize="small" />, text: '+1 (234) 567-8900' },
                  { icon: <LocationOnIcon fontSize="small" />, text: 'New York, USA' },
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1 }}>
                    <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                    <Typography variant="body2" color="text.secondary">{item.text}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Form */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 0.5 }}>Account Setup</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Update your personal details and preferences
              </Typography>
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Name" defaultValue="Mitchell" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Surname" defaultValue="Adams" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Specialty" defaultValue="UX / UI Designer" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Skills" defaultValue="Figma, React, Photoshop" />
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
                  <TextField fullWidth label="Birth Date" type="date" defaultValue="1999-03-15" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Phone" defaultValue="+1 (234) 567-8900" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Email" defaultValue="mitchell.adams@mail.com" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Country</InputLabel>
                    <Select value={country} label="Country" onChange={(e) => setCountry(e.target.value)}>
                      <MenuItem value="usa">United States</MenuItem>
                      <MenuItem value="uk">United Kingdom</MenuItem>
                      <MenuItem value="canada">Canada</MenuItem>
                      <MenuItem value="australia">Australia</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>City</InputLabel>
                    <Select value={city} label="City" onChange={(e) => setCity(e.target.value)}>
                      <MenuItem value="new-york">New York</MenuItem>
                      <MenuItem value="los-angeles">Los Angeles</MenuItem>
                      <MenuItem value="chicago">Chicago</MenuItem>
                      <MenuItem value="houston">Houston</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 50, px: 5 }}
                    >
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
