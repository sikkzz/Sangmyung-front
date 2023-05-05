import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Calendar from "../components/Calendar/Calendar";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const CalendarPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Calendar />
      <Footer />
    </>
  );
};

export default CalendarPage;
