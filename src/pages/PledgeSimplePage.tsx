import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import PledgeSimple from "../components/Pledge/PledgeSimple";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const PledgeSimplePage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <PledgeSimple />
      <Footer />
    </>
  );
};

export default PledgeSimplePage;
