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
        <div className="row">
          <div className="col-lg-12">
            <div className="button-shared">
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
