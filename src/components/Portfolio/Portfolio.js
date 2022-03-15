import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

import classes from "./Portfolio.module.css";
import styles from "../../Home.module.css"

function Portfolio() {
  return (
    <Fragment>
       <div className={styles.portfoliobg}>
       <div className={styles.imagetextportfolio}>
       <Typography variant="h1">My Previous Projects</Typography>
       <Typography variant="h3">Get an idea of my skills and expertise</Typography>
       </div>
      </div>

      <Container>
        <div className={classes.header}>
        </div>
        <div>
          <h2>Site Building: Bringing Your Ideas to Life</h2>
          <p>
            Building website is my passion and I will work tirelessly to get you
            the site that you want. Whether its for personal use, your business,
            or even an online store; I know I have the tools and ideas to take
            your site to the next level. I take pride in my work, and I like to
            think it shines in my previous projects. Each project is started
            from scratch, thus each website is unique and open to any
            customizations to make your site truly personal. I am a self taught
            developer with Vue.js and Laravel, however I have taken some
            Computer Programming college courses, and am working towards a
            Bachelor&apos;s Degree in the field. While being self-taught does
            present some challenges, I feel that it has helped me work through
            any problems I come across, and gives me a stronger base to work
            from. I do know that I am far from knowing everything, but I have
            learned some great tricks from researching my issues, and I'm sure
            they will lend to a great final product for any site I am working
            on.
          </p>
        </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card
              sx={{ minWidth: 100, backgroundColor: "#00838f", color: "white" }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className={classes.header}
                >
                  C-Trak
                </Typography>
                <Typography variant="body1">Crypto Assest Tracker</Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" variant="contained">
                    Open
                  </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{ minWidth: 100, backgroundColor: "#00838f", color: "white" }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className={classes.header}
                >
                  TT Weather
                </Typography>
                <Typography variant="body1">Weather App</Typography>
              </CardContent>
              <CardActions>
                <Button
                  href="portfolio/tt-weather"
                  size="small"
                  variant="contained"
                >
                  Open
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{ minWidth: 100, backgroundColor: "#00838f", color: "white" }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className={classes.header}
                >
                  Charater Creator
                </Typography>
                <Typography variant="body1">
                  The start to an incredible adventure...
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href="portfolio/ttverse"
                  size="small"
                  variant="contained"
                >
                  Open
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Portfolio;
