import React from 'react';
import Navbar from './components/Navbar';
import SplashSection from './components/SplashSection';
import AboutBook from './components/AboutBook';
import WhyBook from './components/WhyBook';
import AboutAuthor from './components/AboutAuthor';
import BuyBook from './components/BuyBook';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <SplashSection />
      <AboutBook />
      <WhyBook />
      <AboutAuthor />
      <BuyBook />
      <Footer />
    </div>
  );
}

export default App;
