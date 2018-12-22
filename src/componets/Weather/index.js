import React from "react";

import Location from "./Location";
import WeatherData from "./Data";
import { iconsWeather } from "../../constants/const.weathersStates";
import "./weather.css";
// https://www.udemy.com/share/100054AkAad1lUQHQ=/?xref=E0AYcFhVQ3kJSV82AT0GJVUWTx4dChQ%2BVFE=

const data = {
    temperature: 18,
    weatherState: iconsWeather["cloud"],
    humidity: 80,
    wind: "10 m/s"
}

const WeatherLocation = () => (
    <div className="c-weather">
        <Location city={"Bogotá"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;