import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Footer from "../components/Footer/Footer";
import Tab from "../components/Tab/Tab";
import DepartContent from "../components/DepartContent/DepartContent";

import { useParams } from "react-router-dom";

const DepartmentPage = () => {
  const param = useParams();
  // console.log(param.param)
  return (
    <>
      <Header />
      <Bio />
      <DepartContent state={param.param}/>
      <Footer />
    </>
  );
};

export default DepartmentPage;
