import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
//import createSagaMiddleware from "redux-saga";
//import { watchAddToBasket, watchRemoveFromBasket } from "./BasketReducer/sagas";

//const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(thunk, logger));

//applyMiddleware(sagaMiddleware, thunk, logger)
//sagaMiddleware.run(watchAddToBasket);
//sagaMiddleware.run(watchRemoveFromBasket);

export default store;
