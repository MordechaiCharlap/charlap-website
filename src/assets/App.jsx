import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkouteerPrivacyPolicyPage from "../pages/WorkouteerPrivacyPolicyPage";
import HomePage from "../pages/HomePage";
import WeddingReservationsPage from "../pages/WeddingReservationsPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/workouteer-privacy-policy"
          element={<WorkouteerPrivacyPolicyPage />}
        />
        <Route
          path="/wedding-reservations"
          element={<WeddingReservationsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
