import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authRefreshToken, authUpdateUser } from "./store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App({ children }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      console.log("useEffect ~ access_token:", access_token);
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
  return <>{children}</>;
}

export default App;
