import React, { PropsWithChildren } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

export default function ServiceCarousel(props: PropsWithChildren<unknown>) {
  return (
    <Carousel
      infinite
      responsive={responsive}
      customRightArrow={<i className="custom-right-arrow" />}
      customLeftArrow={<i className="custom-left-arrow" />}
      className="service-carousel-wrapper"
    >
      {props.children}
    </Carousel>
  );
}
