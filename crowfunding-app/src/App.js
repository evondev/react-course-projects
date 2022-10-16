import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campaign/CampaignView";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import LayoutPayment from "layout/LayoutPayment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authRefreshToken, authUpdateUser } from "./store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";
import axios from "axios";
import RequiredAuthPage from "pages/RequiredAuthPage";
import { permissions } from "constants/permissions";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const WithdrawPage = lazy(() => import("./pages/WithdrawPage"));
const UnauthorizePage = lazy(() => import("./pages/UnauthorizePage"));

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.post(
  //       "/demo",
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer Token`,
  //         },
  //       }
  //     );
  //   }
  // }, []);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [dispatch, user]);
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/unauthorize"
            element={<UnauthorizePage></UnauthorizePage>}
          ></Route>
          <Route
            path="/withdraw"
            element={<WithdrawPage></WithdrawPage>}
          ></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            element={
              <RequiredAuthPage
                allowPermissions={[permissions.campaign.CREATE_CAMPAIGN]}
              ></RequiredAuthPage>
            }
          >
            <Route
              path="/start-campaign"
              element={<StartCampaignPage></StartCampaignPage>}
            ></Route>
          </Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
