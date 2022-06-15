import { call, all } from "redux-saga/effects";
import { aboutMode } from "./aboutReducer/aboutStore.saga";
import { authMode } from "./authStore/auth.saga";
import { contactMode } from "./contactReducer/contactStore.saga";
import { eventMode } from "./eventReducer/eventStore.saga";
import { footerMode } from "./footerReducer/footerStore.saga";
import { getInvolvedMode } from "./getInvolvedReducer/getInvolvedStore.saga";
import { landingMode } from "./landingReducer/landingStore.saga";
import { projectMode } from "./projectReducer/projectStore.saga";
import { resourceMode } from "./resourceReducer/resourceStore.saga";
// import { ourCompanyMode } from "./ourCompanyStore/ourCompanySaga";
// import { ourTeamMode } from "./ourTeamStore/ourTeamSaga";

export default function* rootSaga() {
  yield all([
    call(authMode),
    call(resourceMode),
    call(eventMode),
    call(projectMode),
    call(landingMode),
    call(aboutMode),
    call(getInvolvedMode),
    call(contactMode),
    call(footerMode)
  ]);
}
