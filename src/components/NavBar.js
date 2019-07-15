import React from 'react';

const styles = {

    heading: {
        display: "inline",
    }
};

function NavBar() {
    return (
      <div className="container">
        <div className="jumbotron row">
          <h2 className="col-sm" style={styles.heading}>Clicky Game</h2>
          <h2 className="col-sm" style={styles.heading}>Click an image to begin!</h2>
          <h2 className="col-sm" style={styles.heading}>Score:  | Top Score: </h2>
          {/* <h2>Score: {score} | Top Score: {topScore}</h2> */}
        </div>
      </div>
    );
  }
  
  export default NavBar;