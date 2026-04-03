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
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { palette, gradients } from '../theme';

import profile from '../assets/images/profile/profile.png';
import profile1 from '../assets/images/profile/1.jpg';
import profile2 from '../assets/images/profile/2.jpg';
import profile3 from '../assets/images/profile/3.jpg';
import postCover from '../assets/images/profile/cover.jpg';

const tags = ['Admin', 'Dashboard', 'Photoshop', 'Bootstrap', 'Responsive', 'Crypto'];

const latestNews = [
  { title: '10 Tips for Better UI Design', date: 'Mar 15, 2024' },
  { title: 'Understanding Color Psychology', date: 'Mar 10, 2024' },
  { title: 'Mobile First Design Strategy', date: 'Mar 05, 2024' },
  { title: 'The Future of Web Development', date: 'Feb 28, 2024' },
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
        {/* ── Left Sidebar ── */}
        <Grid size={{ xs: 12, xl: 4 }}>
          {/* Profile card */}
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ textAlign: 'center', py: 3 }}>
              <Avatar
                src={profile}
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 1.5,
                  border: `3px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                }}
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

        {/* ── Right Main Content ── */}
        <Grid size={{ xs: 12, xl: 8 }}>
          <Card>
            <CardContent>
              {/* Title */}
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                Let's Explore Nature More With a Colorful Season
              </Typography>

              {/* Author info */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar src={profile} sx={{ width: 40, height: 40 }} />
                <Box>
                  <Typography variant="body2" fontWeight={600}>John Doe</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarTodayIcon sx={{ fontSize: 14, color: theme.palette.text.secondary }} />
                    <Typography variant="caption" color="text.secondary">July 24, 2024</Typography>
                    <ChatBubbleOutlineIcon sx={{ fontSize: 14, color: theme.palette.text.secondary, ml: 1 }} />
                    <Typography variant="caption" color="text.secondary">24 Comments</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Featured image */}
              <Box
                component="img"
                src={postCover}
                alt="post cover"
                sx={{ width: '100%', height: 350, objectFit: 'cover', borderRadius: 2, mb: 3 }}
              />

              {/* Content paragraphs */}
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                Nature has always been a profound source of inspiration for designers, artists, and creative minds
                around the world. Every season brings its own palette of colors, textures, and patterns that can
                transform the way we see and interact with our environment. From the vibrant greens of spring to the
                warm golds and reds of autumn, there is an endless well of creativity waiting to be tapped.
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                When we immerse ourselves in nature, we begin to notice the subtle gradients in a sunset, the
                contrasting textures of bark and moss, and the delicate interplay of light and shadow through forest
                canopies. These observations can profoundly influence our design choices, leading to more organic,
                authentic, and emotionally resonant work.
              </Typography>

              {/* Blockquote */}
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

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                As designers, we have a unique opportunity to bring the beauty of nature into the digital realm.
                Whether it is through color palettes inspired by autumn leaves, layouts that mimic the flowing
                patterns of rivers, or typography that echoes the elegance of natural forms, the possibilities are
                truly limitless. Let us continue to explore, observe, and create with nature as our greatest muse.
              </Typography>

              {/* Tags */}
              <Divider sx={{ my: 3 }} />
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main }}
                  />
                ))}
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Comment section */}
              <Typography variant="h6" sx={{ mb: 2 }}>Leave a Comment</Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Name" placeholder="Your name" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Email" placeholder="Your email" />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Comment"
                placeholder="Write your comment here..."
                sx={{ mb: 2 }}
              />
              <Button variant="contained">POST COMMENT</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
