import React from "react";

import Location from "./Location";
import WeatherData from "./WeatherData";
// https://www.udemy.com/share/100054AkAad1lUQHQ=/?xref=E0AYcFhVQ3kJSV82AT0GJVUWTx4dChQ%2BVFE=
const WeatherLocation = () => (
    <div>
        <Location city={"Rio de Janeiro"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;