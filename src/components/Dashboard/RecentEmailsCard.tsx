import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  Button,
  Chip,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import { palette } from '../../theme';

import pic6 from '../../assets/images/profile/small/pic6.jpg';
import pic8 from '../../assets/images/profile/small/pic8.jpg';

interface EmailEntry {
  type: 'avatar' | 'initial';
  avatar?: string;
  initial?: string;
  initialBg?: string;
  title: string;
  body: string;
  attachments?: string[];
}

const emails: EmailEntry[] = [
  {
    type: 'initial',
    initial: 'K',
    initialBg: palette.success.main,
    title: 'How to improve project management flows',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    type: 'avatar',
    avatar: pic6,
    title: 'Fillow Final UseCase Diagram',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    attachments: ['Master_file.fig', 'CoverPreview.jpg'],
  },
  {
    type: 'initial',
    initial: 'G',
    initialBg: palette.warning.main,
    title: 'Weekly Design Inspirations by Envato',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    type: 'avatar',
    avatar: pic8,
    title: 'How to improve project management flows',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
];

const RecentEmailsCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Card>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          pt: 3,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
            Recent Emails
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            Lorem ipsum dolor sit amet
          </Typography>
        </Box>
        <Button variant="outlined" color="primary" sx={{ borderRadius: '1.75rem', fontSize: '0.875rem' }}>
          View More
        </Button>
      </Box>

      <CardContent sx={{ px: 0 }}>
        {emails.map((email, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              px: 3,
              py: 2,
              borderBottom: idx < emails.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
              transition: 'background-color 0.2s',
              '&:hover': {
                bgcolor: alpha(palette.primary.main, 0.03),
              },
            }}
          >
            <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
              {email.type === 'avatar' ? (
                <Avatar src={email.avatar} sx={{ width: 44, height: 44 }} />
              ) : (
                <Avatar
                  sx={{
                    width: 44,
                    height: 44,
                    bgcolor: email.initialBg,
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                >
                  {email.initial}
                </Avatar>
              )}
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1rem', mb: 0.5 }}>
                  {email.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                  {email.body}
                </Typography>
                {email.attachments && (
                  <Box sx={{ display: 'flex', gap: 1, mt: 1.5, flexWrap: 'wrap' }}>
                    {email.attachments.map((file, i) => (
                      <Chip
                        key={i}
                        label={file}
                        size="small"
                        variant="outlined"
                        icon={file.endsWith('.fig') ? <AttachFileIcon /> : <ImageIcon />}
                        sx={{
                          borderColor: theme.palette.divider,
                          color: theme.palette.text.primary,
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                    <Chip
                      label="4 files more"
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: alpha(palette.primary.main, 0.3),
                        color: palette.primary.main,
                        fontWeight: 700,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Box>
                )}
              </Box>
            </Box>
            <IconButton size="small" sx={{ mt: 0.5 }}>
              <FavoriteBorderIcon sx={{ fontSize: '1.1rem', color: theme.palette.text.secondary }} />
            </IconButton>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentEmailsCard;
