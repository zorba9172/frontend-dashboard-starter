import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  Chip,
  Button,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Collapse,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import { palette } from '../theme';

interface ContentItem {
  id: number;
  title: string;
  status: 'Published' | 'Draft' | 'Pending';
  modified: string;
}

const contentItems: ContentItem[] = [
  { id: 1, title: 'Welcome to Our Platform', status: 'Published', modified: 'Mar 15, 2026' },
  { id: 2, title: 'Privacy Policy', status: 'Published', modified: 'Mar 12, 2026' },
  { id: 3, title: 'Terms of Service', status: 'Draft', modified: 'Mar 10, 2026' },
  { id: 4, title: 'About Us', status: 'Published', modified: 'Mar 08, 2026' },
  { id: 5, title: 'FAQ Page', status: 'Pending', modified: 'Mar 05, 2026' },
  { id: 6, title: 'Contact Information', status: 'Published', modified: 'Mar 02, 2026' },
  { id: 7, title: 'Refund Policy', status: 'Draft', modified: 'Feb 28, 2026' },
  { id: 8, title: 'Shipping Guidelines', status: 'Pending', modified: 'Feb 25, 2026' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  Published: { bg: alpha(palette.success.main, 0.15), color: palette.success.main },
  Draft: { bg: alpha(palette.warning.main, 0.15), color: palette.warning.dark },
  Pending: { bg: alpha(palette.info.main, 0.15), color: palette.info.main },
};

const ContentPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Content Management
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FilterListIcon />}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            Filters
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ borderRadius: 50 }}
          >
            Add Content
          </Button>
        </Box>
      </Box>

      {/* Filter Section */}
      <Collapse in={filterOpen}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <TextField label="Title" placeholder="Search by title" sx={{ minWidth: 200 }} />
              <Select
                size="small"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                displayEmpty
                sx={{ minWidth: 150 }}
              >
                <MenuItem value="">All Status</MenuItem>
                <MenuItem value="Published">Published</MenuItem>
                <MenuItem value="Draft">Draft</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </Select>
              <TextField label="Date" type="date" slotProps={{ inputLabel: { shrink: true } }} sx={{ minWidth: 160 }} />
              <Button variant="contained" color="primary">Filter</Button>
              <Button variant="outlined" color="primary">Remove</Button>
            </Box>
          </CardContent>
        </Card>
      </Collapse>

      {/* Content Table */}
      <Card>
        <CardContent sx={{ p: 0 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>S.No</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Modified</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contentItems.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>{item.title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={item.status}
                      size="small"
                      sx={{
                        bgcolor: statusColors[item.status].bg,
                        color: statusColors[item.status].color,
                        fontWeight: 600,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">{item.modified}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: palette.primary.main }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: palette.danger.main }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
            <Pagination
              count={5}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContentPage;
