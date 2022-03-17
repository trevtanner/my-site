import { Grid, TextField, Box, Button, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

function HomeContact() {
  return (
    <Grid container spacing={3} sx={{ pt: "1em", pb: ".5em" }}>
      <Grid item xs={12} md={4}>
        <Box>
        <AccessTimeIcon sx={{ width: 56, height: 56 }}/>
          <Typography variant="h4" sx={{ pb: ".15em" }}>Tireless Work</Typography>
          <Typography varaiant="body1" sx={{ width: "70%", margin: "auto" }}>
            I will work day and night to get the product created that you want
            and fits your needs. Always built to your specifications and paired with unrivaled support.
          </Typography>
        </Box>
      </Grid>
            <Grid item xs={12} md={4} sx={{ }}>
      <AllInboxIcon sx={{ width: 56, height: 56 }}/>
        <Typography variant="h4">How to Reach Me</Typography>
        <Typography variant="body1" sx={{ width: "70%", margin: "auto"  }}>
          The best way to get a hold of me is to send me an email at
          trevor.tanner.developer@gmail.com. However, if it cannot wait, you can
          fill out this form and I will get back to you as soon as I can.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
      <SpeakerNotesIcon sx={{ width: 56, height: 56 }}/>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "90%", maxWidth: "25em" },
            display: "block",
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          {/* connect to firebase to send data from mesg, and change 
          display to show a thank you message using state */}
          {/* Look into adding ability to limit requests sent from same ip to avoid DDoS attacks */}
          <TextField id="name" label="Name" size="small"/>
          <TextField id="email" label="E-mail" size="small"/>
          <TextField id="phone" label="Phone" size="small"/>
          <TextField id="comment" label="Message" multiline rows={4} size="small"/>
          <br />
          <Button variant="contained" sx={{ mt: '.5em' }}>Submit</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default HomeContact;
