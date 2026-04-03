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
  Collapse,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import { palette } from '../theme';

interface EmailTemplate {
  id: number;
  title: string;
  active: boolean;
  modified: string;
}

const templates: EmailTemplate[] = [
  { id: 1, title: 'Store Admin Registration', active: true, modified: '20 May 2024' },
  { id: 2, title: 'Create Store', active: true, modified: '25 May 2024' },
];

const EmailTemplatePage: React.FC = () => {
  const theme = useTheme();
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState('');

  return (
    <Box sx={{ py: 2 }}>
      {/* Header with Add Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          New Email Template
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
                    <IconButton size="small" sx={{ color: palette.success.main }}>
                      <CheckCircleIcon fontSize="small" />
                    </IconButton>
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

export default EmailTemplatePage;
