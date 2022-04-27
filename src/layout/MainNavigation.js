import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import classes from './MainNavigation.module.css'
import { Avatar } from '@mui/material'
import TTlogo from '../assets/TTlogoBlkBG50.jpg'

function MainNavigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }


  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const scrollToAbout = (event) => {
    event.preventDefault();
    document.getElementById("about").scrollIntoView({behavior: "smooth" })
  }

  const scrollToPortfolio = (event) => {
    event.preventDefault();
    document.getElementById("portfolio").scrollIntoView({behavior: "smooth"})
  }

  const scrollToContact = (event) => {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
  }

  return (
    <AppBar
      position="sticky"
      className={classes.contain}
      sx={{ backgroundColor: '#2C2C2C' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Avatar src={TTlogo}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
                <Typography textAlign="right">
                  <Button sx={{ display: 'block' }} onClick={scrollToTop}>
                    Home
                  </Button>
                  <Button sx={{ display: 'block' }} onClick={scrollToAbout}>About</Button>
                  <Button sx={{ display: 'block' }} onClick={scrollToPortfolio}>Portfolio</Button>
                  <Button sx={{ display: 'block' }} onClick={scrollToContact}>Contact</Button>
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
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            TT Web Development
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={scrollToTop}>
              Home
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={scrollToAbout}>
              About
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={scrollToPortfolio}>
              Portfolio
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={scrollToContact}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default MainNavigation
