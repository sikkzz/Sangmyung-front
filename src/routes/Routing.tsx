import { Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import IntroducePage from "../pages/IntroducePage";
import DepartmentPage from "../pages/DepartmentPage";
import PledgeSimplePage from "../pages/PledgeSimplePage";
import PledgeDetailPage from "../pages/PledgeDetailPage";
import CentralPage from "../pages/CentralPage";
import AccountPage from "../pages/AccountPage";
import AccountDetailPage from "../pages/AccountDetailPage";
import NoticePage from "../pages/NoticePage";
import NoticeDetailPage from "../pages/NoticeDetailPage";
import RulePage from "../pages/RulePage";
import MinutePage from "../pages/MinutePage";
import MinuteCenterDetailPage from "../pages/MinuteCenterDetailPage";
import MinuteRepresentativeDetailPage from "../pages/MinuteRepresentativeDetailPage";
import MinuteTutuionDetailPage from "../pages/MinuteTutuionDetailPage";
import MinuteAdministrativeDetailPage from "../pages/MinuteAdministrativeDetailPage";
import EducationForesightPage from "../pages/EducationForesightPage";
import EducationForesightDetailPage from "../pages/EducationForesightDetailPage";
import EducationNoticePage from "../pages/EducationNoticePage";
import EducationNoticeDetailPage from "../pages/EducationNoticeDetailPage";
import CalendarPage from "../pages/CalendarPage";
import PartnerPage from "../pages/PartnerPage";
import PartnerDetailPage from "../pages/PartnerDetailPage";
import MapPage from "../pages/MapPage";
import RentalPage from "../pages/RentalPage";
import BoardPage from "../pages/BoardPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/intro/introduce" element={<IntroducePage />} />
      <Route path="/intro/introduce/:param" element={<IntroducePage />} />
      <Route path="/intro/department" element={<DepartmentPage />} />
      <Route path="/intro/department/:param" element={<DepartmentPage />} />
      <Route path="/intro/pledge/simple" element={<PledgeSimplePage />} />
      <Route path="/intro/pledge/detail" element={<PledgeDetailPage />} />
      <Route
        path="/intro/pledge/detail/:param"
        element={<PledgeDetailPage />}
      />
      <Route path="/intro/central" element={<CentralPage />} />
      <Route path="/intro/account" element={<AccountPage />} />
      <Route path="/intro/account/detail/:id" element={<AccountDetailPage />} />
      <Route path="/intro/notice" element={<NoticePage />} />
      <Route path="/intro/notice/detail/:id" element={<NoticeDetailPage />} />
      <Route path="/info/minute" element={<MinutePage />} />
      <Route path="/info/minute/:param" element={<MinutePage />} />
      <Route path="/info/rule" element={<RulePage />} />
      <Route
        path="/info/minute/center/detail"
        element={<MinuteCenterDetailPage />}
      />
      <Route
        path="/info/minute/center/detail/:id"
        element={<MinuteCenterDetailPage />}
      />
      <Route
        path="/info/minute/representative/detail/:id"
        element={<MinuteRepresentativeDetailPage />}
      />
      <Route
        path="/info/minute/tution/detail/:id"
        element={<MinuteTutuionDetailPage />}
      />
      <Route
        path="/info/minute/administrative/detail/:id"
        element={<MinuteAdministrativeDetailPage />}
      />
      <Route
        path="/info/education/foresight"
        element={<EducationForesightPage />}
      />
      <Route
        path="/info/education/foresight/detail/:id"
        element={<EducationForesightDetailPage />}
      />
      <Route
        path="/info/education/ednotice"
        element={<EducationNoticePage />}
      />
      <Route
        path="/info/education/ednotice/detail/:id"
        element={<EducationNoticeDetailPage />}
      />
      <Route path="/info/calendar" element={<CalendarPage />} />
      <Route path="/facility/partnership" element={<PartnerPage />} />
      <Route path="/facility/partnership/:param" element={<PartnerPage />} />
      <Route
        path="/facility/partnership/detail/:id"
        element={<PartnerDetailPage />}
      />
      <Route path="/facility/map" element={<MapPage />} />
      <Route path="/facility/rental" element={<RentalPage />} />
      <Route path="/info/board" element={<BoardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
