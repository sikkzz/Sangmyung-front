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
import NoticeDetailPage from "../pages/NoticeDetailPage";
import MinuteCenterDetailPage from "../pages/MinuteCenterDetailPage";
import MinuteRepresentativeDetailPage from "../pages/MinuteRepresentativeDetailPage";
import MinuteTutuionDetailPage from "../pages/MinuteTutuionDetailPage";
import MinuteCouncilDetailPage from "../pages/MinuteCouncilDetailPage";
import MinuteAdministrativeDetailPage from "../pages/MinuteAdministrativeDetailPage";
import RentalPage from "../pages/RentalPage";
import EducationNoticePage from "../pages/EducationNoticePage";
import EducationDetailPage from "../pages/EducationDetailPage";

import CalendarPage from "../pages/CalendarPage";

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
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/notice/detail/:id" element={<NoticeDetailPage />} />
      <Route path="/minute" element={<MinutePage />} />
      <Route path="/minute/:param" element={<MinutePage />} />
      <Route path="/rule" element={<RulePage />} />
      <Route
        path="/minute/center/detail"
        element={<MinuteCenterDetailPage />}
      />
      <Route
        path="/minute/center/detail/:id"
        element={<MinuteCenterDetailPage />}
      />
      <Route
        path="/minute/representative/detail/:id"
        element={<MinuteRepresentativeDetailPage />}
      />
      <Route
        path="/minute/tution/detail/:id"
        element={<MinuteTutuionDetailPage />}
      />
      <Route
        path="/minute/council/detail/:id"
        element={<MinuteCouncilDetailPage />}
      />
      <Route
        path="/minute/administrative/detail/:id"
        element={<MinuteAdministrativeDetailPage />}
      />
      <Route path="/rental" element={<RentalPage />} />
      <Route path="/education/notice" element={<EducationNoticePage />} />
      <Route
        path="/education/notice/detail/:id"
        element={<EducationDetailPage />}
      />
    </Routes>
  );
};

export default Routing;
