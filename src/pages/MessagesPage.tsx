import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Tabs,
  Tab,
  Avatar,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import CreateIcon from '@mui/icons-material/Create';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LabelIcon from '@mui/icons-material/Label';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { palette, semantic } from '../theme';

import pic1 from '../assets/images/profile/small/pic1.jpg';
import pic2 from '../assets/images/profile/small/pic2.jpg';
import pic3 from '../assets/images/profile/small/pic3.jpg';
import pic4 from '../assets/images/profile/small/pic4.jpg';
import pic5 from '../assets/images/profile/small/pic5.jpg';

// ── Types ──
interface Message {
  id: string;
  sender: string;
  avatar: string;
  text: string;
  time: string;
  isMe: boolean;
}

interface MailCategory {
  label: string;
  icon: React.ReactNode;
  count?: number;
}

// ── Sample Data ──
const messages: Message[] = [
  { id: '1', sender: 'Jakob Gouse', avatar: pic1, text: 'Hey! How is the project going? I wanted to check on the latest designs.', time: '10:30 AM', isMe: false },
  { id: '2', sender: 'Me', avatar: pic3, text: 'Going well! I just finished the dashboard components. Will send over the preview link shortly.', time: '10:32 AM', isMe: true },
  { id: '3', sender: 'Jakob Gouse', avatar: pic1, text: 'That sounds great. The client has been asking about the timeline. Can we deliver by Friday?', time: '10:35 AM', isMe: false },
  { id: '4', sender: 'Me', avatar: pic3, text: 'Friday should work. I will push the final changes tonight and run the tests tomorrow morning.', time: '10:38 AM', isMe: true },
  { id: '5', sender: 'Jakob Gouse', avatar: pic1, text: 'Perfect. I will let them know. Also, can you add the dark mode toggle to the settings page?', time: '10:40 AM', isMe: false },
  { id: '6', sender: 'Me', avatar: pic3, text: 'Sure, already have a plan for that. Will include it in the next sprint.', time: '10:42 AM', isMe: true },
];

const mailCategories: MailCategory[] = [
  { label: 'Inbox', icon: <InboxIcon sx={{ fontSize: 20 }} />, count: 12 },
  { label: 'Sent', icon: <SendIcon sx={{ fontSize: 20 }} /> },
  { label: 'Important', icon: <StarIcon sx={{ fontSize: 20 }} /> },
  { label: 'Draft', icon: <DraftsIcon sx={{ fontSize: 20 }} /> },
  { label: 'Trash', icon: <DeleteOutlineIcon sx={{ fontSize: 20 }} /> },
];

interface CategoryLabel {
  label: string;
  color: string;
}

const categoryLabels: CategoryLabel[] = [
  { label: 'Work', color: semantic.categoryWork },
  { label: 'Private', color: semantic.categoryPrivate },
  { label: 'Support', color: semantic.categorySupport },
];

const tabLabels = ['All', 'Social', 'Updates'];

const MessagesPage: React.FC = () => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const [messageText, setMessageText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Inbox');

  const sidebarWidth = 280;

  const borderColor = theme.palette.divider;

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 3 }}>
        Messages
      </Typography>

      <Box
        sx={{
          display: 'flex',
          borderRadius: '0.625rem',
          overflow: 'hidden',
          bgcolor: theme.palette.background.paper,
          minHeight: 600,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* ── Left Sidebar ── */}
        <Box
          sx={{
            width: { xs: '100%', md: sidebarWidth },
            minWidth: { md: sidebarWidth },
            borderRight: { md: `1px solid ${borderColor}` },
            borderBottom: { xs: `1px solid ${borderColor}`, md: 'none' },
            p: 2,
          }}
        >
          {/* Compose Button */}
          <Button
            variant="contained"
            startIcon={<CreateIcon />}
            fullWidth
            sx={{
              bgcolor: palette.primary.main,
              '&:hover': { bgcolor: palette.primary.dark },
              textTransform: 'none',
              borderRadius: '0.625rem',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Compose
          </Button>

          {/* Mail Categories */}
          <List disablePadding>
            {mailCategories.map((cat) => (
              <ListItemButton
                key={cat.label}
                selected={selectedCategory === cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                sx={{
                  borderRadius: '0.5rem',
                  mb: 0.5,
                  py: 1,
                  '&.Mui-selected': {
                    bgcolor: alpha(palette.primary.main, 0.1),
                    '&:hover': { bgcolor: alpha(palette.primary.main, 0.15) },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, color: selectedCategory === cat.label ? palette.primary.main : theme.palette.text.secondary }}>
                  {cat.icon}
                </ListItemIcon>
                <ListItemText
                  primary={cat.label}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: selectedCategory === cat.label ? 600 : 400,
                    color: selectedCategory === cat.label ? palette.primary.main : theme.palette.text.primary,
                  }}
                />
                {cat.count && (
                  <Badge
                    badgeContent={cat.count}
                    sx={{
                      '& .MuiBadge-badge': {
                        bgcolor: palette.primary.main,
                        color: palette.primary.contrastText,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                      },
                    }}
                  />
                )}
              </ListItemButton>
            ))}
          </List>

          <Divider sx={{ my: 2, borderColor }} />

          {/* Category Labels */}
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: theme.palette.text.secondary, mb: 1, px: 1 }}>
            CATEGORIES
          </Typography>
          <List disablePadding>
            {categoryLabels.map((cat) => (
              <ListItemButton key={cat.label} sx={{ borderRadius: '0.5rem', py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <LabelIcon sx={{ fontSize: 18, color: cat.color }} />
                </ListItemIcon>
                <ListItemText
                  primary={cat.label}
                  primaryTypographyProps={{
                    fontSize: '0.8rem',
                    color: theme.palette.text.primary,
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* ── Right Panel ── */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Tabs */}
          <Box sx={{ borderBottom: `1px solid ${borderColor}` }}>
            <Tabs
              value={tabIndex}
              onChange={(_, v) => setTabIndex(v)}
              sx={{
                px: 2,
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: theme.palette.text.secondary,
                },
                '& .Mui-selected': { color: palette.primary.main + ' !important' },
                '& .MuiTabs-indicator': { backgroundColor: palette.primary.main },
              }}
            >
              {tabLabels.map((label) => (
                <Tab key={label} label={label} />
              ))}
            </Tabs>
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              flex: 1,
              p: 2,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {messages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  display: 'flex',
                  justifyContent: msg.isMe ? 'flex-end' : 'flex-start',
                  gap: 1.5,
                }}
              >
                {!msg.isMe && (
                  <Avatar src={msg.avatar} sx={{ width: 36, height: 36, mt: 0.5 }} />
                )}
                <Box sx={{ maxWidth: '70%' }}>
                  {/* Sender name */}
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                      textAlign: msg.isMe ? 'right' : 'left',
                    }}
                  >
                    {msg.sender}
                  </Typography>
                  {/* Bubble */}
                  <Box
                    sx={{
                      bgcolor: msg.isMe
                        ? palette.primary.main
                        : alpha(theme.palette.text.primary, 0.04),
                      color: msg.isMe ? palette.primary.contrastText : theme.palette.text.primary,
                      borderRadius: msg.isMe
                        ? '0.625rem 0.625rem 0 0.625rem'
                        : '0.625rem 0.625rem 0.625rem 0',
                      px: 2,
                      py: 1.25,
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {msg.text}
                  </Box>
                  {/* Timestamp */}
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      color: theme.palette.text.disabled,
                      mt: 0.5,
                      textAlign: msg.isMe ? 'right' : 'left',
                    }}
                  >
                    {msg.time}
                  </Typography>
                </Box>
                {msg.isMe && (
                  <Avatar src={msg.avatar} sx={{ width: 36, height: 36, mt: 0.5 }} />
                )}
              </Box>
            ))}
          </Box>

          {/* Message Input */}
          <Box
            sx={{
              borderTop: `1px solid ${borderColor}`,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton size="small">
              <AttachFileIcon sx={{ fontSize: 20, color: theme.palette.text.secondary }} />
            </IconButton>
            <IconButton size="small">
              <SentimentSatisfiedAltIcon sx={{ fontSize: 20, color: theme.palette.text.secondary }} />
            </IconButton>
            <TextField
              fullWidth
              size="small"
              placeholder="Type a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '1.75rem',
                  bgcolor: alpha(theme.palette.text.primary, 0.04),
                  '& fieldset': { borderColor: theme.palette.divider },
                },
              }}
            />
            <IconButton
              sx={{
                bgcolor: palette.primary.main,
                '&:hover': { bgcolor: palette.primary.dark },
                width: 40,
                height: 40,
              }}
            >
              <SendIcon sx={{ fontSize: 18, color: palette.primary.contrastText }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MessagesPage;
