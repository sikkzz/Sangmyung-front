import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Account from "../components/Account/Account";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const AccountPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[2]} />
      <Account />
      <Footer />
    </>
  );
};

export default AccountPage;
