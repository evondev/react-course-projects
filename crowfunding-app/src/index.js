import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutDashboard from "layout/LayoutDashboard";
import RequiredAuthPage from "pages/RequiredAuthPage";
import CampaignView from "modules/campaign/CampaignView";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const WithdrawPage = lazy(() => import("./pages/WithdrawPage"));
const UnauthorizePage = lazy(() => import("./pages/UnauthorizePage"));
const container = document.getElementById("root");
const router = createBrowserRouter([
  {
    element: <LayoutDashboard></LayoutDashboard>,
    children: [
      {
        path: "/",
        element: <DashboardPage></DashboardPage>,
      },
      {
        path: "/campaign",
        element: <CampaignPage></CampaignPage>,
      },
      {
        path: "/payment",
        element: <PaymentPage></PaymentPage>,
      },
      {
        path: "/withdraw",
        element: <WithdrawPage></WithdrawPage>,
      },
      {
        path: "/unauthorize",
        element: <UnauthorizePage></UnauthorizePage>,
      },
      {
        element: <RequiredAuthPage allowPermissions={[]}></RequiredAuthPage>,
        children: [
          {
            path: "/start-campaign",
            element: <StartCampaignPage></StartCampaignPage>,
          },
          {
            path: "/campaign/:slug",
            element: <CampaignView></CampaignView>,
          },
        ],
      },
      {
        path: "*",
        element: <>This page is not exist</>,
      },
    ],
  },
  {
    path: "/register",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/login",
    element: <SignInPage></SignInPage>,
  },
]);
createRoot(container).render(
  <Provider store={store}>
    <Suspense fallback={<p></p>}>
      <App>
        <RouterProvider router={router}></RouterProvider>
      </App>
    </Suspense>
    <ToastContainer bodyClassName="font-primary text-sm"></ToastContainer>
  </Provider>
);

// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//       <ToastContainer bodyClassName="font-primary text-sm"></ToastContainer>
//     </BrowserRouter>
//   </Provider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
