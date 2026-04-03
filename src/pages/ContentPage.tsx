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
  Collapse,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { palette } from '../theme';

interface ContentItem {
  id: number;
  title: string;
  status: 'Published' | 'Draft' | 'Trash' | 'Private' | 'Pending';
  modified: string;
}

const contentItems: ContentItem[] = [
  { id: 1, title: 'Privacy Policy', status: 'Published', modified: '20 May 2024' },
  { id: 2, title: 'Contact Us', status: 'Published', modified: '25 May 2024' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  Published: { bg: alpha(palette.success.main, 0.15), color: palette.success.main },
  Draft: { bg: alpha(palette.warning.main, 0.15), color: palette.warning.dark },
  Trash: { bg: alpha(palette.danger.main, 0.15), color: palette.danger.main },
  Private: { bg: alpha(palette.info.main, 0.15), color: palette.info.main },
  Pending: { bg: alpha(palette.warning.main, 0.15), color: palette.warning.dark },
};

const ContentPage: React.FC = () => {
  const theme = useTheme();
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState('');

  return (
    <Box sx={{ py: 2 }}>
      {/* Filter Toggle + Add Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setFilterOpen(!filterOpen)}
        >
          Add Content
        </Button>
      </Box>

      {/* Collapsible Filter Section */}
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
                <MenuItem value="Trash">Trash</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </Select>
              <TextField
                label="Date"
                type="date"
                slotProps={{ inputLabel: { shrink: true } }}
                sx={{ minWidth: 160 }}
              />
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

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Showing 1-2 of 2
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContentPage;
