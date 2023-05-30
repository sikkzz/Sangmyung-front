import { Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
