import { call, all } from "redux-saga/effects";
import { authMode } from "./authStore/auth.saga";
// import { ourCompanyMode } from "./ourCompanyStore/ourCompanySaga";
// import { ourTeamMode } from "./ourTeamStore/ourTeamSaga";


export default function* rootSaga() {
  yield all([call(authMode)]);
}
