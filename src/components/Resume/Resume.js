import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Fragment } from "react";

import styles from "../../Home.module.css"

function Resume() {
  return (
    <Fragment>
     <div className={styles.resumebg}>

      </div>
    <Container>
      <div>
        <Typography variant="h4">Trevor Tanner: The Paperwork</Typography>
        <Typography variant="p">
          The best way to get to know my skills is to look over my previous work
          on my Portfolio Page. I&apos;m always going back and tweaking little things
          in my projects; so I&apos;m constantly updating them with anything new I
          learn. If you like more of a list of my abilities with programming
          then this is the place. You can download my resume above and I lay out
          my skills and other relevant information below. As always please feel
          free to Contact Me with any questions/inquires.
          </Typography>
      </div>
      <div>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
      My Knowledge
      </Typography>
      <TableContainer component={Paper} sx={{ background: "grey" }}>
      <Table sx={{ minWidth: 650}} aria-label="Knowledge Table">
        {/* <TableHead>
            <TableCell align="center" colSpan={12}><h2>My Knowledge</h2></TableCell>
        </TableHead> */}
        <TableBody >
            <TableRow
              key="row1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    
            >
              <TableCell align="center" ><h3>Everyday Use</h3></TableCell>
              <TableCell align="center" ><h3>Previous Experience</h3></TableCell>
            </TableRow>
            <TableRow
              key="row1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" >HTML/CSS</TableCell>
              <TableCell align="center" >Visual Studio // Visual Basic</TableCell>
            </TableRow>
            <TableRow
              key="row1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" >JS (Vue, React, Next)</TableCell>
              <TableCell align="center" >Java</TableCell>
            </TableRow>
            <TableRow
              key="row1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" >PHP/Laravel</TableCell>
              <TableCell align="center" >C</TableCell>
            </TableRow>
            <TableRow
              key="row1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" >Laravel Forge // DigitalOcean</TableCell>
              <TableCell align="center" >Linux Based OS</TableCell>
            </TableRow>
            <TableRow
              key="row1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" >Github // Version Control</TableCell>
              <TableCell align="center" >SQL</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </Container>
    </Fragment>

  );
}

export default Resume;
