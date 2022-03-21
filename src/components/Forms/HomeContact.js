import { Grid, TextField, Box, Button, Typography } from "@mui/material";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

function HomeContact() {
  return (
   <>
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
        </>
  );
}

export default HomeContact;
