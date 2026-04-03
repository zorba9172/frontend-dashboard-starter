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
import { palette } from '../theme';

interface BlogItem {
  id: number;
  title: string;
  status: 'Published' | 'Draft' | 'Pending';
  modified: string;
}

const blogItems: BlogItem[] = [
  { id: 1, title: 'Getting Started with React', status: 'Published', modified: 'Mar 20, 2026' },
  { id: 2, title: 'Advanced TypeScript Patterns', status: 'Published', modified: 'Mar 18, 2026' },
  { id: 3, title: 'Building Scalable APIs', status: 'Draft', modified: 'Mar 15, 2026' },
  { id: 4, title: 'CSS Grid vs Flexbox', status: 'Published', modified: 'Mar 12, 2026' },
  { id: 5, title: 'State Management Best Practices', status: 'Pending', modified: 'Mar 10, 2026' },
  { id: 6, title: 'Testing React Components', status: 'Draft', modified: 'Mar 08, 2026' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  Published: { bg: alpha(palette.success.main, 0.15), color: palette.success.main },
  Draft: { bg: alpha(palette.warning.main, 0.15), color: palette.warning.dark },
  Pending: { bg: alpha(palette.info.main, 0.15), color: palette.info.main },
};

const BlogPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Blog Management
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<FilterListIcon />}
          onClick={() => setFilterOpen(!filterOpen)}
        >
          Filters
        </Button>
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

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <Button variant="contained" color="primary">
          Add Blog
        </Button>
        <Button variant="outlined" color="primary">
          Blog Category
        </Button>
        <Button variant="outlined" color="primary">
          Add Blog Category
        </Button>
      </Box>

      {/* Blog Table */}
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
              {blogItems.map((item) => (
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

export default BlogPage;
