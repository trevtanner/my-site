import {
  Container,
  List,
  ListItemText,
  Grid,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { Fragment } from "react";
import classes from "./Contact.module.css";
import styles from "../../Home.module.css";
import SendIcon from "@mui/icons-material/Send";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';







function about() {
  
  const IconButton = styled(ButtonBase)(({ theme }) => ({
    minWidth: '30vw',
  }));

  return (
    <Container sx={{ p: '1em' }}>
      <Grid container spacing={5} className={classes.main}>
        <Grid item xs={12} sx={{color: '#FEFEFA'}}>
          <AllInboxIcon sx={{ width: 56, height: 56 }} />
          <Typography variant="h4">How to Reach Me</Typography>
        </Grid>
        <Grid item xs={6}>
        <IconButton>
        <Paper elevation={12} sx={{ backgroundColor: '#39393A', color: '#FEFEFA', width: '100%' }} className={classes.contactButton}>
          <SendIcon sx={{ pt: '.25em' }}/>
          <Typography variant="h6" pb='.25em'>Send me an Email</Typography>
          </Paper>
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <IconButton>
        <Paper elevation={12} sx={{ width: '100%', margin: 'auto', backgroundColor: '#39393A', color: '#FEFEFA' }} className={classes.contactButton}>
          <FilePresentIcon sx={{ pt: '.25em' }}/>
          <Typography variant="h6" pb='.25em'>View my Resume</Typography>
          </Paper>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={6} sx={{ pt: "3em", pb: "1em" }}>
        <Grid item xs={12} md={12}>
        <Paper sx={{ maxWidth: '50vw', margin: 'auto', pb: '.5em', backgroundColor: 'transparent', color: '#FEFEFA' }}>
            <AccessTimeIcon sx={{ width: 56, height: 56, mt: '.25em' }} />
            <Typography variant="h4" sx={{ pb: ".15em" }}>
              Tireless Work
            </Typography>
            <Typography varaiant="body1" sx={{ width: "80%", margin: "auto" }}>
              I will work day and night to get the product created that you want
              and fits your needs. Always built to your specifications and
              paired with unrivaled support.
            </Typography>
            </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default about;
