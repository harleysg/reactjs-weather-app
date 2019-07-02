import ConvertUnits from "convert-units";
import { iconNames } from "constants/const.weathersStates";

const convertKelvin = kelvin => Number(ConvertUnits(kelvin).from('K').to('C').toFixed(0));

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

const dataFormatFor = (dataobject) => {
    const {code: status, main, wind, message} = dataobject;

    if (status !== 404) {
        const { humidity, temp } = main;
        const { speed } = wind;

        return {
            data: {
                temperature: convertKelvin(temp),
                weatherState: getNameWeatherState(dataobject),
                humidity: humidity,
                wind: ` ${speed} m/s`
            }
        }

    } else {
        return {
            city: message,
            data: {
                temperature: convertKelvin(0),
                weatherState: 'N/A',
                humidity: 0,
                wind: ` ${0} m/s`
            }
        }
    }

};

export default dataFormatFor;