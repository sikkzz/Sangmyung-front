import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import EducationForesightDetail from "../components/Education/EducationForesightDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const EducationForesightDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <EducationForesightDetail />
      <Footer />
    </>
  );
};

export default EducationForesightDetailPage;
