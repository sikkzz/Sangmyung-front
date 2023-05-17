import { Routes, Route } from "react-router";
import RulePage from "../pages/RulePage";
import MinutePage from "../pages/MinutePage";
import MinuteCenterDetailPage from "../pages/MinuteCenterDetailPage";
import MinuteRepresentativeDetailPage from "../pages/MinuteRepresentativeDetailPage";
import MinuteTutuionDetailPage from "../pages/MinuteTutuionDetailPage";
import MinuteAdministrativeDetailPage from "../pages/MinuteAdministrativeDetailPage";

const InfoRouting = () => {
  return (
    <Routes>
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
    </Routes>
  );
};

export default InfoRouting;
