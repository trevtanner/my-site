import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import classes from './MainNavigation.module.css'
import { Avatar } from '@mui/material'
import TTlogo from '../assets/TTlogoBlkBG50.jpg'
import { Link } from 'react-router-dom'

function MainNavigation() {

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
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            TT Web Development
          </Typography>
          <Box className={classes.privacyButton}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} component={Link} to='/'>
              Exit
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default MainNavigation
