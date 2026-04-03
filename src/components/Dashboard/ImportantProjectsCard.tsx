import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Chip,
  LinearProgress,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  useTheme,
  alpha,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { palette, gradients, semantic } from '../../theme';

import windImg from '../../assets/images/big-wind.png';
import huntImg from '../../assets/images/circle-hunt.png';

interface ProjectEntry {
  image: string;
  name: string;
  agency: string;
  description: string;
  tags: { label: string; color: string; bgColor: string }[];
  progress: number;
  tasksDone: number;
  dueDate: string;
}

const projects: ProjectEntry[] = [
  {
    image: windImg,
    name: 'Big Wind',
    agency: 'Creative Agency',
    description: 'Optimization Dashboard Page for indexing in Google',
    tags: [
      { label: 'SEO', color: palette.warning.main, bgColor: alpha(palette.warning.main, 0.15) },
      { label: 'MARKETING', color: palette.danger.main, bgColor: alpha(palette.danger.main, 0.15) },
    ],
    progress: 45,
    tasksDone: 12,
    dueDate: '12/05/2020',
  },
  {
    image: huntImg,
    name: 'Circle Hunt',
    agency: 'Creative Agency',
    description: 'Redesign Landing Page Website for Company Profile',
    tags: [
      { label: 'UI/UX', color: palette.primary.main, bgColor: alpha(palette.primary.main, 0.15) },
      { label: 'WEBSITE', color: palette.danger.main, bgColor: alpha(palette.danger.main, 0.15) },
    ],
    progress: 45,
    tasksDone: 12,
    dueDate: '12/05/2020',
  },
];

const ImportantProjectsCard: React.FC = () => {
  const theme = useTheme();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ px: 3, pt: 3, pb: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
          Important Projects
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          Lorem ipsum dolor sit amet
        </Typography>
      </Box>

      <CardContent sx={{ flex: 1, pb: 0 }}>
        {projects.map((project, idx) => (
          <Box
            key={idx}
            sx={{
              pb: 2.5,
              mb: 2.5,
              borderBottom: idx < projects.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
            }}
          >
            {/* Project header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar
                  src={project.image}
                  variant="rounded"
                  sx={{ width: 48, height: 48, bgcolor: alpha(palette.primary.main, 0.1) }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.8125rem' }}>
                    {project.agency}
                  </Typography>
                </Box>
              </Box>
              <IconButton size="small" onClick={(e) => setMenuAnchor(e.currentTarget)}>
                <MoreVertIcon sx={{ color: semantic.iconDisabled }} />
              </IconButton>
            </Box>

            {/* Description */}
            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '0.875rem', mb: 1.5 }}>
              {project.description}
            </Typography>

            {/* Tags */}
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {project.tags.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag.label}
                  size="small"
                  sx={{
                    bgcolor: tag.bgColor,
                    color: tag.color,
                    fontWeight: 700,
                    fontSize: '0.75rem',
                  }}
                />
              ))}
            </Box>

            {/* Progress */}
            <LinearProgress
              variant="determinate"
              value={project.progress}
              sx={{
                height: 10,
                borderRadius: 5,
                bgcolor: theme.palette.mode === 'light' ? semantic.trackLight : semantic.trackDark,
                '& .MuiLinearProgress-bar': {
                  backgroundImage: gradients.progressGradient,
                  borderRadius: 5,
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1.5 }}>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                <Typography component="span" sx={{ fontWeight: 700, mr: 0.5, fontSize: '0.8125rem' }}>
                  {project.tasksDone}
                </Typography>
                Task Done
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Due date: {project.dueDate}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>

      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
        <MenuItem onClick={() => setMenuAnchor(null)}>Delete</MenuItem>
        <MenuItem onClick={() => setMenuAnchor(null)}>Edit</MenuItem>
      </Menu>

      <Box sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button fullWidth variant="outlined" color="primary" sx={{ borderRadius: '1.75rem' }}>
          Pin other projects
        </Button>
      </Box>
    </Card>
  );
};

export default ImportantProjectsCard;
