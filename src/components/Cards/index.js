import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card col-sm col-md col-lg" onClick={() => props.clickCount(props.id)}>
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