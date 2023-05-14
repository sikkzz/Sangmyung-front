import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import EducationForesight from "../components/Education/EducationForesight";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const EducationForesightPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <EducationForesight />
      <Footer />
    </>
  );
};

export default EducationForesightPage;
