import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import TimeLapse from "../components/Timelapse/Timelapse";
import Landing from "../components/Landing/Landing";
import Promiss from "../components/Promiss/Promiss";
import Footer from "../components/Footer/Footer";

import { PromissData } from "../constants/data/PromissData";

const LandingPage = () => {
  return (
    <>
    <TopHeader />
      <Header />
      <Slider />
      <TimeLapse />
      <Landing />
      {PromissData.map((item, index) => (
        <Promiss
          key={index}
          primary={item.primary}
          scroll={item.scroll}
          id={item.id}
          title={item.title}
          sub={item.sub}
          sub2={item.sub2}
          mark={item.mark}
        />
      ))}
      <Footer />
    </>
  );
};

export default LandingPage;
