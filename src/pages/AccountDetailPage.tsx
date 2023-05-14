import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import AccountDetail from "../components/Account/AccountDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const AccountDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <AccountDetail />
      <Footer />
    </>
  );
};

export default AccountDetailPage;
