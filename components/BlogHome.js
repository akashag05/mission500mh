import Link from "next/link";
import React from "react";

const BlogHome = () => {
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-heading blog-heading">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h2 className="section__title">Recent Blog Posts</h2>
              <p className="section__meta">news and updates</p>
            </div>
          </div>
        </div>
        <div className="row recent-post-wrap">
          <div className="col-lg-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date">09 july, 2023</span>
                <img src="/images/blog-img.jpg" alt="service-image" />
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <Link href="/BlogDetails">
                    Water conservation movement in Chalisgaon taluka; Support of
                    'Sakaal Relief Fund'
                  </Link>
                </h3>
                <ul className="news__content-list">
                  <li className="news__content-active__dot">
                    <Link href="#">mission 500</Link>
                  </li>
                  <li>
                    <Link href="#">3 comments</Link>
                  </li>
                </ul>
                <p className="news__content-text">
                  At present, the movement of water conservation under Mission
                  500 crore liters of water storage has gained momentum in the
                  taluka. Panchpatil of the campaign is educating the villagers
                  along with the farmers in the villages. 'Sakal Relief Fund' is
                  getting support for various works done through this.
                </p>
                <Link href="single-news" className="theme-btn">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="third-recent-box">
              <ul className="third-recent-item">
                <li>
                  <div className="recent__img">
                    <Link href="/single-news">
                      <img
                        src="/images/blog-img2.jpg"
                        width={200}
                        height={140}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="recent__content">
                    <span>7 july, 2023</span>
                    <h4>
                      <Link href="single-news.html">
                        Mission 500 - Drainage started at Varkhede Tanda
                      </Link>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="recent__img">
                    <Link href="/single-news">
                      <img
                        src="images/blog-img3.jpg"
                        width={200}
                        height={140}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="recent__content">
                    <span>4 july, 2023</span>
                    <h4>
                      <Link href="/single-news">
                        Disabled couple mobilized for Pani Foundation
                      </Link>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="recent__img">
                    <Link href="/single-news">
                      <img
                        src="/images/blog-img4.jpg"
                        width={200}
                        height={140}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="recent__content">
                    <span>1 july, 2023</span>
                    <h4>
                      <Link href="single-news.html">
                        Mission 500 - The story of water revolution!{" "}
                      </Link>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
