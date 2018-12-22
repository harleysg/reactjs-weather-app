import React from "react";
import PropTypes from "prop-types";

const Location = (props) => {
    const {city} = props
    return (
        <header>
            <h1>{city}</h1>
        </header>
    )
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;