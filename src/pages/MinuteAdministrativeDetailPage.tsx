import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import MinuteAdministrativeDetail from "../components/Detail/MinuteAdministrativeDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const MinuteAdministrativeDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <MinuteAdministrativeDetail />
      <Footer />
    </>
  );
};

export default MinuteAdministrativeDetailPage;
