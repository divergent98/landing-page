import React from "react";

const CarouselCard = ({ content, title, image }) => {
  return (
    <div class="flex flex-col justify-center content-center custom-item-card ">
      {" "}
      <div className="mx-auto">
        <img className="carousel-card-image" src={image} />
      </div>
      <h1 className="card-title my-5 text-center">{title}</h1>
      <p className="card-text text-center text-white mx-3">{content} </p>
    </div>
  );
};

export default CarouselCard;
