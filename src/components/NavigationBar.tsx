// components/NavigationBar.tsx
import React, { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ArrowDropDown } from '@mui/icons-material';

const NavigationBar: React.FC = () => {
  // State to manage each dropdown menu
  const [anchorEl, setAnchorEl] = useState<{ [key: string]: HTMLElement | null }>({
    categories: null,
    home: null,
    megaMenu: null,
    fullScreenMenu: null,
    pages: null,
    userAccount: null,
    vendorAccount: null,
  });

  // Handle opening a menu
  const handleMenuOpen = (event: MouseEvent<HTMLElement>, menu: string) => {
    setAnchorEl({ ...anchorEl, [menu]: event.currentTarget });
  };

  // Handle closing a menu
  const handleMenuClose = (menu: string) => {
    setAnchorEl({ ...anchorEl, [menu]: null });
  };

  // Menu items for each dropdown
  const menuItems = {
    categories: ['Electronics', 'Fashion', 'Home & Garden'],
    home: ['Home 1', 'Home 2'],
    megaMenu: ['Mega 1', 'Mega 2'],
    fullScreenMenu: ['Screen 1', 'Screen 2'],
    pages: ['About Us', 'Contact Us'],
    userAccount: ['Profile', 'Orders'],
    vendorAccount: ['Dashboard', 'Settings'],
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {/* Categories Dropdown */}
          <Box>
            <IconButton
              color="inherit"
              onClick={(event) => handleMenuOpen(event, 'categories')}
            >
              <Typography color="textPrimary">Categories</Typography>
              <ArrowDropDown />
            </IconButton>
            <Menu
              anchorEl={anchorEl.categories}
              open={Boolean(anchorEl.categories)}
              onClose={() => handleMenuClose('categories')}
            >
              {menuItems.categories.map((item) => (
                <MenuItem key={item} onClick={() => handleMenuClose('categories')}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* Repeat for other menu items */}
          {['home', 'megaMenu', 'fullScreenMenu', 'pages', 'userAccount', 'vendorAccount'].map((menu) => (
            <Box key={menu} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                onClick={(event) => handleMenuOpen(event, menu)}
                sx={{ cursor: 'pointer', color: 'black' }}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1).replace(/([A-Z])/g, ' $1').trim()}
              </Typography>
              <ArrowDropDown onClick={(event) => handleMenuOpen(event, menu)} sx={{ cursor: 'pointer', color: 'textPrimary' }} />
              <Menu
                anchorEl={anchorEl[menu]}
                open={Boolean(anchorEl[menu])}
                onClose={() => handleMenuClose(menu)}
              >
                {menuItems[menu].map((item) => (
                  <MenuItem key={item} onClick={() => handleMenuClose(menu)}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
