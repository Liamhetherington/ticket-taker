import React from 'react';
import './scss/styles.scss';

import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';



const App = () => {
  return (
    <div className="App">
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
