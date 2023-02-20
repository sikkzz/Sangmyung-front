import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Footer from "../components/Footer/Footer";
import DepartContent from "../components/DepartContent/DepartContent";

import { useParams, useLocation } from "react-router-dom";

const DepartmentPage = () => {
  const param = useParams();
  const location = useLocation();
  // console.log(param.param)
  
  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <DepartContent state={param.param} />
      <Footer />
    </>
  );
};

export default DepartmentPage;
