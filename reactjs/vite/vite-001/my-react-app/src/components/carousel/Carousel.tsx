import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./__TEST__/Carousel.spec.data";
import { CarouselProps } from "./Carousel.interfaces";

export default function Carousel(props: CarouselProps) {
  const { initIndex, imagesDisplayed, imgs } = validateProps(props);
  const [imgIndex, setImgIndex] = useState(initIndex);

  function handleLeftBtnClick() {
    imgIndex > 0 && setImgIndex(imgIndex - 1);
  }
  function handleRightBtnClick() {
    imgIndex < imgs.length - 1 && setImgIndex(imgIndex + 1);
  }

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {imgIndex != 0 && (
          <div className="carousel-btn prev" onClick={handleLeftBtnClick}>
            &lsaquo;
          </div>
        )}

        {imgIndex != imgs.length - imagesDisplayed && (
          <div className="carousel-btn next" onClick={handleRightBtnClick}>
            &rsaquo;
          </div>
        )}

        {imgs.slice(imgIndex, imgIndex + imagesDisplayed).map((currImg) => {
          return (
            <img
              className="carousel-img"
              alt={currImg.alt}
              src={currImg.src}
            ></img>
          );
        })}

        {imgs.length == 0 && (
          <div className="carousel-empty">Carousel is empty</div>
        )}
      </div>
    </div>
  );
}

function validateProps({
  initIndex = 0,
  imagesDisplayed = 1,
  imgs = [],
}: CarouselProps) {
  imagesDisplayed = Math.min(imgs.length, imagesDisplayed);
  initIndex = Math.max(initIndex, 0);
  initIndex = imgs.length < initIndex + imagesDisplayed ? 0 : initIndex;
  return {
    initIndex,
    imagesDisplayed,
    imgs,
  };
}
