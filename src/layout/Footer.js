import { Button, Container, AppBar, Typography } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import classes from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <AppBar
      position="static"
      className={classes.contain}
      sx={{ backgroundColor: "#222733", pt: '1em' }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4">
          Building great websites for all of your needs.
        </Typography>
        <Typography variant="h5" sx={{ fontStyle: "italic" }}>
          Let&apos;s get started today.
        </Typography>
        {/* <Container sx={{ padding: '.5em' }}>
        <Button variant="outlined" size="small" className={classes.links}>
          Home
        </Button>

        <Button variant="outlined" size="small" className={classes.links}>
          About
        </Button>

        <Button variant="outlined" size="small" className={classes.links}>
          Portfolio
        </Button>

        <Button variant="outlined" size="small" className={classes.links}>
          Resume
        </Button>

        <Button variant="outlined" size="small" className={classes.links}>
          Contact
        </Button>
        </Container> */}
          <GitHubIcon
            fontSize="large"
            className={classes.icons}
            target="https://www.github.com"
          />

          <TwitterIcon fontSize="large" className={classes.icons} />

          <LinkedInIcon fontSize="large" className={classes.icons} />

          {/* <Link href="mailto:trevor.tanner.developer@gmail.com" passHref> */}
          <EmailIcon fontSize="large" className={classes.icons} />
          {/* </Link> */}
        <Typography variant="body1">
          Full stack developer using React.js along with Next.js to build
          stunning single and multi page apps.
        </Typography>
        <Typography variant="body2">
          Trevor Tanner© {currentYear} Copyright TT Web Development and Design
          <Button className={classes.links}>Privacy Policy</Button>
        </Typography>
      </Container>
    </AppBar>
  );
}

export default Footer;
