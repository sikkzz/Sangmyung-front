import { Routes, Route } from "react-router";
import PartnerPage from "../pages/PartnerPage";
import PartnerDetailPage from "../pages/PartnerDetailPage";
import MapPage from "../pages/MapPage";
import RentalPage from "../pages/RentalPage";

const FacilityRouting = () => {
  return (
    <Routes>
      <Route path="/facility/partnership" element={<PartnerPage />} />
      <Route path="/facility/partnership/:param" element={<PartnerPage />} />
      <Route
        path="/facility/partnership/detail/:id"
        element={<PartnerDetailPage />}
      />
      <Route path="/facility/map" element={<MapPage />} />
      <Route path="/facility/rental" element={<RentalPage />} />
    </Routes>
  );
};

export default FacilityRouting;
