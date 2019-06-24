import React from 'react';
import PropTypes from 'prop-types';

import WeatherData from "../WeatherLocation/Data";

const ForeCastItem = ({ weekDay, hour, data }) => (
    <div>
        <h3>
            {weekDay}. - {hour} hs
        </h3>
        <WeatherData data={data}></WeatherData>
    </div>
);

ForeCastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number,
    data: PropTypes.object.isRequired,
}

export default ForeCastItem;