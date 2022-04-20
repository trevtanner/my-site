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
import { Fragment, useRef } from "react";
import { Box } from "@mui/system";


function App() {

function handleBackClick(props) {
  props.current.scrollIntoView({ behavior: 'smooth' })
}


  return (
    <Layout>
      <Heading />
      <div className="App">
        <Box fluid className={styles.knowledgebg} />
          <About />
          <Box
            sx={{
              backgroundColor: "#39393A",
              pb: "3em",
              width: "100%",
              color: '#FEFEFA'
            }}
          >
            <KnowledgeBase/>
            <PreviousWork/>
          </Box>
          <Contact/>
      </div>
    </Layout>
  );
}

export default App;
