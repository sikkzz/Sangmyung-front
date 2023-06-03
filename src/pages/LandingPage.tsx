import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import TimeLapse from "../components/Timelapse/Timelapse";
import Landing from "../components/Landing/Landing";
import Promiss from "../components/Promiss/Promiss";
import Footer from "../components/Footer/Footer";

import { PromissData } from "../constants/data/PromissData";

import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
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
    </motion.div>
  );
};

export default LandingPage;
