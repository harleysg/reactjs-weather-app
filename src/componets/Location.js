import React from "react";

const Location = (props) => {
    const {city} = props
    return (
        <header>
            <h1>{city}</h1>
        </header>
    )
};

export default Location;