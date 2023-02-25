import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import PledgeSimple from "../components/Pledge/PledgeSimple";
import PledgeDetail from "../components/Pledge/PledgeDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const PledgePage = () => {
  const location = useLocation();

  console.log(location.pathname.split("/")[2]);

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      {location.pathname.split("/")[2] === "simple" ? (
        <PledgeSimple />
      ) : (
        <PledgeDetail />
      )}
      <Footer />
    </>
  );
};

export default PledgePage;
