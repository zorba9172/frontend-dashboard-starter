import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { palette, semantic } from '../theme';
import pic3 from '../assets/images/profile/small/pic3.jpg';
import pic4 from '../assets/images/profile/small/pic4.jpg';
import pic5 from '../assets/images/profile/small/pic5.jpg';
import pic6 from '../assets/images/profile/small/pic6.jpg';
import pic7 from '../assets/images/profile/small/pic7.jpg';
import pic8 from '../assets/images/profile/small/pic8.jpg';

// ── Types ──
interface Task {
  id: string;
  taskId: string;
  title: string;
  createdDate: string;
  deadline: string;
  clientName: string;
  clientAvatar: string;
  image: string;
}

// ── Placeholder task images (gradient boxes) ──
const taskGradients = [
  `linear-gradient(135deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
  'linear-gradient(135deg, #FFA26D 0%, #FFCF6D 100%)',
  'linear-gradient(135deg, #4dedf5 0%, #480ceb 100%)',
  'linear-gradient(135deg, #51f5ae 0%, #3fbcda 100%)',
  `linear-gradient(135deg, ${palette.danger.main} 0%, ${palette.secondary.main} 100%)`,
  `linear-gradient(135deg, ${palette.info.main} 0%, ${palette.primary.main} 100%)`,
];

// ── Sample Data ──
const initialTasks: Task[] = [
  {
    id: '1',
    taskId: '#T-00125',
    title: 'Website Redesign Homepage',
    createdDate: 'Sep 20, 2024',
    deadline: 'Dec 15, 2024',
    clientName: 'Jakob Gouse',
    clientAvatar: pic3,
    image: '',
  },
  {
    id: '2',
    taskId: '#T-00126',
    title: 'Mobile App UI Design',
    createdDate: 'Oct 1, 2024',
    deadline: 'Jan 10, 2025',
    clientName: 'Gretchen Aminoff',
    clientAvatar: pic4,
    image: '',
  },
  {
    id: '3',
    taskId: '#T-00127',
    title: 'API Integration Module',
    createdDate: 'Oct 12, 2024',
    deadline: 'Dec 28, 2024',
    clientName: 'Davis Siphron',
    clientAvatar: pic5,
    image: '',
  },
  {
    id: '4',
    taskId: '#T-00128',
    title: 'Payment Gateway Setup',
    createdDate: 'Nov 3, 2024',
    deadline: 'Feb 1, 2025',
    clientName: 'Zaire Lubin',
    clientAvatar: pic6,
    image: '',
  },
  {
    id: '5',
    taskId: '#T-00129',
    title: 'Admin Dashboard Charts',
    createdDate: 'Nov 15, 2024',
    deadline: 'Jan 20, 2025',
    clientName: 'Andi Lane',
    clientAvatar: pic7,
    image: '',
  },
  {
    id: '6',
    taskId: '#T-00130',
    title: 'Email Template Builder',
    createdDate: 'Dec 1, 2024',
    deadline: 'Mar 5, 2025',
    clientName: 'Haylie Workman',
    clientAvatar: pic8,
    image: '',
  },
];

const TaskPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuTaskId, setMenuTaskId] = useState<string | null>(null);

  // Add Task Dialog
  const [addOpen, setAddOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDeadline, setNewDeadline] = useState('');
  const [newClient, setNewClient] = useState('');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setMenuTaskId(id);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuTaskId(null);
  };

  const handleDelete = () => {
    if (menuTaskId) {
      setTasks((prev) => prev.filter((t) => t.id !== menuTaskId));
    }
    handleMenuClose();
  };

  const handleAddSave = () => {
    if (newTitle.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        taskId: `#T-${String(Math.floor(Math.random() * 99999)).padStart(5, '0')}`,
        title: newTitle,
        createdDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        deadline: newDeadline || 'TBD',
        clientName: newClient || 'Unassigned',
        clientAvatar: pic3,
        image: '',
      };
      setTasks((prev) => [newTask, ...prev]);
    }
    setNewTitle('');
    setNewDeadline('');
    setNewClient('');
    setAddOpen(false);
  };

  const cardSx = {
    borderRadius: '0.625rem',
    boxShadow: isDark ? '0 0 2.5rem rgba(0,0,0,0.3)' : '0 0 2.5rem rgba(82,63,105,0.1)',
    bgcolor: theme.palette.background.paper,
    overflow: 'hidden',
  };

  return (
    <Box sx={{ py: 2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Tasks
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setAddOpen(true)}
          sx={{
            bgcolor: palette.primary.main,
            '&:hover': { bgcolor: palette.primary.dark },
            textTransform: 'none',
            borderRadius: '0.625rem',
            fontWeight: 600,
          }}
        >
          Add New Task
        </Button>
      </Box>

      {/* Task Grid */}
      <Grid container spacing={3}>
        {tasks.map((task, index) => (
          <Grid key={task.id} size={{ xs: 12, sm: 6, xl: 4 }}>
            <Card sx={cardSx}>
              {/* Task Image / Gradient Placeholder */}
              <CardMedia
                component="div"
                sx={{
                  height: 140,
                  background: taskGradients[index % taskGradients.length],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: palette.primary.contrastText, fontWeight: 700, fontSize: '1.5rem', opacity: 0.5 }}>
                  {task.taskId}
                </Typography>
              </CardMedia>

              <CardContent sx={{ p: 2.5 }}>
                {/* Top Row */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Box>
                    <Typography sx={{ fontSize: '0.75rem', color: palette.primary.main, fontWeight: 600, mb: 0.25 }}>
                      {task.taskId}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: theme.palette.text.primary }}>
                      {task.title}
                    </Typography>
                  </Box>
                  <IconButton size="small" onClick={(e) => handleMenuOpen(e, task.id)}>
                    <MoreVertIcon sx={{ color: semantic.iconDisabled, fontSize: 20 }} />
                  </IconButton>
                </Box>

                {/* Dates */}
                <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary, mb: 0.25 }}>
                      Created
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 500, color: theme.palette.text.primary }}>
                      {task.createdDate}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary, mb: 0.25 }}>
                      Deadline
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 500, color: theme.palette.text.primary }}>
                      {task.deadline}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ borderColor: theme.palette.divider, mb: 2 }} />

                {/* Client */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar src={task.clientAvatar} sx={{ width: 28, height: 28 }} />
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 500, color: theme.palette.text.primary }}>
                      {task.clientName}
                    </Typography>
                  </Box>

                  {/* Action Icons */}
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {[EmailOutlinedIcon, PhoneOutlinedIcon, InfoOutlinedIcon].map((Icon, i) => (
                      <IconButton
                        key={i}
                        size="small"
                        sx={{
                          width: 28,
                          height: 28,
                          bgcolor: alpha(palette.primary.main, 0.1),
                          '&:hover': { bgcolor: alpha(palette.primary.main, 0.2) },
                        }}
                      >
                        <Icon sx={{ fontSize: 14, color: palette.primary.main }} />
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.paper,
            borderRadius: '0.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          },
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '0.875rem' }}>Edit</MenuItem>
        <MenuItem onClick={handleDelete} sx={{ fontSize: '0.875rem', color: palette.danger.main }}>Delete</MenuItem>
      </Menu>

      {/* Add Task Dialog */}
      <Dialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: '0.625rem',
            bgcolor: theme.palette.background.paper,
            minWidth: 420,
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Add New Task
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '8px !important' }}>
          <TextField
            label="Task Title"
            size="small"
            fullWidth
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '0.625rem',
                '& fieldset': { borderColor: theme.palette.divider },
              },
            }}
          />
          <TextField
            label="Deadline"
            size="small"
            fullWidth
            placeholder="e.g. Jan 15, 2025"
            value={newDeadline}
            onChange={(e) => setNewDeadline(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '0.625rem',
                '& fieldset': { borderColor: theme.palette.divider },
              },
            }}
          />
          <TextField
            label="Client Name"
            size="small"
            fullWidth
            value={newClient}
            onChange={(e) => setNewClient(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '0.625rem',
                '& fieldset': { borderColor: theme.palette.divider },
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setAddOpen(false)}
            sx={{ textTransform: 'none', color: theme.palette.text.secondary }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleAddSave}
            sx={{
              bgcolor: palette.primary.main,
              '&:hover': { bgcolor: palette.primary.dark },
              textTransform: 'none',
              borderRadius: '0.625rem',
              fontWeight: 600,
            }}
          >
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TaskPage;
