import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Footer from "../components/Footer/Footer";
import DepartContent from "../components/DepartContent/DepartContent";

import { useLocation } from "react-router-dom";

const DepartmentPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <DepartContent />
      <Footer />
    </>
  );
};

export default DepartmentPage;
