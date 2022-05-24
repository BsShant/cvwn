import {
 TRIGGER_SLIDER_COLLAPSE
} from "./layoutStore.Types";

const INITIAL_STATE = {
  sliderCollapse: false,
  mobileCollapse: true,

};

export const layoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRIGGER_SLIDER_COLLAPSE:
      return {
        ...state,
        sliderCollapse: !state.sliderCollapse,
        mobileCollapse: !state.mobileCollapse
      };
     
        default:
      return state;
  }
};
