import React, { Component, Fragment } from "react";

import PropTypes from "prop-types";
import { Grid } from "react-flexbox-grid";

import "./ForeCastExtended.css";

/**
 * @components material-ui
 */
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
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

class ForeCastExtended extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: {
                id: props.city.id,
                name: props.city.name,
                country: props.city.country,
                data: null
            }
        };
    }

    handleCloseModal = () => {
        this.props.onHandledModal(false);
    };

    renderForecasItemDays(city) {
        const { data } = city;
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
                this.setState({
                    city: {
                        ...this.state.city,
                        data: data
                    }
                });
            })
            .catch(e => console.error(e));
    }

    componentDidMount() {
        const { id } = this.state.city;
        this.handleFetchForUpdate(id);
    }

    componentDidUpdate(prevProps, prevState) {
        const { isOpen } = this.props;
        const { id } = this.props.city;

        if (prevProps.city.id !== id) {
            console.log(
                "forCastExtended/componentDidUpdate",
                "el props id ha cambiado a ",
                id
            );
            this.setState({ city: { ...this.state.city, data: null } });
            this.handleFetchForUpdate(id);
        }
        if (prevProps.isOpen !== isOpen) {
            bodyScrollService(isOpen);
        }
    }

    render() {
        const { data, name, country } = this.state.city;
        const { isOpen } = this.props;
        bodyScrollService(isOpen); /**Open Modal, @service */
        return (
            <div className={`c-weather_details${isOpen ? " is-visible" : ""}`}>
                <div
                    className={`c-weather_details-overlay`}
                    onClick={this.handleCloseModal}
                />
                <div className={`c-weather_details-body`}>
                    {data ? (
                        <Fragment>
                            <AppBar position="sticky">
                                <Grid>
                                    <Toolbar>
                                        <Typography
                                            variant="subtitle1"
                                            color="inherit"
                                            className="u-flexGrow"
                                        >
                                            {data
                                                ? `${name}, ${country}`
                                                : "cargando...."}
                                        </Typography>
                                        <IconButton
                                            edge="end"
                                            color="inherit"
                                            aria-label="Menu"
                                            onClick={this.handleCloseModal}
                                        >
                                            <Icon>close</Icon>
                                        </IconButton>
                                    </Toolbar>
                                </Grid>
                            </AppBar>
                            <Grid className={`c-weather_details-content`}>
                                {this.renderForecasItemDays(this.state.city)}
                            </Grid>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Grid>
                                <Toolbar>
                                    <Typography
                                        variant="h5"
                                        color="inherit"
                                        className="u-flexGrow"
                                    >
                                        cargando....
                                    </Typography>
                                </Toolbar>
                            </Grid>
                            <Grid className={`c-weather_details-content`}>
                                <LinearProgress />
                            </Grid>
                        </Fragment>
                    )}
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
