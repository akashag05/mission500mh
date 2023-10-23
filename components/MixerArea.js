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
                    {/* <img src="/images/section-icon.png" alt="section-icon" /> */}
                  </div>
                  <h2 className="section__title text__white">
                    Every drop counts, save and surmount!
                  </h2>
                  <Link href="/contact" className="theme-btn">
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
                          end={this.state.startCounter ? 3370000000 : 0}
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
                        Your dedication to water conservation and tree planting
                        is inspiring change on a remarkable scale. Every drop
                        saved and tree planted nurtures a brighter, greener
                        future. Your efforts are more than actions; they are a
                        legacy for generations to come. As we witness the
                        transformative power of collective action, let it fuel
                        our resolve to do more, to plant more, and to save more.
                        <br />
                        Together, we're writing a story of hope, resilience, and
                        sustainable abundance. Keep nurturing the Earth; your
                        contributions matter immensely."
                      </h3>
                      
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MixerArea;
