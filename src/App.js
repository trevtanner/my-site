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
const homeRef = useRef();
const aboutRef = useRef();
const portfolioRef = useRef();
const contactRef = useRef();

function handleBackClick(props) {
  props.current.scrollIntoView({ behavior: 'smooth' })
}


  return (
    <Layout>
      <Heading ref={homeRef}/>
      <div className="App">
        <Box fluid className={styles.knowledgebg}>
          <About ref={aboutRef}/>
          <Box
            sx={{
              backgroundColor: "#39393A",
              pb: "2em",
              width: "100%",
              paddingLeft: 0,
              paddingRight: 0,
              color: '#FEFEFA'
            }}
          >
            <KnowledgeBase/>
            <PreviousWork ref={portfolioRef}/>
          </Box>
          <Contact ref={contactRef}/>
        </Box>
      </div>
    </Layout>
  );
}

export default App;
