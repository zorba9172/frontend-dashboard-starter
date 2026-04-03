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
  Button,
  Pagination,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import { palette, semantic } from '../theme';
import cust11 from '../assets/images/customers/11.jpg';
import cust22 from '../assets/images/customers/22.jpg';
import cust33 from '../assets/images/customers/33.jpg';
import cust44 from '../assets/images/customers/44.jpg';
import cust55 from '../assets/images/customers/55.jpg';

// ── Bolt SVG Icon ──
const BoltCircleIcon: React.FC = () => (
  <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="27.5" cy="27.5" r="27.5" fill={palette.primary.main} />
    <g clipPath="url(#clip0)">
      <path
        d="M37.2961 23.6858C37.1797 23.4406 36.9325 23.2843 36.661 23.2843H29.6088L33.8773 16.0608C34.0057 15.8435 34.0077 15.5738 33.8826 15.3546C33.7574 15.1354 33.5244 14.9999 33.2719 15L27.2468 15.0007C26.9968 15.0008 26.7656 15.1335 26.6396 15.3495L18.7318 28.905C18.6049 29.1224 18.604 29.3911 18.7294 29.6094C18.8548 29.8277 19.0873 29.9624 19.3391 29.9624H26.3464L24.3054 38.1263C24.2255 38.4457 24.3781 38.7779 24.6725 38.9255C24.7729 38.9757 24.8806 39 24.9872 39C25.1933 39 25.3952 38.9094 25.5324 38.7413L37.2058 24.4319C37.3774 24.2215 37.4126 23.931 37.2961 23.6858Z"
        fill="white"
      />
    </g>
  </svg>
);

// ── Types ──
interface Project {
  id: string;
  projectId: string;
  title: string;
  createdDate: string;
  clientName: string;
  clientAvatar: string;
  personInCharge: string;
  personAvatar: string;
  deadline: string;
  status: 'PENDING' | 'ON PROGRESS' | 'CLOSED';
}

// ── Sample Data ──
const projects: Project[] = [
  {
    id: '1',
    projectId: '#P-000441425',
    title: 'Redesign Owlio Landing Page Web..',
    createdDate: 'Created on Sep 8th, 2020',
    clientName: 'James Jr.',
    clientAvatar: cust11,
    personInCharge: 'Marley Dokidis',
    personAvatar: cust22,
    deadline: 'Tuesday, Sep 29th 2020',
    status: 'PENDING',
  },
  {
    id: '2',
    projectId: '#P-000441426',
    title: 'Build New Dashboard CRM Admin..',
    createdDate: 'Created on Oct 1st, 2020',
    clientName: 'Jakob Vetrovs',
    clientAvatar: cust33,
    personInCharge: 'Marley Dokidis',
    personAvatar: cust44,
    deadline: 'Tuesday, Oct 15th 2020',
    status: 'ON PROGRESS',
  },
  {
    id: '3',
    projectId: '#P-000441427',
    title: 'Mobile App Design Food Tracker..',
    createdDate: 'Created on Aug 12th, 2020',
    clientName: 'James Jr.',
    clientAvatar: cust55,
    personInCharge: 'Marley Dokidis',
    personAvatar: cust11,
    deadline: 'Wednesday, Nov 4th 2020',
    status: 'CLOSED',
  },
  {
    id: '4',
    projectId: '#P-000441428',
    title: 'Website Flavor Studio Portfolio..',
    createdDate: 'Created on Nov 3rd, 2020',
    clientName: 'Jakob Vetrovs',
    clientAvatar: cust22,
    personInCharge: 'Marley Dokidis',
    personAvatar: cust33,
    deadline: 'Friday, Dec 18th 2020',
    status: 'ON PROGRESS',
  },
  {
    id: '5',
    projectId: '#P-000441429',
    title: 'Analytics Platform Migration..',
    createdDate: 'Created on Jul 18th, 2020',
    clientName: 'James Jr.',
    clientAvatar: cust44,
    personInCharge: 'Marley Dokidis',
    personAvatar: cust11,
    deadline: 'Monday, Jan 4th 2021',
    status: 'PENDING',
  },
];

const statusChipSx: Record<Project['status'], object> = {
  PENDING: {
    bgcolor: (t: any) => alpha(t.palette.warning.main, 0.1),
    color: 'warning.main',
  },
  'ON PROGRESS': {
    bgcolor: (t: any) => alpha(t.palette.primary.main, 0.1),
    color: 'primary.main',
  },
  CLOSED: {
    bgcolor: (t: any) => alpha(t.palette.success.main, 0.1),
    color: 'success.main',
  },
};

const tabLabels = ['All Status', 'On Progress', 'Pending', 'Closed'] as const;
const tabStatusMap: Record<string, Project['status'] | null> = {
  'All Status': null,
  'On Progress': 'ON PROGRESS',
  Pending: 'PENDING',
  Closed: 'CLOSED',
};

// ── Component ──
const ProjectPage: React.FC = () => {
  const theme = useTheme();

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

  const activeStatus = tabStatusMap[tabLabels[tabIndex]];
  const filtered = activeStatus === null
    ? projects
    : projects.filter((p) => p.status === activeStatus);

  return (
    <Box sx={{ py: 2 }}>
      {/* Top bar: Tabs left, New Project button right */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Tabs
          value={tabIndex}
          onChange={(_, v) => { setTabIndex(v); setPage(1); }}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              color: theme.palette.text.secondary,
            },
            '& .Mui-selected': { color: `${palette.primary.main} !important`, fontWeight: 600 },
            '& .MuiTabs-indicator': { backgroundColor: palette.primary.main },
          }}
        >
          {tabLabels.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            textTransform: 'none',
            borderRadius: '1.75rem',
            fontSize: '1.125rem',
            fontWeight: 500,
            px: 3,
          }}
        >
          New Project
        </Button>
      </Box>

      {/* Project Cards */}
      {filtered.map((project) => (
        <Card key={project.id} sx={{ mb: 2 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              {/* Col 1 (xl=3): Project info */}
              <Grid size={{ xs: 12, xl: 3 }}>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: palette.primary.main,
                    mb: 0.5,
                  }}
                >
                  {project.projectId}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 0.5,
                  }}
                >
                  {project.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CalendarTodayOutlinedIcon
                    sx={{ fontSize: 14, color: theme.palette.text.secondary }}
                  />
                  <Typography sx={{ fontSize: '1rem', color: theme.palette.text.secondary }}>
                    {project.createdDate}
                  </Typography>
                </Box>
              </Grid>

              {/* Col 2 (xl=2): Client */}
              <Grid size={{ xs: 12, sm: 6, xl: 2 }}>
                <Typography
                  sx={{ fontSize: '1rem', fontWeight: 400, color: theme.palette.text.secondary, mb: 0.75 }}
                >
                  Client
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src={project.clientAvatar} sx={{ width: 40, height: 40 }} />
                  <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, color: theme.palette.text.primary }}>
                    {project.clientName}
                  </Typography>
                </Box>
              </Grid>

              {/* Col 3 (xl=2): Person in charge */}
              <Grid size={{ xs: 12, sm: 6, xl: 2 }}>
                <Typography
                  sx={{ fontSize: '1rem', fontWeight: 400, color: theme.palette.text.secondary, mb: 0.75 }}
                >
                  Person in charge
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src={project.personAvatar} sx={{ width: 40, height: 40 }} />
                  <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, color: theme.palette.text.primary }}>
                    {project.personInCharge}
                  </Typography>
                </Box>
              </Grid>

              {/* Col 4 (xl=3): Deadline */}
              <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <BoltCircleIcon />
                  <Box>
                    <Typography
                      sx={{ fontSize: '1rem', fontWeight: 400, color: theme.palette.text.secondary, mb: 0.25 }}
                    >
                      Deadline
                    </Typography>
                    <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, color: theme.palette.text.primary }}>
                      {project.deadline}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Col 5 (xl=2): Status + menu */}
              <Grid size={{ xs: 12, sm: 6, xl: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                  <Chip
                    label={project.status}
                    sx={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      height: 36,
                      borderRadius: '0.625rem',
                      ...statusChipSx[project.status],
                    }}
                  />
                  <IconButton size="small" onClick={(e) => handleMenuOpen(e, project.id)}>
                    <MoreVertIcon sx={{ color: semantic.iconMuted }} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}

      {/* Pagination */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 3,
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
          Showing 10 from 160 data
        </Typography>
        <Pagination
          count={4}
          page={page}
          onChange={(_, v) => setPage(v)}
          showFirstButton={false}
          showLastButton={false}
          sx={{
            '& .MuiPaginationItem-root': {
              fontWeight: 500,
              color: theme.palette.text.secondary,
              '&.Mui-selected': {
                bgcolor: palette.primary.main,
                color: palette.primary.contrastText,
                '&:hover': { bgcolor: palette.primary.dark },
              },
            },
          }}
        />
      </Box>

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menuProjectId !== null}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: palette.danger.main }}>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProjectPage;
