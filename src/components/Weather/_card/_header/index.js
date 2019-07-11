import React from "react";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";

import './CardDataHeader.css'

const CardDataHeader = (props) => {
    const {city} = props;
    
    return (
        <CardHeader className="c-location_card-header" title={city} subheader="weather app"></CardHeader>
    )
};

CardDataHeader.propTypes = {
    city: PropTypes.string.isRequired,
}

export default CardDataHeader;