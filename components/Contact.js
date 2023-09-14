import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <div className="section-icon">
                {/* <img src="/images/section-icon.png" alt="section-icon" /> */}
              </div>
              <h2 className="section__title">Get in Touch With Us</h2>
              {/* <p className="section__meta">Write a message</p> */}
              <p className="section__desc">
                Are you ready to make a splash for change?
                <br /> <br /> Join us in our Water Conservation Mission and be a
                part of the solution. Together, we can create a sustainable,
                water-secure state. <br />
                Come forward and let's make waves for a brighter tomorrow!{" "}
                <br />
                With hope and determination,
              </p>
              <ul className="section__list">
                <li>
                  <Link href="https://twitter.com/mission500mh">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/mission500mh">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/channel/UCbkHsi_kfgmYrSQHKlgyciQ">
                    <i className="fa fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/mission500mh/">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-shared">
              <form action="#" method="post">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col-lg-6 col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="col-lg-12 form-group">
                    <input
                      className="form-control"
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-lg-12 col-sm-12 form-group">
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="Write a Message"
                    ></textarea>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button className="theme-btn submit__btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="row contact-detail-action">
          <div className="col-lg-4">
            <div className="contact-item contact-item1">
              <h3 className="contact__title">About</h3>
              <p className="contact__desc">
                Lorem ipsum is simply free text dolor sit amet, duise
                consectetur ullam blandit
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item contact-item2">
              <h3 className="contact__title">Address</h3>
              <p className="contact__desc">
                Lorem ipsum is simply free text dolor sit amet, duise
                consectetur ullam blandit
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item contact-item3">
              <h3 className="contact__title">Contact</h3>
              <p className="contact__desc">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                contact@mission.com <br />
                <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                +91-9876543210
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Contact;
