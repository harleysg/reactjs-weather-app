/** @services */
import {
    fetchService,
    transformForcastQueryService,
    weatherAPI,
    weatherDataFormat
} from "services";

export const fetchForecastDataBy = idCity => {
    const apiWeatherURL = weatherAPI.get.forcastCityBy(idCity);
    return fetchService(apiWeatherURL).then(resp => {
        return transformForcastQueryService(resp);
    });
};

export const fetchWeatherDataBy = idCity => {
    const apiWeatherURL = weatherAPI.get.weatherCityBy(idCity);
    return fetchService(apiWeatherURL).then(data => {
        return weatherDataFormat(data);
    });
};
