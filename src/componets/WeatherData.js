import React from "react";

import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";

const WeatherData = () => (
    <section>
        <WeatherTemperature 
            temperature={20}
            weatherState="cloud"
            ></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"40 m/s"}/>
    </section>
);

export default WeatherData;