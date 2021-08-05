export const TOGGLE_DISPLAY = "TOGGLE_DISPLAY";
export const TOGGLE_DROP_MENU = "TOGGLE_DROP_MENU";

export function ToggleDisplay() {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_DISPLAY,
      payload: {},
    });
  };
}

export function ToggleDropMenu() {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_DROP_MENU,
      payload: {},
    });
  };
}
