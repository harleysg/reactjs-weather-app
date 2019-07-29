/** @services */
import { fetchForecastDataBy } from "services";
/** @actions */
import { setCity, setForecastData } from "actions";

const setSelectedCityBy = payload => {
    const { id: idCity } = payload;
    return dispatch => {
        dispatch(setCity(payload));
        return fetchForecastDataBy(idCity).then(data => {
            dispatch(setForecastData({ city: payload, data }));
        });
    };
};

export default setSelectedCityBy;
