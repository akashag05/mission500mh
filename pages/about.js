import AboutArea from "@/components/AboutArea";
import ClientsLogo from "@/components/ClientsLogo";
import ClientsLogoTwo from "@/components/ClientsLogoTwo";
import FaqArea from "@/components/FaqArea";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import MissionVision from "@/components/MissionVision";
import MixerAreaTwo from "@/components/MixerAreaTwo";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import TeamArea from "@/components/TeamArea";
import React from "react";

const AboutPage = () => {
  return (
    <Layout pageTitle="Mission 500 | About">
      <NavOne />
      <PageHeader title="About" />
      <MissionVision />
      <TeamArea />
      {/* <ClientsLogo /> */}
      <Footer />
    </Layout>
  );
};

export default AboutPage;
