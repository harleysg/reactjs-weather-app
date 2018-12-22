import ConvertUnits from "convert-units";
import { iconsWeather } from "../constants/const.weathersStates";

const convertKelvin = kelvin => Number(ConvertUnits(kelvin).from('K').to('C').toFixed(1));

const getNameWeatherState = (dataWeatherAPI) => iconsWeather.hot;

const weatherDataFormat = (dataWeatherAPI) => {
    const { humidity, temp } = dataWeatherAPI.main;
    const { speed } = dataWeatherAPI.wind;
    const name = dataWeatherAPI.name;
    const state = getNameWeatherState(dataWeatherAPI)

    return {
        city: name,
        data: {
            temperature: convertKelvin(temp),
            weatherState: state,
            humidity: humidity,
            wind: `${speed} m/s`
        }
    }
};

export default weatherDataFormat;