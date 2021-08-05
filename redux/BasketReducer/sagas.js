import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  ADD_TO_BASKET_ASYNC,
  REMOVE_FROM_BASKET_ASYNC,
} from "./actions";

//Add
function* addToBasketAsync({ payload }) {
  yield put({ type: ADD_TO_BASKET_ASYNC, payload });
}

export function* watchAddToBasket() {
  yield takeLatest(ADD_TO_BASKET, addToBasketAsync);
}

//Remove
function* removeFromBasketAsync({ payload }) {
  yield put({ type: REMOVE_FROM_BASKET_ASYNC, payload });
}

export function* watchRemoveFromBasket() {
  yield takeLatest(REMOVE_FROM_BASKET, removeFromBasketAsync);
}
