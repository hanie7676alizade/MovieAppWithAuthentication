import { takeEvery } from "redux-saga/effects";
import * as sagas from "./sagas";
import { loginUser, registerUser } from "./slice";

export default function* commonSagaWatcher() {
  yield takeEvery(registerUser.type, sagas.registerSaga);
  yield takeEvery(loginUser.type, sagas.loginSaga);
}
