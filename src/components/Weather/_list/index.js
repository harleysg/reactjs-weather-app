import React, { Component } from "react";
import PropTypes from "prop-types";

import WeatherCardData from "./_card";

import "./WeatherList.css";

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: props.cities
        };
    }

    handelWeatherLocationClick = city => {
        console.log("handelWeatherLocationClick ", city);
        this.props.onSelectedLocation(city);
    };

    mapCitiesToComponents = cities => {
        return cities.map(city => {
            return (
                <WeatherCardData
                    city={city}
                    key={`index_${city.name}_${city.id}`}
                    onWeatherLocationClick={() =>
                        this.handelWeatherLocationClick(city)
                    }
                />
            );
        });
    };

    render() {
        const { cities } = this.state;
        return (
            <div className="c-weather_location">
                {this.mapCitiesToComponents(cities)}
            </div>
        );
    }
}

WeatherList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
};

export default WeatherList;
