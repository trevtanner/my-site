import { Container, List, ListItemText, Grid, Button } from "@mui/material";
import { Fragment } from "react";
import classes from "./Contact.module.css";
import styles from "../../Home.module.css";



function about() {
  return (
    <Fragment>
     <div className={styles.contactbg}> 

      </div>
    <Container fluid>
      <Grid container spacing={4} className={classes.main}>
        <Grid item xs={4}>
          <h2>Do any of these apply to you?</h2>
        </Grid>
        <Grid item xs={4}>
          <List>
            <ListItemText primary="FAQ" />
            <ListItemText primary="Have a question about a built website?" />
            <ListItemText primary="Interest in me building your website?" />
            <ListItemText primary="A current client with a question about your product?" />
            <ListItemText primary="You have feedback you would like me to see?" />
            <ListItemText primary="Looking to give me a job?" />
          </List>
        </Grid>
        <Grid item xs={4}>
          <p>
            If so, please click here:
            <br />
            <Button
              variant="contained"
              href=""
              className={classes.button}
            >
              Contact Me
            </Button>
            <br />
            to send me a message, or reach out to me at
            trevor.tanner.developer@gmail.com at your convenience.
          </p>
        </Grid>
      </Grid>
    </Container>
    </Fragment>
  );
}

export default about;
