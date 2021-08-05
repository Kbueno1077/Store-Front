export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const ADD_TO_BASKET_ASYNC = "ADD_TO_BASKET_ASYNC";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const REMOVE_FROM_BASKET_ASYNC = "REMOVE_FROM_BASKET_ASYNC";

export function addToBasket(basketItem) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_BASKET,
      payload: { id: basketItem.id, amount: 1 },
    });
  };
}

export function removeFromBasket(basketItem) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: { id: basketItem.id, amount: 1 },
    });
  };
}
