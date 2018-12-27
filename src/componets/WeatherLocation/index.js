import React, { Component } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";

import weatherDataFormat from "./../../services/queryWeatherAPI";
import getURLWeatherByCity from "./../../services/getURLWeatherByCity";

import Location from "./Location";
import WeatherData from "./Data";
import "./weather.css";
// https://www.udemy.com/share/100054AkAad1lUQHQ=/?xref=E0AYcFhVQ3kJSV82AT0GJVUWTx4dChQ%2BVFE=


class WeatherLocation extends Component {

    constructor(props) {
        super(props);

        const { city } = props;

        this.state = {
            city: city,
            data: null
        };

    }

    handleUpdatetClick = (e) => {

        const apiWeatherURL = getURLWeatherByCity(this.state.city)

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
                    : <LinearProgress />
                }
            </div>
        )
    }
}

WeatherLocation.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;