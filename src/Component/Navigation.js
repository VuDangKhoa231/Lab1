import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, matchPath, useLocation, useParams, useMa, useMatch } from 'react-router-dom';



const pages = [
    { id: 1, name: 'Phim lẻ', titleURL: 'phimle' },
    { id: 2, name: 'Phime Bộ', titleURL: 'phimbo' },
    { id: 3, name: 'News', titleURL: 'news' },
    { id: 4, name: 'About us', titleURL: 'about' },
    { id: 5, name: 'Contact', titleURL: 'contact' }
];


export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    const location = useLocation();
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [openDrawer, setOpenDrawer] = useState(false);



    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };
    return (
        <AppBar position="sticky" sx={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0px 2px 4px -1px ${dark === 'dark' ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0.2)'}` }}>
            <Container maxWidth='100%'>
                <Toolbar disableGutters>
                    {/* Navigation - Left */}
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 4, ml: 2,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Link to='/'>
                            <LiveTvIcon fontSize='large' color='error' />
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>


                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 0,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'red',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to='/'>
                            <LiveTvIcon fontSize='large' color='error' />
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <NavigationLink key={page.id} page={page} color={theme.color} />
                        ))}
                    </Box>

                    {/* Navigation-Right */}
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton component="a"
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer" sx={{ borderRadius: '50%', mr: 1.3, backgroundColor: '#F3F4F6', color: 'blue', ':hover': { backgroundColor: '#F3F4F6' } }}>
                            <FacebookOutlinedIcon fontSize='medium' />
                        </IconButton>
                        <IconButton onClick={toggle} sx={{ borderRadius: '50%', mr: 1.3, backgroundColor: '#F3F4F6', color: 'black', ':hover': { backgroundColor: '#F3F4F6' } }}>
                            <BrightnessHighIcon fontSize='medium' />
                        </IconButton>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            <Drawer
                sx={{maxHeight: '100%'}}
                variant="temporary"
                anchor="left"
                open={openDrawer}
                onClose={handleDrawerClose}
            >
                <Box sx={{ backgroundColor: theme.backgroundColor, color: theme.color, backdropFilter: 'blur(8px)' }}>
                    <List>
                        {pages.map((page) => (
                            <Link to={page.titleURL} key={page.id} style={{ textDecoration: 'none' , color: theme.color}}>
                                <ListItem key={page}>
                                    <ListItemText primary={page.name} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>


    )
}

function NavigationLink({ page, color }) {
    const match = useMatch(page.titleURL);
    const isActive = match ? true : false;

    return (
        <Link
            to={page.titleURL}
            key={page.id}
            style={{
                my: 2,
                margin: '0 10px',
                color: isActive ? 'red' : color,
                display: 'block',
                textDecoration: 'none',
            }}
        >
            <Typography sx={{ fontWeight: 700 }}>
                {page.name}
            </Typography>
        </Link>
    );
}