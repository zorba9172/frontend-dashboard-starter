import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Avatar,
  LinearProgress,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import { useThemeContext } from '../../context/ThemeContext';
import { menuConfig, type MenuItem, type MenuChild } from '../menuConfig';
import { layout, palette, gradients, semantic } from '../../theme';

import userImg from '../../assets/images/user.jpg';

// ── Sidebar Logo ──
const SidebarLogo: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: layout.headerHeight,
        px: 2,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '10px',
          background: gradients.tryal,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mr: 1.5,
        }}
      >
        <Typography variant="h6" sx={{ color: palette.primary.contrastText, fontWeight: 800, fontSize: '1.2rem' }}>
          F
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: theme.palette.text.primary,
          letterSpacing: '-0.5px',
          fontSize: '1.25rem',
        }}
      >
        Fillow
      </Typography>
    </Box>
  );
};

// ── Recursive Menu Item ──
interface SidebarMenuItemProps {
  item: MenuItem | MenuChild;
  depth?: number;
  icon?: React.ReactNode;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ item, depth = 0, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const hasChildren = 'children' in item && item.children && item.children.length > 0;
  const isActive = 'to' in item && item.to ? location.pathname === item.to : false;

  // Auto-expand if any child is active
  useEffect(() => {
    if (hasChildren && item.children) {
      const isChildActive = item.children.some((child: MenuChild) => {
        if (location.pathname === child.to) return true;
        if (child.children) {
          return child.children.some((sub: MenuChild) => location.pathname === sub.to);
        }
        return false;
      });
      if (isChildActive) setOpen(true);
    }
  }, [location.pathname]);

  const handleClick = () => {
    if (hasChildren) {
      setOpen(!open);
    } else if ('to' in item && item.to && item.to !== '#') {
      navigate(item.to);
    }
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        selected={isActive}
        sx={{
          pl: 2 + depth * 2,
          py: depth === 0 ? 1.2 : 0.8,
          borderRadius: '10px',
          mx: 1,
          mb: 0.5,
          transition: 'all 0.2s ease',
          ...(isActive && {
            bgcolor: alpha(palette.primary.main, 0.12),
            color: palette.primary.main,
            '&:hover': { bgcolor: alpha(palette.primary.main, 0.18) },
          }),
          '&:hover': {
            bgcolor: alpha(palette.primary.main, 0.06),
          },
        }}
      >
        {icon && (
          <ListItemIcon
            sx={{
              minWidth: 36,
              color: isActive ? palette.primary.main : theme.palette.text.secondary,
              '& .MuiSvgIcon-root': { fontSize: '1.2rem' },
            }}
          >
            {icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            fontSize: depth === 0 ? '0.875rem' : '0.8125rem',
            fontWeight: isActive ? 600 : depth === 0 ? 500 : 400,
            color: isActive ? palette.primary.main : theme.palette.text.primary,
          }}
        />
        {hasChildren && (
          open
            ? <ExpandLess sx={{ fontSize: '1rem', color: theme.palette.text.secondary }} />
            : <ExpandMore sx={{ fontSize: '1rem', color: theme.palette.text.secondary }} />
        )}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.children!.map((child, idx) => (
              <SidebarMenuItem key={idx} item={child} depth={depth + 1} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

// ── Sidebar Profile Footer ──
const SidebarProfile: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ p: 2, mx: 1, mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar src={userImg} sx={{ width: 40, height: 40, mr: 1.5 }} />
        <Box sx={{ overflow: 'hidden' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1.3, fontSize: '0.875rem' }} noWrap>
            Levi Siregar
          </Typography>
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: '0.75rem' }} noWrap>
            leviregar@mail.com
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: theme.palette.text.secondary }}>
          <StarIcon sx={{ fontSize: '0.85rem', color: semantic.starColor }} />
          Task Progress
        </Typography>
        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
          20/45
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={45}
        sx={{
          height: 10,
          borderRadius: 5,
          bgcolor: theme.palette.mode === 'light' ? semantic.trackLight : semantic.trackDark,
          '& .MuiLinearProgress-bar': {
            backgroundImage: gradients.progressGradient,
          },
        }}
      />
    </Box>
  );
};

// ── Main Sidebar Component ──
const Sidebar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useThemeContext();
  const theme = useTheme();

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <SidebarLogo />
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          py: 1,
          '&::-webkit-scrollbar': { width: 4 },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: alpha(palette.primary.main, 0.3),
            borderRadius: 2,
          },
        }}
      >
        <List disablePadding>
          {menuConfig.map((item, index) => (
            <SidebarMenuItem
              key={index}
              item={item}
              icon={(item as MenuItem).icon}
            />
          ))}
        </List>
      </Box>
      <SidebarProfile />
      <Box sx={{ textAlign: 'center', pb: 2, px: 2 }}>
        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: '0.7rem' }}>
          <strong>Fillow Saas Admin</strong> &copy; {new Date().getFullYear()} All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Desktop drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={sidebarOpen}
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: layout.sidebarWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.background.paper,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: layout.sidebarWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.background.paper,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
