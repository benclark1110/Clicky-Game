import React from 'react';
import "./style.css";

function NavBar(props) {
    return (
      <div className="navbar testing">
        <div className="row">
          <h2 className="col-sm-6 col-md-3 col-lg-3 col-xl-3">Clicky Game</h2>
          <h2 className="col-sm-6 col-md-3 col-lg-3 col-xl-3">{props.language}</h2>
          <h2 className="col-sm-6 col-md-3 col-lg-3 col-xl-3">Score: {props.currentScore} | Top Score: {props.topScore} </h2>
        </div>
      </div>
    );
  }
  
  export default NavBar;