import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";

import getURLWeatherByCity from "./../../services/getURLWeatherByCity";
import weatherDataFormat from "./../../services/queryWeatherAPI";

import Location from "./Location";
import WeatherData from "./Data";
import MessageNotification from "./../MessageNotification";
import "./weather.css";
// https://www.udemy.com/share/100054AkAad1lUQHQ=/?xref=E0AYcFhVQ3kJSV82AT0GJVUWTx4dChQ%2BVFE=


class WeatherLocation extends Component {

    constructor(props) {
        super(props);

        const { city } = props;

        this.state = {
            error: null,
            notice: {},
            city: city,
            data: null
        };

    }

    handleUpdatetClick = (e) => {
        
        const apiWeatherURL = getURLWeatherByCity(this.state.city);
        
        fetch(apiWeatherURL)
            .then(response => response.json())
            .then(data => this.setState(weatherDataFormat(data)))
            .catch(error => {
                return this.setState({
                    error: true,
                    notice: {
                        type: 'Error',
                        title: 'Error en consulta',
                        body: error.message
                    }
                })
            })
    }

    componentDidMount() {
        this.handleUpdatetClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        const { city, data, error, notice } = this.state;
        
        return (
            <div className="c-weather">
                <Location city={city}></Location>
                {
                    error
                        ? <MessageNotification msg={notice}/>
                        : data
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