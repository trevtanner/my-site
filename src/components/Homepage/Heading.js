import styles from "../../Home.module.css";
import {
  Typography,
} from "@mui/material";

function Heading() {
    return (
        <>
        <div className={styles.homebg}>
        <div className={styles.imagetext}>
          <Typography variant="h1">Trevor Tanner</Typography>
          <Typography variant="h3">
            Full stack developer
          </Typography>
          <Typography variant="h5">
          Building stellar websites // One line at a time
          </Typography>
        </div>
      </div>
      </>
    )
}

export default Heading;