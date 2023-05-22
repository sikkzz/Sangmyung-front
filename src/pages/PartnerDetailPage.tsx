import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import PartnerDetail from "../components/PartnerShip/PartnerDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const PartnerDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <PartnerDetail />
      <Footer />
    </>
  );
};

export default PartnerDetailPage;
