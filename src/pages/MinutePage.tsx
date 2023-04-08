import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Minute from "../components/Minute/Minute";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const MinutePage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Minute />
      <Footer />
    </>
  );
};

export default MinutePage;
