import React from "react";
import PropTypes from "prop-types";
import WeatherIcons from "react-weathericons";
import { iconsWeather, othersIcons } from "constants/const.weathersStates";
import "./data.css";

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="c-weatherData_extraInfo">
        <span>
            <span>
                <WeatherIcons name={othersIcons['humidity']} size='lg'/>
                {` Humedad:` }
            </span>
            <span>
                {` ${humidity}%`}
            </span>
        </span>
        <span>
            <span>
                <WeatherIcons name={iconsWeather['windy']} size='lg'/>
                {` Viento:`}
            </span>
            <span>
                {`${wind}` }
            </span>
        </span>
    </div>
);

WeatherExtraInfo.prototype = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;