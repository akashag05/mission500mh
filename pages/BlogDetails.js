import BlogHome from "@/components/BlogHome";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import PdfViewer from "@/components/PdfViewer";
import React, { Component } from "react";

const pdfUrl = "../files/Blog1.pdf";
class BlogDetails extends Component {
  render() {
    return (
      <Layout pageTitle="Mission 500 | About">
        <NavOne />
        <PageHeader title="Blog Details" />
        <div className="d-flex flex-column" style={{ padding: "4rem" }}>
          <h2 style={{ paddingBottom: "1rem" }}>
            Empowering Communities through Decentralized Water Management: The
            Mission500 Paradigm
          </h2>
          <h4 style={{ padding: "0 6rem" }}>
            Written by : Dr. Ujjwal Kumar Chavhan, IRS
          </h4>
          <p className="py-4" style={{ fontSize: "22px", lineHeight: "30px" }}>
            Water is the cornerstone of life, a finite resource that sustains
            our ecosystems, cultures, and societies. Yet, the reality of water
            scarcity looms larger than ever, urging us to seek innovative
            solutions to conserve and manage this precious commodity. A
            groundbreaking initiative that has the potential to revolutionize
            our approach to water management – the Mission500 community-based
            decentralized water management system.
          </p>
          {/* <iframe src="../files/Blog1.pdf" width="800" height="500"></iframe> */}
          <div className="d-flex justify-content-center">
            <embed
              src="../files/Blog1.pdf"
              width="800"
              height="500"
              controls={false}
            ></embed>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default BlogDetails;
