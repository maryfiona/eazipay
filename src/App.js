import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'; 
import Business from './Others/Business'
import LandingPage from './Others/LandingPage'
import HowItWorks from './Others/HowItWorks'
import Advert from './Others/Advert'
import Demo from './Others/Demo';
import Footer from './Components/Footer';


function App() {
  return (
   <React.Fragment>
    <Navbar />
    <LandingPage />
    <Business />
    <HowItWorks />
    <Advert />
    <Demo />
    <Footer />

   
  





   </React.Fragment>
  );
}

export default App;
