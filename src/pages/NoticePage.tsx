import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Notice from "../components/Notice/Notice";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const NoticePage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Notice />
      <Footer />
    </>
  );
};

export default NoticePage;
