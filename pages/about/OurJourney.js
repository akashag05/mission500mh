import AboutUs from "@/components/AboutArea";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import MissionVision from "@/components/MissionVision";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import TeamArea from "@/components/TeamArea";
import Image from "next/image";
import React from "react";

const OurJourney = () => {
  return (
    <Layout pageTitle="Mission 500 | About">
      <NavOne />
      <PageHeader title="Our Journey" />
      <div className="container">
        <div className="d-flex flex-column  m-4">
          <div className="d-flex justify-content-between">
            <div>
              <h3>Milestone's</h3>
            </div>
            <Image
              src="/images/journey.png"
              width={800}
              height={500}
              className="border border-4"
            />
          </div>
          <section className="section-timeline">
            <div className="my-3">
              <h3>Achievements</h3>
            </div>
            <div
              id="horizontal-timeline"
              className="timeline horizontal reverse"
            >
              <div className="block">
                <div
                  className="square up "
                  style={{
                    borderLeft: "2px solid rgb(176, 7, 7)",
                    marginLeft: "20px",
                  }}
                >
                  <p>Villages : 1</p>
                  <p>Capacity : 14 Cr</p>
                </div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "rgb(176, 7, 7)",
                  }}
                >
                  <p>2018</p>
                </div>
                <div className="link"></div>
                <div className="square down blank "></div>
              </div>
              <div className="block">
                <div className="square up blank"></div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#ff5e33",
                  }}
                >
                  <p>2019</p>
                </div>
                <div className="link"></div>
                <div
                  className="square down"
                  style={{
                    borderLeft: "2px solid #ff5e33",
                    marginLeft: "20px",
                    paddingTop: "2.5rem",
                  }}
                >
                  <p>Villages : 7</p>
                  <p>Capacity : 11 Cr</p>
                </div>
              </div>
              <div className="block">
                <div
                  className="square up"
                  style={{
                    borderLeft: "2px solid #6234ed",
                    marginLeft: "20px",
                  }}
                >
                  <p>Villages : 14</p>
                  <p>Capacity : 27 Cr</p>
                </div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#6234ed ",
                  }}
                >
                  <p>2020</p>
                </div>
                <div className="link"></div>
                <div className="square down blank"></div>
              </div>
              <div className="block">
                <div className="square up blank"></div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#2f903c ",
                  }}
                >
                  <p>2021</p>
                </div>
                <div className="link"></div>
                <div
                  className="square down"
                  style={{
                    borderLeft: "2px solid #2f903c",
                    marginLeft: "20px",
                    paddingTop: "2.5rem",
                  }}
                >
                  <p>Villages : 19</p>
                  <p>Capacity : 27 Cr</p>
                </div>
              </div>
              <div className="block">
                <div
                  className="square up"
                  style={{
                    borderLeft: "2px solid #34f50c",
                    marginLeft: "20px",
                  }}
                >
                  <p>Villages : 44</p>
                  <p>Capacity : 126 Cr</p>
                </div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#34f50c ",
                  }}
                >
                  <p>2022</p>
                </div>
                <div className="link"></div>
                <div className="square down blank"></div>
              </div>
              <div className="block">
                <div className="square up blank"></div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#2f903c ",
                  }}
                >
                  <p>2023</p>
                </div>
                <div className="link"></div>
                <div
                  className="square down"
                  style={{
                    borderLeft: "2px solid #34f50c",
                    marginLeft: "20px",
                    paddingTop: "2.5rem",
                  }}
                >
                  <p>Villages : 62</p>
                  <p>Capacity : 132 Cr</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default OurJourney;
