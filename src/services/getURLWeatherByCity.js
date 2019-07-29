import { url_weather, api_key, url_forecast } from "constants/const.weatherAPI";

const getWeatherBy = cityID => {
    return `${url_weather}?id=${cityID}&appid=${api_key}`;
};

const getForecastBy = cityID => {
    return `${url_forecast}?id=${cityID}&appid=${api_key}`;
};

export default {
    get: {
        weatherCityBy: getWeatherBy,
        forcastCityBy: getForecastBy
    }
};
