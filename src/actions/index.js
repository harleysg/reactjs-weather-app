export const SET_CITY = "SET_CITY";
export const SET_FORCAST_DATA = "SET_FORCAST_DATA";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const setCity = payload => ({ type: SET_CITY, payload });
export const setForecastData = payload => ({ type: SET_FORCAST_DATA, payload });
export const toggleModal = payload => ({ type: TOGGLE_MODAL, payload });
export { default as setSelectedCityBy } from "actions/setSelectedCityBy";
