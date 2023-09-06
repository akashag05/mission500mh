import AboutArea from "@/components/AboutArea";
import ClientsLogo from "@/components/ClientsLogo";
import FaqArea from "@/components/FaqArea";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import MissionVision from "@/components/MissionVision";
import MixerAreaTwo from "@/components/MixerAreaTwo";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import TeamArea from "@/components/TeamArea";
import React, { Component } from "react";

class Events extends Component {
  componentDidMount() {
    new Accordion(".accordion-container");
  }

  render() {
    return (
      <Layout pageTitle="Oxpitan | About">
        <NavOne />
        <PageHeader title="Events" />

        <div className="col-md-12">
          <div className="accordion-container">
            <div className="ac">
              <h2 className="ac-q" tabIndex="0">
                Events of Year 2023
              </h2>
              <div className="ac-a">
                <p className="accordion__content-desc">
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <div class="card" style={{ width: "18rem" }}>
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
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
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
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
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
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="ac">
              <h2 className="ac-q" tabIndex="0">
                Events of Year 2022
              </h2>
              <div className="ac-a">
                <p className="accordion__content-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tincidunt dui vel turpis pretium, eu luctus odio
                  elementum. Morbi ornare suscipit bibendum. Cras posuere metus
                  nec turpis ultricies, at tincidunt mauris iaculis. Donec
                  maximus eros nec lacus interdum, id congue metus sagittis.
                </p>
              </div>
            </div>
            <div className="ac">
              <h2 className="ac-q" tabIndex="0">
                Events of Year 2021
              </h2>
              <div className="ac-a">
                <p className="accordion__content-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tincidunt dui vel turpis pretium, eu luctus odio
                  elementum. Morbi ornare suscipit bibendum. Cras posuere metus
                  nec turpis ultricies, at tincidunt mauris iaculis. Donec
                  maximus eros nec lacus interdum, id congue metus sagittis.
                </p>
              </div>
            </div>
            <div className="ac">
              <h2 className="ac-q" tabIndex="0">
                Events of Year 2020
              </h2>
              <div className="ac-a">
                <p className="accordion__content-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tincidunt dui vel turpis pretium, eu luctus odio
                  elementum. Morbi ornare suscipit bibendum. Cras posuere metus
                  nec turpis ultricies, at tincidunt mauris iaculis. Donec
                  maximus eros nec lacus interdum, id congue metus sagittis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <TeamArea />
        <ClientsLogo />
        <Footer />
      </Layout>
    );
  }
}

export default Events;
