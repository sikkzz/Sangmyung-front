import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Footer from "../components/Footer/Footer";
import Schedule from "../components/Schedule/Schedule";
import Calendar from "../components/Schedule/Calendar";
import Test2 from "../components/Schedule/Calendar";

import { useLocation } from "react-router-dom";

const SchedulePage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      {/* <Schedule /> */}
      <Test2 />
      <Footer />
    </>
  );
};

export default SchedulePage;
