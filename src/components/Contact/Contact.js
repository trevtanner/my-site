import { Container, Grid, Typography, Paper } from "@mui/material";
import classes from "./Contact.module.css";
import SendIcon from "@mui/icons-material/Send";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { motion } from "framer-motion";

function about() {
  const IconButton = styled(ButtonBase)(({ theme }) => ({
    minWidth: "30vw",
  }));

  return (
    <Container sx={{ pt: "4em", pb: '5.5em' }} id="contact">
      <Grid container spacing={5} className={classes.main}>
        <Grid item xs={12} sx={{ color: "black" }}>
          <AllInboxIcon sx={{ width: 56, height: 56 }} />
          <Typography variant="h4">How to Reach Me</Typography>
        </Grid>
          <Grid item xs={12} sm={12} md={6}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton sx={{ width: "70%" }}>
              <Paper
                component="a"
                href="mailto:trevor@trevorstanner.com?subject=Reaching Out"
                elevation={12}
                sx={{
                  backgroundColor: "#39393A",
                  color: "white",
                  width: "90%",
                }}
                className={classes.contactButton}
              >
                <SendIcon sx={{ pt: ".25em" }} />
                <Typography variant="h6" pb=".25em">
                  Send me an Email
                </Typography>
              </Paper>
            </IconButton>
        </motion.div>
          </Grid>
        <Grid item xs={12} sm={12} md={6}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton sx={{ width: "70%" }}>
            <Paper
              component="a"
              href="../Resume/TrevorTannerResume.pdf"
              elevation={12}
              sx={{ width: "90%", backgroundColor: "#39393A", color: "white" }}
              className={classes.contactButton}
              download
            >
              <FilePresentIcon sx={{ pt: ".25em" }} />
              <Typography variant="h6" pb=".25em">
                Download Resume
              </Typography>
            </Paper>
          </IconButton>
      </motion.div>
        </Grid>
      </Grid>
      <Grid container spacing={6} sx={{ pt: "3em", pb: "1em" }}>
        <Grid item xs={12} sm={12} md={12}>
          <Paper
            sx={{
              maxWidth: "50vw",
              margin: "auto",
              pb: ".5em",
              backgroundColor: "#39393A",
              color: "white",
            }}
          >
            <AccessTimeIcon sx={{ width: 56, height: 56, mt: ".25em" }} />
            <Typography variant="h4" sx={{ pb: ".15em" }}>
              Tireless Work
            </Typography>
            <Typography variant="body2" sx={{ width: "80%", margin: "auto" }}>
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
