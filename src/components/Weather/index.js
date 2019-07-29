import React from "react";
/** @ui_libraries */
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
/** @components */
import { WeatherListContainer, ForeCastExtendedContainer } from "components/containers";
import { MUHeaderSticky } from "components/Weather/_header";
const WeatherComponent = props => {
    const { cities } = props;

    return (
        <div className="c-weather">
            <MUHeaderSticky>
                <Typography variant="title" color="inherit">
                    Weather App
                </Typography>
            </MUHeaderSticky>
            <main className="o-wrapper">
                <WeatherListContainer cities={cities} />
                <ForeCastExtendedContainer />
            </main>
        </div>
    );
};

WeatherComponent.propTypes = {
    cities: PropTypes.array.isRequired
};

export default WeatherComponent;
