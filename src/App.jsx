import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import BusinessCard from "./pages/BusinessCard";
import LandingPage from "./pages/LandingPage";

import "./styles/business-card.css";
import "./styles/landing.css";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* 기본 접속 시 /dk 로 이동 */}

        <Route
          path="/"
          element={
            <Navigate
              to="/dk"
              replace
            />
          }
        />

        {/* DK 그룹 메인 랜딩 */}

        <Route
          path="/dk"
          element={<LandingPage />}
        />

        {/* 직원 명함 */}

        <Route
          path="/:slug"
          element={<BusinessCard />}
        />

      </Routes>

    </BrowserRouter>

  );

}