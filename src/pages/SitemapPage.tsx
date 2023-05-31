import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Sitemap from "../components/Sitemap/Sitemap";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const SitemapPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <Sitemap />
      <Footer />
    </>
  );
};

export default SitemapPage;
