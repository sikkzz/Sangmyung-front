import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Footer from "../components/Footer/Footer";
import Schedule from "../components/Schedule/Schedule";
import Calendar from "../components/Schedule/Calendar";
import Test2 from "../components/Schedule/Test2";

import { useLocation } from "react-router-dom";

const CalendarPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state="schedule" />
      {/* <Schedule /> */}
      <Test2 />
      <Footer />
    </>
  );
};

export default CalendarPage;
