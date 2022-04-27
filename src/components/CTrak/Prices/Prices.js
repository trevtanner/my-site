import { useState, useEffect } from "react";
import {
  Alert,
  CircularProgress,
  Grid,
  Typography,
  Card,
  Container,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import FadeIn from "react-fade-in";
import { Divider } from "semantic-ui-react";
import { motion } from "framer-motion";

const key = process.env.REACT_APP_NOMICS_API_KEY;

const Prices = () => {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinId, setCoinId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.nomics.com/v1/currencies/ticker?key=5a9bc4880b81834b30d8682851966e82126888f1&per-page=50&page=1'
        );
        const data = await response.json();
        setCoins(data);
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
      <Grid container justifyContent="center" sx={{ mt: "5em" }}>
        <CircularProgress />
      </Grid>
    );
  }

  const coinsList = coins.map((coin) => (
    <Grid item xs={6} md={4} key={coin.id}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 70 }}
            src={coin.logo_url}
            alt={coin.name}
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6">{coin.name}</Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {coin.symbol}
              </Typography>
              <Typography variant="body2">
                ${Number(coin.price).toFixed(2)}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </motion.div>
    </Grid>
  ));

  return (
    <Container sx={{ textAlign: "center" }}>
      <FadeIn>
        <Typography
          variant="h3"
          sx={{ pt: ".5em", pb: ".5em", textDecoration: "underline" }}
        >
          Top 50 Coins and Tokens
        </Typography>
        <Grid container spacing={4} sx={{ textAlign: "end" }}>
          {coinsList}
        </Grid>
        <Divider />
        <Typography
          variant="body1"
          sx={{ textAlign: "center", pt: ".5em", pb: ".5em" }}
        >
          Data pulled using <a href="https://nomics.com/">Nomics.com</a> API
        </Typography>
        {/* https://nomics.com/ */}
      </FadeIn>
    </Container>
  );
};

export default Prices;
