import {
  AppBar,
  Box,
  Container,
  InputBase,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Select,
  MenuItem,
  SelectChangeEvent,
  styled,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search as SearchIcon,
  Person as PersonIcon,
  ShoppingCart as CartIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import NavigationBar from '@/components/NavigationBar.tsx'; // Import the new NavigationBar

// Styled Components
const AnnouncementBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#1F2937',
  color: 'white',
  padding: theme.spacing(0.5),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F3F4F6',
  borderRadius: theme.spacing(0.5),
  flex: 1,
  maxWidth: '600px',
}));

const Header = () => {
  const [category, setCategory] = useState('All Categories');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Announcement Bar */}
      <AnnouncementBar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            component="span"
            sx={{
              backgroundColor: '#C81E1E',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              mr: 1,
              fontSize: '0.875rem',
              fontWeight: 'bold',
            }}
          >
            HOT
          </Typography>
          <Typography variant="body2">Free Express Shipping</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Select
            value="EN"
            size="small"
            sx={{
              color: 'white',
              '& .MuiSelect-icon': { color: 'white' },
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            }}
          >
            <MenuItem value="EN">EN</MenuItem>
            <MenuItem value="ES">ES</MenuItem>
          </Select>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" sx={{ color: 'white' }}>
              <Image src="/x.webp" alt="Twitter" width={16} height={16} />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <Image src="/ig-instagram-icon.svg" alt="Facebook" width={16} height={16} />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <Image src="/fb.svg" alt="Instagram" width={16} height={16} />
            </IconButton>
          </Box>
        </Box>
      </AnnouncementBar>

      {/* Main Header */}
      <AppBar position="static" color="inherit" elevation={0}>
        <Container maxWidth="lg">
          <StyledToolbar>
            {/* Logo */}
            <Link href="/logo2.svg" style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/logo2.svg" alt="Bazaar" width={120} height={40} />
            </Link>

            {/* Search */}
            <SearchBox>
              <InputBase placeholder="Searching for..." sx={{ ml: 2, flex: 1 }} />
              <Select
                value={category}
                onChange={handleCategoryChange}
                sx={{
                  minWidth: 150,
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                }}
              >
                <MenuItem value="All Categories">All Categories</MenuItem>
              </Select>
              <IconButton sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>
            </SearchBox>

            {/* User Actions */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton>
                <PersonIcon />
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="error">
                  <CartIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={toggleMobileMenu} sx={{ display: { md: 'none' } }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>

      {/* Navigation for larger screens */}
      <NavigationBar /> {/* Replace the existing NavigationBar with the new component */}

      {/* Mobile Drawer Menu */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleMobileMenu}>
        <Box
          sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}
          role="presentation"
          onClick={toggleMobileMenu}
          onKeyDown={toggleMobileMenu}
        >
          <IconButton sx={{ alignSelf: 'flex-end', m: 1 }}>
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem button component={Link} href="/home">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} href="/mega-menu">
              <ListItemText primary="Mega Menu" />
            </ListItem>
            <ListItem button component={Link} href="/full-screen-menu">
              <ListItemText primary="Full Screen Menu" />
            </ListItem>
            <ListItem button component={Link} href="/pages">
              <ListItemText primary="Pages" />
            </ListItem>
            <ListItem button component={Link} href="/user-account">
              <ListItemText primary="User Account" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
