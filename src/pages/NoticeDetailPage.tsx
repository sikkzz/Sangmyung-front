import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Detail from "../components/Detail/NoticeDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const NoticeDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Detail />
      <Footer />
    </>
  );
};

export default NoticeDetailPage;
