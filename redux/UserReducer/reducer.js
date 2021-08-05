import {
  LOG_USER,
  UNLOG_USER,
  SET_TO_VERIFY,
  UNSET_TO_VERIFY,
} from "./actions";

const initialState = {
  username: "",
  password: "",
  attributes: {
    email: "",
    phone_number: "",
    country: { name: "", dial_code: "", code: "", index: "" },
    phone: "",
    delivery_address: "",

    card_credentials: {
      card_number: "",
      card_name: "",
      card_type: "",
      card_expDate: "",
      cvv: "",

      bill_address: {
        city: "",
        street: "",
        zip_code: "",
        country: "",
      },
    },

    verified: {
      is_email_verified: "",
      is_phone_verified: "",
    },
  },
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER:
      const user = action.payload;
      return {
        ...state,
        user,
      };

    case UNLOG_USER:
      return {
        ...state,
        initialState,
      };

    default:
      return state;
  }
};

export default UserReducer;
