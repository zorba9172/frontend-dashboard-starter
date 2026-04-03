import React from 'react';
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
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { palette, semantic } from '../theme';
import pic1 from '../assets/images/profile/small/pic1.jpg';
import pic2 from '../assets/images/profile/small/pic2.jpg';
import pic3 from '../assets/images/profile/small/pic3.jpg';
import pic4 from '../assets/images/profile/small/pic4.jpg';
import pic5 from '../assets/images/profile/small/pic5.jpg';
import pic6 from '../assets/images/profile/small/pic6.jpg';

// ── Types ──
interface KanbanCard {
  id: string;
  title: string;
  description: string;
  progress: number;
  assignee: string;
  assigneeAvatar: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

interface KanbanColumn {
  id: string;
  title: string;
  color: string;
  cards: KanbanCard[];
}

const priorityColors: Record<KanbanCard['priority'], string> = {
  high: palette.danger.main,
  medium: palette.warning.main,
  low: palette.success.main,
};

// ── Sample Data ──
const columns: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    color: palette.primary.main,
    cards: [
      {
        id: '1',
        title: 'Design System Components',
        description: 'Create reusable UI component library for the design system',
        progress: 20,
        assignee: 'Jakob Gouse',
        assigneeAvatar: pic1,
        dueDate: 'Dec 15',
        priority: 'high',
      },
      {
        id: '2',
        title: 'API Documentation',
        description: 'Write comprehensive API docs for v2 endpoints',
        progress: 10,
        assignee: 'Gretchen Aminoff',
        assigneeAvatar: pic2,
        dueDate: 'Dec 20',
        priority: 'medium',
      },
      {
        id: '3',
        title: 'Unit Test Coverage',
        description: 'Increase test coverage to 80% for core modules',
        progress: 5,
        assignee: 'Davis Siphron',
        assigneeAvatar: pic3,
        dueDate: 'Jan 5',
        priority: 'low',
      },
    ],
  },
  {
    id: 'progress',
    title: 'On Progress',
    color: palette.secondary.main,
    cards: [
      {
        id: '4',
        title: 'Dashboard Analytics',
        description: 'Build real-time analytics dashboard with charts',
        progress: 65,
        assignee: 'Zaire Lubin',
        assigneeAvatar: pic4,
        dueDate: 'Dec 10',
        priority: 'high',
      },
      {
        id: '5',
        title: 'User Authentication Flow',
        description: 'Implement OAuth2 and MFA authentication system',
        progress: 45,
        assignee: 'Andi Lane',
        assigneeAvatar: pic5,
        dueDate: 'Dec 18',
        priority: 'medium',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: palette.success.main,
    cards: [
      {
        id: '6',
        title: 'Database Migration',
        description: 'Migrate legacy PostgreSQL to new schema structure',
        progress: 100,
        assignee: 'Haylie Workman',
        assigneeAvatar: pic6,
        dueDate: 'Nov 30',
        priority: 'high',
      },
      {
        id: '7',
        title: 'CI/CD Pipeline',
        description: 'Set up automated build, test, and deployment pipeline',
        progress: 100,
        assignee: 'Jakob Gouse',
        assigneeAvatar: pic1,
        dueDate: 'Nov 25',
        priority: 'medium',
      },
    ],
  },
];

const KanbanPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ py: 2 }}>
      {/* Board Header */}
      <Card
        sx={{
          borderRadius: '0.625rem',
          boxShadow: isDark ? '0 0 2.5rem rgba(0,0,0,0.3)' : '0 0 2.5rem rgba(82,63,105,0.1)',
          bgcolor: theme.palette.background.paper,
          mb: 3,
          p: 2.5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 0.5 }}>
              Task Board
            </Typography>
            <Typography sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
              Project progress overview
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32, fontSize: '0.75rem' } }}>
              <Avatar src={pic1} />
              <Avatar src={pic2} />
              <Avatar src={pic3} />
              <Avatar src={pic4} />
              <Avatar src={pic5} />
            </AvatarGroup>
            <Box sx={{ minWidth: 120 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: theme.palette.text.primary }}>
                  Progress
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: palette.primary.main }}>
                  60%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={60}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  bgcolor: alpha(palette.primary.main, 0.15),
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 3,
                    background: `linear-gradient(90deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Card>

      {/* Columns */}
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'auto',
          pb: 2,
          '&::-webkit-scrollbar': { height: 6 },
          '&::-webkit-scrollbar-thumb': { bgcolor: alpha(palette.primary.main, 0.3), borderRadius: 3 },
        }}
      >
        {columns.map((column) => (
          <Box
            key={column.id}
            sx={{
              minWidth: 320,
              flex: 1,
            }}
          >
            {/* Column Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: column.color }} />
                <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: theme.palette.text.primary }}>
                  {column.title}
                </Typography>
                <Chip
                  label={column.cards.length}
                  size="small"
                  sx={{
                    height: 22,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    bgcolor: alpha(column.color, 0.15),
                    color: column.color,
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
                <Card
                  key={card.id}
                  sx={{
                    borderRadius: '0.625rem',
                    boxShadow: isDark
                      ? '0 0 2.5rem rgba(0,0,0,0.3)'
                      : '0 0 2.5rem rgba(82,63,105,0.1)',
                    bgcolor: theme.palette.background.paper,
                    '&:hover': {
                      boxShadow: isDark
                        ? '0 4px 20px rgba(0,0,0,0.4)'
                        : '0 4px 20px rgba(82,63,105,0.15)',
                    },
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    {/* Title row */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', color: theme.palette.text.primary }}>
                        {card.title}
                      </Typography>
                      <IconButton size="small" sx={{ mt: -0.5, mr: -0.5 }}>
                        <MoreHorizIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} />
                      </IconButton>
                    </Box>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
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

                    {/* Progress */}
                    <Box sx={{ mb: 1.5 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary }}>
                          Progress
                        </Typography>
                        <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: column.color }}>
                          {card.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={card.progress}
                        sx={{
                          height: 4,
                          borderRadius: 2,
                          bgcolor: alpha(column.color, 0.15),
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 2,
                            bgcolor: column.color,
                          },
                        }}
                      />
                    </Box>

                    {/* Footer */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar src={card.assigneeAvatar} sx={{ width: 24, height: 24 }} />
                        <Typography sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary }}>
                          {card.dueDate}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: priorityColors[card.priority],
                        }}
                        title={`${card.priority} priority`}
                      />
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default KanbanPage;
