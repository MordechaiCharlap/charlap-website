import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkouteerPrivacyPolicyPage from "../pages/WorkouteerPrivacyPolicyPage";
import HomePage from "../pages/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/workouteer-privacy-policy"
          element={<WorkouteerPrivacyPolicyPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
