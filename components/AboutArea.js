import Link from "next/link";
import React from "react";

const aboutDetails = [
  {
    title: "Save, Store, and Share:",
    desc: "Our approach is threefold saving water through efficient usage practices, storing excess water using modern techniques such as cost effective check dams and groundwater recharge, and sharing knowledge to empower communities with actionable insights",
  },
  {
    title: "Community-Centric Action:",
    desc: "We believe that impactful change begins at the grassroots level. Mission500 engages citizens, local leaders, schools, and organizations in workshops, campaigns, and collaborative initiatives, creating a network of water-conscious advocates",
  },
  {
    title: "Innovation and Research:",
    desc: "We are committed to identifying and implementing cutting-edge technologies for water conservation. By partnering with research institutions, experts, and innovators, we aim to find novel solutions that address water scarcity challenges.",
  },
  {
    title: "Policy Advocacy:",
    desc: "Mission500 works closely with policymakers and government bodies to advocate for effective water conservation policies and regulations. Our goal is to drive systemic change that supports sustainable water management practices.",
  },
  {
    title: "Data-Driven Progress:",
    desc: "We emphasize data collection, analysis, and reporting to track water consumption patterns, project impact, and assess the effectiveness of our strategies. This enables us to adapt and optimize our approach for maximum results",
  },
  {
    title: "Crisis Response and Preparedness",
    desc: "Recognizing the urgency of water scarcity during droughts, Mission500 is dedicated to developing emergency response plans and resources that help communities manage and navigate challenging times",
  },
  {
    title: "Inspiring Recognition",
    desc: "We celebrate individuals, organizations, and communities that demonstrate exceptional commitment to water conservation. Through awards, public acknowledgment, and storytelling, we inspire others to join our movement.",
  },
];

const AboutUs = () => {
  return (
    <>
      <section className="mission-vision-section">
        <div className="container">
          <div
            className="row mt-2 mb-5 text-center"
            // style={{ borderBottom: "2px solid #e36955", paddingBottom: "1rem" }}
          >
            {/* <div className="col">
              <h1 style={{ color: "#e36955" }}>
                Mission500 - Transforming Maharashtra's Water Landscape
              </h1>
            </div> */}
            <div>
              <p style={{ fontSize: "20px" }}>
                Mission is a peoples movement for water conservation started by
                Dr Ujjwalkumar Chavhan (IRS) in 2017 from Dhamangaon village in
                Chalisgaon tehsil in Jalgaon District of Maharashtra to address
                the problem of drought and floods, which was adversely affecting
                the livelihood of the farmers. It is community based,
                decentralised model of water conservation were the villagers
                come together to resolve problem of drought and flood.
              </p>
            </div>
          </div>

          {/* <div className="pb-5">
            <div className="d-flex" style={{ padding: "1rem 0" }}>
              <div
                className="px-3"
                style={{ fontSize: "28px", alignSelf: "center" }}
              >
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <h3 style={{ fontWeight: "600", fontSize: "30px" }}>
                Our Vision
              </h3>
            </div>
            <div>
              <ul
                className="mt-3"
                style={{
                  fontSize: "22px",
                  lineHeight: "32px",
                  listStyleType: "circle",
                }}
              >
                <p style={{ fontSize: "22px", lineHeight: "32px" }}>
                  We envision a Maharashtra where every drop of water is valued
                  Where communities thrive without the fear of water scarcity.
                  We aspire to transform the state into a model of water
                  sustainabilityy, showcasing the potential of collective action
                  and responsible water stewardship.
                </p>
              </ul>
            </div>
          </div>
          <div>
            <div className="d-flex" style={{ padding: "1rem 0" }}>
              <div
                className="px-3"
                style={{ fontSize: "28px", alignSelf: "center" }}
              >
                <i class="fa fa-bullseye" aria-hidden="true"></i>
              </div>
              <h3 style={{ fontWeight: "600", fontSize: "30px" }}>
                Our Mission
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "22px", lineHeight: "32px" }}>
                {" "}
                Our mission is to lead the way in water conservation by
                implementing the Mission500 strategy
              </p>
            </div>
          </div> */}
        </div>
      </section>
      <section className="container">
        <div className="d-flex" style={{ padding: "1rem 0" }}>
          {/* <div
            className="px-3"
            style={{ fontSize: "28px", alignSelf: "center" }}
          >
            <i class="fa fa-eye" aria-hidden="true"></i>
          </div> */}
          <h1 style={{ fontWeight: "600", fontSize: "35px" }}>
            Our Philosophy
          </h1>
        </div>
        {aboutDetails.map((item, index) => {
          return (
            <div key={index}>
              <h4 style={{ padding: "2rem 0", fontWeight: "500" }}>
                {item.title}
              </h4>
              <p style={{ fontSize: "22px", lineHeight: "32px" }}>
                {item.desc}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default AboutUs;
