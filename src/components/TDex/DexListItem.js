import {
  ListItem,
  Avatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./DexListItem.module.css";
import { motion } from "framer-motion";

function DexListItem(props) {
  function fixNames(name) {
    if (name === "nidoran-f") {
      return (name = "Nidoran");
    }
    if (name === "nidoran-m") {
      return (name = "Nidoran");
    }
    if (name === "mr-mime") {
      return (name = "Mr. Mime");
    }
    if (name === "farfetchd") {
      return (name = "Farfetch'd");
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }

  function fixNumber(number) {
    number = number + 1;
    number = ("00" + number).slice(-3);
    return number;
  }

  return (
    <>
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <ListItem component={Link} to={`/t-dex/${props.name}`}>
        <ListItemButton>
          <Avatar
            src={`https://img.pokemondb.net/sprites/bank/normal/${props.name}.png`}
            sx={{ paddingRight: "20px", width: 64, height: 64 }}
          />
          <ListItemText
            primary={fixNames(props.name)}
            className={classes.name}
          />
          <ListItemText
            secondary={`# ${fixNumber(props.number)}`}
            sx={{ textAlign: "end" }}
          />
        </ListItemButton>
      </ListItem>
    </motion.div>
    </>
  );
}

export default DexListItem;
