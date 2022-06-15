import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { layoutReducer } from "./layoutStore/layoutStore.reducer";
import { authReducer } from "./authStore/auth.reducer";
import { landingReducer } from "./landingReducer/landingStore.reducer";
import { footerReducer } from "./footerReducer/footerStore.reducer";
import { aboutReducer } from "./aboutReducer/aboutStore.reducer";
import { projectReducer } from "./projectReducer/projectStore.reducer";
import { eventReducer } from "./eventReducer/eventStore.reducer";
import { resourceReducer } from "./resourceReducer/resourceStore.reducer";
import { getInvolvedReducer } from "./getInvolvedReducer/getInvolvedStore.reducer";
import { contactReducer } from "./contactReducer/contactStore.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};
const rootReducer = combineReducers({
  authStore: authReducer,
  layoutStore: layoutReducer,
  projectStore: projectReducer,
  eventStore: eventReducer,
  resourceStore: resourceReducer,
  landingStore: landingReducer,
  getInvolvedStore: getInvolvedReducer,
  aboutStore: aboutReducer,
  footerStore: footerReducer,
  contactStore: contactReducer,
});

export default persistReducer(persistConfig, rootReducer);
