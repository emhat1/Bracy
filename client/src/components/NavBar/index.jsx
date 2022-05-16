// Importing external dependencies
import React from 'react';
import { Container, Button, Toolbar, Typography, Box, IconButton, Link, Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';

// Importing internal dependencies
import Auth from '../../utils/auth';



export default function NavBar() {

    const listItems = [

        {
            title: "Home",
            link: "/pages/Home",
        },
        {
            title: "Breeds",
            link: "/pages/Information",
        },
        {
            title: "Message Board",
            link: "/pages/Messages",
        },
        {
            title: "Rescue Organisations",
            link: "/pages/Rescues",
        },
        {
            title: "Login",
            link: "/pages/Login",
        },
        {
            title: "Signup",
            link: "/pages/Signup",
        },
        {
            title: "Profile",
            link: "/pages/Profile",
        },
        {
            title: "Log Out",
            link: "/",
            onClick: function () {
                Auth.logout();
            }
        },


    ];

    const fontFamily = [
        'Arvo', 
        'serif'
      ].join(',');

    const styles = {
        navBar: {
            textAlign: "center",
            fontFamily: fontFamily,
            backgroundColor: "#F3D2C1",
            color: "#001858",
            fontSize: "2rem",
        },
        logo: {
            fontFamily: fontFamily,
            backgroundColor: "#F3D2C1",
            color: "#001858",
            fontWeight: "bold",
            fontSize: "2rem",

        },
        button: {
            fontSize: "1.50rem",
            fontWeight: "bold",
            fontFamily: fontFamily,
            backgroundColor: "#F3D2C1",
            color: "#001858",
            borderRadius: "28px"

        },
        link: {
            textDecoration: "none",
            fontFamily: fontFamily,
            color: "#001858",
            fontWeight: 'bold'

        }
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const open = Boolean(anchorElNav);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        <>
            <AppBar position="static" style={styles.navBar} elevation={0} maxwidth="xl">
                <Container maxwidth="xl">
                    <Toolbar disableGutters>
                         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                onClick={handleOpenNavMenu}
                                aria-haspopup="true"
                                color="inherit"
                            >
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={open}
                                onClose={handleCloseNavMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'block', md: 'none' },
                                }}
                            >
                                {listItems.map((listItem, i) => (
                                    <Paper elevation={0} key={i}>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">

                                                <Link
                                                    onClick={listItem.onClick || (() => { })}
                                                    href={listItem.link} style={styles.link}>{listItem.title}</Link>
                                           </Typography>
                                        </MenuItem>
                                    </Paper>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={styles.button}>
                            {listItems.map((listItem, i) => (
                                <Button
                                    key={i}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    href={listItem.link}
                                    style={styles.button}
                                >
                                    {listItem.title}
                                </Button>
                            ))}
                        </Box>
                        </Toolbar>
                </Container>
            </AppBar>
        </>

    )
}