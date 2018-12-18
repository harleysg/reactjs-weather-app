import React from "react";

import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";

const WeatherData = () => (
    <section>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtraInfo></WeatherExtraInfo>
    </section>
);

export default WeatherData;