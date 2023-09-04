import Link from 'next/link';
import React from 'react';

const MissionVision = () => {
    return (
        // <section className="hiw-area">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col">
        //                 <div className="hiw-item">
        //                     <div className="hiw-item-img-box hiw-bg1">
        //                         <figure>
        //                             <img src="/images/hiw-img.jpg" height={492} alt="" />
        //                             <h3 className="hiw-title">Save water live better</h3>
        //                             <div className="hiw-btn-box">
        //                                 <Link href="#" className="theme-btn">read more</Link>
        //                             </div>
        //                         </figure>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col">
        //                 <div className="hiw-item">
        //                     <div className="hiw-item-img-box hiw-bg2">
        //                         <figure>
        //                             <img src="/images/hiw-img2.jpeg" height={492} alt="" />
        //                             <h3 className="hiw-title">Think before you let it drip.</h3>
        //                             <div className="hiw-btn-box">
        //                                 <Link href="#" className="theme-btn">read more</Link>
        //                             </div>
        //                         </figure>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col">
        //                 <div className="hiw-item">
        //                     <div className="hiw-item-img-box hiw-bg3">
        //                         <figure>
        //                             <img src="/images/hiw-img3.jpg" width={380} height={492} alt="" />
        //                             <h3 className="hiw-title">Conserve water. Save a million lives.</h3>
        //                             <div className="hiw-btn-box">
        //                                 <Link href="#" className="theme-btn">read more</Link>
        //                             </div>
        //                         </figure>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section class="mission-vision-section bg-light">
            <div class="container">
                <div className='row mt-2 mb-5 text-center'>
                    <div className='col'>
                        <h1>
                            Obsession with water revolution
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="mission-vision-block">
                            <div className='d-flex'>
                                <div class="mission-vision-block-icon">
                                    <i class="fa fa-bullseye" aria-hidden="true"></i>
                                </div>
                                <h1>Our Mission</h1>
                            </div>
                            <ul className='mt-3'>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Sed non urna eget quam volutpat lacinia</li>
                                <li>Vestibulum convallis, mauris a mollis</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="mission-vision-block">
                            <div class="mission-vision-block-icon">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </div>
                            <h1>Our Vision</h1>
                            <ul className='mt-3'>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Sed non urna eget quam volutpat lacinia</li>
                                <li>Vestibulum convallis, mauris a mollis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
