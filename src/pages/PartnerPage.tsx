import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import PartnerShip from "../components/PartnerShip/PartnerShip";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const PartnerPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <PartnerShip />
      <Footer />
    </>
  );
};

export default PartnerPage;
