import { combineReducers } from "redux";
import BasketReducer from "@/redux/BasketReducer/reducer";
import UserReducer from "@/redux/UserReducer/reducer";
import ViewReducer from "@/redux/ViewReducer/reducer";

const reducers = combineReducers({
  view: ViewReducer,
  user: UserReducer,
});

export default reducers;
