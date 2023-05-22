import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Central from "../components/Central/Central";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const CentralPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <Central />
      <Footer />
    </>
  );
};

export default CentralPage;
