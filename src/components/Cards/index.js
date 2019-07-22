import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card col-sm-6 col-md-3 col-lg-3 col-xl-3" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img  className="image" 
              alt={props.name} 
              src={props.image}
        />
      </div>
    </div>
  );
}

export default ImageCard;