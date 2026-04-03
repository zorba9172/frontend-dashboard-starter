import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  FormControlLabel,
  useTheme,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DonutProgress, ProjectBarChart } from '../../charts';
import { palette, chartColors, semantic } from '../../theme';

const ProjectStatisticsCard: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [tabValue, setTabValue] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  return (
    <Card>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          px: 3,
          pt: 3,
          pb: 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 1 }}>
          Project Statistics
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Tabs
            value={tabValue}
            onChange={(_, v) => setTabValue(v)}
            sx={{
              minHeight: 36,
              '& .MuiTab-root': {
                minHeight: 36,
                py: 0.5,
                px: 2,
                fontSize: '0.8125rem',
              },
            }}
          >
            <Tab label="Monthly" />
            <Tab label="Weekly" />
            <Tab label="Today" />
          </Tabs>
          <IconButton size="small" onClick={(e) => setMenuAnchor(e.currentTarget)}>
            <MoreVertIcon sx={{ color: semantic.iconDisabled }} />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={() => setMenuAnchor(null)}
          >
            <MenuItem onClick={() => setMenuAnchor(null)}>Delete</MenuItem>
            <MenuItem onClick={() => setMenuAnchor(null)}>Edit</MenuItem>
          </Menu>
        </Box>
      </Box>

      <CardContent>
        {/* Stats row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <DonutProgress
              value={63}
              bgColor={palette.primary.main}
              bgColor2={isDark ? 'rgba(42,37,53,1)' : 'rgba(241,234,255,1)'}
            />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                246
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Total Projects
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 4, mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 13, height: 13, borderRadius: '50%', bgcolor: chartColors.yellowSoft, mt: 0.5 }} />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>246</Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>On Going</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 13, height: 13, borderRadius: '50%', bgcolor: palette.secondary.main, mt: 0.5 }} />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>28</Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>Unfinished</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Chart */}
        <ProjectBarChart />

        {/* Toggles */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, gap: 1 }}>
          <FormControlLabel
            control={<Switch defaultChecked size="small" color="primary" />}
            label={<Typography variant="body2">Number</Typography>}
          />
          <FormControlLabel
            control={<Switch defaultChecked size="small" color="primary" />}
            label={<Typography variant="body2">Analytics</Typography>}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectStatisticsCard;
