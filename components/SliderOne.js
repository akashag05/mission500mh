import Link from "next/link";
import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  // Swiper configuration
  const swiperParams = {
    loop: true, // Enable continuous loop
    autoplay: {
      delay: 3000, // Adjust the delay in milliseconds
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <section className="slider-area">
      <div className="homepage-slide1">
        <Swiper {...swiperParams} getSwiper={setSwiper}>
          <div className="single-slide-item slide-bg1">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading">
                        <p className="slider__meta">
                          Mission 500 - Transforming
                          <br /> Maharashtra's Water Landscape
                        </p>
                        <h2 className="slider__title">
                          A water conservation movement by the people, for the
                          people.
                        </h2>
                        {/* <Link href="#" className="theme-btn">discover more</Link> */}
                      </div>
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
                      <div className="slider-heading">
                        <p className="slider__meta">
                          Mission 500 - Transforming
                          <br /> Maharashtra's Water Landscape
                        </p>
                        <h2 className="slider__title">
                          Lend the helping hand and save water together!
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
        {/* <div className="owl-dots">
          <div onClick={goPrev} className="owl-dot">
            <span style={{ padding: "5px" }}>1</span>
          </div>
          <div onClick={goNext} className="owl-dot">
            <span style={{ padding: "5px" }}>2</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SliderOne;
