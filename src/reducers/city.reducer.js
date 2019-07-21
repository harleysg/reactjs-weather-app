import { SET_CITY, TOGGLE_MODAL } from "actions";

export default (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.payload };
        case TOGGLE_MODAL:
            return { ...state, isOpenModal: action.payload };
        default:
            return state;
    }
};
