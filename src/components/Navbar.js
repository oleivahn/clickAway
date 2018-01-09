import React from 'react';
import './navbar.css';


// Template to hold scoring and player message
const Navbar = props => (
  <header className="App-header jumbotron">
    <h1 className="App-title">Don't click the same twice!</h1>
    <p className="score">Score: { props.score } of 12 | Top Score: { props.topScore }</p>
    <p className="message">{ props.message }</p>
  </header>
);

export default Navbar;
