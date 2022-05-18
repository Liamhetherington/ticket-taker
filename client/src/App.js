import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './scss/styles.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage.jsx';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={ <LandingPage /> } />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
