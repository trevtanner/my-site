import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResumePdf from './components/Resume/ResumePdf';
import Privacy from './Pages/Privacy';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/resume' element={<ResumePdf />} />
      <Route path='/privacy' element={<Privacy />} />
      {/* <Route path='/c-trak' element={<CTrak />} />
      <Route path='/t-dex' element={<TDexIndex />} /> */}

    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

