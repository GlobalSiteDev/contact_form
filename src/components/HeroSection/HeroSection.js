import React from 'react';

import classes from './HeroSection.css';
import Logo from '../Logo/Logo';
import LoginBtn from '../UI/Buttons/LoginBtn/LoginBtn';


const heroSection = () => (
  <div className={classes.HeroSection}>
    <Logo />
    <LoginBtn />
      <h1>Home of Dentistry</h1>
      <div className={classes.HeroSectionText}><p>Denteez was created by dentists for dentistry in order to
make the life of everyone involved in dentistry easier.</p></div>

    
  </div>
);

export default heroSection;