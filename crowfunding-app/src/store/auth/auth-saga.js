import { takeLatest } from "redux-saga/effects";
import handleAuthRegister from "./auth-handlers";
import { authRegister } from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
}
