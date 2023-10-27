import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import React from "react";

const Health = () => {
  return (
    <Layout pageTitle="Employment">
      <NavOne />
      <PageHeader title="Employment" />
      <div className="d-flex flex-column justify-content-center align-items-center p-4">
        <p>
          We appreciate your interest in our work. Details will be published
          soon.
        </p>
        <span>
          <p>Thanks for visiting us again</p>
        </span>
      </div>

      <Footer />
    </Layout>
  );
};

export default Health;
