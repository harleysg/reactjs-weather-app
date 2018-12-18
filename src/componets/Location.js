import React from "react";

const Location = (props) => {
    console.log(props);
    return (
        <header>
            <h1>{props.city}</h1>
        </header>
    )
};

export default Location;