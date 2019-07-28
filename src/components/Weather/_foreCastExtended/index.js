import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ForeCastExtended.css";

/** @ui_libraries */
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import LinearProgress from "@material-ui/core/LinearProgress";
/** @services */
import { url_forecast, api_key } from "constants/const.weatherAPI";
import fetchService from "services/service.fetch";
import bodyScrollService from "services/service.bodyScroll";
import transformForcastQueryService from "services/service.transformForcastQuery";
/** @Components */
import ForeCastCard from "./_card";
import { MUHeaderSticky } from "components/Weather/_header";

/* TODO: usar Hooks
 **  revisión de nuevos metodos useState, useEffect
 **  convertir a componente funcional
 */
class ForeCastExtended extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    handleCloseModal = () => {
        this.props.onHandledModal(false);
    };

    renderForecasItemDays(data) {
        return data.map(day => (
            <ForeCastCard
                key={`${day.weekDay}-${day.hour}`}
                weekDay={day.weekDay}
                hour={day.hour}
                data={day.data}
            />
        ));
    }

    handleFetchForUpdate(idCity) {
        fetchService(`${url_forecast}?id=${idCity}&appid=${api_key}`)
            .then(resp => {
                const data = transformForcastQueryService(resp);
                this.setState({ data });
            })
            .catch(e => console.error(e));
    }

    componentDidMount() {
        const { isOpen, city } = this.props;
        const { id } = city;
        this.handleFetchForUpdate(id);
        bodyScrollService(isOpen); /**Open Modal, @service */
    }

    componentDidUpdate(prevProps, prevState) {
        const { isOpen } = this.props;
        const { id } = this.props.city;

        if (prevProps.city.id !== id) {
            this.setState({ data: null });
            this.handleFetchForUpdate(id);
        }
        if (prevProps.isOpen !== isOpen) {
            bodyScrollService(isOpen);
        }
    }

    render() {
        const { data } = this.state;
        const { isOpen, city } = this.props;
        const { name, country } = city;
        return (
            <div className={`c-weather_details${isOpen ? " is-visible" : ""}`}>
                <div
                    className={`c-weather_details-overlay`}
                    onClick={this.handleCloseModal}
                />
                <div className={`c-weather_details-body`}>
                    <MUHeaderSticky>
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                            className="u-flexGrow"
                        >
                            {data ? `${name}, ${country}` : `Cargando...`}
                        </Typography>
                        {data && (
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="Menu"
                                onClick={this.handleCloseModal}
                            >
                                <Icon>close</Icon>
                            </IconButton>
                        )}
                    </MUHeaderSticky>
                    <main className={`c-weather_details-content`}>
                        {data ? this.renderForecasItemDays(data) : <LinearProgress />}
                    </main>
                </div>
            </div>
        );
    }
}

ForeCastExtended.propTypes = {
    city: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onHandledModal: PropTypes.func.isRequired
};

export default ForeCastExtended;
