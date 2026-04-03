import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Badge,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
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

const emails = [
  { id: 1, sender: 'Dr sultads', subject: 'Regarding your appointment schedule for next week', date: 'Mar 20', unread: true, starred: true },
  { id: 2, sender: 'John Abraham', subject: 'Project update: UI components are ready for review', date: 'Mar 19', unread: true, starred: false },
  { id: 3, sender: 'James Lemire', subject: 'Hey! Check out this new design framework I found', date: 'Mar 19', unread: false, starred: false },
  { id: 4, sender: 'Mountain Developerz', subject: 'Invoice #4521 - Monthly subscription renewal notice', date: 'Mar 18', unread: true, starred: false },
  { id: 5, sender: 'Karen Mane', subject: 'Meeting notes from yesterday and action items', date: 'Mar 18', unread: false, starred: true },
  { id: 6, sender: 'Alex Thompson', subject: 'Quick question about the API integration for the new feature', date: 'Mar 17', unread: false, starred: false },
  { id: 7, sender: 'Sarah Williams', subject: 'Design review feedback - Landing page mockups v3', date: 'Mar 17', unread: true, starred: false },
  { id: 8, sender: 'Tech Solutions Inc', subject: 'Your support ticket #8827 has been resolved', date: 'Mar 16', unread: false, starred: false },
  { id: 9, sender: 'David Martinez', subject: 'Invitation: Team lunch this Friday at 12:30 PM', date: 'Mar 15', unread: false, starred: true },
  { id: 10, sender: 'Newsletter Daily', subject: 'Top 10 design trends you should follow in 2026', date: 'Mar 15', unread: false, starred: false },
];

export default function EmailInboxPage() {
  const theme = useTheme();
  const [starred, setStarred] = useState<Set<number>>(new Set(emails.filter((e) => e.starred).map((e) => e.id)));
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const toggleStar = (id: number) => {
    setStarred((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleCheck = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setChecked(new Set());
    } else {
      setChecked(new Set(emails.map((e) => e.id)));
    }
    setSelectAll(!selectAll);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Inbox</Typography>
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

            {/* Email List */}
            <Box sx={{ flex: 1 }}>
              {/* Toolbar */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Checkbox checked={selectAll} onChange={handleSelectAll} size="small" />
                <IconButton size="small"><RefreshIcon fontSize="small" /></IconButton>
                <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
              </Box>
              <Divider sx={{ mb: 1 }} />

              {/* Emails */}
              <List disablePadding>
                {emails.map((email) => (
                  <ListItem
                    key={email.id}
                    disablePadding
                    sx={{
                      borderBottom: `1px solid ${theme.palette.divider}`,
                      bgcolor: email.unread ? alpha(theme.palette.primary.main, 0.03) : 'transparent',
                    }}
                  >
                    <ListItemButton sx={{ py: 1.5, px: 1 }}>
                      <Checkbox
                        size="small"
                        checked={checked.has(email.id)}
                        onChange={() => toggleCheck(email.id)}
                        onClick={(e) => e.stopPropagation()}
                        sx={{ mr: 0.5 }}
                      />
                      <IconButton
                        size="small"
                        onClick={(e) => { e.stopPropagation(); toggleStar(email.id); }}
                        sx={{ mr: 1 }}
                      >
                        {starred.has(email.id)
                          ? <StarIcon fontSize="small" sx={{ color: semantic.starColor }} />
                          : <StarBorderIcon fontSize="small" />
                        }
                      </IconButton>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography
                            variant="body2"
                            fontWeight={email.unread ? 700 : 400}
                            noWrap
                            sx={{ maxWidth: 160 }}
                          >
                            {email.sender}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">{email.date}</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" noWrap>{email.subject}</Typography>
                      </Box>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              {/* Pagination */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, px: 1 }}>
                <Typography variant="body2" color="text.secondary">Showing 1-10 of 21</Typography>
                <Box>
                  <IconButton size="small"><NavigateBeforeIcon /></IconButton>
                  <IconButton size="small"><NavigateNextIcon /></IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
