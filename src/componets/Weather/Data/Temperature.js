import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import { iconsWeather } from "../../../constants/const.weathersStates";
import "./data.css";

const getWeatherIcon = (weatherState) => {
    const icon = iconsWeather[weatherState];
    const sizeIcon = "4x"
    if (icon) {
        return <WeatherIcons name={icon} size={sizeIcon}/>
    } else {
        return <WeatherIcons name="na" size={sizeIcon}/>
    }
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="c-weatherData_temperature">
        <span>
        {
            getWeatherIcon(weatherState)
        }
        </span>
        <span>
            <span>{` ${temperature}`}</span>
            <WeatherIcons name="celsius" size="lg"/>
        </span>
    </div>
);

WeatherTemperature.prototype = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
}

export default WeatherTemperature;