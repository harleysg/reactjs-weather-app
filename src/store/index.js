import { createStore } from "redux";
/** @reducers */
import { reducers } from "reducers";

const initialState = {
    isOpenModal: false,
    city: null
};

export const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
