import React from 'react';
import './App.css';
import { Footer, Header, HeroStats, Home, LogIn } from './components';
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
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
