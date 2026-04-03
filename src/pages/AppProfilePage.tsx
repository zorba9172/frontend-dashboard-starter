import React, { useState, useReducer } from 'react';
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
  TextField,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import LinkIcon from '@mui/icons-material/Link';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';
import { palette, gradients } from '../theme';

import profile from '../assets/images/profile/profile.png';
import profilePic1 from '../assets/images/profile/small/pic1.jpg';
import profile1 from '../assets/images/profile/1.jpg';
import profile2 from '../assets/images/profile/2.jpg';
import profile3 from '../assets/images/profile/3.jpg';
import profile4 from '../assets/images/profile/4.jpg';
import profile5 from '../assets/images/profile/5.jpg';
import profile6 from '../assets/images/profile/6.jpg';

// ── Types ──
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return value === index ? <Box sx={{ pt: 3 }}>{children}</Box> : null;
}

type ModalAction =
  | { type: 'OPEN_MENU'; anchor: HTMLElement }
  | { type: 'CLOSE_MENU' }
  | { type: 'OPEN_MODAL'; modal: string }
  | { type: 'CLOSE_MODAL' };

interface ModalState {
  menuAnchor: HTMLElement | null;
  activeModal: string | null;
}

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case 'OPEN_MENU': return { ...state, menuAnchor: action.anchor };
    case 'CLOSE_MENU': return { ...state, menuAnchor: null };
    case 'OPEN_MODAL': return { menuAnchor: null, activeModal: action.modal };
    case 'CLOSE_MODAL': return { ...state, activeModal: null };
    default: return state;
  }
}

const posts = [
  { id: 1, image: profile1, text: 'Have you done with the newest project? You look great!', likes: 124, comments: 23 },
  { id: 2, image: profile2, text: 'The sunset from the rooftop was absolutely breathtaking last evening. Nature never disappoints.', likes: 256, comments: 45 },
];

const skills = ['Admin', 'Dashboard', 'Photoshop', 'Bootstrap', 'Responsive', 'Crypto'];

const languages = [
  { lang: 'English', flag: '\u{1F1EC}\u{1F1E7}' },
  { lang: 'French', flag: '\u{1F1EB}\u{1F1F7}' },
  { lang: 'Spanish', flag: '\u{1F1EA}\u{1F1F8}' },
];

const personalInfo = [
  { label: 'Name', value: 'Mitchell C. Adams' },
  { label: 'Email', value: 'mitchell.adams@mail.com' },
  { label: 'Availability', value: 'Full-time' },
  { label: 'Age', value: '27' },
  { label: 'Location', value: 'New York' },
  { label: 'Year of Experience', value: '07' },
];

export default function AppProfilePage() {
  const theme = useTheme();
  const [tab, setTab] = useState(0);
  const [state, dispatch] = useReducer(modalReducer, { menuAnchor: null, activeModal: null });

  return (
    <Box>
      {/* ── Profile Header Card ── */}
      <Card sx={{ mb: 3, overflow: 'visible' }}>
        {/* Cover gradient */}
        <Box
          sx={{
            height: 200,
            background: gradients.tryal,
            borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
            position: 'relative',
          }}
        />
        <CardContent sx={{ pt: 0, position: 'relative' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', mt: -5, mb: 2, gap: 2 }}>
            {/* Avatar */}
            <Avatar
              src={profile}
              sx={{
                width: 80,
                height: 80,
                border: `4px solid ${theme.palette.background.paper}`,
                boxShadow: theme.shadows[3],
              }}
            />
            <Box sx={{ flex: 1, minWidth: 200, mb: 0.5 }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>Mitchell C. Adams</Typography>
              <Typography variant="body2" color="text.secondary">UX / UI Designer</Typography>
            </Box>
            {/* Dropdown */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 0.5 }}>
              <Button variant="contained">Follow</Button>
              <Button variant="outlined" color="primary" startIcon={<SendIcon />}>Send Message</Button>
              <IconButton onClick={(e) => dispatch({ type: 'OPEN_MENU', anchor: e.currentTarget })}>
                <MoreVertIcon />
              </IconButton>
              <Menu anchorEl={state.menuAnchor} open={Boolean(state.menuAnchor)} onClose={() => dispatch({ type: 'CLOSE_MENU' })}>
                <MenuItem onClick={() => dispatch({ type: 'OPEN_MODAL', modal: 'viewProfile' })}>View profile</MenuItem>
                <MenuItem onClick={() => dispatch({ type: 'OPEN_MODAL', modal: 'closeFriends' })}>Add to close friends</MenuItem>
                <MenuItem onClick={() => dispatch({ type: 'OPEN_MODAL', modal: 'addGroup' })}>Add to group</MenuItem>
                <MenuItem onClick={() => dispatch({ type: 'OPEN_MODAL', modal: 'block' })}>Block</MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Stats row */}
          <Box sx={{ display: 'flex', gap: 5, mt: 2, mb: 1 }}>
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

      {/* ── Tabs Card ── */}
      <Card>
        <Box sx={{ px: 3, pt: 1 }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)}>
            <Tab label="Posts" />
            <Tab label="About Me" />
            <Tab label="Setting" />
          </Tabs>
        </Box>
        <CardContent>
          {/* ── Posts Tab ── */}
          <TabPanel value={tab} index={0}>
            {/* Post creation area */}
            <Card variant="outlined" sx={{ mb: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Avatar src={profile} sx={{ width: 42, height: 42 }} />
                  <TextField fullWidth multiline rows={2} placeholder="What's on your mind?" />
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button size="small" startIcon={<LinkIcon />} sx={{ color: theme.palette.text.secondary }}>Link</Button>
                  <Button size="small" startIcon={<CameraAltIcon />} sx={{ color: theme.palette.text.secondary }}>Camera</Button>
                  <Button variant="contained" size="small" sx={{ ml: 'auto' }}>Post</Button>
                </Box>
              </CardContent>
            </Card>

            {/* Post cards */}
            <Grid container spacing={3}>
              {posts.map((post) => (
                <Grid size={{ xs: 12, md: 6 }} key={post.id}>
                  <Card variant="outlined">
                    <Box component="img" src={post.image} alt="post" sx={{ width: '100%', height: 200, objectFit: 'cover' }} />
                    <CardContent>
                      <Typography variant="body2" sx={{ mb: 2 }}>{post.text}</Typography>
                      <Divider sx={{ mb: 1.5 }} />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <IconButton size="small" sx={{ color: theme.palette.error.main }}><FavoriteIcon fontSize="small" /></IconButton>
                          <Typography variant="body2">{post.likes}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <IconButton size="small"><ChatBubbleOutlineIcon fontSize="small" /></IconButton>
                          <Typography variant="body2">{post.comments}</Typography>
                        </Box>
                        <Button size="small" startIcon={<ReplyIcon />} sx={{ ml: 'auto', color: theme.palette.text.secondary }}>Reply</Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* ── About Me Tab ── */}
          <TabPanel value={tab} index={1}>
            <Typography variant="h6" sx={{ mb: 1 }}>About Me</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              I am a passionate UX/UI Designer with over 7 years of experience creating intuitive and visually
              stunning digital products. I specialize in user-centered design, transforming complex problems into
              simple, elegant solutions. When I am not designing, you will find me exploring nature, sketching,
              or reading about the latest technology trends.
            </Typography>

            <Typography variant="h6" sx={{ mb: 1.5 }}>Skills</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main }}
                />
              ))}
            </Box>

            <Typography variant="h6" sx={{ mb: 1.5 }}>Languages</Typography>
            <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
              {languages.map((l) => (
                <Box key={l.lang} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: '1.25rem' }}>{l.flag}</Typography>
                  <Typography variant="body2">{l.lang}</Typography>
                </Box>
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

          {/* ── Setting Tab ── */}
          <TabPanel value={tab} index={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>Account Settings</Typography>
            <Grid container spacing={2.5}>
              <Grid size={12}>
                <TextField fullWidth label="Email" defaultValue="mitchell.adams@mail.com" />
              </Grid>
              <Grid size={12}>
                <TextField fullWidth label="Password" type="password" defaultValue="password123" />
              </Grid>
              <Grid size={12}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, mt: 1 }}>General Information</Typography>
              </Grid>
              <Grid size={12}>
                <TextField fullWidth label="Address" defaultValue="123 Main Street" />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth label="City" defaultValue="New York" />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth label="State" defaultValue="NY" />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth label="Zip" defaultValue="10001" />
              </Grid>
              <Grid size={12}>
                <FormControlLabel control={<Checkbox />} label="Check me out" />
              </Grid>
              <Grid size={12}>
                <Button variant="contained">Update</Button>
              </Grid>
            </Grid>
          </TabPanel>
        </CardContent>
      </Card>

      {/* ── Modals ── */}
      {['viewProfile', 'closeFriends', 'addGroup', 'block'].map((key) => (
        <Dialog key={key} open={state.activeModal === key} onClose={() => dispatch({ type: 'CLOSE_MODAL' })} maxWidth="xs" fullWidth>
          <DialogTitle sx={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="text.secondary">
              {key === 'viewProfile' && 'Viewing the full profile of Mitchell C. Adams.'}
              {key === 'closeFriends' && 'Mitchell C. Adams has been added to your close friends list.'}
              {key === 'addGroup' && 'Select a group to add Mitchell C. Adams to.'}
              {key === 'block' && 'Are you sure you want to block Mitchell C. Adams?'}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>Close</Button>
            {key === 'block' && <Button color="error" variant="contained" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>Block</Button>}
          </DialogActions>
        </Dialog>
      ))}
    </Box>
  );
}
