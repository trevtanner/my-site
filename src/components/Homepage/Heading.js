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
          <Typography variant="h4">
            Full stack developer building stellar websites, one line at a time
          </Typography>
        </div>
      </div>
      </>
    )
}

export default Heading;