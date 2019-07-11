import { createStore } from "redux";
/** @reducers */
import { cityReducer } from "reducers";

const initialState = {
    isOpenModal: true,
    city: null
};

export const store = createStore(
    cityReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
