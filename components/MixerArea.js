import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Link from "next/link";

class MixerArea extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false,
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <div>
        <section className="mixer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-heading mixer-heading">
                  <div className="section-icon">
                    <img src="/images/section-icon.png" alt="section-icon" />
                  </div>
                  <h2 className="section__title text__white">
                    Saving the water for the people and causes you care about
                  </h2>
                  <Link href="/" className="theme-btn">
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mixer-area2">
          <div className="container">
            <div className="row fun-content-wrap">
              <div className="col-lg-6">
                <div className="fun-content">
                  <div className="fun-item fun-item1">
                    <i className="fa fa-tint"></i>
                    <h3 className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp
                          end={this.state.startCounter ? 5000000000 : 0}
                        />
                      </VisibilitySensor>
                    </h3>
                    <p className="fun__text">Lt water saved by us in 6 years</p>
                  </div>
                </div>
                <div className="fun-content">
                  <div className="fun-item fun-item2">
                    <i className="icon-cancer"></i>
                    <h3 className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 6300 : 0} />
                      </VisibilitySensor>
                    </h3>
                    <p className="fun__text">
                      volunteers have joined us to save water
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="fun-content-slide">
                  <Swiper>
                    <div className="fun-slide-item">
                      <div className="icon-quote">“</div>
                      <h3 className="funslide__text">
                        Farmers should come together to work mainly on the issue
                        of water conservation, tree plantation and take
                        responsibility for the work.
                      </h3>
                      <p className="funslide__name">
                        Mission 500 Crore Ltd. Water Reservoir
                      </p>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                <p>Ltr</p>
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
                <p>Ltr</p>
              </div>
            </div>
            <div class="block">
              <div
                class="square up"
                style={{ borderLeft: "2px solid #6234ed", marginLeft: "20px" }}
              >
                <h3>Villages : 16</h3>
                <h3>Capacity : 102 Cr</h3>
                <p>Ltr</p>
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
                <p>Ltr</p>
              </div>
            </div>
            <div class="block">
              <div
                class="square up"
                style={{ borderLeft: "2px solid #34f50c", marginLeft: "20px" }}
              >
                <h3>Villages : 70</h3>
                <h3>Capacity : 450 Cr</h3>
                <p>Ltr</p>
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
                <p>Ltr</p>
              </div>
            </div>
                
          </div>
        </section>
      </div>
    );
  }
}

export default MixerArea;
