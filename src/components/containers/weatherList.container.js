import React, { Component } from "react";
import PropTypes from "prop-types";
/** @redux */
import { connect } from "react-redux";
import { setCity } from "actions";

/** @components */
import WeatherList from "./../Weather/_list";

class WeatherListContainer extends Component {
    handleWeatherList = city => {
        this.props.setCity(city);
        this.props.onSelectedCity(city);
    };
    render() {
        return (
            <WeatherList
                cities={this.props.cities}
                onSelectedLocation={this.handleWeatherList}
            ></WeatherList>
        );
    }
}

WeatherListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    onSelectedCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(
    null,
    mapDispatchToPropsActions
)(WeatherListContainer);
