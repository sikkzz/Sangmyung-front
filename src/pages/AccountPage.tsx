import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Account from "../components/Account/Account";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const AccountPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Account />
      <Footer />
    </>
  );
};

export default AccountPage;
