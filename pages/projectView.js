import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import SummeryTable from "@/components/summeryTable";
import React from "react";

const projectView = () => {
  return (
    <Layout pageTitle="Project Viewp">
      <NavOne />
      <PageHeader title="Project View" />
      {/* <MapsSwiper /> */}
      <SummeryTable />
      <Footer />
    </Layout>
  );
};

export default projectView;
