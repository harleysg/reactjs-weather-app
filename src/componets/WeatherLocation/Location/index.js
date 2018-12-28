import React from "react";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";

const Location = (props) => {
    const {city} = props;
    
    return (
        <CardHeader title={city} subheader="weather app"></CardHeader>
    )
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;