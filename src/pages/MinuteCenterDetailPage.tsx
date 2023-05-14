import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import MinuteCenterDetail from "../components/Detail/MinuteCenterDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const MinuteCenterDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <MinuteCenterDetail />
      <Footer />
    </>
  );
};

export default MinuteCenterDetailPage;
