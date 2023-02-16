import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Footer from "../components/Footer/Footer";
import Tab from "../components/Tab/Tab";

import { useParams } from "react-router-dom";

const DepartmentPage = () => {
  const param = useParams();
  return (
    <>
      <Header />
      <Bio />
      <Tab state="department" />
      <Footer />
    </>
  );
};

export default DepartmentPage;
