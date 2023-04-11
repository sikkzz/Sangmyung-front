import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import PledgeDetail from "../components/Pledge/PledgeDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const PledgeDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <PledgeDetail state={location.pathname.split("/")[3]} />
      <Footer />
    </>
  );
};

export default PledgeDetailPage;
