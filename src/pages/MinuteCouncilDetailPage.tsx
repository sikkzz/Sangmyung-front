import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import MinuteCouncilDetail from "../components/Detail/MinuteCouncilDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const MinuteCouncilDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <MinuteCouncilDetail />
      <Footer />
    </>
  );
};

export default MinuteCouncilDetailPage;
