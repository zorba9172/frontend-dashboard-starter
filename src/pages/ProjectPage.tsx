import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Tabs,
  Tab,
  Chip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  Button,
  Divider,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import BoltIcon from '@mui/icons-material/Bolt';

import { palette, semantic } from '../theme';
import pic3 from '../assets/images/profile/small/pic3.jpg';
import pic4 from '../assets/images/profile/small/pic4.jpg';
import pic5 from '../assets/images/profile/small/pic5.jpg';
import pic6 from '../assets/images/profile/small/pic6.jpg';
import pic7 from '../assets/images/profile/small/pic7.jpg';
import pic8 from '../assets/images/profile/small/pic8.jpg';

// ── Types ──
interface Project {
  id: string;
  projectId: string;
  name: string;
  createdDate: string;
  clientName: string;
  clientAvatar: string;
  personInCharge: string;
  personAvatar: string;
  deadline: string;
  status: 'Pending' | 'On Progress' | 'Closed';
}

// ── Sample Data ──
const projects: Project[] = [
  {
    id: '1',
    projectId: '#P-000441425',
    name: 'Redesign Flavor Studio Website',
    createdDate: 'Sep 20th, 2024',
    clientName: 'Andi Lane',
    clientAvatar: pic3,
    personInCharge: 'Jakob Gouse',
    personAvatar: pic4,
    deadline: 'Dec 20th, 2024',
    status: 'Pending',
  },
  {
    id: '2',
    projectId: '#P-000441426',
    name: 'Build CRM Application',
    createdDate: 'Oct 5th, 2024',
    clientName: 'Davis Siphron',
    clientAvatar: pic5,
    personInCharge: 'Gretchen Aminoff',
    personAvatar: pic6,
    deadline: 'Jan 15th, 2025',
    status: 'On Progress',
  },
  {
    id: '3',
    projectId: '#P-000441427',
    name: 'Mobile Banking App UI',
    createdDate: 'Aug 12th, 2024',
    clientName: 'Zaire Lubin',
    clientAvatar: pic7,
    personInCharge: 'Andi Lane',
    personAvatar: pic3,
    deadline: 'Nov 30th, 2024',
    status: 'Closed',
  },
  {
    id: '4',
    projectId: '#P-000441428',
    name: 'E-Commerce Dashboard',
    createdDate: 'Nov 1st, 2024',
    clientName: 'Gretchen Aminoff',
    clientAvatar: pic6,
    personInCharge: 'Davis Siphron',
    personAvatar: pic5,
    deadline: 'Feb 28th, 2025',
    status: 'On Progress',
  },
  {
    id: '5',
    projectId: '#P-000441429',
    name: 'Analytics Platform Migration',
    createdDate: 'Jul 18th, 2024',
    clientName: 'Jakob Gouse',
    clientAvatar: pic4,
    personInCharge: 'Zaire Lubin',
    personAvatar: pic7,
    deadline: 'Oct 30th, 2024',
    status: 'Closed',
  },
  {
    id: '6',
    projectId: '#P-000441430',
    name: 'Social Media Scheduler',
    createdDate: 'Dec 3rd, 2024',
    clientName: 'Andi Lane',
    clientAvatar: pic3,
    personInCharge: 'Gretchen Aminoff',
    personAvatar: pic8,
    deadline: 'Mar 15th, 2025',
    status: 'Pending',
  },
];

const statusColorMap: Record<Project['status'], 'warning' | 'primary' | 'error'> = {
  Pending: 'warning',
  'On Progress': 'primary',
  Closed: 'error',
};

const tabLabels = ['All Status', 'On Progress', 'Pending', 'Closed'] as const;

// ── Component ──
const ProjectPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [tabIndex, setTabIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuProjectId, setMenuProjectId] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, projectId: string) => {
    setAnchorEl(event.currentTarget);
    setMenuProjectId(projectId);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuProjectId(null);
  };

  const filtered = tabIndex === 0
    ? projects
    : projects.filter((p) => p.status === tabLabels[tabIndex]);

  const perPage = 4;
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <Box sx={{ py: 2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Projects
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: palette.primary.main,
            '&:hover': { bgcolor: palette.primary.dark },
            textTransform: 'none',
            borderRadius: '0.625rem',
            fontWeight: 600,
          }}
        >
          New Project
        </Button>
      </Box>

      {/* Tabs */}
      <Card
        sx={{
          borderRadius: '0.625rem',
          boxShadow: isDark ? '0 0 2.5rem rgba(0,0,0,0.3)' : '0 0 2.5rem rgba(82,63,105,0.1)',
          bgcolor: theme.palette.background.paper,
          mb: 3,
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={(_, v) => { setTabIndex(v); setPage(1); }}
          sx={{
            px: 2,
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.875rem',
              color: theme.palette.text.secondary,
            },
            '& .Mui-selected': { color: `${palette.primary.main} !important` },
            '& .MuiTabs-indicator': { backgroundColor: palette.primary.main },
          }}
        >
          {tabLabels.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Card>

      {/* Project Cards */}
      <Grid container spacing={3}>
        {paginated.map((project) => (
          <Grid key={project.id} size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                borderRadius: '0.625rem',
                boxShadow: isDark
                  ? '0 0 2.5rem rgba(0,0,0,0.3)'
                  : '0 0 2.5rem rgba(82,63,105,0.1)',
                bgcolor: theme.palette.background.paper,
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                {/* Top Row: ID + Actions */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box>
                    <Typography
                      sx={{ fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.25 }}
                    >
                      {project.projectId}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: theme.palette.text.primary }}>
                      {project.name}
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: theme.palette.text.secondary, mt: 0.25 }}>
                      Created on {project.createdDate}
                    </Typography>
                  </Box>
                  <IconButton size="small" onClick={(e) => handleMenuOpen(e, project.id)}>
                    <MoreVertIcon sx={{ color: semantic.iconDisabled }} />
                  </IconButton>
                </Box>

                <Divider sx={{ borderColor: theme.palette.divider, mb: 2 }} />

                {/* Info Grid */}
                <Grid container spacing={2}>
                  {/* Client */}
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Typography sx={{ fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 }}>
                      Client
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar src={project.clientAvatar} sx={{ width: 32, height: 32 }} />
                      <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: theme.palette.text.primary }}>
                        {project.clientName}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Person in Charge */}
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Typography sx={{ fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 }}>
                      Person in Charge
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar src={project.personAvatar} sx={{ width: 32, height: 32 }} />
                      <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: theme.palette.text.primary }}>
                        {project.personInCharge}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Deadline */}
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Typography sx={{ fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 }}>
                      Deadline
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          bgcolor: alpha(palette.primary.main, 0.15),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <BoltIcon sx={{ fontSize: 18, color: palette.primary.main }} />
                      </Box>
                      <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: theme.palette.text.primary }}>
                        {project.deadline}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Status Chip */}
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Chip
                    label={project.status}
                    color={statusColorMap[project.status]}
                    size="small"
                    sx={{ fontWeight: 600, fontSize: '0.75rem', borderRadius: '0.5rem' }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, v) => setPage(v)}
            sx={{
              '& .Mui-selected': {
                bgcolor: `${palette.primary.main} !important`,
                color: palette.primary.contrastText,
              },
            }}
          />
        </Box>
      )}

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menuProjectId !== null}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.paper,
            borderRadius: '0.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          },
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '0.875rem' }}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '0.875rem', color: palette.danger.main }}>Delete</MenuItem>
      </Menu>
    </Box>
  );
};

export default ProjectPage;
