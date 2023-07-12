import Link from 'next/link';
import React from 'react';

const TeamArea = () => {
    return (
        <section className="team-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Our Team</h2>
                            <p className="section__meta">meet profesionals</p>
                        </div>
                    </div>
                </div>
                <div className="row team-content-wrap">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item1">
                            <div className="team__img">
                                <img src="/images/team.jpg" width={270} height={295} alt="team image" />
                                <div className="team__img-links">
                                    <ul>
                                        <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><Link href="#">Tushar Babanrao <br /> Nikam</Link></h3>
                                <span className="team__title-meta">Team Member 1</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item2">
                            <div className="team__img">
                                <img src="/images/team2.jpg" width={270} height={295} alt="team image" />
                                <div className="team__img-links">
                                    <ul>
                                        <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><Link href="#">Shekhar Narayan <br /> Nimbalkar</Link></h3>
                                <span className="team__title-meta">Team Member 2</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item3">
                            <div className="team__img">
                                <img src="/images/team3.jpg" width={270} height={295} alt="team image" />
                                <div className="team__img-links">
                                    <ul>
                                        <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><Link href="#">Prashant Prakashrao Gaikwad</Link></h3>
                                <span className="team__title-meta">Team Member 3</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item4">
                            <div className="team__img">
                                <img src="/images/team4.jpg" width={270} height={295} alt="team image" />
                                <div className="team__img-links">
                                    <ul>
                                        <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><Link href="#">Pankaj Balaji <br /> Pawar</Link></h3>
                                <span className="team__title-meta">Team Member 4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamArea;
