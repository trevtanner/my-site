import { Fragment } from "react";
import styles from "../../Home.module.css"
import {
  LinearProgress,
  Box,
  Typography,
  Container,
} from "@mui/material";

import  HomeContact  from "../Forms/HomeContact";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';


export default function Homepage() {


  const reactValue = 90;
  const htmlcssValue = 95;
  const phpValue = 80;
  const laravelValue = 80;
  const sqlValue = 70;
  const oopValue = 65;
  const awsValue = 55;

  return (
    <Fragment>
      <div className={styles.homebg}>
        <div className={styles.imagetext}>
        <Typography variant="h1">Trevor Tanner</Typography>
        <Typography variant="h4">Full stack developer building stellar websites, one line at a time</Typography>
     </div>
      </div>
      <Container fluid sx={{ mb: "1em", mt: "1em" }}>
      <div>
      <ImportContactsIcon fontSize="large" />
        <Typography variant="h4" sx={{ pb: ".25em" }}>Knowledge Base</Typography>
        <Typography variant="body1" color="text.primary">
          React
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={reactValue} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {reactValue}%
          </Typography>
        </Box>
        <Typography variant="body1" color="text.primary">
          HTML/CSS
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={htmlcssValue}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {htmlcssValue}%
          </Typography>
        </Box>
        <Typography variant="body1" color="text.primary">
          PHP
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              color="success"
              value={phpValue}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {phpValue}%
          </Typography>
        </Box>
        <Typography variant="body1" color="text.primary">
          Laravel
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              color="primary"
              value={laravelValue}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {laravelValue}%
          </Typography>
        </Box>
        <Typography variant="body1" color="text.primary">
          SQL
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={sqlValue}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {sqlValue}%
          </Typography>
        </Box>
        <Typography variant="body1" color="text.primary">
          AWS
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              color="success"
              value={awsValue}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {awsValue}%
          </Typography>
        </Box>
        <Typography variant="body1" color="text.primary">
          Object-Oriented Programming
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              color="primary"
              value={oopValue}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {oopValue}%
          </Typography>
        </Box>
      </div>
        <HomeContact />
      </Container>
    </Fragment>
  );
}
