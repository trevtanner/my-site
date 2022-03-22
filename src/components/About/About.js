import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import BookIcon from "@mui/icons-material/Book";

import styles from "../../Home.module.css";

function about() {
  let paraStyle = { width: "85%", margin: "auto" };

  return (
    <Fragment>
      <Paper sx={{ maxWidth: "50%", margin: "auto" }}>
        <Typography
          variant="h2"
          sx={{ textDecoration: "underline", pb: ".5em", pt: "1em" }}
        >
          About Me
        </Typography>
      </Paper>
      <Grid container spacing={3} sx={{ pt: "1em", pb: ".5em" }}>
          <Grid item xs={12} md={6}>
        <Paper sx={{ maxWidth: '40vw', margin: 'auto' }}>
            <Avatar
              alt="Trevor Tanner"
              // Add photo of self
              src=""
              sx={{ width: 64, height: 64, margin: "auto" }}
            />
            <Typography variant="h4" pt=".5em">
              Who Am I?
            </Typography>
            <Typography variant="body1" sx={paraStyle}>
              Programming is my passion, and love to work and projects even in
              my free time. When I&apos;m not writing code I&apos;m working on
              my PC, or playing video games. My first job in the industry was
              working for Spectrum Cable, where I learned what was needed from a
              large company in an office setting. I am a self-taught developer
              with React however I have taken some Computer Programming college
              courses, and am working towards a Bachelor's Degree in the field.
              While this does present some challenges, I feel that it has helped
              me work through any problems I come across, and gives me a
              stronger base to work from. I do know that I am far from knowing
              everything, but I have learned some great tricks from researching
              my issues, and I'm sure they will lend to a great final product
              for any site I am working on.
            </Typography>
        </Paper>
          </Grid>
        <Grid item xs={12} md={6} sx={{ pb: "2em" }}>
        <Paper sx={{ maxWidth: '40vw', margin: 'auto' }}>
          <BookIcon sx={{ width: 64, height: 64 }} />
          <Typography variant="h4" pt=".5em" pb=".25em">
            My Top Libraries
          </Typography>
          {/* Link to pages for tools */}
          <Typography variant="h5">MUI</Typography>
          <Typography variant="body1" sx={paraStyle}>
            My most used library, almost all of my projects use it in some form
            to style my apps.
          </Typography>
          <Typography variant="h5">React Router</Typography>
          <Typography variant="body1" sx={paraStyle}>
            React Router always makes it so easy to set up multipage apps.
          </Typography>
          <Typography variant="h5">Animation Library</Typography>
          <Typography variant="body1" sx={paraStyle}>
            Looking for a new animation libaray with the recent React update
            rendering my pervious one obsolete.
          </Typography>
          <Typography variant="h5">Material Icons</Typography>
          <Typography variant="body1" sx={paraStyle}>
            Icons help any site go from boring text to an emersive experience.
            Material Icons has options for any icon you can think of.
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default about;
