import Link from "next/link";
import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiperr, setSwiperr] = useState(null);
  const [nextDisbale, setNextDisable] = useState(false);
  const [PrevDisbale, setPrevDisable] = useState(true);

  const goNext = () => {
    setPrevDisable(false);
    if (swiperr.activeIndex <= 0) {
      if (swiperr.activeIndex == 0) {
        setNextDisable(true);
      }
      console.log(swiperr.activeIndex);
      swiperr.slideNext();
    }
  };

  const goPrev = () => {
    setNextDisable(false);
    if (swiperr.activeIndex >= 1) {
      if (swiperr.activeIndex == 1) {
        setPrevDisable(true);
      }
      console.log(swiperr.activeIndex);
      swiperr.slidePrev();
    }
  };
  const params = {
    slidesPerView: 1,
    // loop: true,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    speed: 1000,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    // Responsive breakpoints
    // breakpoints: {
    //   1499: {
    //     slidesPerView: 3,
    //   },

    //   991: {
    //     slidesPerView: 3,
    //   },

    //   767: {
    //     slidesPerView: 2,
    //   },

    //   575: {
    //     slidesPerView: 2,
    //   },
    // },
  };

  return (
    <section className="slider-area">
      <div className="homepage-slide1">
        <Swiper {...params} getSwiper={setSwiperr}>
          <div className="single-slide-item slide-bg1">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slide-item slide-bg2">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
        {/* <div className="swiper-pagination"></div> */}
        {/* <div className="owl-dots">
          <div onClick={goPrev} className="owl-dot">
            <span style={{ padding: "5px" }}>1</span>
          </div>
          <div onClick={goNext} className="owl-dot">
            <span style={{ padding: "5px" }}>2</span>
          </div>
        </div> */}
      </div>
      <div className="d-flex justify-content-center p-4">
        <div
          onClick={goPrev}
          className="col-md-1 owl-dot"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {swiperr && swiperr.activeIndex == 0 ? ( // Replace shouldDisablePrevButton with your condition
            <img
              src="/images/left-arrow-disabled.png" // Provide the path to your disabled button image
              alt="Previous"
            />
          ) : (
            <img src="/images/left-arrow.png" alt="Previous" />
          )}
        </div>
        <div
          onClick={goNext}
          className="col-md-1 owl-dot"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {nextDisbale ? ( // Replace shouldDisablePrevButton with your condition
            <img
              src="/images/right-arrow-disabled.png" // Provide the path to your disabled button image
              alt="Previous"
            />
          ) : (
            <img src="/images/right-arrow.png" alt="Previous" />
          )}
        </div>
      </div>
    </section>
  );
};

export default SliderOne;
