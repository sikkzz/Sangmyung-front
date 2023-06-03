import { useParams, useLocation } from "react-router-dom";
import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Bio from "../components/Bio/Bio";
import Greeting from "../components/Greeting/Greeting";
import Organization from "../components/Organization/Organization";

import { motion } from "framer-motion";

const IntroducePage = () => {
  const param = useParams();
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      {param.param === "greeting" ? <Greeting /> : <Organization />}
      <Footer />
    </motion.div>
  );
};

export default IntroducePage;
