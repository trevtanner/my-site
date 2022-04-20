import * as React from 'react'
import classes from './Header.module.css'
import {
  Button,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  MenuIcon,
} from '@mui/material'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box position="sticky" sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'red' }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { sm: 'block' } }}
                align="center"
              >
                <Link to="/t-dex" className={classes.heading}>
                  Syrins Pokedex
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'end' }}>
              <Button component={Link} to="/" variant="contained">
                EXIT
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
