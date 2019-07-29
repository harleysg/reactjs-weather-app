import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
/** @reducers */
import { reducers } from "reducers";

const initialState = {
    isOpenModal: false,
    city: null
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);
