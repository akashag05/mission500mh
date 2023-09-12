import Link from 'next/link';
import React from 'react';

const HiwArea = () => {
    return (
        <section className="hiw-area">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg1">
                                <figure>
                                    <img src="/images/hiw-img.jpg" width={380} height={492} alt="" />
                                    <h3 className="hiw-title">Save water live better</h3>
                                    {/* <div className="hiw-btn-box">
                                        <Link href="#" className="theme-btn">read more</Link>
                                    </div> */}
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg2">
                                <figure>
                                    <img src="/images/hiw-img2.jpeg" width={380} height={492} alt="" />
                                    <h3 className="hiw-title">Think before you let it drip.</h3>
                                    {/* <div className="hiw-btn-box">
                                        <Link href="#" className="theme-btn">read more</Link>
                                    </div> */}
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg3">
                                <figure>
                                    <img src="/images/hiw-img3.jpg" width={380} height={492} alt="" />
                                    <h3 className="hiw-title">Conserve water. Save a million lives.</h3>
                                    {/* <div className="hiw-btn-box">
                                        <Link href="#" className="theme-btn">read more</Link>
                                    </div> */}
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiwArea;
