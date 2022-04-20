import * as React from 'react'
import classes from './Header.module.css'
import { Button, Typography, Box, AppBar, Toolbar, Grid } from '@mui/material'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#01579B' }}>
        <Grid container spacing={0}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Toolbar>
              {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { sm: 'block' } }}
                align="center"
              >
                TT Weather
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'end' }}>
            <Button component={Link} to="/" variant="contained" sx={{mt: '1em'}}>
              EXIT
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  )
}
