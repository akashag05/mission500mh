import React from 'react';

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-large-img">
                            <img src="/images/out_team.png" width={1170} height={389} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/about_second_img.jpg" width={400} height={349} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Discover About Mission500</h2>
                                <p className="section__meta">learn more about us</p>
                                <p className="section__desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel convallis erat, nec aliquet mauris. Sed vulputate id quam in accumsan. Nunc vitae euismod justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc suscipit ipsum vel eros pellentesque fringilla. Praesent condimentum orci vel velit commodo interdum. Integer id volutpat lorem. Suspendisse commodo in massa et ultrices. Nulla dignissim fermentum scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;
