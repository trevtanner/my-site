import { Container, List, ListItemText, Grid, Button, Typography } from "@mui/material";
import { Fragment } from "react";
import classes from "./Contact.module.css";
import styles from "../../Home.module.css";
import SendIcon from '@mui/icons-material/Send';
import FilePresentIcon from '@mui/icons-material/FilePresent';


function about() {
  return (
    <Container fixed>
          <Typography variant="h4">Need More?</Typography>
      <Grid container spacing={4} className={classes.main}>
        <Grid item xs={6}>
          <Typography variant="h6">Send me an Email</Typography>
          <SendIcon />
        </Grid>
        <Grid item xs={6}sx={{ overflowWrap: "break-word", wordWrap: "break-word"}}>
        <Typography variant="h6">View my Resume</Typography>
          <FilePresentIcon />
        </Grid>

      </Grid>
    </Container>
  );
}

export default about;
