import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route
          path="/start-campaign"
          element={<StartCampaignPage></StartCampaignPage>}
        ></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
