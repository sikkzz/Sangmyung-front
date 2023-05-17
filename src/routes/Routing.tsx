import { Routes, Route } from "react-router";
import MapPage from "../pages/MapPage";
import PartnerPage from "../pages/PartnerPage";
import PartnerDetailPage from "../pages/PartnerDetailPage";
import NoticePage from "../pages/NoticePage";
import NoticeDetailPage from "../pages/NoticeDetailPage";
import RentalPage from "../pages/RentalPage";
import EducationForesightPage from "../pages/EducationForesightPage";
import EducationForesightDetailPage from "../pages/EducationForesightDetailPage";
import EducationNoticePage from "../pages/EducationNoticePage";
import EducationNoticeDetailPage from "../pages/EducationNoticeDetailPage";
import CalendarPage from "../pages/CalendarPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/map" element={<MapPage />} />
      <Route path="/partnership" element={<PartnerPage />} />
      <Route path="/partnership/:param" element={<PartnerPage />} />
      <Route path="/partnership/detail/:id" element={<PartnerDetailPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/notice/detail/:id" element={<NoticeDetailPage />} />
      
      <Route path="/rental" element={<RentalPage />} />
      <Route path="/education/foresight" element={<EducationForesightPage />} />
      <Route
        path="/education/foresight/detail/:id"
        element={<EducationForesightDetailPage />}
      />
      <Route path="/education/notice" element={<EducationNoticePage />} />
      <Route
        path="/education/notice/detail/:id"
        element={<EducationNoticeDetailPage />}
      />
      
    </Routes>
  );
};

export default Routing;
