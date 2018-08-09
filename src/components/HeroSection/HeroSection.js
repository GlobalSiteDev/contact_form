import React from 'react';

import './HeroSection.css';
import Logo from '../Logo/Logo';
import LoginBtn from '../UI/Buttons/LoginBtn/LoginBtn';


const heroSection = () => (
  <div className="HeroSection">
    <Logo />
    <LoginBtn />
  </div>
);

export default heroSection;