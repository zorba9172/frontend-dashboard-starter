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
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import LinkIcon from '@mui/icons-material/Link';
import { palette, semantic } from '../theme';

import g1 from '../assets/images/group/g1.jpg';
import g2 from '../assets/images/group/g2.jpg';
import g3 from '../assets/images/group/g3.jpg';
import g4 from '../assets/images/group/g4.jpg';
import pic11 from '../assets/images/contacts/pic11.jpg';
import pic22 from '../assets/images/contacts/pic22.jpg';
import pic33 from '../assets/images/contacts/pic33.jpg';
import pic1 from '../assets/images/profile/small/pic1.jpg';
import pic2 from '../assets/images/profile/small/pic2.jpg';
import pic3 from '../assets/images/profile/small/pic3.jpg';

// ── Types ──
interface ChatMessage {
  id: string;
  sender: string;
  avatar: string;
  text: string;
  time: string;
  isMe: boolean;
}

interface Contact {
  name: string;
  avatar: string;
  lastMsg: string;
  time: string;
  online: boolean;
}

// ── Data ──
const chatMessages: ChatMessage[] = [
  { id: '1', sender: 'Jakob Gouse', avatar: pic1, text: 'Hey! How is the project going? I wanted to check on the latest designs before the meeting tomorrow.', time: '10:30 AM', isMe: false },
  { id: '2', sender: 'Me', avatar: pic3, text: 'Going well! I just finished the dashboard components. Will send over the preview link shortly.', time: '10:32 AM', isMe: true },
  { id: '3', sender: 'Jakob Gouse', avatar: pic1, text: 'That sounds great. The client has been asking about the timeline. Can we deliver by Friday?', time: '10:35 AM', isMe: false },
  { id: '4', sender: 'Me', avatar: pic3, text: 'Friday should work. I will push the final changes tonight and run the tests tomorrow morning.', time: '10:38 AM', isMe: true },
  { id: '5', sender: 'Jakob Gouse', avatar: pic1, text: 'Perfect. Also, can you add the dark mode toggle to the settings page?', time: '10:40 AM', isMe: false },
  { id: '6', sender: 'Me', avatar: pic3, text: 'Sure, already have a plan for that. Will include it in the next sprint along with the notification updates.', time: '10:42 AM', isMe: true },
];

const contacts: Contact[] = [
  { name: 'Jakob Gouse', avatar: pic1, lastMsg: 'Sure, already have a plan...', time: '10:42 AM', online: true },
  { name: 'Maria Connor', avatar: pic11, lastMsg: 'Can you review the PR?', time: '9:15 AM', online: true },
  { name: 'David Nusi', avatar: pic22, lastMsg: 'Meeting at 3pm today', time: 'Yesterday', online: false },
  { name: 'Sarah Johnson', avatar: pic33, lastMsg: 'Thanks for the update!', time: 'Yesterday', online: true },
  { name: 'Alex Martinez', avatar: pic2, lastMsg: 'Looks good to me', time: 'Mar 28', online: false },
  { name: 'Emma Wilson', avatar: g1, lastMsg: 'Let me check that...', time: 'Mar 27', online: false },
];

const mailItems = [
  { label: 'Inbox', icon: <InboxIcon sx={{ fontSize: 20 }} />, count: 198 },
  { label: 'Sent', icon: <SendIcon sx={{ fontSize: 20 }} /> },
  { label: 'Important', icon: <StarIcon sx={{ fontSize: 20 }} />, count: 47 },
  { label: 'Draft', icon: <DraftsIcon sx={{ fontSize: 20 }} /> },
  { label: 'Trash', icon: <DeleteOutlineIcon sx={{ fontSize: 20 }} /> },
];

const categoryDots = [
  { label: 'Work', color: palette.primary.main },
  { label: 'Private', color: palette.success.main },
  { label: 'Support', color: palette.warning.main },
  { label: 'Social', color: palette.secondary.main },
];

const tabLabels = ['All', 'Social', 'Updates'];

const MessagesPage: React.FC = () => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const [messageText, setMessageText] = useState('');
  const [selectedMail, setSelectedMail] = useState('Inbox');
  const [activeContact, setActiveContact] = useState('Jakob Gouse');

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
          minHeight: 650,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* ── Left Sidebar ── */}
        <Box
          sx={{
            width: { xs: '100%', md: 320 },
            minWidth: { md: 320 },
            borderRight: { md: `1px solid ${theme.palette.divider}` },
            borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Tabs */}
          <Box sx={{ px: 2, pt: 2 }}>
            <Tabs value={tabIndex} onChange={(_, v) => setTabIndex(v)} sx={{ minHeight: 36, mb: 1.5 }}>
              {tabLabels.map((label) => (
                <Tab key={label} label={label} sx={{ minHeight: 36, py: 0.5, fontSize: '0.8rem' }} />
              ))}
            </Tabs>
          </Box>

          {/* Compose */}
          <Box sx={{ px: 2, mb: 2 }}>
            <Button
              variant="contained"
              startIcon={<CreateIcon />}
              fullWidth
              sx={{ borderRadius: '1.75rem', fontWeight: 600 }}
            >
              Compose
            </Button>
          </Box>

          {/* Mail categories */}
          <Box sx={{ px: 1 }}>
            <List disablePadding>
              {mailItems.map((item) => (
                <ListItemButton
                  key={item.label}
                  selected={selectedMail === item.label}
                  onClick={() => setSelectedMail(item.label)}
                  sx={{ borderRadius: '0.5rem', mb: 0.5, py: 0.75 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: selectedMail === item.label
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: selectedMail === item.label ? 600 : 400,
                    }}
                  />
                  {item.count && (
                    <Badge
                      badgeContent={item.count}
                      sx={{
                        '& .MuiBadge-badge': {
                          bgcolor: theme.palette.primary.main,
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
          </Box>

          <Divider sx={{ my: 1.5 }} />

          {/* Category dots */}
          <Box sx={{ px: 1 }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: theme.palette.text.secondary, mb: 0.5, px: 2 }}>
              CATEGORIES
            </Typography>
            <List disablePadding>
              {categoryDots.map((cat) => (
                <ListItemButton key={cat.label} sx={{ borderRadius: '0.5rem', py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 10, color: cat.color }} />
                  </ListItemIcon>
                  <ListItemText primary={cat.label} primaryTypographyProps={{ fontSize: '0.8rem' }} />
                </ListItemButton>
              ))}
            </List>
          </Box>

          <Divider sx={{ my: 1.5 }} />

          {/* Contact list */}
          <Box sx={{ flex: 1, overflowY: 'auto', px: 1, pb: 1 }}>
            {contacts.map((c) => (
              <ListItemButton
                key={c.name}
                selected={activeContact === c.name}
                onClick={() => setActiveContact(c.name)}
                sx={{
                  borderRadius: '0.5rem',
                  mb: 0.5,
                  py: 1,
                  '&.Mui-selected': {
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <Box sx={{ position: 'relative', mr: 1.5 }}>
                  <Avatar src={c.avatar} sx={{ width: 42, height: 42 }} />
                  {c.online && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 1,
                        right: 1,
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: semantic.onlineColor,
                        border: `2px solid ${theme.palette.background.paper}`,
                      }}
                    />
                  )}
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 600 }} noWrap>{c.name}</Typography>
                    <Typography sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary, flexShrink: 0, ml: 1 }}>{c.time}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.8rem', color: theme.palette.text.secondary }} noWrap>{c.lastMsg}</Typography>
                </Box>
              </ListItemButton>
            ))}
          </Box>
        </Box>

        {/* ── Chat Panel ── */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Chat header */}
          <Box sx={{ px: 3, py: 2, borderBottom: `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar src={pic1} sx={{ width: 40, height: 40 }} />
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>Jakob Gouse</Typography>
              <Typography sx={{ fontSize: '0.75rem', color: semantic.onlineColor }}>Online</Typography>
            </Box>
          </Box>

          {/* Messages */}
          <Box sx={{ flex: 1, p: 3, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {chatMessages.map((msg) => (
              <Box key={msg.id} sx={{ display: 'flex', justifyContent: msg.isMe ? 'flex-end' : 'flex-start', gap: 1.5 }}>
                {!msg.isMe && <Avatar src={msg.avatar} sx={{ width: 36, height: 36, mt: 0.5 }} />}
                <Box sx={{ maxWidth: '65%' }}>
                  <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: theme.palette.text.secondary, mb: 0.5, textAlign: msg.isMe ? 'right' : 'left' }}>
                    {msg.sender}
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: msg.isMe
                        ? theme.palette.primary.main
                        : alpha(theme.palette.text.primary, 0.06),
                      color: msg.isMe ? palette.primary.contrastText : theme.palette.text.primary,
                      borderRadius: msg.isMe ? '0.625rem 0.625rem 0 0.625rem' : '0.625rem 0.625rem 0.625rem 0',
                      px: 2,
                      py: 1.25,
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {msg.text}
                  </Box>
                  <Typography sx={{ fontSize: '0.65rem', color: theme.palette.text.secondary, mt: 0.5, textAlign: msg.isMe ? 'right' : 'left' }}>
                    {msg.time}
                  </Typography>
                </Box>
                {msg.isMe && <Avatar src={msg.avatar} sx={{ width: 36, height: 36, mt: 0.5 }} />}
              </Box>
            ))}
          </Box>

          {/* Message input */}
          <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, px: 3, py: 2 }}>
            {/* Toolbar row */}
            <Box sx={{ display: 'flex', gap: 0.5, mb: 1 }}>
              <IconButton size="small"><FormatBoldIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} /></IconButton>
              <IconButton size="small"><FormatItalicIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} /></IconButton>
              <IconButton size="small"><FormatUnderlinedIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} /></IconButton>
              <IconButton size="small"><LinkIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} /></IconButton>
            </Box>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Type a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              sx={{ mb: 1.5 }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <IconButton size="small"><AttachFileIcon sx={{ fontSize: 20, color: theme.palette.text.secondary }} /></IconButton>
                <IconButton size="small"><SentimentSatisfiedAltIcon sx={{ fontSize: 20, color: theme.palette.text.secondary }} /></IconButton>
              </Box>
              <Button variant="contained" startIcon={<SendIcon />} sx={{ borderRadius: '1.75rem' }}>
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MessagesPage;
