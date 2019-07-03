import React from 'react';
import PropTypes from 'prop-types';
/**@libraries */
import CardHeader from "@material-ui/core/CardHeader";
/**@components */
import WeatherData from "../WeatherLocation/Data";

const ForeCastItem = ({ weekDay, hour, data }) => (
    <div>
        <CardHeader className="c-location_card-header" title={weekDay} subheader={`${hour} hs`}></CardHeader>
        <WeatherData data={data}></WeatherData>
    </div>
);

ForeCastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number,
    data: PropTypes.object.isRequired,
}

export default ForeCastItem;