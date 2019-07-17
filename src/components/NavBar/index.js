import React from 'react';
import "./style.css";

function NavBar(props) {
    return (
      <div className="container">
        <div className="jumbotron row">
          <h2 className="col-sm">Clicky Game</h2>
          <h2 className="col-sm">Click an image to begin!</h2>
          <h2 className="col-sm">Score: {props.currentScore} | Top Score: {props.topScore} </h2>
        </div>
      </div>
    );
  }
  
  export default NavBar;