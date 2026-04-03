import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Button,
  Tabs,
  Tab,
  Chip,
  Divider,
  IconButton,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

import userAvatar from '../assets/images/user.jpg';
import pic1 from '../assets/images/profile/small/pic1.jpg';
import pic2 from '../assets/images/profile/small/pic2.jpg';
import pic3 from '../assets/images/profile/small/pic3.jpg';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return value === index ? <Box sx={{ pt: 3 }}>{children}</Box> : null;
}

const posts = [
  { id: 1, image: pic1, text: 'Exploring new design trends for 2026 and beyond. The future of UI is bright!', likes: 124, comments: 23 },
  { id: 2, image: pic2, text: 'Just wrapped up an amazing project with the team. Collaboration at its finest.', likes: 89, comments: 12 },
  { id: 3, image: pic3, text: 'Nature always inspires the best color palettes. Taking notes from the outdoors.', likes: 256, comments: 45 },
];

const skills = ['UI Design', 'Figma', 'Photoshop', 'React', 'CSS', 'Typography', 'Wireframing', 'Prototyping'];

const personalInfo = [
  { label: 'Name', value: 'Mitchell C. Adams' },
  { label: 'Email', value: 'mitchell.adams@mail.com' },
  { label: 'Availability', value: 'Full Time' },
  { label: 'Age', value: '27' },
  { label: 'Location', value: 'New York, USA' },
  { label: 'Year of Experience', value: '5 Years' },
];

export default function AppProfilePage() {
  const theme = useTheme();
  const [tab, setTab] = useState(0);

  return (
    <Box>
      {/* Profile Header */}
      <Card sx={{ mb: 3, overflow: 'visible' }}>
        <Box
          sx={{
            height: 200,
            background: 'linear-gradient(212.43deg, #886CC0 19.43%, #AA6CC0 87.63%)',
            borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
            position: 'relative',
          }}
        />
        <CardContent sx={{ pt: 0, position: 'relative' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', mt: -6, mb: 2, gap: 2 }}>
            <Avatar
              src={userAvatar}
              sx={{
                width: 120,
                height: 120,
                border: `4px solid ${theme.palette.background.paper}`,
                boxShadow: theme.shadows[3],
              }}
            />
            <Box sx={{ flex: 1, minWidth: 200, mb: 1 }}>
              <Typography variant="h4">Mitchell C. Adams</Typography>
              <Typography variant="body2" color="text.secondary">UX / UI Designer</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">New York, USA</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <Button variant="contained" color="primary">Follow</Button>
              <Button variant="outlined" color="primary">Send Message</Button>
            </Box>
          </Box>

          {/* Stats */}
          <Box sx={{ display: 'flex', gap: 4, mt: 2, mb: 1 }}>
            {[
              { label: 'Followers', value: '873k' },
              { label: 'Place Stay', value: '32' },
              { label: 'Reviews', value: '4.7' },
            ].map((stat) => (
              <Box key={stat.label} sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight={700} color="primary">{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card>
        <Box sx={{ px: 3, pt: 1 }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)}>
            <Tab label="Posts" />
            <Tab label="About Me" />
            <Tab label="Settings" />
          </Tabs>
        </Box>
        <CardContent>
          {/* Posts Tab */}
          <TabPanel value={tab} index={0}>
            <Grid container spacing={3}>
              {posts.map((post) => (
                <Grid size={{ xs: 12, md: 4 }} key={post.id}>
                  <Card variant="outlined">
                    <Box
                      component="img"
                      src={post.image}
                      alt="post"
                      sx={{ width: '100%', height: 180, objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="body2" sx={{ mb: 2 }}>{post.text}</Typography>
                      <Divider sx={{ mb: 1.5 }} />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <IconButton size="small" color="error"><FavoriteIcon fontSize="small" /></IconButton>
                          <Typography variant="body2">{post.likes}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <IconButton size="small"><ChatBubbleOutlineIcon fontSize="small" /></IconButton>
                          <Typography variant="body2">{post.comments}</Typography>
                        </Box>
                        <IconButton size="small" sx={{ ml: 'auto' }}><ShareIcon fontSize="small" /></IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* About Me Tab */}
          <TabPanel value={tab} index={1}>
            <Typography variant="h6" sx={{ mb: 1 }}>About Me</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              I am a passionate UX/UI Designer with over 5 years of experience creating intuitive and visually
              stunning digital products. I specialize in user-centered design, transforming complex problems into
              simple, elegant solutions. When I am not designing, you will find me exploring nature, sketching, or
              reading about the latest design trends.
            </Typography>

            <Typography variant="h6" sx={{ mb: 1.5 }}>Skills</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main' }}
                />
              ))}
            </Box>

            <Typography variant="h6" sx={{ mb: 1.5 }}>Personal Information</Typography>
            <Grid container spacing={2}>
              {personalInfo.map((info) => (
                <Grid size={{ xs: 12, sm: 6 }} key={info.label}>
                  <Box sx={{ display: 'flex', gap: 1, py: 1, borderBottom: `1px solid ${theme.palette.divider}` }}>
                    <Typography variant="body2" fontWeight={600} sx={{ minWidth: 160 }}>{info.label}:</Typography>
                    <Typography variant="body2" color="text.secondary">{info.value}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Settings Tab */}
          <TabPanel value={tab} index={2}>
            <Typography variant="body1" color="text.secondary">
              Profile settings will be available here. Use the Edit Profile page to update your information.
            </Typography>
          </TabPanel>
        </CardContent>
      </Card>
    </Box>
  );
}
