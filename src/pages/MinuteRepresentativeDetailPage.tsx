import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import MinuteRepresentativeDetail from "../components/Detail/MinuteRepresentativeDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const MinuteRepresentativeDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <MinuteRepresentativeDetail />
      <Footer />
    </>
  );
};

export default MinuteRepresentativeDetailPage;
