import { TOGGLE_DISPLAY, TOGGLE_DROP_MENU } from "./actions";

const initialState = {
  displayRows: true,
  showDropMenu: false,
};

const ViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DISPLAY:
      return {
        ...state,
        displayRows: !state.displayRows,
      };

    case TOGGLE_DROP_MENU:
      return {
        ...state,
        showDropMenu: !state.showDropMenu,
      };

    default:
      return state;
  }
};

export default ViewReducer;
