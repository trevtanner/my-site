import { Grid, TextField, Box, Button } from "@mui/material";

function HomeContact() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
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
          <TextField id="name" label="Name" />
          <TextField id="email" label="E-mail" />
          <TextField id="phone" label="Phone" />
          <TextField id="comment" label="Message" multiline rows={4} />
          <br />
          <Button variant="contained">Submit</Button>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <p>
          The best way to get a hold of me is to send me an email at
          trevor.tanner.developer@gmail.com. However, if it cannot wait, you can
          fill out this form and I will get back to you as soon as I can.
        </p>
      </Grid>
    </Grid>
  );
}

export default HomeContact;
