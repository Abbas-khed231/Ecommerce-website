import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import cartReducer from "../store/cart/cartReducer";
import {cartSaga} from "../store/cart/cartSaga";

const combinedReducers = combineReducers({cartReducer});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers,applyMiddleware(sagaMiddleware));

function* rootsaga() {
    yield all([cartSaga()]);
}

sagaMiddleware.run(rootsaga);

export default store;