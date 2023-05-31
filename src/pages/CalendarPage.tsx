import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Calendar from "../components/Calendar/Calendar";
import Footer from "../components/Footer/Footer";
// import Test from "../components/Schedule/Test";

import { useLocation } from "react-router-dom";

const CalendarPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <Calendar />
      {/* <Test /> */}
      <Footer />
    </>
  );
};

export default CalendarPage;
