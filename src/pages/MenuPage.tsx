import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteIcon from '@mui/icons-material/Delete';
import { palette } from '../theme';

interface MenuEntry {
  id: number;
  label: string;
  indent: number;
}

const availableItems = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];

const currentMenuItems: MenuEntry[] = [
  { id: 1, label: 'Home', indent: 0 },
  { id: 2, label: 'About', indent: 0 },
  { id: 3, label: 'Our Team', indent: 1 },
  { id: 4, label: 'Our Story', indent: 1 },
  { id: 5, label: 'Services', indent: 0 },
  { id: 6, label: 'Web Development', indent: 1 },
  { id: 7, label: 'UI/UX Design', indent: 1 },
  { id: 8, label: 'Portfolio', indent: 0 },
  { id: 9, label: 'Blog', indent: 0 },
  { id: 10, label: 'Contact', indent: 0 },
];

const MenuPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [selectedMenu, setSelectedMenu] = useState('main');
  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (item: string) => {
    setChecked((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        Menu Management
      </Typography>

      {/* Menu selector */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
            Select Menu
          </Typography>
          <Select
            size="small"
            value={selectedMenu}
            onChange={(e) => setSelectedMenu(e.target.value)}
            sx={{ minWidth: 250 }}
          >
            <MenuItem value="main">Main Menu</MenuItem>
            <MenuItem value="footer">Footer Menu</MenuItem>
            <MenuItem value="sidebar">Sidebar Menu</MenuItem>
          </Select>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Left Column - Available items */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Available Items
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {availableItems.map((item) => (
                  <FormControlLabel
                    key={item}
                    control={
                      <Checkbox
                        checked={checked.includes(item)}
                        onChange={() => handleToggle(item)}
                        sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }}
                      />
                    }
                    label={item}
                  />
                ))}
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={checked.length === 0}
              >
                Add to Menu
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Current menu structure */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Menu Structure
              </Typography>
              <List disablePadding>
                {currentMenuItems.map((item) => (
                  <ListItem
                    key={item.id}
                    sx={{
                      pl: 2 + item.indent * 4,
                      mb: 0.5,
                      borderRadius: 1,
                      border: `1px solid ${theme.palette.divider}`,
                      bgcolor: item.indent > 0
                        ? alpha(palette.primary.main, 0.04)
                        : 'transparent',
                    }}
                    secondaryAction={
                      <IconButton edge="end" size="small" sx={{ color: palette.danger.main }}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    }
                  >
                    <IconButton size="small" sx={{ mr: 1, cursor: 'grab', color: theme.palette.text.secondary }}>
                      <DragIndicatorIcon fontSize="small" />
                    </IconButton>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontWeight: item.indent === 0 ? 600 : 400 }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Save Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" color="primary" size="large">
          Save Menu
        </Button>
      </Box>
    </Box>
  );
};

export default MenuPage;
