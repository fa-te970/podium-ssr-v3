import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Dot,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Subscription } from "components/Subscription";
import CarouselItem from "./CarouselItem";
import BannerLoading from "components/BannerLoading";

const arrowNextImg = "assets/img/collapse-filter-next.svg";
const arrowBackImg = "assets/img/collapse-filter-prev.svg";

type PropType = {
  data: Subscription[];
  isLoading: boolean;
};

const Carousell = (props: PropType) => {
  const visibleSlides = 1;
  const { data, isLoading } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickBack = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleClickNext = () => {
    if (data?.length - 1 > activeIndex) setActiveIndex(activeIndex + 1);
  };

  return (
    <div
      className={`plan_slider ${data?.length > visibleSlides ? "ltr" : "rtl"}`}
      style={
        data?.length === 0 && !isLoading
          ? { backgroundColor: "#E6EDF1" }
          : isLoading
            ? { borderBottom: "solid 1px #cfd8dc" }
            : {}
      }
    >
      {isLoading ? (
        <BannerLoading />
      ) : (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={30}
          totalSlides={data?.length}

        >
          <div className="">
            <div className="slider_tools_resposive" style={{ zIndex: 999 }}>
              {data?.map((item, index) => (
                <Dot
                  key={index}
                  slide={index}
                  onClick={() => setActiveIndex(index)}
                >
                  <></>
                </Dot>
              ))}
            </div>
            <Slider>
              {data?.length === 0 && (
                <CarouselItem subscription={undefined} index={0} />
              )}
              {data?.map((bannerItem, index) => (
                <CarouselItem
                  subscription={bannerItem}
                  index={index}
                  key={index}
                />
              ))}
            </Slider>
          </div>


          <ButtonBack className="carousel-buttonBack">
            <img src={arrowBackImg} alt="" onClick={handleClickBack} />
          </ButtonBack>
          <ButtonNext className="carousel-buttonNext">
            <img src={arrowNextImg} alt="" onClick={handleClickNext} />
          </ButtonNext>
        </CarouselProvider>
      )}
    </div>
  );
};

export default Carousell;
