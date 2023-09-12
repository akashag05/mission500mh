import React from "react";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

const News = () => {
  return (
    <Layout pageTitle="Oxpitan | News">
      <NavOne />
      <PageHeader title="News" />
      <Contact />
      {/* <Map /> */}
      <Footer />
    </Layout>
  );
};

export default News;
