import React from 'react';

import classes from './Footer.css';

const footer = (props) => (
  <footer className={classes.footer}>
    <p>Denteez Copyright 2015</p>
    <a href={props.linkSupport}>Support</a>
    <a href={props.linkPrivacy}>Privacy Policy</a>
    <a href={props.linkTerms}>Terms of use</a>
  </footer>
);

export default footer;