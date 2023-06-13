import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import LeagueDetail from "../components/League/LeagueDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

const LeagueDetailPage = () => {
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
      <LeagueDetail />
      <Footer />
    </motion.div>
  );
};

export default LeagueDetailPage;
