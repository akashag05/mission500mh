import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderOne from '@/components/SliderOne';
import EntryArea from '@/components/EntryArea';
import Footer from '@/components/Footer';
import BlogHome from '@/components/BlogHome';
import TeamArea from '@/components/TeamArea';
import ClientsLogo from '@/components/ClientsLogo';
import ServiceArea from '@/components/ServiceArea';
import MixerArea from '@/components/MixerArea';
import HelpingArea from '@/components/HelpingArea';

const HomePage = () => {
  return (
    <Layout pageTitle="Mission 500 website">
      <NavOne />
      <SliderOne />
      <EntryArea />
      <ServiceArea />
      <MixerArea />
      <HelpingArea />
      <TeamArea />
      <ClientsLogo />
      <BlogHome />
      <Footer />
    </Layout>
  );
};

export default HomePage;
