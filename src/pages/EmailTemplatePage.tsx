import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import { palette } from '../theme';

interface EmailTemplate {
  id: number;
  title: string;
  active: boolean;
  modified: string;
}

const templates: EmailTemplate[] = [
  { id: 1, title: 'Welcome Email', active: true, modified: 'Mar 20, 2026' },
  { id: 2, title: 'Password Reset', active: true, modified: 'Mar 18, 2026' },
  { id: 3, title: 'Order Confirmation', active: true, modified: 'Mar 15, 2026' },
  { id: 4, title: 'Newsletter', active: false, modified: 'Mar 10, 2026' },
  { id: 5, title: 'Account Verification', active: true, modified: 'Mar 08, 2026' },
];

const EmailTemplatePage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Email Templates
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
          >
            New Email Template
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
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
              <TextField label="Date" type="date" slotProps={{ inputLabel: { shrink: true } }} sx={{ minWidth: 160 }} />
              <Button variant="contained" color="primary">Filter</Button>
              <Button variant="outlined" color="primary">Remove</Button>
            </Box>
          </CardContent>
        </Card>
      </Collapse>

      {/* Templates Table */}
      <Card>
        <CardContent sx={{ p: 0 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Sr.No</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Status</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Modified</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {templates.map((template) => (
                <TableRow key={template.id} hover>
                  <TableCell>{template.id}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>{template.title}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    {template.active ? (
                      <CheckCircleIcon sx={{ color: palette.success.main }} />
                    ) : (
                      <CancelIcon sx={{ color: palette.danger.main }} />
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">{template.modified}</Typography>
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
              count={3}
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

export default EmailTemplatePage;
