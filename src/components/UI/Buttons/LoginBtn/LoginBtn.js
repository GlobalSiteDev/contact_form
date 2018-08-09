import React from 'react';

import classes from './LoginBtn.css';

const loginBtn = () => (
  <button className={classes.LoginBtn + ' ' + classes.Clearfix}>Log In Now</button>
);

export default loginBtn;