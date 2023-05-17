import { Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage";
import IntroducePage from "../pages/IntroducePage";
import DepartmentPage from "../pages/DepartmentPage";
import PledgeSimplePage from "../pages/PledgeSimplePage";
import PledgeDetailPage from "../pages/PledgeDetailPage";
import CentralPage from "../pages/CentralPage";
import AccountPage from "../pages/AccountPage";
import AccountDetailPage from "../pages/AccountDetailPage";

const IntroRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/intro/introduce" element={<IntroducePage />} />
      <Route path="/intro/introduce/:param" element={<IntroducePage />} />
      <Route path="/intro/department" element={<DepartmentPage />} />
      <Route path="/intro/department/:param" element={<DepartmentPage />} />
      <Route path="/intro/pledge/simple" element={<PledgeSimplePage />} />
      <Route path="/intro/pledge/detail" element={<PledgeDetailPage />} />
      <Route path="/intro/pledge/detail/:param" element={<PledgeDetailPage />} />
      <Route path="/intro/central" element={<CentralPage />} />
      <Route path="/intro/account" element={<AccountPage />} />
      <Route path="/intro/account/detail/:id" element={<AccountDetailPage />} />
    </Routes>
  );
};

export default IntroRouting;
