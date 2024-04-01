import React from "react";

const Card = ({ content, title, image }) => {
  return (
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
          {" "}
          <img className="card-image" src={image}/>
          <h1 className="card-title">{title}</h1>
        </div>
        <div class="flip-card-back">
          <p className="card-text">{content} </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
