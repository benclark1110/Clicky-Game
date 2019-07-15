import React from 'react';

const styles = {

  heading: {
      textAlign: "center",
  }
};

function Jumbotron() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2 style={styles.heading}>Clicky Game!</h2>
          <br />
          <h2 style={styles.heading}>Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
      </div>
    );
  }
  
  export default Jumbotron;