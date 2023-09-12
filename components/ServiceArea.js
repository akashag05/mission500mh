import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  return (
    <section className="service-area text-center mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
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
                  <h6 className="service__title">86</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item3">
              <div className="service-item-inner">
                <div className="service-icon">
                  {/* <i className="icon-peace"></i> */}
                  <i className="fa fa-map fa-flip" aria-hidden="true"></i>
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
                  <h6 className="service__title">481</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-timeline">
          <div id="horizontal-timeline" class="timeline horizontal reverse">
            <div class="block">
              <div
                class="square up "
                style={{
                  borderLeft: "2px solid rgb(176, 7, 7)",
                  marginLeft: "20px",
                }}
              >
                <h3>Villages : 1</h3>
                <h3>Capacity : 14 Cr</h3>
              </div>
              <div
                class="circle"
                style={{
                  backgroundColor: "rgb(176, 7, 7)",
                }}
              >
                <p>2018</p>
              </div>
              <div class="link"></div>
              <div class="square down blank "></div>
            </div>
            <div class="block">
              <div class="square up blank"></div>
              <div
                class="circle"
                style={{
                  backgroundColor: "#ff5e33",
                }}
              >
                <p>2019</p>
              </div>
              <div class="link"></div>
              <div
                class="square down"
                style={{ borderLeft: "2px solid #ff5e33", marginLeft: "20px" }}
              >
                <h3>Villages : 6</h3>
                <h3>Capacity : 20 Cr</h3>
              </div>
            </div>
            <div class="block">
              <div
                class="square up"
                style={{ borderLeft: "2px solid #6234ed", marginLeft: "20px" }}
              >
                <h3>Villages : 16</h3>
                <h3>Capacity : 102 Cr</h3>
              </div>
              <div
                class="circle"
                style={{
                  backgroundColor: "#6234ed ",
                }}
              >
                <p>2020</p>
              </div>
              <div class="link"></div>
              <div class="square down blank"></div>
            </div>
            <div class="block">
              <div class="square up blank"></div>
              <div
                class="circle"
                style={{
                  backgroundColor: "#2f903c ",
                }}
              >
                <p>2021</p>
              </div>
              <div class="link"></div>
              <div
                class="square down"
                style={{ borderLeft: "2px solid #2f903c", marginLeft: "20px" }}
              >
                <h3>Villages : 34</h3>
                <h3>Capacity : 208 Cr</h3>
              </div>
            </div>
            <div class="block">
              <div
                class="square up"
                style={{ borderLeft: "2px solid #34f50c", marginLeft: "20px" }}
              >
                <h3>Villages : 70</h3>
                <h3>Capacity : 450 Cr</h3>
              </div>
              <div
                class="circle"
                style={{
                  backgroundColor: "#34f50c ",
                }}
              >
                <p>2022</p>
              </div>
              <div class="link"></div>
              <div class="square down blank"></div>
            </div>
            <div class="block">
              <div class="square up blank"></div>
              <div
                class="circle"
                style={{
                  backgroundColor: "#2f903c ",
                }}
              >
                <p>2023</p>
              </div>
              <div class="link"></div>
              <div
                class="square down"
                style={{ borderLeft: "2px solid #34f50c", marginLeft: "20px" }}
              >
                <h3>Villages : 125</h3>
                <h3>Capacity : 580 Cr</h3>
              </div>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-lg-12">
            <div className="button-shared" style={{ marginTop: "20px" }}>
              <Link href="/" className="theme-btn">
                Join us now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
