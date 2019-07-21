import React from "react";
import PropTypes from "prop-types";
/** @redux */
import { connect } from "react-redux";
import { setCity, toggleModal } from "actions";

/** @components */
import WeatherList from "./../Weather/_list";

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value)),
    toggleModal: value => dispatch(toggleModal(value))
});

const WeatherListContainer = ({ cities, setCity, toggleModal }) => (
    <WeatherList cities={cities} reduxSetCity={setCity} reduxOpenModal={toggleModal} />
);
const ComponentConnector = connect(
    null,
    mapDispatchToPropsActions
)(WeatherListContainer);

WeatherListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired /** valor recibido para pasar a WeatherList */
};

export default ComponentConnector;
