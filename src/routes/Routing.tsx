import { Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import GreetingPage from "../pages/GreetingPage";
import OrganizationPage from "../pages/OrganizationPage";
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
import EventPage from "../pages/EventPage";
import EventDetailPage from "../pages/EventDetailPage";
import CalendarPage from "../pages/CalendarPage";
import PartnerPage from "../pages/PartnerPage";
import PartnerDetailPage from "../pages/PartnerDetailPage";
import MapPage from "../pages/MapPage";
import RentalPage from "../pages/RentalPage";
import SitemapPage from "../pages/SitemapPage";
import ProducerPage from "../pages/ProducerPage";
import LeaguePage from "../pages/LeaguePage";
import LeagueDetailPage from "../pages/LeagueDetailPage";
import ClubPage from "../pages/ClubPage";

import { AnimatePresence } from "framer-motion";

const Routing = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/intro/introduce/greeting" element={<GreetingPage />} />
        <Route
          path="/intro/introduce/organizationchart"
          element={<OrganizationPage />}
        />
        <Route path="/intro/department" element={<DepartmentPage />} />
        <Route path="/intro/department/:param" element={<DepartmentPage />} />
        <Route path="/intro/pledge/simple" element={<PledgeSimplePage />} />
        <Route
          path="/intro/pledge/pledgedetail"
          element={<PledgeDetailPage />}
        />
        <Route
          path="/intro/pledge/pledgedetail/:param"
          element={<PledgeDetailPage />}
        />
        <Route path="/work/partnership" element={<PartnerPage />} />
        <Route path="/work/partnership/:param" element={<PartnerPage />} />
        <Route
          path="/work/partnership/detail/:id"
          element={<PartnerDetailPage />}
        />
        <Route path="/work/event" element={<EventPage />} />
        <Route path="/work/event/detail/:id" element={<EventDetailPage />} />
        <Route
          path="/work/education/foresight"
          element={<EducationForesightPage />}
        />
        <Route
          path="/work/education/foresight/detail/:id"
          element={<EducationForesightDetailPage />}
        />
        <Route
          path="/work/education/ednotice"
          element={<EducationNoticePage />}
        />
        <Route
          path="/work/education/ednotice/detail/:id"
          element={<EducationNoticeDetailPage />}
        />
        <Route path="/work/account" element={<AccountPage />} />
        <Route path="/work/league" element={<LeaguePage />} />
        <Route path="/work/league/detail/:id" element={<LeagueDetailPage />} />
        <Route
          path="/work/account/detail/:id"
          element={<AccountDetailPage />}
        />
        <Route path="/info/notice" element={<NoticePage />} />
        <Route path="/info/notice/detail/:id" element={<NoticeDetailPage />} />
        <Route path="/info/calendar" element={<CalendarPage />} />
        <Route path="/info/rule" element={<RulePage />} />
        <Route path="/info/minute" element={<MinutePage />} />
        <Route path="/info/minute/:param" element={<MinutePage />} />
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
        <Route path="/facility/map" element={<MapPage />} />
        <Route path="/facility/rental" element={<RentalPage />} />
        <Route path="/government/central" element={<CentralPage />} />
        <Route path="/government/club" element={<ClubPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/producer" element={<ProducerPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
