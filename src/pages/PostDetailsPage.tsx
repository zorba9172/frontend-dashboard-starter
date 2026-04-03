import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Button,
  Chip,
  TextField,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

import userAvatar from '../assets/images/user.jpg';
import pic1 from '../assets/images/profile/small/pic1.jpg';
import pic2 from '../assets/images/profile/small/pic2.jpg';
import pic3 from '../assets/images/profile/small/pic3.jpg';
import postImage from '../assets/images/pic2.jpg';

const tags = ['Design', 'Nature', 'Travel', 'Photography', 'Lifestyle', 'Creative'];

const latestNews = [
  { title: '10 Tips for Better UI Design', date: 'Mar 15, 2026' },
  { title: 'Understanding Color Psychology', date: 'Mar 10, 2026' },
  { title: 'Mobile First Design Strategy', date: 'Mar 05, 2026' },
  { title: 'The Future of Web Development', date: 'Feb 28, 2026' },
];

const highlights = [
  { label: 'Featured Articles', value: '12' },
  { label: 'Total Views', value: '45.2k' },
  { label: 'Comments', value: '384' },
];

export default function PostDetailsPage() {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Left Sidebar */}
        <Grid size={{ xs: 12, md: 4 }}>
          {/* Profile Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ textAlign: 'center', py: 3 }}>
              <Avatar
                src={userAvatar}
                sx={{ width: 80, height: 80, mx: 'auto', mb: 1.5, border: `3px solid ${alpha(theme.palette.primary.main, 0.2)}` }}
              />
              <Typography variant="h6">Mitchell C. Adams</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>UX / UI Designer</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                {[
                  { label: 'Followers', value: '873k' },
                  { label: 'Posts', value: '48' },
                  { label: 'Reviews', value: '4.7' },
                ].map((stat) => (
                  <Box key={stat.label} sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2" fontWeight={700} color="primary">{stat.value}</Typography>
                    <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>Highlights</Typography>
              {highlights.map((h) => (
                <Box key={h.label} sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: `1px solid ${theme.palette.divider}` }}>
                  <Typography variant="body2" color="text.secondary">{h.label}</Typography>
                  <Typography variant="body2" fontWeight={600}>{h.value}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Latest News */}
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>Latest News</Typography>
              <List disablePadding>
                {latestNews.map((news, i) => (
                  <ListItemButton key={i} sx={{ px: 0 }}>
                    <ListItemText
                      primary={news.title}
                      secondary={news.date}
                      primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                      secondaryTypographyProps={{ variant: 'caption' }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Main Content */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Let's Explore Nature More With a Colorful Season
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar src={userAvatar} sx={{ width: 36, height: 36 }} />
                <Box>
                  <Typography variant="body2" fontWeight={600}>Mitchell C. Adams</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarTodayIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                    <Typography variant="caption" color="text.secondary">March 20, 2026</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                component="img"
                src={postImage}
                alt="post cover"
                sx={{ width: '100%', height: 350, objectFit: 'cover', borderRadius: 2, mb: 3 }}
              />

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                Nature has always been a profound source of inspiration for designers, artists, and creative minds
                around the world. Every season brings its own palette of colors, textures, and patterns that can
                transform the way we see and interact with our environment. From the vibrant greens of spring to the
                warm golds and reds of autumn, there is an endless well of creativity waiting to be tapped.
              </Typography>

              <Box
                sx={{
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                  px: 3,
                  py: 2,
                  borderRadius: 1,
                  my: 3,
                }}
              >
                <Typography variant="body1" fontStyle="italic" color="text.secondary">
                  "In every walk with nature, one receives far more than he seeks. The richness of colors in each
                  season tells a story that no canvas can fully capture."
                </Typography>
              </Box>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                When we immerse ourselves in nature, we begin to notice the subtle gradients in a sunset, the
                contrasting textures of bark and moss, and the delicate interplay of light and shadow through forest
                canopies. These observations can profoundly influence our design choices, leading to more organic,
                authentic, and emotionally resonant work. The key is to remain open and curious, allowing the
                natural world to guide our creative process rather than constraining it.
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                As designers, we have a unique opportunity to bring the beauty of nature into the digital realm.
                Whether it is through color palettes inspired by autumn leaves, layouts that mimic the flowing
                patterns of rivers, or typography that echoes the elegance of natural forms, the possibilities are
                truly limitless. Let us continue to explore, observe, and create with nature as our greatest muse.
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main' }}
                  />
                ))}
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Comment Form */}
              <Typography variant="h6" sx={{ mb: 2 }}>Leave a Comment</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Write your comment here..."
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary">Submit Comment</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
