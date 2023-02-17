import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Tab from "../components/Tab/Tab";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";

const MapPage = () => {
  return (
    <>
      <Header />
      <Bio />
      <Tab state="map" />
      <Map />
      <Footer />
    </>
  );
};

export default MapPage;
