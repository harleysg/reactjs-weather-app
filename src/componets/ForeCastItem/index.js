import React from 'react';
import PropTypes from 'prop-types';

// import getURLWeatherByCity from "./../../services/getURLWeatherByCity";
// import weatherDataFormat from '../../services/queryWeatherAPI'

import WeatherData from "../WeatherLocation/Data";

const qaData = {
    temperature: 0,
    weatherState: 'weatherState',
    humidity: 0,
    wind: 'wind',
}

const ForeCastItem = ({ weekDay, hour }) => {
    return (
        <div>
            <div>
                {weekDay}, Hour: {hour}
            </div>
            <WeatherData data={qaData}></WeatherData>
        </div>
    )
};

ForeCastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number,
}

export default ForeCastItem;