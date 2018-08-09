import React, { Component } from 'react';

import classes from './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection />
        <div className={classes.BgSection}></div>
        <About />
        <Footer linkSupport="/" linkPrivacy="/" linkTerms="/" />
      </div>
    );
  }
}

export default App;