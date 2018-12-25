import { url_base, api_key } from "../constants/const.weatherAPI";

const getURLWeatherByCity = city => {
    return `${url_base}?q=${city}&appid=${api_key}`
}

export default getURLWeatherByCity;