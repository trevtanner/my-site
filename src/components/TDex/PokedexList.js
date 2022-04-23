import {
  Box,
  List,
  Alert,
  Grid,
  CircularProgress,
  Button,
  Divider
} from "@mui/material";
import { useEffect, useState } from "react";
import DexListItem from "./DexListItem";

function PokedexList() {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  const [type, setType] = useState("");

  //https://bigsondev.com/blog/how-to-fetch-data-in-react-using-pokeapi/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151/"
        );
        const data = await response.json();

        setEntries(data.results);
      } catch (e) {
        setError(e.message || "Something went wrong");
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (loading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  }

  const pokemonList = entries.map((entry) => (
    <>
      <DexListItem
        key={entry.url}
        name={entry.name}
        number={entries.indexOf(entry)}
      />
      <Divider />
    </>
  ));

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "700px", margin: "auto" }}>
      <nav aria-label="">
        <List>
          {/* {data.map((item) => (
            <DexListItem
              key={item.number}
              id={`# ${item.number}`}
              name={item.name}
              firstType={item.types.map((type) => (
                type.first
              ))}
              secondType={item.types.map((type) => (
                type.second
              ))}
            />
          ))} */}
          {pokemonList}
        </List>
      </nav>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: "2em", backgroundColor: "red" }}
        onClick={scrollToTop}
      >
        TOP
      </Button>
    </Box>
  );
}
export default PokedexList;
