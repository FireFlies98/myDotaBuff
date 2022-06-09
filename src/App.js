import React from 'react';
import './App.scss';
import { Footer, Header, HeroStats, Home, LogIn, UnderDevelopment } from './components';
import Logic from './containers/Logic'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route path='/' element={<Home />} />
          <Route path='/heroes' element={<Logic />} />
          <Route path='heroes/:Id' element={<HeroStats />} />
          <Route path='/under_development' element={<UnderDevelopment />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
