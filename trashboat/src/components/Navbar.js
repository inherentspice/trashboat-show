import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz Show
          </Typography>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={handleToggleDrawer}
          >
            <List>
              <Link href="/" passHref>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link href="/about" passHref>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="About" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link href="/contact" passHref>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link href="/quizzes" passHref>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Quizzes" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link href="/rules" passHref>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Rules" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
