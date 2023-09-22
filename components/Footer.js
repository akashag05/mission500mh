import Link from "next/link";
import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        scrollBtn: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        scrollBtn: false,
      });
    }
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };
  scrollToOurJourney = () => {
    const element = document.getElementById("our_journey"); // Get the target element by its ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll to the target element smoothly
    }
  };
  scrollToOurTeam = () => {
    const element = document.getElementById("our_team"); // Get the target element by its ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll to the target element smoothly
    }
  };
  render() {
    return (
      <div>
        <section className="footer-area">
          {/* <div className="newsletter-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto text-center">
                                    <div className="section-heading footer-heading">
                                        <div className="section-icon">
                                            <img src="/images/section-icon.png" alt="section-icon" />
                                        </div>
                                        <h2 className="section__title text__white">Newsletter</h2>
                                        <p className="section__meta">stay updated</p>
                                    </div>
                                    <div className="newsletter-form">
                                        <div className="form-shared">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control"
                                                                placeholder="Email address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <button className="theme-btn submit__btn"
                                                            type="submit">subscribe
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
          <div className="footer-top">
            <div className="container">
              <div className="row footer-widget-wrap">
                <div className="col footer-item footer-item1">
                  <h3 className="widget__title">about</h3>
                  <ul className="foot__links">
                    <li>
                      <Link href="/about">Abouts Us</Link>
                    </li>
                    <li>
                      <a
                        href="/about#our_team"
                        style={{ cursor: "pointer" }}
                        onClick={this.scrollToOurTeam}
                      >
                        Our Team
                      </a>
                    </li>
                    {/* <li><Link href="#">New Events</Link></li> */}
                    <li>
                      <Link href="/events">Media</Link>
                    </li>
                    {/* <li><Link href="#">Site Map</Link></li> */}
                  </ul>
                </div>
                <div className="col footer-item footer-item2">
                  <h3 className="widget__title">explore</h3>
                  <ul className="foot__links">
                    <li>
                      <a
                      href="/#our_journey"
                        style={{ cursor: "pointer" }}
                        onClick={this.scrollToOurJourney}
                      >
                        Our Journey
                      </a>
                    </li>
                    <li>
                      <Link href="/executionMap">Exexution Map</Link>
                    </li>
                    {/* <li><Link href="#">Blog Posts</Link></li> */}
                    {/* <li><Link href="#">Results</Link></li> */}
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="col footer-item footer-item3">
                                    <h3 className="widget__title">links</h3>
                                    <ul className="foot__links">
                                        <li><Link href="#">Projects</Link></li>
                                        <li><Link href="#">Events</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms of Use</Link></li>
                                    </ul>
                                </div> */}
                {/* <div className="col footer-item footer-item3">
                                    <h3 className="widget__title">blog</h3>
                                    <ul className="foot__links">
                                        <li><Link href="#">Ambehol village resolved to plant 1 lakh Tress!</Link></li>
                                        <li><Link href="#">The story of water revolution</Link></li>
                                        <li><Link href="#">Disabled couple mobilized for pani Foundation</Link></li>
                                        <li><Link href="#">Raise fund to help</Link></li>
                                    </ul>
                                </div> */}
                <div className="col footer-item footer-item4">
                  <h3 className="widget__title">contact</h3>
                  <ul className="contact__info">
                    {/* <li>Address to be written here!</li> */}
                    <li>
                      <Link href="mailto:info@mission500mh.com">
                        info@mission500mh.com
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:6668880000">+91-9833615551</Link>
                    </li>
                  </ul>
                  <div className="footer__social">
                    <ul className="section__list">
                      <li>
                        <Link
                          href="https://twitter.com/mission500mh"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.facebook.com/mission500mh"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.youtube.com/channel/UCbkHsi_kfgmYrSQHKlgyciQ"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-youtube"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/mission500mh/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-desc">
                    <p>
                      © Copyright 2023 by{" "}
                      <Link
                        href="https://mission500mh.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mission 500
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          onClick={this.scrollTop}
          id="back-to-top"
          className={this.state.scrollBtn ? "back-btn-shown" : ""}
        >
          <i className="fa fa-angle-up" title="Go top"></i>
        </div>
      </div>
    );
  }
}

export default Footer;
