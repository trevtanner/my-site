import { Route, Routes } from 'react-router-dom';

import Header from '../components/TDex/Header';
import Home from '../components/TDex/Home';
import PokedexEntry from '../components/TDex/PokedexEntry'
import Footer from '../layout/Footer';


function App() {
  return (
    <div>
    <Header />
    <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route path=':name' element={<PokedexEntry />}/>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;