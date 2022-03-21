import "./App.css";
import Layout from "./layout/layout";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Heading from "./components/Homepage/Heading";
import { Container } from "@mui/material";

import styles from "./Home.module.css";
import KnowledgeBase from "./components/Homepage/KnowledgeBase";
import PreviousWork from "./components/Portfolio/PreviousWork";
import { Fragment } from "react";
import { Box } from "@mui/system";

function App() {
  return (
    <Layout>
      <Heading />
      <div className="App">
        <Box fluid className={styles.knowledgebg}>
          <About />
          <Box
            sx={{
              backgroundColor: "white",
              pb: "2em",
              width: "100%",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <KnowledgeBase />
            <PreviousWork />
          </Box>
          <Contact />
        </Box>
      </div>
    </Layout>
  );
}

export default App;
