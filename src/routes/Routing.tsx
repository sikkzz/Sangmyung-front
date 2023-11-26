import { Routes, Route } from "react-router";

import { AnimatePresence } from "framer-motion";

import AccountDetailPage from "../pages/AccountDetailPage";
import AccountPage from "../pages/AccountPage";
import CalendarPage from "../pages/CalendarPage";
import CentralPage from "../pages/CentralPage";
import ClubPage from "../pages/ClubPage";
import DepartmentPage from "../pages/DepartmentPage";
import EducationForesightDetailPage from "../pages/EducationForesightDetailPage";
import EducationForesightPage from "../pages/EducationForesightPage";
import EducationNoticeDetailPage from "../pages/EducationNoticeDetailPage";
import EducationNoticePage from "../pages/EducationNoticePage";
import EventDetailPage from "../pages/EventDetailPage";
import EventPage from "../pages/EventPage";
import GreetingPage from "../pages/GreetingPage";
import LandingPage from "../pages/LandingPage";
import LeagueDetailPage from "../pages/LeagueDetailPage";
import LeaguePage from "../pages/LeaguePage";
import MapPage from "../pages/MapPage";
import MinuteAdministrativeDetailPage from "../pages/MinuteAdministrativeDetailPage";
import MinuteCenterDetailPage from "../pages/MinuteCenterDetailPage";
import MinutePage from "../pages/MinutePage";
import MinuteRepresentativeDetailPage from "../pages/MinuteRepresentativeDetailPage";
import MinuteTutuionDetailPage from "../pages/MinuteTutuionDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import NoticeDetailPage from "../pages/NoticeDetailPage";
import NoticePage from "../pages/NoticePage";
import OrganizationPage from "../pages/OrganizationPage";
import PartnerDetailPage from "../pages/PartnerDetailPage";
import PartnerPage from "../pages/PartnerPage";
import PledgeDetailPage from "../pages/PledgeDetailPage";
import PledgeSimplePage from "../pages/PledgeSimplePage";
import ProducerPage from "../pages/ProducerPage";
import RentalPage from "../pages/RentalPage";
import RulePage from "../pages/RulePage";
import SitemapPage from "../pages/SitemapPage";

function Routing() {
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
}

export default Routing;
