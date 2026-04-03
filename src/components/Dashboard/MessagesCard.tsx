import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  alpha,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { palette, semantic } from '../../theme';

import pic3 from '../../assets/images/profile/small/pic3.jpg';
import pic4 from '../../assets/images/profile/small/pic4.jpg';
import pic5 from '../../assets/images/profile/small/pic5.jpg';
import pic6 from '../../assets/images/profile/small/pic6.jpg';
import pic8 from '../../assets/images/profile/small/pic8.jpg';

interface MessageEntry {
  image: string;
  name: string;
  message: string;
  time: string;
  online?: boolean;
}

const messages: MessageEntry[] = [
  { image: pic8, name: 'Maren Rosser', message: 'Hei, dont forget to clear server cache!', time: '25min ago', online: true },
  { image: pic5, name: 'Kaiya Bergson', message: 'I remember that project due is tomorrow.', time: 'Yesterday, 8:24 AM' },
  { image: pic6, name: 'Ruben Press', message: 'Ok sir. I will fix it as soon as possible', time: 'December 12th, 2020 10:24 AM' },
  { image: pic3, name: 'Cristofer Torff', message: 'Maybe we should schedule that meeting', time: 'December 12th, 2020 10:24 AM' },
  { image: pic4, name: 'Ann Rosser', message: "I dont't know where that files saved dude.", time: 'Yesterday, 8:24 AM' },
];

const MessagesCard: React.FC = () => {
  const theme = useTheme();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

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
            Messages
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            Lorem ipsum dolor sit amet
          </Typography>
        </Box>
        <Button variant="contained" color="primary" sx={{ borderRadius: '1.75rem', fontSize: '0.875rem' }}>
          + New Messages
        </Button>
      </Box>

      <CardContent sx={{ px: 0, pt: 0 }}>
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 3,
              py: 2,
              borderBottom: idx < messages.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
              transition: 'background-color 0.2s',
              '&:hover': {
                bgcolor: alpha(palette.primary.main, 0.03),
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar src={msg.image} sx={{ width: 44, height: 44 }} />
                {msg.online && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 2,
                      right: 2,
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: palette.success.main,
                      border: `2px solid ${theme.palette.background.paper}`,
                    }}
                  />
                )}
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                  {msg.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', mr: 2 }}
                  >
                    {msg.message}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.text.secondary, whiteSpace: 'nowrap', fontSize: '0.7rem' }}
                  >
                    {msg.time}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <IconButton size="small" onClick={(e) => setMenuAnchor(e.currentTarget)}>
              <MoreVertIcon sx={{ color: semantic.iconDisabled }} />
            </IconButton>
          </Box>
        ))}
      </CardContent>

      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
        <MenuItem onClick={() => setMenuAnchor(null)}>Delete</MenuItem>
        <MenuItem onClick={() => setMenuAnchor(null)}>Edit</MenuItem>
      </Menu>
    </Card>
  );
};

export default MessagesCard;
