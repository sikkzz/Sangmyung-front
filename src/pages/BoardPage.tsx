import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import BioSimple from "../components/Bio/BioSimple";
import Board from "../components/Board/Board";
import Footer from "../components/Footer/Footer";

import { motion } from "framer-motion";

const BoardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <TopHeader />
      <Header />
      <BioSimple />
      <Board />
      <Footer />
    </motion.div>
  );
};

export default BoardPage;
