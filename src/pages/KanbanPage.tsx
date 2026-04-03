import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  AvatarGroup,
  LinearProgress,
  Chip,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import { palette, semantic } from '../theme';
import pic3 from '../assets/images/profile/small/pic3.jpg';
import pic4 from '../assets/images/profile/small/pic4.jpg';
import pic5 from '../assets/images/profile/small/pic5.jpg';
import pic6 from '../assets/images/profile/small/pic6.jpg';
import pic7 from '../assets/images/profile/small/pic7.jpg';
import pic8 from '../assets/images/profile/small/pic8.jpg';
import pic11 from '../assets/images/contacts/pic11.jpg';
import pic22 from '../assets/images/contacts/pic22.jpg';
import pic33 from '../assets/images/contacts/pic33.jpg';

// ── Status dot SVG ──
const StatusDot: React.FC<{ color: string }> = ({ color }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill={color} />
  </svg>
);

// ── Types ──
interface KanbanCard {
  id: string;
  title: string;
  description: string;
  statusColor: string;
  avatars: string[];
  dueDate: string;
}

interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
}

// ── Sample Data ──
const columns: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    cards: [
      {
        id: '1',
        title: 'Redesign the homepage',
        description: 'Update layout and branding to match the latest guidelines',
        statusColor: palette.danger.main,
        avatars: [pic3, pic4],
        dueDate: 'Sep 25, 2020',
      },
      {
        id: '2',
        title: 'Create wireframes for mobile app',
        description: 'Low-fidelity wireframes for onboarding flow',
        statusColor: palette.warning.main,
        avatars: [pic5],
        dueDate: 'Oct 2, 2020',
      },
      {
        id: '3',
        title: 'Prepare pitch deck',
        description: 'Slides for investor meeting next quarter',
        statusColor: palette.success.main,
        avatars: [pic6, pic7],
        dueDate: 'Oct 8, 2020',
      },
      {
        id: '4',
        title: 'Setup staging environment',
        description: 'Mirror production config on staging servers',
        statusColor: palette.danger.main,
        avatars: [pic8],
        dueDate: 'Oct 15, 2020',
      },
    ],
  },
  {
    id: 'progress',
    title: 'On Progress',
    cards: [
      {
        id: '5',
        title: 'Build dashboard analytics',
        description: 'Implement chart components with real-time data',
        statusColor: palette.danger.main,
        avatars: [pic11, pic22],
        dueDate: 'Sep 28, 2020',
      },
      {
        id: '6',
        title: 'User authentication flow',
        description: 'OAuth2 integration and MFA setup',
        statusColor: palette.success.main,
        avatars: [pic33, pic3],
        dueDate: 'Oct 5, 2020',
      },
      {
        id: '7',
        title: 'API endpoint documentation',
        description: 'Swagger docs for all v2 REST endpoints',
        statusColor: palette.warning.main,
        avatars: [pic4],
        dueDate: 'Oct 10, 2020',
      },
      {
        id: '8',
        title: 'Integration testing suite',
        description: 'End-to-end tests for critical user journeys',
        statusColor: palette.danger.main,
        avatars: [pic5, pic6],
        dueDate: 'Oct 18, 2020',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    cards: [
      {
        id: '9',
        title: 'Database migration script',
        description: 'Migrate legacy schema to new normalized structure',
        statusColor: palette.success.main,
        avatars: [pic7, pic8],
        dueDate: 'Sep 15, 2020',
      },
      {
        id: '10',
        title: 'CI/CD pipeline setup',
        description: 'Automated build, test, deploy with GitHub Actions',
        statusColor: palette.success.main,
        avatars: [pic11],
        dueDate: 'Sep 18, 2020',
      },
      {
        id: '11',
        title: 'Brand style guide',
        description: 'Finalized typography, colors, and component specs',
        statusColor: palette.success.main,
        avatars: [pic22, pic33],
        dueDate: 'Sep 20, 2020',
      },
      {
        id: '12',
        title: 'Performance audit',
        description: 'Lighthouse optimization for core web vitals',
        statusColor: palette.warning.main,
        avatars: [pic3],
        dueDate: 'Sep 22, 2020',
      },
    ],
  },
];

const KanbanPage: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ py: 2 }}>
      {/* Board Header Card */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {/* Left: company info */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                <Typography
                  sx={{ fontSize: '1.25rem', fontWeight: 700, color: theme.palette.text.primary }}
                >
                  Fillow Studios
                </Typography>
                <Chip
                  label="Studio"
                  size="small"
                  sx={{
                    bgcolor: alpha(palette.primary.main, 0.1),
                    color: palette.primary.main,
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    height: 24,
                  }}
                />
              </Box>
              <AvatarGroup
                max={5}
                sx={{ '& .MuiAvatar-root': { width: 35, height: 35, fontSize: '0.75rem' } }}
              >
                <Avatar src={pic3} />
                <Avatar src={pic4} />
                <Avatar src={pic5} />
                <Avatar src={pic6} />
                <Avatar src={pic7} />
              </AvatarGroup>
            </Box>

            {/* Right: invite + progress */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Button
                variant="outlined"
                startIcon={<PersonAddAltOutlinedIcon />}
                sx={{
                  textTransform: 'none',
                  borderColor: palette.primary.main,
                  color: palette.primary.main,
                  borderRadius: '1.75rem',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: palette.primary.dark,
                    bgcolor: alpha(palette.primary.main, 0.05),
                  },
                }}
              >
                Invite
              </Button>
              <Box sx={{ minWidth: 160 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography
                    sx={{ fontSize: '0.875rem', fontWeight: 500, color: theme.palette.text.secondary }}
                  >
                    Total Progress
                  </Typography>
                  <Typography
                    sx={{ fontSize: '0.875rem', fontWeight: 600, color: palette.primary.main }}
                  >
                    60%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: alpha(palette.primary.main, 0.15),
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 4,
                      bgcolor: palette.primary.main,
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Three Columns */}
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'auto',
          pb: 2,
          '&::-webkit-scrollbar': { height: 6 },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: alpha(palette.primary.main, 0.3),
            borderRadius: 3,
          },
        }}
      >
        {columns.map((column) => (
          <Box key={column.id} sx={{ minWidth: 320, flex: 1 }}>
            {/* Column Header */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  sx={{ fontWeight: 600, fontSize: '1rem', color: theme.palette.text.primary }}
                >
                  {column.title}
                </Typography>
                <Chip
                  label={column.cards.length}
                  size="small"
                  sx={{
                    height: 22,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    bgcolor: alpha(palette.primary.main, 0.1),
                    color: palette.primary.main,
                  }}
                />
              </Box>
              <IconButton size="small">
                <AddIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} />
              </IconButton>
            </Box>

            {/* Cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {column.cards.map((card) => (
                <Card key={card.id}>
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    {/* Title + menu */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          color: theme.palette.text.primary,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{ mt: -0.5, mr: -0.5 }}
                        onClick={handleMenuOpen}
                      >
                        <MoreHorizIcon sx={{ fontSize: 18, color: semantic.iconMuted }} />
                      </IconButton>
                    </Box>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: '0.8125rem',
                        color: theme.palette.text.secondary,
                        mb: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {card.description}
                    </Typography>

                    {/* Footer: status dot, avatars, due date */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <StatusDot color={card.statusColor} />
                        <AvatarGroup
                          max={3}
                          sx={{
                            '& .MuiAvatar-root': {
                              width: 30,
                              height: 30,
                              fontSize: '0.65rem',
                              border: `2px solid ${theme.palette.background.paper}`,
                            },
                          }}
                        >
                          {card.avatars.map((src, i) => (
                            <Avatar key={i} src={src} />
                          ))}
                        </AvatarGroup>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.75rem',
                          color: theme.palette.text.secondary,
                          fontWeight: 400,
                        }}
                      >
                        {card.dueDate}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Dropdown menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: palette.danger.main }}>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default KanbanPage;
