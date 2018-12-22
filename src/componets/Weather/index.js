import React, { Component } from "react";

import weatherDataFormat from "./../../services/queryWeatherAPI";
import { iconsWeather } from "../../constants/const.weathersStates";
import { apiWeatherURL } from "../../constants/const.weatherAPI";

import Location from "./Location";
import WeatherData from "./Data";
import "./weather.css";
// https://www.udemy.com/share/100054AkAad1lUQHQ=/?xref=E0AYcFhVQ3kJSV82AT0GJVUWTx4dChQ%2BVFE=


const currentDataComponent = {
    temperature: 18,
    weatherState: iconsWeather["cloud"],
    humidity: 80,
    wind: "10 m/s"
}

class WeatherLocation extends Component {

    constructor() {
        super();

        this.state = {
            city: "Bogotá",
            data: currentDataComponent
        }
    }

    handleUpdatetClick = (e) => {
        fetch(apiWeatherURL)
            .then(response => response.json())
            .then(data => this.setState(weatherDataFormat(data)));
    }

    render() {
        const { city, data } = this.state
        return (
            <div className="c-weather">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdatetClick}>update</button>
            </div>
        )
    }
}


export default WeatherLocation;