import { Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage";
import IntroducePage from "../pages/IntroducePage";
import DepartmentPage from "../pages/DepartmentPage";
import MapPage from "../pages/MapPage";
import PledgeSimplePage from "../pages/PledgeSimplePage";
import PledgeDetailPage from "../pages/PledgeDetailPage";
import PartnerPage from "../pages/PartnerPage";
import SchedulePage from "../pages/SchedulePage";
import NoticePage from "../pages/NoticePage";
import MinutePage from "../pages/MinutePage";
import RulePage from "../pages/RulePage";
import DetailPage from "../pages/DetailPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/introduce" element={<IntroducePage />} />
      <Route path="/introduce/:param" element={<IntroducePage />} />
      <Route path="/department" element={<DepartmentPage />} />
      <Route path="/department/:param" element={<DepartmentPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/pledge/simple" element={<PledgeSimplePage />} />
      <Route path="/pledge/detail" element={<PledgeDetailPage />} />
      <Route path="/pledge/detail/:param" element={<PledgeDetailPage />} />
      <Route path="/partnership" element={<PartnerPage />} />
      <Route path="/partnership/:param" element={<PartnerPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/minute" element={<MinutePage />} />
      <Route path="/minute/:param" element={<MinutePage />} />
      <Route path="/rule" element={<RulePage />} />
      <Route path="/minute/center/detail" element={<DetailPage />} />
      <Route path="/minute/center/detail/:id" element={<DetailPage />} />
      <Route path="/minute/representative/detail/:id" element={<DetailPage />} />
      <Route path="/minute/tution/detail/:id" element={<DetailPage />} />
      <Route path="/minute/council/detail/:id" element={<DetailPage />} />
      <Route path="/minute/administrative/detail/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default Routing;
