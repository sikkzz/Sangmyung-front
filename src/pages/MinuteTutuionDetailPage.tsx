import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import MinuteTutionDetail from "../components/Detail/MinuteTutionDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const MinuteTutuionDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <MinuteTutionDetail />
      <Footer />
    </>
  );
};

export default MinuteTutuionDetailPage;
