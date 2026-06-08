import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import BusinessCard from "./pages/BusinessCard";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* 기본 접속 시 대표 명함 */}

        <Route
          path="/"
          element={
            <Navigate
              to="/dk.kwag"
              replace
            />
          }
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