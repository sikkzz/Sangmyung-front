import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import EducationNoticeDetail from "../components/Education/EducationNoticeDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const EducationDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <EducationNoticeDetail />
      <Footer />
    </>
  );
};

export default EducationDetailPage;
