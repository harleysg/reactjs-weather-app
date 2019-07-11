import React, { Component } from "react";
import PropTypes from "prop-types";
/**@libraries */
import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
/**@services */
import weatherAPI from "services/getURLWeatherByCity";
import fetchService from "services/service.fetch";
import weatherDataFormat from "services/service.filterWeatherData";
/**@components */
import CardDataHeader from "./_header";
import CardDataBody from "./_body";
import AlertComponent from "components/AlertComponent";
/**@styles */
import "./WeatherCardData.css";
// https://www.udemy.com/share/100054AkAad1lUQHQ=/?xref=E0AYcFhVQ3kJSV82AT0GJVUWTx4dChQ%2BVFE=

class WeatherCardData extends Component {
    constructor(props) {
        super(props);

        const { city } = props;

        this.state = {
            error: null,
            notice: {},
            city: city,
            data: null
        };
    }

    handleUpdateData = () => {
        const apiWeatherURL = weatherAPI.get.weatherCity(this.state.city.id);
        fetchService(apiWeatherURL)
            .then(data => {
                this.setState(weatherDataFormat(data));
            })
            .catch(error => {
                return this.setState({
                    error: true,
                    notice: {
                        type: "Error",
                        title: "Error en consulta",
                        body: error.message
                    }
                });
            });
    };

    componentDidMount() {
        this.handleUpdateData();
    }

    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data, error, notice } = this.state;

        return (
            <Card
                onClick={onWeatherLocationClick}
                className="c-weather_location-item c-location_card"
            >
                <CardDataHeader city={city.name} />
                <CardContent className="c-location_card-body">
                    {error ? (
                        <AlertComponent msg={notice} />
                    ) : data ? (
                        <CardDataBody data={data} />
                    ) : (
                        <LinearProgress />
                    )}
                </CardContent>
            </Card>
        );
    }
}

WeatherCardData.protoTypes = {
    city: PropTypes.object.isRequired /** @Object */,
    weatherLocationOnClick: PropTypes.func.isRequired /** @Function */
};

export default WeatherCardData;
