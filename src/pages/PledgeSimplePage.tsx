import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import PledgeSimple from "../components/Pledge/PledgeSimple";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const PledgeSimplePage = () => {
  const location = useLocation();

//   console.log(location.pathname.split("/")[2])

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <PledgeSimple />
      <Footer />
    </>
  );
};

export default PledgeSimplePage;
