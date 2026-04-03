import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Divider,
  useTheme,
  alpha,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HamburgerIcon from '../../components/common/HamburgerIcon';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import InboxIcon from '@mui/icons-material/Inbox';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from '../../context/ThemeContext';
import { layout, palette, semantic } from '../../theme';

import profileImg from '../../assets/images/user.jpg';
import avatarImg from '../../assets/images/avatar/1.jpg';

// ── Notification data (matching template) ──
const notifications = [
  { avatar: avatarImg, title: 'Dr sultads Send you Photo', time: '29 July 2020 - 02:26 PM' },
  { initials: 'KG', color: palette.info.main, title: 'Report created successfully', time: '29 July 2020 - 02:26 PM' },
  { icon: 'home', color: palette.success.main, title: 'Reminder : Treatment Time!', time: '29 July 2020 - 02:26 PM' },
  { avatar: avatarImg, title: 'Dr sultads Send you Photo', time: '29 July 2020 - 02:26 PM' },
  { initials: 'KG', color: palette.danger.main, title: 'Report created successfully', time: '29 July 2020 - 02:26 PM' },
];

// ── Timeline data ──
const timeline = [
  { color: palette.primary.main, time: '10 minutes ago', text: 'Youtube, a video-sharing website, goes live $500.' },
  { color: palette.info.main, time: '20 minutes ago', text: 'New order placed #XF-2356.' },
  { color: palette.danger.main, time: '30 minutes ago', text: 'john just buy your product Sell $250' },
  { color: palette.success.main, time: '15 minutes ago', text: 'StumbleUpon is acquired by eBay.' },
  { color: palette.warning.main, time: '20 minutes ago', text: 'Mashable, a news website and blog, goes live.' },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleMode, mode, sidebarOpen, setSidebarOpen } = useThemeContext();

  const [notifAnchor, setNotifAnchor] = useState<null | HTMLElement>(null);
  const [calendarAnchor, setCalendarAnchor] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  // Derive page title from path (matching template logic)
  const getPageTitle = () => {
    const path = location.pathname.split('/').pop() || 'dashboard';
    const parts = path.split('-').filter(
      p => !['app', 'ui', 'uc', 'basic', 'table', 'page', 'email', 'ecom', 'chart', 'editor'].includes(p)
    );
    return parts.length === 0 ? 'Dashboard' : parts.join(' ');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: sidebarOpen ? `calc(100% - ${layout.sidebarWidth}px)` : '100%',
        ml: sidebarOpen ? `${layout.sidebarWidth}px` : 0,
        height: layout.headerHeight,
        justifyContent: 'center',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        bgcolor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: theme.zIndex.drawer + 1,
      }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: `${layout.headerHeight}px !important` }}>
        {/* Left: Hamburger + Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <HamburgerIcon
            isActive={!sidebarOpen}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textTransform: 'capitalize',
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            {getPageTitle()}
          </Typography>
        </Box>

        {/* Right: Search + Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Search */}
          <TextField
            placeholder="Search here..."
            size="small"
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 220,
              '& .MuiOutlinedInput-root': {
                borderRadius: '1.75rem',
                bgcolor: theme.palette.mode === 'light' ? semantic.searchBgLight : alpha(theme.palette.common.white, 0.05),
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: theme.palette.text.secondary, fontSize: '1.2rem' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Theme toggle */}
          <IconButton onClick={toggleMode} sx={{ color: theme.palette.text.secondary }}>
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>

          {/* Notifications */}
          <IconButton
            onClick={(e) => setNotifAnchor(e.currentTarget)}
            sx={{ color: semantic.iconMuted }}
          >
            <Badge badgeContent={12} color="warning">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={notifAnchor}
            open={Boolean(notifAnchor)}
            onClose={() => setNotifAnchor(null)}
            PaperProps={{
              sx: {
                width: 340,
                maxHeight: 400,
                mt: 1,
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {notifications.map((n, i) => (
              <MenuItem key={i} sx={{ py: 1.5 }}>
                <ListItemIcon>
                  {n.avatar ? (
                    <Avatar src={n.avatar} sx={{ width: 36, height: 36 }} />
                  ) : (
                    <Avatar sx={{ width: 36, height: 36, bgcolor: n.color, fontSize: '0.8rem', fontWeight: 600 }}>
                      {n.initials}
                    </Avatar>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={n.title}
                  secondary={n.time}
                  primaryTypographyProps={{ fontSize: '0.8125rem', fontWeight: 500 }}
                  secondaryTypographyProps={{ fontSize: '0.7rem' }}
                />
              </MenuItem>
            ))}
            <Divider />
            <MenuItem
              sx={{ justifyContent: 'center', color: palette.primary.main, fontWeight: 500, fontSize: '0.8125rem' }}
              onClick={() => setNotifAnchor(null)}
            >
              See all notifications →
            </MenuItem>
          </Menu>

          {/* Mail */}
          <IconButton sx={{ color: semantic.iconMuted }}>
            <Badge badgeContent={76} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          {/* Calendar */}
          <IconButton
            onClick={(e) => setCalendarAnchor(e.currentTarget)}
            sx={{ color: semantic.iconMuted }}
          >
            <Badge badgeContent={1} color="success">
              <CalendarTodayIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={calendarAnchor}
            open={Boolean(calendarAnchor)}
            onClose={() => setCalendarAnchor(null)}
            PaperProps={{ sx: { width: 320, maxHeight: 400, mt: 1, p: 1.5 } }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {timeline.map((t, i) => (
              <MenuItem key={i} sx={{ py: 1 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: t.color,
                    mr: 1.5,
                    flexShrink: 0,
                  }}
                />
                <Box>
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                    {t.time}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.8125rem', fontWeight: 500 }}>
                    {t.text}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>

          {/* Profile */}
          <IconButton
            onClick={(e) => setProfileAnchor(e.currentTarget)}
            sx={{ ml: 0.5 }}
          >
            <Avatar src={profileImg} sx={{ width: 36, height: 36 }} />
          </IconButton>
          <Menu
            anchorEl={profileAnchor}
            open={Boolean(profileAnchor)}
            onClose={() => setProfileAnchor(null)}
            PaperProps={{ sx: { width: 200, mt: 1 } }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={() => { setProfileAnchor(null); navigate('/app-profile'); }}>
              <ListItemIcon><PersonIcon sx={{ color: palette.primary.main }} /></ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => { setProfileAnchor(null); navigate('/email-inbox'); }}>
              <ListItemIcon><InboxIcon sx={{ color: palette.success.main }} /></ListItemIcon>
              <ListItemText>Inbox</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setProfileAnchor(null)}>
              <ListItemIcon><LogoutIcon sx={{ color: palette.danger.main }} /></ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
