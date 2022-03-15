import './App.css';
import Layout from './layout/layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Homepage from './components/Homepage/Homepage';



function App() {
  return (
    <Layout>
    <div className="App">
      <Homepage />
    <About />
    <Portfolio />
    <Resume />
    <Contact />
    </div>
    </Layout>
  );
}

export default App;
