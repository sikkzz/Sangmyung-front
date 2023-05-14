import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Rental from "../components/Rental/Rental";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const RentalPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Rental />
      <Footer />
    </>
  );
};

export default RentalPage;
