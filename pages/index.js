import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderOne from "@/components/SliderOne";
import EntryArea from "@/components/EntryArea";
import Footer from "@/components/Footer";
import BlogHome from "@/components/BlogHome";
import TeamArea from "@/components/TeamArea";
import ClientsLogo from "@/components/ClientsLogo";
import ServiceArea from "@/components/ServiceArea";
import MixerArea from "@/components/MixerArea";
import HelpingArea from "@/components/HelpingArea";
import HiwArea from "@/components/HiwArea";
import YoutubeCallToAction from "@/components/YoutubeCallToAction";
import CallToActionTwo from "@/components/CallToActionTwo";
import Map from "@/components/Map";

const HomePage = () => {
  return (
    <Layout pageTitle="Mission 500">
      <NavOne />
      <SliderOne />
      <EntryArea />
      <ServiceArea />
      <HiwArea />
      <MixerArea />
      {/* <HelpingArea />
      <TeamArea /> */}
      <ClientsLogo />
      {/* <YoutubeCallToAction /> */}
      {/* <BlogHome /> */}
      {/*<Map />
      <CallToActionTwo /> */}
      <Footer />
    </Layout>
  );
};

export default HomePage;
