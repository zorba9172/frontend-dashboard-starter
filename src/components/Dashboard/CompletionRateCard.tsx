import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CompletionLineChart } from '../../charts';
import { semantic } from '../../theme';

const CompletionRateCard: React.FC = () => {
  const theme = useTheme();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  return (
    <Card>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          pt: 3,
          pb: 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
          Completion Project Rate
        </Typography>
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
      <CardContent sx={{ pb: 0 }}>
        <CompletionLineChart />
      </CardContent>
    </Card>
  );
};

export default CompletionRateCard;
