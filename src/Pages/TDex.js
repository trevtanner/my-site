import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material'
import ScrollToTop from '../components/ScrollToTop'


import classes from './TDex.module.css';
import Header from '../components/TDex/Header';
import Home from '../components/TDex/Home';
import PokedexEntry from '../components/TDex/PokedexEntry'
import Footer from '../layout/Footer';


function App() {
  return (
    <div>
    <Header />
    <Container className={classes.body}>
      <ScrollToTop />
    <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route path=':name' element={<PokedexEntry />}/>
    </Routes>
    </Container>
    <Footer/>
   </div>
  );
}

export default App; 