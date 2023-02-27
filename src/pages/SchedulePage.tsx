import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Footer from "../components/Footer/Footer";
import Schedule from "../components/Schedule/Schedule";

import { useLocation } from "react-router-dom";

const SchedulePage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Schedule />
      <Footer />
    </>
  );
};

export default SchedulePage;
