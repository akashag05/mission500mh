import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import TeamArea from "@/components/TeamArea";
import React from "react";

const OurTeam = () => {
  return (
    <Layout pageTitle="Mission 500 | About">
      <NavOne />
      <PageHeader title="Our Team" />
      <div className="container">
        <div className="py-4">
          <p className="my-4">
            At the heart of Mission 500 are the individuals from various
            backgrounds, each bringing their unique skills, knowledge, and
            experiences. Government servants, Doctors, Engineers, Educators and
            Community Leaders all unite under the common theme of Water
            Conservation
          </p>
          <p className="my-4">
            Paach Patil team forms the foundation of Mission 500’s work. People
            who took responsibility for 5 villages each are called ‘Paach
            Patil’. Team is trained for 9 months in Leadership development
            skills. They conduct meetings and Shivar Pheris in villages and
            create awareness regarding water conservation, they select Gaon
            Pramukhs (village level coordinators), who plans and executes the
            work in coordination with farmers. They also supervise the work
            during execution. The paach patil as well as Gao Pramukhs work
            voluntarily, for transforming peoples life.
          </p>
          <p className="my-4">
            Paach Patil team forms the foundation of Mission 500’s work. People
            who took responsibility for 5 villages each are called ‘Paach
            Patil’. Team is trained for 9 months in Leadership development
            skills. They conduct meetings and Shivar Pheris in villages and
            create awareness regarding water conservation, they select Gaon
            Pramukhs (village level coordinators), who plans and executes the
            work in coordination with farmers. They also supervise the work
            during execution. The paach patil as well as Gao Pramukhs work
            voluntarily, for transforming peoples life.
          </p>
        </div>
      </div>
      <TeamArea />
      <Footer />
    </Layout>
  );
};

export default OurTeam;
