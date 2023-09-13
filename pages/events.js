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
import React, { Component } from "react";

class Events extends Component {
  render() {
    return (
      <Layout pageTitle="Mission 500 | About">
        <NavOne />
        <PageHeader title="Events" />

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
                    href="#2023"
                    role="tab"
                  >
                    Year 2023
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link tabs_list"
                    data-toggle="tab"
                    href="#2022"
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
                <div class="tab-pane active" id="2023" role="tabpanel">
                  <EventCard />
                </div>
                <div class="tab-pane" id="2022" role="tabpanel">
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
        {/* <TeamArea /> */}
        {/* <ClientsLogo /> */}
        <Footer />
      </Layout>
    );
  }
}

export default Events;
