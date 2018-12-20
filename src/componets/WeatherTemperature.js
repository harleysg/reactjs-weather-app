import React from "react";
import WeatherIcons from "react-weathericons";
import iconNames from "./WeatherIconsNames";

const getWeatherIcon = (weatherState) => {
    const icon = iconNames[weatherState];
    if (icon) {
        return <WeatherIcons name={icon} size="2x"/>
    } else {
        return <WeatherIcons name="na" size="2x"/>
    }
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{` ${temperature}Cº`}</span>
    </div>
);

export default WeatherTemperature;