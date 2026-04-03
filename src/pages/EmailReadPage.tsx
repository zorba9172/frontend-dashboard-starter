import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  IconButton,
  Avatar,
  Chip,
  TextField,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import ReplyIcon from '@mui/icons-material/Reply';
import DownloadIcon from '@mui/icons-material/Download';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImageIcon from '@mui/icons-material/Image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { semantic } from '../theme';

import pic1 from '../assets/images/profile/small/pic1.jpg';

const sidebarItems = [
  { label: 'Inbox', icon: <InboxIcon />, badge: 12 },
  { label: 'Sent', icon: <SendIcon />, badge: 0 },
  { label: 'Important', icon: <StarBorderIcon />, badge: 0 },
  { label: 'Draft', icon: <DraftsIcon />, badge: 0 },
  { label: 'Trash', icon: <DeleteIcon />, badge: 0 },
];

const categories = [
  { label: 'Work', color: semantic.categoryWork },
  { label: 'Private', color: semantic.categoryPrivate },
  { label: 'Support', color: semantic.categorySupport },
  { label: 'Social', color: semantic.categorySocial },
];

export default function EmailReadPage() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Read Email</Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {/* Sidebar */}
            <Box sx={{ width: 240, flexShrink: 0 }}>
              <Button variant="contained" color="primary" fullWidth sx={{ mb: 3, borderRadius: 2 }}>Compose</Button>
              <List disablePadding>
                {sidebarItems.map((item) => (
                  <ListItemButton key={item.label} selected={item.label === 'Inbox'}>
                    <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} primaryTypographyProps={{ variant: 'body2' }} />
                    {item.badge > 0 && <Badge badgeContent={item.badge} color="primary" />}
                  </ListItemButton>
                ))}
              </List>
              <Divider sx={{ my: 2 }} />
              <Typography variant="caption" color="text.secondary" sx={{ px: 2, mb: 1, display: 'block', fontWeight: 600, textTransform: 'uppercase' }}>
                Categories
              </Typography>
              <List disablePadding>
                {categories.map((cat) => (
                  <ListItemButton key={cat.label} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <FiberManualRecordIcon sx={{ fontSize: 10, color: cat.color }} />
                    </ListItemIcon>
                    <ListItemText primary={cat.label} primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItemButton>
                ))}
              </List>
            </Box>

            <Divider orientation="vertical" flexItem />

            {/* Email Content */}
            <Box sx={{ flex: 1 }}>
              {/* Toolbar */}
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <IconButton size="small"><ArchiveIcon fontSize="small" /></IconButton>
                <IconButton size="small"><ReportIcon fontSize="small" /></IconButton>
                <IconButton size="small"><DeleteIcon fontSize="small" /></IconButton>
              </Box>
              <Divider sx={{ mb: 2 }} />

              {/* Sender Info */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar src={pic1} sx={{ width: 48, height: 48 }} />
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle1" fontWeight={600}>Dr. sultads</Typography>
                    <Typography variant="caption" color="text.secondary">{'<dr.sultads@mail.com>'}</Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">March 20, 2026 at 10:35 AM</Typography>
                </Box>
                <IconButton size="small"><ReplyIcon fontSize="small" /></IconButton>
              </Box>

              {/* Subject */}
              <Typography variant="h5" sx={{ mb: 3 }}>Introducing New Feature</Typography>

              {/* Body */}
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                Dear Mitchell,
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                I hope this email finds you well. I wanted to reach out to share some exciting news about our
                upcoming platform updates. We have been working diligently over the past few months to bring you a
                suite of new features that will significantly enhance your workflow and productivity. The team has
                put tremendous effort into ensuring these changes align with the feedback we have received from our
                community.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                Among the highlights, you will find an improved dashboard with real-time analytics, a redesigned
                notification system that keeps you informed without being intrusive, and a brand-new collaboration
                tool that makes working with your team smoother than ever. We believe these improvements will make
                a meaningful difference in how you use our platform on a daily basis.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                Please feel free to reach out if you have any questions or feedback. We value your input and look
                forward to hearing your thoughts once you have had a chance to explore the new features. Thank you
                for being part of our community.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Best regards,<br />Dr. sultads
              </Typography>

              <Divider sx={{ my: 3 }} />

              {/* Attachments */}
              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Attachments (2)</Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                <Chip
                  icon={<InsertDriveFileIcon />}
                  label="file.fig (4.5MB)"
                  variant="outlined"
                  deleteIcon={<DownloadIcon />}
                  onDelete={() => {}}
                  sx={{ borderRadius: 2, py: 2.5, px: 0.5 }}
                />
                <Chip
                  icon={<ImageIcon />}
                  label="cover.jpg (2.1MB)"
                  variant="outlined"
                  deleteIcon={<DownloadIcon />}
                  onDelete={() => {}}
                  sx={{ borderRadius: 2, py: 2.5, px: 0.5 }}
                />
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* Reply */}
              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Reply</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Type your reply here..."
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" startIcon={<SendIcon />}>Send</Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
