import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import EducationNoticeDetail from "../components/Education/EducationNoticeDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const EducationNoticeDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <EducationNoticeDetail />
      <Footer />
    </>
  );
};

export default EducationNoticeDetailPage;
