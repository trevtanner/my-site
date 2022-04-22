import React from "react";
import classes from "./Heading.module.css";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar, Button, Container, Typography, Grid } from "@mui/material";

const Heading = (props) => {
  return (
    <Box position="sticky" sx={{ }}>
    <AppBar position="sticky" sx={{ backgroundColor: '#1B2A41' }}>
      <Toolbar>
        <Grid container>
          <Grid item xs={5} sx={{ textAlign: 'start' }}> 
          <Button component={Link} to='/c-trak' color='inherit' size='small'>Tracker</Button>
          <Button component={Link} to='/c-trak/prices' color='inherit' size='small'>Prices</Button>
          <Button component={Link} to='/c-trak/resources' color='inherit' size='small'>Resources</Button>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            noWrap
            component="div"
          >
            C-Trak
          </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: 'end' }}>
            <Button component={Link} to="/" variant="contained" color='error' size='small'>
              EXIT
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </Box>


    /* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1B2A41' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            C-Trak
          </Typography>
          <Button component={Link} to='/c-trak' color='inherit' size='small'>Tracker</Button>
          <Button component={Link} to='/c-trak/prices' color='inherit' size='small'>Prices</Button>
          <Button component={Link} to='/c-trak/resources' color='inherit' size='small'>Resources</Button>
        <Button component={Link} to='/' color='inherit' size='small'>Exit</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </Box> */


    /* <header className={classes.title}>
        <div class="ui inverted secondary pointing menu">
          <div className="header item">
            <h1>{process.env.REACT_APP_TITLE}</h1>
          </div>
          <Link to="/c-trak" className="item">
            Tracker
          </Link>
          <Link to="/c-trak/prices" className="item">
            Prices
          </Link>
          <Link to="/c-trak/resources" className="item">
            Resources
          </Link>
        </div>

    </header> */
  );
};

export default Heading;

//styling
//get login button working to bring up modal with login form
