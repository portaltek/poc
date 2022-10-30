import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./Carousel.data";

export default function Carousel() {
  const [currImg, setcurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
        <div>test</div>
      </div>
    </div>
  );
}

function CarouselLeftButton() {
  return (
    <>
      <div>CarouselLeftButton</div>
    </>
  );
}

function CarouselImage() {
  return (
    <>
      <div>CarouselImage</div>
    </>
  );
}
