import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const ClientsLogo = () => {

    const params = {
        slidesPerView: 5,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1499: {
                slidesPerView: 5
            },

            991: {
                slidesPerView: 3
            },

            767: {
                slidesPerView: 3

            },

            575: {
                slidesPerView: 2
            }
        }
    }

    return (
        <section className="clientlogo-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="section-heading blog-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Contributors</h2>
                            <p className="section__meta">Social organizations that provide financial support to farmers in mission work</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="client-logo mt-5">
                            <Swiper {...params}>
                                <div className="client-logo-item">
                                    <img src="/images/client-logo1.jpg" width={200} height={170} alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/images/client-logo2.jpg" width={200} height={170} alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/images/client-logo3.jpg" width={200} height={170} alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/images/client-logo4.jpg" width={200} height={170} alt="brand image" />
                                </div>
                                {/* <div className="client-logo-item">
                                    <img src="/images/client-logo.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/images/client-logo.png" alt="brand image" />
                                </div> */}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsLogo;
