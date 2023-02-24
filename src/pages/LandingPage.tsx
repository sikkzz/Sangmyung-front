import React from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import Landing from "../components/Landing/Landing";
import Promiss from "../components/Promiss/Promiss";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Landing />
      <Promiss primary={true} scroll={1000} />
      <Promiss primary={false} scroll={1700} />
      <Promiss primary={true} scroll={2400} />
      <Footer />
    </>
  );
};

export default LandingPage;
