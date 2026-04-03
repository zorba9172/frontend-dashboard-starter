import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useThemeContext } from '../context/ThemeContext';
import { layout } from '../theme';

const DashboardLayout: React.FC = () => {
  const theme = useTheme();
  const { sidebarOpen } = useThemeContext();

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: `${layout.headerHeight}px`,
          px: { xs: 2, md: 3 },
          py: 3,
          ml: sidebarOpen ? `${layout.sidebarWidth}px` : 0,
          width: sidebarOpen ? `calc(100% - ${layout.sidebarWidth}px)` : '100%',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          backgroundColor: theme.palette.background.default,
          minHeight: `calc(100vh - ${layout.headerHeight}px)`,
          overflow: 'auto',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
