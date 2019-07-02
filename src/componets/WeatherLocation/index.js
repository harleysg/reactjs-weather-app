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
import Location from "./Location";
import WeatherData from "./Data";
import MessageNotification from 'componets/MessageNotification';
/**@styles */
import "./weather.css";
// https://www.udemy.com/share/100054AkAad1lUQHQ=/?xref=E0AYcFhVQ3kJSV82AT0GJVUWTx4dChQ%2BVFE=

class WeatherLocation extends Component {

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

    handleUpdateData = (e) => {
        const apiWeatherURL = weatherAPI.get.weatherCity(this.state.city.id);
        fetchService(apiWeatherURL)
            .then(data => {
                this.setState( weatherDataFormat(data))
            })
            .catch(error => {
                return this.setState({
                    error: true,
                    notice: {
                        type: 'Error',
                        title: 'Error en consulta',
                        body: error.message
                    }
                })
            })
    }

    componentDidMount() {
        this.handleUpdateData();
    }

    componentDidUpdate(prevProps, prevState) { }

    render() {
        /**
         * Comunicación entre componentes (burbujeo) ascendente
         *
         * 1- Definir el evento onClick y conectarle
         * la propiedad que el componente va a tener en la cual recibe la función.
         *
         * Ej. const { onWeatherLocationClick } = this.props;
         * ....
         * return ( <div onClick={onWeatherLocationClick}>
        */
        const { onWeatherLocationClick } = this.props;
        const { city, data, error, notice } = this.state;

        return (
            // <li>{city.name}</li>
            <Card onClick={onWeatherLocationClick} className="c-weather_location-item c-location_card">
                <Location city={city.name}></Location>
                <CardContent className="c-location_card-body">
                    {
                        error
                            ? <MessageNotification msg={notice}/>
                            : data
                                ? <WeatherData data={data}></WeatherData>
                                : <LinearProgress />
                    }
                </CardContent>
            </Card>
        )
    }
}

WeatherLocation.protoTypes = {
    city: PropTypes.object.isRequired,
    /**
     * Comunicación entre componentes (burbujeo) ascendente
     *
     * 2- Definir el tipo de parametro que vamos a recibir, en este caso @Function
     * Ej. weatherLocationOnClick: PropTypes.func.isRequired,
    */
    weatherLocationOnClick: PropTypes.func.isRequired,
}

export default WeatherLocation;