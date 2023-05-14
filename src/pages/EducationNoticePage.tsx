import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import EducationNotice from "../components/Education/EducationNotice";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const EducationNoticePage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <EducationNotice />
      <Footer />
    </>
  );
};

export default EducationNoticePage;
