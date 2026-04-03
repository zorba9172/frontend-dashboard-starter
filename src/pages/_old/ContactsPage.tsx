import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Badge,
} from '@mui/material';
import { useTheme, alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VideocamIcon from '@mui/icons-material/Videocam';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { palette, semantic } from '../theme';

import pic1 from '../assets/images/profile/small/pic1.jpg';
import pic2 from '../assets/images/profile/small/pic2.jpg';
import pic3 from '../assets/images/profile/small/pic3.jpg';
import pic4 from '../assets/images/profile/small/pic4.jpg';
import pic5 from '../assets/images/profile/small/pic5.jpg';
import pic6 from '../assets/images/profile/small/pic6.jpg';
import pic7 from '../assets/images/profile/small/pic7.jpg';
import pic8 from '../assets/images/profile/small/pic8.jpg';
import pic9 from '../assets/images/profile/small/pic9.jpg';
import pic10 from '../assets/images/profile/small/pic10.jpg';

// ── Types ──
interface Contact {
  id: string;
  name: string;
  company: string;
  avatar: string;
  online: boolean;
}

// ── Online Badge ──
const OnlineBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: semantic.onlineColor,
    color: semantic.onlineColor,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: 12,
    height: 12,
    borderRadius: '50%',
  },
}));

// ── Sample Data ──
const initialContacts: Contact[] = [
  { id: '1', name: 'Jakob Gouse', company: 'Acme Corp', avatar: pic1, online: true },
  { id: '2', name: 'Gretchen Aminoff', company: 'Globex Inc', avatar: pic2, online: false },
  { id: '3', name: 'Davis Siphron', company: 'Soylent Corp', avatar: pic3, online: true },
  { id: '4', name: 'Zaire Lubin', company: 'Initech', avatar: pic4, online: true },
  { id: '5', name: 'Andi Lane', company: 'Umbrella Corp', avatar: pic5, online: false },
  { id: '6', name: 'Haylie Workman', company: 'Massive Dynamic', avatar: pic6, online: true },
  { id: '7', name: 'Randy Culhane', company: 'Hooli', avatar: pic7, online: false },
  { id: '8', name: 'Jocelyn Levin', company: 'Vehement Capital', avatar: pic8, online: true },
  { id: '9', name: 'Maren Torff', company: 'Aviato', avatar: pic9, online: false },
  { id: '10', name: 'Skylar Dias', company: 'Pied Piper', avatar: pic10, online: true },
  { id: '11', name: 'Dulce Herwitz', company: 'Raviga', avatar: pic1, online: false },
  { id: '12', name: 'Adison Press', company: 'Bachmanity', avatar: pic2, online: true },
];

const ContactsPage: React.FC = () => {
  const theme = useTheme();

  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuContactId, setMenuContactId] = useState<string | null>(null);

  // Add Dialog
  const [addOpen, setAddOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCompany, setNewCompany] = useState('');

  // Edit Dialog
  const [editOpen, setEditOpen] = useState(false);
  const [editName, setEditName] = useState('');
  const [editCompany, setEditCompany] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setMenuContactId(id);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuContactId(null);
  };

  const handleDelete = () => {
    if (menuContactId) {
      setContacts((prev) => prev.filter((c) => c.id !== menuContactId));
    }
    handleMenuClose();
  };

  const handleEditOpen = () => {
    const contact = contacts.find((c) => c.id === menuContactId);
    if (contact) {
      setEditId(contact.id);
      setEditName(contact.name);
      setEditCompany(contact.company);
      setEditOpen(true);
    }
    handleMenuClose();
  };

  const handleEditSave = () => {
    if (editId) {
      setContacts((prev) =>
        prev.map((c) => (c.id === editId ? { ...c, name: editName, company: editCompany } : c)),
      );
    }
    setEditOpen(false);
  };

  const handleAddSave = () => {
    if (newName.trim()) {
      const newContact: Contact = {
        id: Date.now().toString(),
        name: newName,
        company: newCompany,
        avatar: pic3,
        online: true,
      };
      setContacts((prev) => [newContact, ...prev]);
    }
    setNewName('');
    setNewCompany('');
    setAddOpen(false);
  };

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()),
  );

  const cardSx = {
    borderRadius: '0.625rem',
    bgcolor: theme.palette.background.paper,
  };

  const dialogPaperProps = {
    sx: {
      borderRadius: '0.625rem',
      bgcolor: theme.palette.background.paper,
      minWidth: 400,
    },
  };

  return (
    <Box sx={{ py: 2 }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Contacts
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
            size="small"
            placeholder="Search contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: theme.palette.text.secondary }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '0.625rem',
                bgcolor: alpha(theme.palette.text.primary, 0.04),
                '& fieldset': { borderColor: theme.palette.divider },
              },
            }}
          />
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
              whiteSpace: 'nowrap',
            }}
          >
            New Contact
          </Button>
        </Box>
      </Box>

      {/* Contact Grid */}
      <Grid container spacing={3}>
        {filtered.map((contact) => (
          <Grid key={contact.id} size={{ xs: 12, sm: 6, md: 6, xl: 3 }}>
            <Card sx={cardSx}>
              <CardContent sx={{ textAlign: 'center', p: 3, position: 'relative' }}>
                {/* Menu Button */}
                <IconButton
                  size="small"
                  onClick={(e) => handleMenuOpen(e, contact.id)}
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                  <MoreVertIcon sx={{ color: theme.palette.text.secondary, fontSize: 20 }} />
                </IconButton>

                {/* Avatar */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
                  {contact.online ? (
                    <OnlineBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                    >
                      <Avatar src={contact.avatar} sx={{ width: 64, height: 64 }} />
                    </OnlineBadge>
                  ) : (
                    <Avatar src={contact.avatar} sx={{ width: 64, height: 64 }} />
                  )}
                </Box>

                {/* Name & Company */}
                <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: theme.palette.text.primary, mb: 0.25 }}>
                  {contact.name}
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 2 }}>
                  {contact.company}
                </Typography>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  {[PhoneIcon, ChatBubbleOutlineIcon, VideocamIcon].map((Icon, i) => (
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
                      <Icon sx={{ fontSize: 18, color: palette.primary.main }} />
                    </IconButton>
                  ))}
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
            boxShadow: theme.shadows[4],
          },
        }}
      >
        <MenuItem onClick={handleEditOpen} sx={{ fontSize: '0.875rem' }}>Edit</MenuItem>
        <MenuItem onClick={handleDelete} sx={{ fontSize: '0.875rem', color: palette.danger.main }}>Delete</MenuItem>
      </Menu>

      {/* Add Contact Dialog */}
      <Dialog open={addOpen} onClose={() => setAddOpen(false)} PaperProps={dialogPaperProps}>
        <DialogTitle sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Add Contact
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '8px !important' }}>
          {/* Image Upload Area */}
          <Box
            sx={{
              border: `2px dashed ${theme.palette.divider}`,
              borderRadius: '0.625rem',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              '&:hover': { borderColor: palette.primary.main },
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 36, color: palette.primary.main }} />
            <Typography sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
              Upload Image
            </Typography>
          </Box>
          <TextField
            label="Name"
            size="small"
            fullWidth
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '0.625rem',
                '& fieldset': { borderColor: theme.palette.divider },
              },
            }}
          />
          <TextField
            label="Profile / Company"
            size="small"
            fullWidth
            value={newCompany}
            onChange={(e) => setNewCompany(e.target.value)}
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
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Contact Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)} PaperProps={dialogPaperProps}>
        <DialogTitle sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Edit Contact
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '8px !important' }}>
          <TextField
            label="Name"
            size="small"
            fullWidth
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '0.625rem',
                '& fieldset': { borderColor: theme.palette.divider },
              },
            }}
          />
          <TextField
            label="Profile / Company"
            size="small"
            fullWidth
            value={editCompany}
            onChange={(e) => setEditCompany(e.target.value)}
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
            onClick={() => setEditOpen(false)}
            sx={{ textTransform: 'none', color: theme.palette.text.secondary }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleEditSave}
            sx={{
              bgcolor: palette.primary.main,
              '&:hover': { bgcolor: palette.primary.dark },
              textTransform: 'none',
              borderRadius: '0.625rem',
              fontWeight: 600,
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactsPage;
