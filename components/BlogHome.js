import Link from "next/link";
import React from "react";

const BlogHome = () => {
  return (
    // <section className="blog-area">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-8 mx-auto text-center">
    //         <div className="section-heading blog-heading">
    //           <div className="section-icon">
    //             <img src="/images/section-icon.png" alt="section-icon" />
    //           </div>
    //           <h2 className="section__title">Recent Blog Posts</h2>
    //           <p className="section__meta">news and updates</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row recent-post-wrap">
    //       <div className="col-lg-6">
    //         <div className="recent-item">
    //           <div className="recent__img">
    //             <span className="meta__date-date">09 july, 2023</span>
    //             <img src="/images/blog-img.jpg" alt="service-image" />
    //           </div>
    //           <div className="news__content">
    //             <h3 className="news__content-title">
    //               <Link href="/BlogDetails">
    //                 Water conservation movement in Chalisgaon taluka; Support of
    //                 'Sakaal Relief Fund'
    //               </Link>
    //             </h3>
    //             <ul className="news__content-list">
    //               <li className="news__content-active__dot">
    //                 <Link href="#">mission 500</Link>
    //               </li>
    //               <li>
    //                 <Link href="#">3 comments</Link>
    //               </li>
    //             </ul>
    //             <p className="news__content-text">
    //               At present, the movement of water conservation under Mission
    //               500 crore liters of water storage has gained momentum in the
    //               taluka. Panchpatil of the campaign is educating the villagers
    //               along with the farmers in the villages. 'Sakal Relief Fund' is
    //               getting support for various works done through this.
    //             </p>
    //             <Link href="single-news" className="theme-btn">
    //               read more
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-6">
    //         <div className="third-recent-box">
    //           <ul className="third-recent-item">
    //             <li>
    //               <div className="recent__img">
    //                 <Link href="/single-news">
    //                   <img
    //                     src="/images/blog-img2.jpg"
    //                     width={200}
    //                     height={140}
    //                     alt=""
    //                   />
    //                 </Link>
    //               </div>
    //               <div className="recent__content">
    //                 <span>7 july, 2023</span>
    //                 <h4>
    //                   <Link href="single-news.html">
    //                     Mission 500 - Drainage started at Varkhede Tanda
    //                   </Link>
    //                 </h4>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="recent__img">
    //                 <Link href="/single-news">
    //                   <img
    //                     src="images/blog-img3.jpg"
    //                     width={200}
    //                     height={140}
    //                     alt=""
    //                   />
    //                 </Link>
    //               </div>
    //               <div className="recent__content">
    //                 <span>4 july, 2023</span>
    //                 <h4>
    //                   <Link href="/single-news">
    //                     Disabled couple mobilized for Pani Foundation
    //                   </Link>
    //                 </h4>
    //               </div>
    //             </li>
    //             <li>
    //               <div className="recent__img">
    //                 <Link href="/single-news">
    //                   <img
    //                     src="/images/blog-img4.jpg"
    //                     width={200}
    //                     height={140}
    //                     alt=""
    //                   />
    //                 </Link>
    //               </div>
    //               <div className="recent__content">
    //                 <span>1 july, 2023</span>
    //                 <h4>
    //                   <Link href="single-news.html">
    //                     Mission 500 - The story of water revolution!{" "}
    //                   </Link>
    //                 </h4>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className="row" style={{ position: "relative" }}>
      <div className="col-md-8">
        <div className="d-flex flex-column container pt-4">
          <div style={{ borderBottom: "2px solid #e36955" }}>
            <h2
              style={{
                paddingBottom: "1rem",
                color: "#e36955",
                lineHeight: "40px",
              }}
            >
              Empowering Communities through Decentralized Water Management: The
              Mission500 Paradigm
            </h2>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <h6 style={{ padding: "0 2rem", color: "black" }}>
                Written by : Dr. Ujjwal Kumar Chavhan, IRS
              </h6>
            </div>
          </div>
          <p className="py-4" style={{ fontSize: "20px", lineHeight: "30px" }}>
            Water is the cornerstone of life, a finite resource that sustains
            our ecosystems, cultures, and societies. Yet, the reality of water
            scarcity looms larger than ever, urging us to seek innovative
            solutions to conserve and manage this precious commodity. A
            groundbreaking initiative that has the potential to revolutionize
            our approach to water management – the Mission500 community-based
            decentralized water management system.
          </p>
          <div className="blog_content">
            <div className="py-2">
              <h4>The Genesis of Mission500:</h4>
              <p>
                The essence of Mission500 lies in its ambitious name – a goal to
                conserve 500 million Liters of water in each tehsil of
                Maharashtra. But this mission goes beyond numbers; it
                encapsulates a philosophy of transformative change, where every
                drop saved contributes to a future of abundance and resilience.
                This endeavor was born out of a passion for sustainable
                development and a profound belief in the power of communities to
                enact positive change.
              </p>
            </div>
            <div className="py-2">
              <h4>The Community-Centric Approach:</h4>
              <p>
                At the heart of Mission500 is the community-based decentralized
                water management system, a paradigm that shifts the locus of
                control from centralized entities to the very communities that
                depend on water resources. This approach recognizes that
                effective water management is not a one-size-fits-all solution.
                Each community has unique water needs, challenges, and insights
                that deserve consideration.
              </p>
            </div>
            <div>
              <h4>Key Pillars of the Approach:</h4>
              <div className="p-4">
                <ul
                  style={{ listStyleType: "number" }}
                  className="approach_list"
                >
                  <li>Empowerment:</li>
                  <p>
                    By involving local communities in decision-making and
                    implementation processes, we empower them to become stewards
                    of their water resources. This approach fosters a sense of
                    ownership and responsibility, ensuring the sustainability of
                    conservation efforts.
                  </p>
                  <li>Water Conservation:</li>
                  <p>
                    One of the cornerstones of the approach is check dams. This
                    ancient practice takes on new significance in the face of
                    water scarcity. By capturing and storing rainwater, we can
                    replenish groundwater levels, mitigate flooding, and create
                    a buffer against dry spells.
                  </p>
                  <li>Customization:</li>
                  <p>
                    Every community possesses unique cultural, geographical, and
                    infrastructural characteristics. By customizing water
                    management solutions to align with these factors, we ensure
                    that interventions are effective and sustainable
                  </p>
                  <li>Education and Awareness:</li>
                  <p>
                    Central to Mission500 is the belief that change begins with
                    knowledge. We engage communities through workshops,
                    educational campaigns, and awareness drives, nurturing a
                    culture of water conservation that extends beyond the
                    initiative itself.
                  </p>
                </ul>
              </div>
            </div>
            <div className="py-2">
              <h4>The Ripple Effect:</h4>
              <p>
                The impact of the community-based decentralized water management
                system extends far beyond water conservation. It cultivates a
                sense of unity, resilience, and self-reliance among communities.
                It empowers individuals to take control of their destiny,
                reinforcing the idea that sustainable change is within their
                grasp.
              </p>
            </div>
            <div className="py-2">
              <h4>A Vision for the Future:</h4>
              <p>
                My vision for Mission500 and the decentralized water management
                system is a future where communities across the globe are
                equipped with the knowledge, tools, and agency to manage their
                water resources sustainably. I envision a world where the
                ripples of this initiative spread far and wide, fostering a
                movement that redefines how we approach water scarcity.
              </p>
            </div>
            <div className="py-2">
              <h4>Conclusion:</h4>
              <p>
                The Mission500 community-based decentralized water management
                system is more than a conservation effort; it's a philosophy, a
                call to action, and a tribute to the collective power of
                communities. As we embark on this journey together, I invite you
                to join this mission in embracing a future where water is no
                longer a source of concern but a beacon of hope for generations
                to come.
              </p>
            </div>
          </div>
          {/* <div>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
              ></path>
            </svg>
          </div> */}
        </div>
      </div>
      <div className="col-md-4" style={{ position: "relative" }}>
        <div
          className="d-flex flex-column py-4 px-1"
          style={{ position: "sticky", top: "0" }}
        >
          <div className="border-bottom-1">
            <h2 style={{ color: "black", fontWeight: "600" }}>
              Previous Blogs
            </h2>
          </div>
          <div>
            <div className="previous_blog_section">
              <p>13th August 2022</p>
              <h4 style={{ color: "black" }}>
                5 Tips for Conserving Water at Home
              </h4>
            </div>
            <div className="previous_blog_section">
              <p>7th July 2022</p>
              <h4 style={{ color: "black" }}>
                The Importance of Water Conservation
              </h4>
            </div>
            <div className="previous_blog_section">
              <p>25th June 2022</p>
              <h4 style={{ color: "black" }}>
                Efficient Irrigation Techniques for Gardens
              </h4>
            </div>
            <div className="previous_blog_section">
              <p>10th May 2022</p>
              <h4 style={{ color: "black" }}>
                Reducing Water Waste in Daily Activities
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
