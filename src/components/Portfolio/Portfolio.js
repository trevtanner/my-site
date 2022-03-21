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
import PreviousWork from "./PreviousWork";

function Portfolio() {
  return (
    <Fragment>
      <Container>
        <PreviousWork/>
      </Container>
    </Fragment>
  );
}

export default Portfolio;
