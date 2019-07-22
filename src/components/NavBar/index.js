import React from 'react';
import "./style.css";

function NavBar(props) {
    return (
      <div className="navbar testing">
        <div className="row">
          <h2 className="col">Clicky Game</h2>
          <h2 className="col">Click an image to begin!</h2>
          <h2 className="col">Score: {props.currentScore} | Top Score: {props.topScore} </h2>
        </div>
      </div>
    );
  }
  
  export default NavBar;