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
                    class="nav-link tabs_list"
                    data-toggle="tab"
                    href="#event2023"
                    role="tab"
                  >
                    Year 2023
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active tabs_list"
                    data-toggle="tab"
                    href="#event2022"
                    role="tab"
                  >
                    Year 2022
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body" style={{ padding: "0 1.25rem" }}>
              <div class="tab-content text-center">
                <div class="tab-pane " id="event2023" role="tabpanel">
                  <EventCard />
                </div>
                <div class="tab-pane active" id="event2022" role="tabpanel">
                  <div className="d-flex">
                    <Link href="https://www.facebook.com/1226814592/posts/10228332773244243/?extid=0&d=n">
                      <div
                        class="card card_image"
                        style={{ width: "18rem", height: "23rem" }}
                      >
                        <img
                          src="./images/event1_2022.png"
                          class="card-img-top"
                          alt="..."
                        ></img>
                        <div class="card-body">
                          <h6>Presentation of Mission500 at Hyderabad</h6>
                          <p> National convention on rivers at Hyderabad</p>
                          <p>Participants : Dr. Ujjwalkumar Chavhan – IRS</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=kt8trUzHSZ0">
                      <div
                        class="card card_image"
                        style={{ width: "18rem", height: "23rem" }}
                      >
                        <img
                          src="/images/events2_2022.png
                      "
                          class="card-img-top"
                          alt="..."
                        ></img>
                        <div class="card-body">
                          <h6>Maharashtra Water Summit 2022 - Part 1</h6>
                          <p> Speach at Maharashtra water summit</p>
                          <p>Participants : Dr. Ujjwalkumar Chavhan – IRS</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
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
            <div class="card-body" style={{ padding: "0 1.25rem" }}>
              <div class="tab-content text-center">
                <div class="tab-pane active" id="news2023" role="tabpanel">
                  <div className="d-flex">
                    <Link href="https://www.newindianexpress.com/good-news/2022/feb/13/barren-hamlet-to-land-bristling-with-life-2418728.html">
                      <div
                        class="card card_image"
                        style={{ width: "18rem", height: "23rem" }}
                      >
                        <img
                          src="./images/news1.png"
                          class="card-img-top"
                          alt="..."
                        ></img>
                        <div class="card-body">
                          <h5>Barren hamlet to land bristling with life</h5>
                          <p>
                            {" "}
                            IRS officer’s initiative & efforts of villagers turn
                            region hit by drought into zone with sufficient
                            rainwater storage
                          </p>
                          <p>Participants : Dr. Ujjwalkumar Chavhan – IRS</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="tab-pane" id="news2022" role="tabpanel">
                  <div className="d-flex">
                    <Link href="https://www.thebetterindia.com/247424/irs-hero-ujjwal-chavan-income-tax-commissioner-water-conservation-dhamangaon-maharashtra-farmers-jalyukt-shivar-abhiyan-agriculture-gop94/">
                      <div
                        class="card card_image"
                        style={{ width: "18rem", height: "23rem" }}
                      >
                        <img
                          src="/images/news4.png
                      "
                          class="card-img-top"
                          alt="..."
                        ></img>
                        <div class="card-body">
                          <h5> Saves Cr's Litres</h5>
                          <p>
                            IRS Officer Saves 102 Cr Litres of Water, Makes 16
                            Villages Drought-Free in 3 Years
                          </p>
                          <p>Participants : Dr. Ujjwalkumar Chavhan – IRS</p>
                        </div>
                      </div>
                    </Link>
                  </div>
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
