import { createStore } from "redux";

export const store = createStore(() => {
    let isOpenModal = true;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
