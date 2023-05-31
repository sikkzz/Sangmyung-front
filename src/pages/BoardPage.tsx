import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Board from "../components/Board/Board";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const BoardPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <Board />
      <Footer />
    </>
  );
};

export default BoardPage;
