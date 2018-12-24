import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import weatherDataFormat from "./../../services/queryWeatherAPI";
import { apiWeatherURL } from "../../constants/const.weatherAPI";

import Location from "./Location";
import WeatherData from "./Data";
import "./weather.css";
// https://www.udemy.com/share/100054AkAad1lUQHQ=/?xref=E0AYcFhVQ3kJSV82AT0GJVUWTx4dChQ%2BVFE=


class WeatherLocation extends Component {

    constructor() {
        super();
         
        this.state = {
            city: "Bogotá",
            data: null
        };

    }

    handleUpdatetClick = (e) => {
        fetch(apiWeatherURL)
            .then(response => response.json())
            .then(data => this.setState(weatherDataFormat(data)));
    }

    componentDidMount() {
        this.handleUpdatetClick(); 
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        const { city, data } = this.state
        return (
            <div className="c-weather">
                <Location city={city}></Location>
                {data 
                    ? <WeatherData data={data}></WeatherData>
                    : <LinearProgress/>
                }
            </div>
        )
    }
}


export default WeatherLocation;