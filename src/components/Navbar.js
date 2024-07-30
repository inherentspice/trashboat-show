import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme(); // Hook to access the theme

    const handleToggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="bg-primary">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="black"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleToggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <p className="text-black text-xl">Trashgoat</p>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={handleToggleDrawer}
                sx={{ '& .MuiDrawer-paper': { backgroundColor: theme.palette.background.default } }}
            >
                <List>
                    <Link href="/home" passHref>
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
                    <Link href="/answers" passHref>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Answers" />
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
        </Box>
    );
};

export default Navbar;
