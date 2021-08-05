export const LOG_USER = "LOG_USER";
export const UNLOG_USER = "UNLOG_USER";
export const SET_TO_VERIFY = "SET_TO_VERIFY";
export const UNSET_TO_VERIFY = "UNSET_TO_VERIFY";

export function logUser(user) {
  return (dispatch) => {
    dispatch({
      type: LOG_USER,
      payload: { user },
    });
  };
}

export function unlogUser() {
  return (dispatch) => {
    dispatch({
      type: UNLOG_USER,
      payload: {},
    });
  };
}

export function set_to_verify(verify_address) {
  return (dispatch) => {
    dispatch({
      type: SET_TO_VERIFY,
      payload: { verify_address },
    });
  };
}

export function unset_to_verify() {
  return (dispatch) => {
    dispatch({
      type: UNSET_TO_VERIFY,
      payload: {},
    });
  };
}
