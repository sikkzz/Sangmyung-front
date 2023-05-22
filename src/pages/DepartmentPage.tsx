import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Footer from "../components/Footer/Footer";
import DepartContent from "../components/DepartContent/DepartContent";

import { useLocation } from "react-router-dom";

const DepartmentPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <DepartContent />
      <Footer />
    </>
  );
};

export default DepartmentPage;
