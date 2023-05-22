import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Notice from "../components/Notice/Notice";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const NoticePage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <Notice />
      <Footer />
    </>
  );
};

export default NoticePage;
