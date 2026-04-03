import React from 'react';
import { Box, type SxProps, type Theme } from '@mui/material';
import { semantic } from '../../theme';

interface HamburgerIconProps {
  isActive: boolean;
  onClick: () => void;
}

const getLineSx = (isActive: boolean, lineIndex: 1 | 2 | 3): SxProps<Theme> => {
  const base: SxProps<Theme> = {
    display: 'block',
    borderRadius: '0.1875rem',
    bgcolor: semantic.iconMuted,
    mt: '0.375rem',
    mb: '0.375rem',
    mr: 'auto',
    transition: 'all 0.3s ease-in-out',
  };

  if (lineIndex === 1) {
    return isActive
      ? { ...base, width: '0.625rem', height: '0.125rem', transform: 'translateY(4px) translateX(12px) rotate(45deg)' }
      : { ...base, width: '1.625rem', height: '0.1875rem' };
  }
  if (lineIndex === 2) {
    return isActive
      ? { ...base, width: '1.375rem', height: '0.125rem', transform: 'translateX(0px)' }
      : { ...base, width: '1.625rem', height: '0.1875rem' };
  }
  // lineIndex === 3
  return isActive
    ? { ...base, width: '0.625rem', height: '0.125rem', transform: 'translateY(-4px) translateX(12px) rotate(-45deg)' }
    : { ...base, width: '0.9375rem', height: '0.1875rem' };
};

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isActive, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'inline-block',
        position: 'relative',
        width: '1.625rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out 0s',
        zIndex: 999,
        py: 0.5,
        '&:hover .hamburger-line': {
          width: '1.625rem !important',
        },
      }}
    >
      <Box className="hamburger-line" component="span" sx={getLineSx(isActive, 1)} />
      <Box className="hamburger-line" component="span" sx={getLineSx(isActive, 2)} />
      <Box className="hamburger-line" component="span" sx={getLineSx(isActive, 3)} />
    </Box>
  );
};

export default HamburgerIcon;
