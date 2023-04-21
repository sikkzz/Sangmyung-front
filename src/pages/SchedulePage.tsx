import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Schedule from "../components/Schedule/Schedule";
import Calendar from "../components/Calendar/Calendar";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const SchedulePage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      {/* <Schedule /> */}
      <Calendar />
      <Footer />
    </>
  );
};

export default SchedulePage;
