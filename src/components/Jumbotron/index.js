import React from 'react';
import "./style.css";

function Jumbotron() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Clicky Game!</h2>
          <br />
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
      </div>
    );
  }
  
  export default Jumbotron;