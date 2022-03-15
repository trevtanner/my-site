import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import classes from './MainNavigation.module.css'

function MainNavigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className={classes.contain}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            TT Development and Design
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
            <MenuItem>
            <Typography textAlign="right">
        <Button sx={{display: "block" }}>Home</Button>
        <Button sx={{display: "block" }}>About</Button>
        <Button sx={{display: "block" }}>Portfolio</Button>
        <Button sx={{display: "block" }}>Resume</Button>
        <Button sx={{display: "block" }}>Contact</Button>
        </Typography>
            </MenuItem>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="right">
                    <Link href={page}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            TT Web Development and Design
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button sx={{ my: 2, color: "white", display: "block" }}>Home</Button>
        <Button  sx={{ my: 2, color: "white", display: "block" }}>About</Button>
        <Button sx={{ my: 2, color: "white", display: "block" }}>Portfolio</Button>

        <Button  sx={{ my: 2, color: "white", display: "block" }}>Resume</Button>

        <Button  sx={{ my: 2, color: "white", display: "block" }}>Contact</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainNavigation;
