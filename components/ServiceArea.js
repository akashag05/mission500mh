import Link from "next/link";
import React, { useState } from "react";

const ServiceArea = () => {
  return (
    <section className="service-area text-center mt-5" id="our_journey">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                {/* <img src="/images/section-icon.png" alt="section-icon" /> */}
              </div>
              <h2 className="section__title">
                We Believe that We can Save More Water with you
              </h2>
            </div>
          </div>
        </div>
        <div className="row service-wrap">
          <div className="col">
            <div className="service-item service-item1">
              <div className="service-item-inner">
                <div className="service-icon">
                  {/* <i className="icon-peace-1"></i> */}
                  <i className="fa fa-group fa-flip" aria-hidden="true"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Total Benefeficiaries</h4>
                  <h6 className="service__title">181300</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item2">
              <div className="service-item-inner">
                <div className="service-icon">
                  {/* <i className="icon-praying"></i> */}
                  <i className="fa fa-home fa-flip" aria-hidden="true"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Villages</h4>
                  <h6 className="service__title">125</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item3">
              <div className="service-item-inner">
                <div className="service-icon">
                  {/* <i className="icon-peace"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="4em"
                    viewBox="0 0 640 512"
                    style={{ fill: "#424242" }}
                  >
                    <path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z" />
                  </svg>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Districts</h4>
                  <h6 className="service__title">9</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item4">
              <div className="service-item-inner">
                <div className="service-icon">
                  {/* <i className="icon-heart"></i> */}
                  <i className="fa fa-tint fa-flip" aria-hidden="true"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Cr lt of water</h4>
                  <h6 className="service__title">580</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-timeline">
          <div id="horizontal-timeline" className="timeline horizontal reverse">
            <div className="block">
              <div
                className="square up "
                style={{
                  borderLeft: "2px solid rgb(176, 7, 7)",
                  marginLeft: "20px",
                }}
              >
                <p>Villages : 1</p>
                <p>Capacity : 14 Cr</p>
              </div>
              <div
                className="circle"
                style={{
                  backgroundColor: "rgb(176, 7, 7)",
                }}
              >
                <p>2018</p>
              </div>
              <div className="link"></div>
              <div className="square down blank "></div>
            </div>
            <div className="block">
              <div className="square up blank"></div>
              <div
                className="circle"
                style={{
                  backgroundColor: "#ff5e33",
                }}
              >
                <p>2019</p>
              </div>
              <div className="link"></div>
              <div
                className="square down"
                style={{
                  borderLeft: "2px solid #ff5e33",
                  marginLeft: "20px",
                  paddingTop: "2.5rem",
                }}
              >
                <p>Villages : 6</p>
                <p>Capacity : 20 Cr</p>
              </div>
            </div>
            <div className="block">
              <div
                className="square up"
                style={{ borderLeft: "2px solid #6234ed", marginLeft: "20px" }}
              >
                <p>Villages : 16</p>
                <p>Capacity : 102 Cr</p>
              </div>
              <div
                className="circle"
                style={{
                  backgroundColor: "#6234ed ",
                }}
              >
                <p>2020</p>
              </div>
              <div className="link"></div>
              <div className="square down blank"></div>
            </div>
            <div className="block">
              <div className="square up blank"></div>
              <div
                className="circle"
                style={{
                  backgroundColor: "#2f903c ",
                }}
              >
                <p>2021</p>
              </div>
              <div className="link"></div>
              <div
                className="square down"
                style={{
                  borderLeft: "2px solid #2f903c",
                  marginLeft: "20px",
                  paddingTop: "2.5rem",
                }}
              >
                <p>Villages : 34</p>
                <p>Capacity : 208 Cr</p>
              </div>
            </div>
            <div className="block">
              <div
                className="square up"
                style={{ borderLeft: "2px solid #34f50c", marginLeft: "20px" }}
              >
                <p>Villages : 70</p>
                <p>Capacity : 450 Cr</p>
              </div>
              <div
                className="circle"
                style={{
                  backgroundColor: "#34f50c ",
                }}
              >
                <p>2022</p>
              </div>
              <div className="link"></div>
              <div className="square down blank"></div>
            </div>
            <div className="block">
              <div className="square up blank"></div>
              <div
                className="circle"
                style={{
                  backgroundColor: "#2f903c ",
                }}
              >
                <p>2023</p>
              </div>
              <div className="link"></div>
              <div
                className="square down"
                style={{
                  borderLeft: "2px solid #34f50c",
                  marginLeft: "20px",
                  paddingTop: "2.5rem",
                }}
              >
                <p>Villages : 125</p>
                <p>Capacity : 580 Cr</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServiceArea;
