import AboutArea from "@/components/AboutArea";
import ClientsLogo from "@/components/ClientsLogo";
import EventCard from "@/components/EventCard";
import FaqArea from "@/components/FaqArea";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import MissionVision from "@/components/MissionVision";
import MixerAreaTwo from "@/components/MixerAreaTwo";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import TeamArea from "@/components/TeamArea";
import Link from "next/link";
import React, { Component, useState } from "react";

const Events = () => {
  const [isNewsMode, setIsNewsMode] = useState(true);

  const handleToggle = () => {
    setIsNewsMode(!isNewsMode);
  };
  return (
    <Layout pageTitle="Mission 500 | About">
      <NavOne />
      <PageHeader title="Events & News" />
      <div className="d-flex justify-content-end p-3 px-4">
        <button className="theme-btn" onClick={handleToggle}>
          {isNewsMode ? "News" : "Events"}
        </button>
      </div>
      {isNewsMode ? (
        <div className="col-md-12">
          <div class="card mt-4">
            <div class="card-header">
              <ul
                class="nav nav-tabs nav-tabs-neutral justify-content-start shadow p-3 mb-5 bg-body rounded"
                role="tablist"
                // data-background-color="orange"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active tabs_list"
                    data-toggle="tab"
                    href="#event2023"
                    role="tab"
                  >
                    Year 2023
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link tabs_list"
                    data-toggle="tab"
                    href="#event2022"
                    role="tab"
                  >
                    Year 2022
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#2021" role="tab">
                    Events of Year 2021
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#2020" role="tab">
                    Events of Year 2020
                  </a>
                </li> */}
              </ul>
            </div>
            <div class="card-body">
              <div class="tab-content text-center">
                <div class="tab-pane active" id="event2023" role="tabpanel">
                  <EventCard />
                </div>
                <div class="tab-pane" id="event2022" role="tabpanel">
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <Link href="https://www.facebook.com/1226814592/posts/10228332773244243/?extid=0&d=n">
                      <div class="card" style={{ width: "18rem" }}>
                        <img
                          src="./images/event1_2022.png"
                          class="card-img-top"
                          alt="..."
                          style={{ width: "250px", height: "150px" }}
                        ></img>
                        <div class="card-body">
                          <h5>Presentation of Mission500 at Hyderabad</h5>
                          <p style={{ padding: "5px 0px" }}>
                            {" "}
                            National convention on rivers at Hyderabad
                          </p>
                          <p style={{ padding: "5px 0px" }}>
                            Participents : Dr. Ujjwalkumar Chavhan – IRS
                          </p>
                          {/* <a href="https://www.facebook.com/1226814592/posts/10228332773244243/?extid=0&d=n">
                          {" "}
                          Link
                        </a> */}
                        </div>
                      </div>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=kt8trUzHSZ0">
                      <div class="card" style={{ width: "18rem" }}>
                        <img
                          src="/images/events2_2022.png
                      "
                          class="card-img-top"
                          alt="..."
                          style={{ width: "250px", height: "150px" }}
                        ></img>
                        <div class="card-body">
                          <h5>Maharashtra Water Summit 2022 - Part 1</h5>
                          <p style={{ padding: "5px 0px" }}>
                            {" "}
                            Speach at Maharashtra water summit
                          </p>
                          <p style={{ padding: "5px 0px" }}>
                            Participents : Dr. Ujjwalkumar Chavhan – IRS
                          </p>
                        </div>
                      </div>
                    </Link>
                    {/* <div class="card" style={{ width: "18rem" }}>
                      <img
                        src="/images/helping-img.jpg
                      "
                        class="card-img-top"
                        alt="..."
                      ></img>
                      <div class="card-body">
                        <h3>Function Name</h3>
                        <p style={{ padding: "5px 0px" }}>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                        <p style={{ padding: "5px 0px" }}>Participents : </p>
                        <a href="#"> Link</a>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* <div class="tab-pane" id="2021" role="tabpanel">
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </div>
                <div class="tab-pane" id="2020" role="tabpanel">
                  <p>
                    "I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at."
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-md-12">
          <div class="card mt-4">
            <div class="card-header">
              <ul
                class="nav nav-tabs nav-tabs-neutral justify-content-start shadow p-3 mb-5 bg-body rounded"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active tabs_list"
                    data-toggle="tab"
                    href="#news2023"
                    role="tab"
                  >
                    Year 2022
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link tabs_list"
                    data-toggle="tab"
                    href="#news2022"
                    role="tab"
                  >
                    {" "}
                    Year 2021
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <div class="tab-content text-center">
                <div class="tab-pane active" id="news2023" role="tabpanel">
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <Link href="https://www.newindianexpress.com/good-news/2022/feb/13/barren-hamlet-to-land-bristling-with-life-2418728.html">
                      <div class="card" style={{ width: "18rem" }}>
                        <img
                          src="./images/news1.png"
                          class="card-img-top"
                          alt="..."
                          style={{ width: "250px", height: "150px" }}
                        ></img>
                        <div class="card-body">
                          <h5>Barren hamlet to land bristling with life</h5>
                          <p style={{ padding: "5px 0px" }}>
                            {" "}
                            IRS officer’s initiative & efforts of villagers turn
                            region hit by drought into zone with sufficient
                            rainwater storage
                          </p>
                          <p style={{ padding: "5px 0px" }}>
                            Participents : Dr. Ujjwalkumar Chavhan – IRS
                          </p>
                          {/* <a href="https://www.facebook.com/1226814592/posts/10228332773244243/?extid=0&d=n">
                          {" "}
                          Link
                        </a> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="tab-pane" id="news2022" role="tabpanel">
                  <Link href="https://www.thebetterindia.com/247424/irs-hero-ujjwal-chavan-income-tax-commissioner-water-conservation-dhamangaon-maharashtra-farmers-jalyukt-shivar-abhiyan-agriculture-gop94/">
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src="/images/news4.png
                      "
                        class="card-img-top"
                        alt="..."
                        style={{ width: "250px", height: "150px" }}
                      ></img>
                      <div class="card-body">
                        <h5> Saves Cr's Litres</h5>
                        <p style={{ padding: "5px 0px" }}>
                          IRS Officer Saves 102 Cr Litres of Water, Makes 16
                          Villages Drought-Free in 3 Years
                        </p>
                        <p style={{ padding: "5px 0px" }}>
                          Participents : Dr. Ujjwalkumar Chavhan – IRS
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </Layout>
  );
};

export default Events;
