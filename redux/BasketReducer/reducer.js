import { ADD_TO_BASKET_ASYNC, REMOVE_FROM_BASKET_ASYNC } from "./actions";

const initialState = {
  basket_items: [],
  basket_count: 0,
  subtotal: 0,
};

const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET_ASYNC:
      const product_to_basket = {
        id: action.payload.id,
        title: "Title",
        descripcion:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        price: 500,
        count: 5,
        rating: 2.5,
      };

      return {
        subtotal:
          state.subtotal + product_to_basket.count * product_to_basket.price,
        basket_items: [...state.basket_items, product_to_basket],
        basket_count: state.basket_count + 1,
      };

    case REMOVE_FROM_BASKET_ASYNC:
      if (state.basket_count > 0) {
        const product_in_basket = state.basket_items.find(
          (item) => item.id !== action.payload.id
        );
        return {
          subtotal:
            state.subtotal - product_in_basket.count * product_in_basket.price,
          basket_items: state.basket_items.filter(
            (item) => item.id !== action.payload.id
          ),
          basket_count: state.basket_count - 1,
        };
      }
      return state;

    default:
      return state;
  }
};

export default BasketReducer;
