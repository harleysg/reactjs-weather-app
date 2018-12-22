import React from "react";
import PropTypes from "prop-types";
import WeatherTemperature from "./Temperature";
import WeatherExtraInfo from "./ExtraInfo";
import "./data.css";

const WeatherData = ({ data: {temperature, weatherState, humidity, wind} }) => (
    <section className="c-weather_data">
        <WeatherTemperature 
            temperature={temperature}
            weatherState={weatherState}/>
        <WeatherExtraInfo 
            humidity={humidity} 
            wind={wind}/>
    </section>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;