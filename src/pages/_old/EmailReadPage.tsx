import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  IconButton,
  Avatar,
  Chip,
  TextField,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardIcon from '@mui/icons-material/Forward';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckboxIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { palette, semantic } from '../theme';
import { EmailSidebar } from './EmailComposePage';

import pic1 from '../assets/images/profile/small/pic1.jpg';

export default function EmailReadPage() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Read Email</Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <EmailSidebar active="Inbox" />
            <Divider orientation="vertical" flexItem />

            {/* Email Content */}
            <Box sx={{ flex: 1 }}>
              {/* Toolbar (same as Inbox) */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <IconButton size="small"><CheckboxIcon fontSize="small" /></IconButton>
                <IconButton size="small"><RefreshIcon fontSize="small" /></IconButton>
                <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
              </Box>
              <Divider sx={{ mb: 3 }} />

              {/* Sender Info */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar src={pic1} sx={{ width: 48, height: 48 }} />
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                    <Typography variant="subtitle1" fontWeight={600}>Dr. Sultads</Typography>
                    <Typography variant="caption" color="text.secondary">{'<dr.sultads@mail.com>'}</Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">March 20, 2024 at 10:35 AM</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <IconButton size="small"><ReplyIcon fontSize="small" /></IconButton>
                  <IconButton size="small"><ForwardIcon fontSize="small" /></IconButton>
                  <IconButton size="small"><DeleteIcon fontSize="small" /></IconButton>
                </Box>
              </Box>

              {/* Subject */}
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Introducing New Features for the Platform
              </Typography>

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
                Best regards,<br />Dr. Sultads
              </Typography>

              <Divider sx={{ my: 3 }} />

              {/* Attachments */}
              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Attachments (3)</Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                <Chip
                  icon={<ImageIcon />}
                  label="My-Photo.png (2.4MB)"
                  variant="outlined"
                  deleteIcon={<DownloadIcon />}
                  onDelete={() => {}}
                  sx={{ borderRadius: 2, py: 2.5, px: 0.5 }}
                />
                <Chip
                  icon={<InsertDriveFileIcon />}
                  label="My-File.docx (1.2MB)"
                  variant="outlined"
                  deleteIcon={<DownloadIcon />}
                  onDelete={() => {}}
                  sx={{ borderRadius: 2, py: 2.5, px: 0.5 }}
                />
                <Chip
                  icon={<DescriptionIcon />}
                  label="My-Resume.pdf (890KB)"
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
                rows={5}
                placeholder="Type your reply here..."
                sx={{ mb: 2 }}
              />
              <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
