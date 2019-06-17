import { url_weather, api_key, url_forecast } from "../constants/const.weatherAPI";

const getURLWeatherByCity = cityName => {
    return `${url_weather}?id=${cityName}&appid=${api_key}`
}

const getForecastByCity = cityID => {
    return `${url_forecast}?id=${cityID}&appid=${api_key}`
}

export default {
    get: {
        weatherCity: getURLWeatherByCity,
        forcastCity: getForecastByCity,
    }
};