export interface CarouselProps {
  initIndex?: number;
  imagesDisplayed?: number;
  imgs?: CarouselImg[];
}

export interface CarouselImg {
  alt?: string;
  src: string;
}
