import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { palette, semantic } from '../theme';
import img1 from '../assets/images/task/img1.jpg';
import img2 from '../assets/images/task/img2.jpg';
import img3 from '../assets/images/task/img3.jpg';
import img4 from '../assets/images/task/img4.jpg';
import img5 from '../assets/images/task/img5.jpg';
import img6 from '../assets/images/task/img6.jpg';
import img7 from '../assets/images/task/img7.jpg';
import img8 from '../assets/images/task/img8.jpg';

// ── Types ──
interface Task {
  id: number;
  image: string;
  Cust_Id: string;
  title: string;
  Date_Join: string;
  deadlineDate: string;
  Cust_Name: string;
  Location: string;
}

// ── Sample Data ──
const initialTasks: Task[] = [
  { id: 1, image: img1, Cust_Id: '#C01234', title: 'Redesign Landing Page', Date_Join: '19 Jan 2021', deadlineDate: '30 Jan 2021', Cust_Name: 'Massed Lzem', Location: 'New York' },
  { id: 2, image: img2, Cust_Id: '#C01235', title: 'Build CRM Dashboard', Date_Join: '20 Jan 2021', deadlineDate: '15 Feb 2021', Cust_Name: 'Tomas Adam', Location: 'Los Angeles' },
  { id: 3, image: img3, Cust_Id: '#C01236', title: 'Mobile App Prototype', Date_Join: '22 Jan 2021', deadlineDate: '28 Feb 2021', Cust_Name: 'Sarah Wilson', Location: 'Chicago' },
  { id: 4, image: img4, Cust_Id: '#C01237', title: 'API Integration', Date_Join: '25 Jan 2021', deadlineDate: '10 Mar 2021', Cust_Name: 'David Brown', Location: 'Houston' },
  { id: 5, image: img5, Cust_Id: '#C01238', title: 'Payment Module', Date_Join: '28 Jan 2021', deadlineDate: '20 Mar 2021', Cust_Name: 'Emily Chen', Location: 'Phoenix' },
  { id: 6, image: img6, Cust_Id: '#C01239', title: 'Analytics Dashboard', Date_Join: '1 Feb 2021', deadlineDate: '25 Mar 2021', Cust_Name: 'James Miller', Location: 'Philadelphia' },
  { id: 7, image: img7, Cust_Id: '#C01240', title: 'Email Campaign Tool', Date_Join: '5 Feb 2021', deadlineDate: '30 Mar 2021', Cust_Name: 'Olivia Davis', Location: 'San Antonio' },
  { id: 8, image: img8, Cust_Id: '#C01241', title: 'User Settings Page', Date_Join: '10 Feb 2021', deadlineDate: '5 Apr 2021', Cust_Name: 'Robert Garcia', Location: 'San Diego' },
];

const TaskPage: React.FC = () => {
  const theme = useTheme();

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuTaskId, setMenuTaskId] = useState<number | null>(null);

  // Add dialog state
  const [addOpen, setAddOpen] = useState(false);
  const [addForm, setAddForm] = useState({ Cust_Id: '', deadlineDate: '', Cust_Name: '', Location: '' });
  const [addPreview, setAddPreview] = useState<string | null>(null);

  // Edit dialog state
  const [editOpen, setEditOpen] = useState(false);
  const [editForm, setEditForm] = useState<Task | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setMenuTaskId(id);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuTaskId(null);
  };

  const handleDelete = () => {
    if (menuTaskId !== null) {
      setTasks((prev) => prev.filter((t) => t.id !== menuTaskId));
    }
    handleMenuClose();
  };

  const handleEdit = () => {
    const task = tasks.find((t) => t.id === menuTaskId);
    if (task) {
      setEditForm({ ...task });
      setEditOpen(true);
    }
    handleMenuClose();
  };

  const handleEditSave = () => {
    if (editForm) {
      setTasks((prev) => prev.map((t) => (t.id === editForm.id ? editForm : t)));
    }
    setEditOpen(false);
    setEditForm(null);
  };

  const handleAddSave = () => {
    const newTask: Task = {
      id: Date.now(),
      image: img1,
      Cust_Id: addForm.Cust_Id || '#C00000',
      title: 'New Task',
      Date_Join: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      deadlineDate: addForm.deadlineDate || 'TBD',
      Cust_Name: addForm.Cust_Name || 'Unassigned',
      Location: addForm.Location || 'Unknown',
    };
    setTasks((prev) => [newTask, ...prev]);
    setAddForm({ Cust_Id: '', deadlineDate: '', Cust_Name: '', Location: '' });
    setAddPreview(null);
    setAddOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAddPreview(URL.createObjectURL(file));
    }
  };

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.625rem',
      '& fieldset': { borderColor: theme.palette.divider },
    },
  };

  return (
    <Box sx={{ py: 2 }}>
      {/* Top bar */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setAddOpen(true)}
          sx={{
            textTransform: 'none',
            borderRadius: '1.75rem',
            fontWeight: 500,
            px: 3,
          }}
        >
          Add New Task
        </Button>
      </Box>

      {/* Task Cards Grid */}
      <Grid container spacing={3}>
        {tasks.map((task) => (
          <Grid key={task.id} size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
            <Card>
              {/* Task Image */}
              <CardMedia
                component="img"
                image={task.image}
                alt={task.title}
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                {/* Top: ID + dropdown */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: palette.primary.main,
                        mb: 0.25,
                      }}
                    >
                      {task.Cust_Id}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {task.title}
                    </Typography>
                  </Box>
                  <IconButton size="small" onClick={(e) => handleMenuOpen(e, task.id)}>
                    <MoreVertIcon sx={{ color: semantic.iconMuted, fontSize: 20 }} />
                  </IconButton>
                </Box>

                {/* Date */}
                <Typography
                  sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}
                >
                  {task.Date_Join}
                </Typography>

                {/* Deadline */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                  <CalendarTodayOutlinedIcon
                    sx={{ fontSize: 14, color: theme.palette.text.secondary }}
                  />
                  <Typography sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                    Deadline: {task.deadlineDate}
                  </Typography>
                </Box>

                {/* Client */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                  <PersonOutlineIcon
                    sx={{ fontSize: 14, color: theme.palette.text.secondary }}
                  />
                  <Typography sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                    {task.Cust_Name}
                  </Typography>
                </Box>

                {/* Location */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 14, color: theme.palette.text.secondary }}
                  />
                  <Typography sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                    {task.Location}
                  </Typography>
                </Box>

                {/* Action buttons row */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {[EmailOutlinedIcon, PhoneOutlinedIcon, InfoOutlinedIcon].map((Icon, i) => (
                    <IconButton
                      key={i}
                      size="small"
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: alpha(palette.primary.main, 0.1),
                        '&:hover': { bgcolor: alpha(palette.primary.main, 0.2) },
                      }}
                    >
                      <Icon sx={{ fontSize: 16, color: palette.primary.main }} />
                    </IconButton>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: palette.danger.main }}>
          Delete
        </MenuItem>
      </Menu>

      {/* Add Task Dialog */}
      <Dialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
        PaperProps={{ sx: { borderRadius: '0.625rem', minWidth: 440 } }}
      >
        <DialogTitle sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Add Task
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '8px !important' }}>
          {/* File upload */}
          <Box>
            <Button
              variant="outlined"
              component="label"
              sx={{
                textTransform: 'none',
                borderColor: theme.palette.divider,
                color: theme.palette.text.secondary,
                width: '100%',
                py: 2,
                borderRadius: '0.625rem',
              }}
            >
              Upload Image
              <input type="file" hidden accept="image/*" onChange={handleFileChange} />
            </Button>
            {addPreview && (
              <Box
                component="img"
                src={addPreview}
                sx={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: '0.625rem', mt: 1 }}
              />
            )}
          </Box>
          <TextField
            label="Customer Id"
            size="small"
            fullWidth
            value={addForm.Cust_Id}
            onChange={(e) => setAddForm((f) => ({ ...f, Cust_Id: e.target.value }))}
            sx={textFieldSx}
          />
          <TextField
            label="Deadline Date"
            size="small"
            fullWidth
            value={addForm.deadlineDate}
            onChange={(e) => setAddForm((f) => ({ ...f, deadlineDate: e.target.value }))}
            sx={textFieldSx}
          />
          <TextField
            label="Client (Cust_Name)"
            size="small"
            fullWidth
            value={addForm.Cust_Name}
            onChange={(e) => setAddForm((f) => ({ ...f, Cust_Name: e.target.value }))}
            sx={textFieldSx}
          />
          <TextField
            label="Location"
            size="small"
            fullWidth
            value={addForm.Location}
            onChange={(e) => setAddForm((f) => ({ ...f, Location: e.target.value }))}
            sx={textFieldSx}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setAddOpen(false)}
            sx={{ textTransform: 'none', color: theme.palette.text.secondary }}
          >
            Discard
          </Button>
          <Button
            variant="contained"
            onClick={handleAddSave}
            sx={{ textTransform: 'none', borderRadius: '0.625rem', fontWeight: 600 }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Task Dialog */}
      <Dialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        PaperProps={{ sx: { borderRadius: '0.625rem', minWidth: 440 } }}
      >
        <DialogTitle sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Edit Task
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '8px !important' }}>
          <TextField
            label="Customer Id"
            size="small"
            fullWidth
            value={editForm?.Cust_Id ?? ''}
            onChange={(e) => setEditForm((f) => f ? { ...f, Cust_Id: e.target.value } : f)}
            sx={textFieldSx}
          />
          <TextField
            label="Deadline Date"
            size="small"
            fullWidth
            value={editForm?.deadlineDate ?? ''}
            onChange={(e) => setEditForm((f) => f ? { ...f, deadlineDate: e.target.value } : f)}
            sx={textFieldSx}
          />
          <TextField
            label="Client (Cust_Name)"
            size="small"
            fullWidth
            value={editForm?.Cust_Name ?? ''}
            onChange={(e) => setEditForm((f) => f ? { ...f, Cust_Name: e.target.value } : f)}
            sx={textFieldSx}
          />
          <TextField
            label="Location"
            size="small"
            fullWidth
            value={editForm?.Location ?? ''}
            onChange={(e) => setEditForm((f) => f ? { ...f, Location: e.target.value } : f)}
            sx={textFieldSx}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setEditOpen(false)}
            sx={{ textTransform: 'none', color: theme.palette.text.secondary }}
          >
            Discard
          </Button>
          <Button
            variant="contained"
            onClick={handleEditSave}
            sx={{ textTransform: 'none', borderRadius: '0.625rem', fontWeight: 600 }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TaskPage;
