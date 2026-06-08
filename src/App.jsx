import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import BusinessCard from "./pages/BusinessCard";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/:slug"
          element={<BusinessCard />}
        />

      </Routes>

    </BrowserRouter>

  );

}