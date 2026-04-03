import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  IconButton,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { semantic } from '../theme';

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

function EmailSidebar({ active }: { active: string }) {
  const theme = useTheme();
  return (
    <Box sx={{ width: 240, flexShrink: 0 }}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mb: 3, borderRadius: 2 }}
      >
        Compose
      </Button>
      <List disablePadding>
        {sidebarItems.map((item) => (
          <ListItemButton key={item.label} selected={item.label === active}>
            <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} primaryTypographyProps={{ variant: 'body2' }} />
            {item.badge > 0 && (
              <Badge badgeContent={item.badge} color="primary" />
            )}
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
  );
}

export default function EmailComposePage() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Compose Email</Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <EmailSidebar active="Inbox" />
            <Divider orientation="vertical" flexItem />
            <Box sx={{ flex: 1 }}>
              {/* Toolbar */}
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <IconButton size="small"><ArchiveIcon fontSize="small" /></IconButton>
                <IconButton size="small"><ReportIcon fontSize="small" /></IconButton>
                <IconButton size="small"><DeleteIcon fontSize="small" /></IconButton>
              </Box>
              <Divider sx={{ mb: 2 }} />

              {/* Fields */}
              <TextField fullWidth label="To" placeholder="recipient@example.com" sx={{ mb: 2 }} />
              <TextField fullWidth label="Subject" placeholder="Enter subject" sx={{ mb: 2 }} />
              <TextField
                fullWidth
                multiline
                rows={6}
                placeholder="Write your email here..."
                sx={{ mb: 2 }}
              />

              {/* Attachment */}
              <Box
                sx={{
                  border: `2px dashed ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: 2,
                  textAlign: 'center',
                  mb: 3,
                  cursor: 'pointer',
                  '&:hover': { borderColor: theme.palette.primary.main, bgcolor: alpha(theme.palette.primary.main, 0.02) },
                }}
              >
                <AttachFileIcon sx={{ color: 'text.secondary', mr: 1 }} />
                <Typography variant="body2" color="text.secondary" component="span">
                  Drag files here or click to attach
                </Typography>
              </Box>

              {/* Actions */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" startIcon={<SendIcon />}>Send</Button>
                <Button variant="outlined" color="error">Discard</Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export { EmailSidebar };
