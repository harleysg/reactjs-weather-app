import React from "react";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";

import './location.css'

const Location = (props) => {
    const {city} = props;
    
    return (
        <CardHeader className="c-location_card-header" title={city} subheader="weather app"></CardHeader>
    )
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;