import './App.css'
import Layout from './layout/layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Heading from './components/Homepage/Heading'
import ScrollToTop from './components/ScrollToTop'

import styles from './Home.module.css'
import KnowledgeBase from './components/Homepage/KnowledgeBase'
import PreviousWork from './components/Portfolio/PreviousWork'
import { Box } from '@mui/system'

function App() {
  function handleBackClick(props) {
    props.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout>
      <Heading />
      <div className="App">
        <Box fluid className={styles.knowledgebg} />
        <div id="about" />
          <About />
          <Box
            sx={{
              backgroundColor: '#39393A',
              pb: '3em',
              width: '100%',
              color: '#FEFEFA',
            }}
          >
            <div id="portfolio">
            <KnowledgeBase />
            <PreviousWork />
        </div>
          </Box>
          <div id="contact">
        <Contact />
        </div>
      </div>
      <ScrollToTop />
    </Layout>
  )
}

export default App
