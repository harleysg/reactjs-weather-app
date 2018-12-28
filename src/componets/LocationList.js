import React, { Component } from "react";
import PropTypes from 'prop-types'

import WeatherLocation from "./WeatherLocation";

const mapCitiesToComponents = (cities) => ( cities.map(
    (city, index) => <WeatherLocation city={city} key={`index_${city}`} />
))

class LocationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities : props.cities
        }
    };
    render() {
        const { cities } = this.state;
        return (
            <div>
                {
                    mapCitiesToComponents(cities)
                }
            </div>
        )
    }
};

// const LocationList = ({ cities }) => (
//     <div>
//         <WeatherLocation city="moscow,ru"/>
//         <WeatherLocation city="roma,it"/>
//         <WeatherLocation city="hawaii,us"/>
//         <WeatherLocation city="Bogota,co"/>
//         <WeatherLocation city="new york,usa" />
//         <WeatherLocation city="Buenos aires,ar" />
//         <WeatherLocation city="mexico,mx" />
//     </div>
// );

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;