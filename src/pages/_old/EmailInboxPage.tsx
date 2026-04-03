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
  Checkbox,
  IconButton,
  Pagination,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { palette, semantic } from '../theme';
import { EmailSidebar } from './EmailComposePage';

// ── 21 email entries ──
const emails = [
  { id: 1, sender: 'Dr Sultads', subject: 'Invitation for a talented Developer', date: 'Jan 22', unread: true, starred: true },
  { id: 2, sender: 'Magerit Bnosa', subject: 'Important Notice regarding your account', date: 'Jan 21', unread: true, starred: false },
  { id: 3, sender: 'Kkimy Noori', subject: 'Please review the attached proposal document', date: 'Jan 21', unread: false, starred: false },
  { id: 4, sender: 'Ahadsaro Guro', subject: 'Weekly sync meeting agenda for Monday', date: 'Jan 20', unread: true, starred: false },
  { id: 5, sender: 'Karen Mane', subject: 'Follow-up on the product launch timeline', date: 'Jan 20', unread: false, starred: true },
  { id: 6, sender: 'Alex Thompson', subject: 'Quick question about the API integration', date: 'Jan 19', unread: false, starred: false },
  { id: 7, sender: 'Sarah Williams', subject: 'Design review feedback - Landing page v3', date: 'Jan 19', unread: true, starred: false },
  { id: 8, sender: 'Tech Solutions Inc', subject: 'Your support ticket #8827 has been resolved', date: 'Jan 18', unread: false, starred: false },
  { id: 9, sender: 'David Martinez', subject: 'Invitation: Team lunch this Friday at noon', date: 'Jan 17', unread: false, starred: true },
  { id: 10, sender: 'Newsletter Daily', subject: 'Top 10 design trends you should follow', date: 'Jan 17', unread: false, starred: false },
  { id: 11, sender: 'Mountain Developerz', subject: 'Invoice #4521 - Monthly subscription renewal', date: 'Jan 16', unread: true, starred: false },
  { id: 12, sender: 'Jennifer Lopez', subject: 'Can we reschedule our meeting to Thursday?', date: 'Jan 16', unread: false, starred: false },
  { id: 13, sender: 'Startup Weekly', subject: 'This week in startups: funding roundup', date: 'Jan 15', unread: false, starred: false },
  { id: 14, sender: 'Brian Foster', subject: 'Code review completed for PR #142', date: 'Jan 15', unread: true, starred: false },
  { id: 15, sender: 'UI Design Hub', subject: 'New course available: Advanced Figma', date: 'Jan 14', unread: false, starred: true },
  { id: 16, sender: 'Chris Morgan', subject: 'Budget report for Q4 is ready for review', date: 'Jan 14', unread: false, starred: false },
  { id: 17, sender: 'HR Department', subject: 'Annual performance review schedule', date: 'Jan 13', unread: true, starred: false },
  { id: 18, sender: 'Lisa Chen', subject: 'Photos from the company retreat are up', date: 'Jan 13', unread: false, starred: false },
  { id: 19, sender: 'Security Alert', subject: 'New login detected from unknown device', date: 'Jan 12', unread: true, starred: false },
  { id: 20, sender: 'Mike Johnson', subject: 'Thanks for the presentation today', date: 'Jan 12', unread: false, starred: true },
  { id: 21, sender: 'Product Team', subject: 'Sprint retrospective notes and action items', date: 'Jan 11', unread: false, starred: false },
];

const PAGE_SIZE = 12;

export default function EmailInboxPage() {
  const theme = useTheme();
  const [starred, setStarred] = useState<Set<number>>(new Set(emails.filter((e) => e.starred).map((e) => e.id)));
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [page, setPage] = useState(1);

  const pageEmails = emails.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(emails.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE + 1;
  const end = Math.min(page * PAGE_SIZE, emails.length);

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
      setChecked(new Set(pageEmails.map((e) => e.id)));
    }
    setSelectAll(!selectAll);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Inbox</Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <EmailSidebar active="Inbox" />
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
                {pageEmails.map((email) => (
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
                            sx={{ maxWidth: 180 }}
                          >
                            {email.sender}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ flexShrink: 0 }}>{email.date}</Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                          sx={{ fontWeight: email.unread ? 600 : 400 }}
                        >
                          {email.subject}
                        </Typography>
                      </Box>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              {/* Pagination */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, px: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Showing {start}-{end} of {emails.length}
                </Typography>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(_, p) => setPage(p)}
                  size="small"
                  sx={{
                    '& .Mui-selected': {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
