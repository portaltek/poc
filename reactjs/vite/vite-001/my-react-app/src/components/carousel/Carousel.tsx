import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./Carousel.data";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        {currImg != 0 ? (
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </div>
        ) : (
          <div className="left"></div>
        )}

        <div className="center"></div>
        {currImg != images.length - 1 ? (
          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </div>
        ) : (
          <div className="right"></div>
        )}
      </div>
    </div>
  );
}
