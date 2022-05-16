// Importing external dependencies
import React from 'react';
import { Container, Button, Toolbar, Typography, Box, IconButton, Link, Paper } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import { Container, Button, Toolbar, Typography, Box, IconButton, Link, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import auth from '../utils/auth';




export default function NavBar() {

    const listItems = [

        {
            title: "Recipes",
            link: "/recipes",

        },
        {
            title: "Cooking",
            link: "/cooking",

        },
        {
            title: "Create Recipe",
            link: "/createRecipe",

        },
        {
            title: "Log Out",
            link: "/",
            onClick: function () {
                auth.logout();
            }
        },


    ];

    const fontFamily = [
        'Nunito',
        'Comforter',
        'Roboto'
    ].join(',');

    const styles = {
        navBar: {
            textAlign: "center",
            fontFamily: fontFamily,
            backgroundColor: "inherit",
            fontSize: "2rem",
        },
        logo: {
            fontFamily: fontFamily,
            backgroundColor: "inherit",
            fontWeight: "bold",
            fontSize: "2rem",
            color: "wheat"
        },
        button: {
            fontSize: "1.50rem",
            fontWeight: "bold",
            fontFamily: fontFamily,
            color: "wheat",
            borderRadius: "28px"

        },
        link: {
            textDecoration: "none",
            fontFamily: fontFamily,
            color: "rgb(32, 33, 36)",
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
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            style={styles.logo}

                        >
                            Cook Helper
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                onClick={handleOpenNavMenu}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon />
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
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            style={styles.button}
                        >
                            Cook Helper
                        </Typography>
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