import ConvertUnits from "convert-units";
import { iconNames } from "../constants/const.weathersStates";

const convertKelvin = kelvin => Number(ConvertUnits(kelvin).from('K').to('C').toFixed(1));

const getNameWeatherState = (dataWeatherAPI) => {
    
    let idIcon = dataWeatherAPI.weather[0].id;
    let iconsWeather = iconNames
    
    if (idIcon < 300) {
        return iconsWeather['thunderstorm']
    } else if (idIcon < 400){
        return iconsWeather['showers']
    } else if (idIcon < 500){
        return iconsWeather['showers']
    } else if (idIcon < 600){
        return iconsWeather['showers']
    } else if (idIcon < 700){
        return iconsWeather['snow']
    } else if (idIcon < 800){
        return iconsWeather['dust']
    } else if (idIcon === 800){
        return iconsWeather['sun']
    } else {
        return iconsWeather['cloudy']
    }

};

const weatherDataFormat = (dataWeatherAPI) => {
    const statusRequest = dataWeatherAPI;

    if (statusRequest !== 404) {
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
                wind: ` ${speed} m/s`
            }
        }
        
    } else {
        const name = dataWeatherAPI.message;
        return {
            city: name,
            data: {
                temperature: convertKelvin(0),
                weatherState: 'N/A',
                humidity: 0,
                wind: ` ${0} m/s`
            }
        }
    }

};

export default weatherDataFormat;