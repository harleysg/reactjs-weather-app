import React, { Component } from "react";
import { connect } from "react-redux";
/** @redux */
import { setCity } from "actions";
/** @libraries */
import { Grid } from "react-flexbox-grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
/** @constants */
import { citiesID } from "constants/const.cityList";
/** @componentes */
import WeatherList from "./_list";
import ForeCastExtended from "./_foreCastExtended";

class Weather_ extends Component {
    constructor() {
        super();

        this.state = {
            city: null,
            isOpenModal: false,
        };
    }

    handledModal = stateModal => {
        if (stateModal === false) {
            this.setState({ isOpenModal: false });
        } else {
            this.setState({ isOpenModal: true });
        }
    };

    handleSelectionLocation = city => {
        this.setState({
            city,
            isOpenModal: true,
        });
        this.props.setCity(city);
    };

    render() {
        const { city } = this.state;
        const { isOpenModal } = this.state;
        return (
            <div className="c-weather" data-open={isOpenModal}>
                <AppBar position="sticky">
                    <Grid>
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                Weather App
                            </Typography>
                        </Toolbar>
                    </Grid>
                </AppBar>
                <Grid>
                    <WeatherList
                        cities={citiesID}
                        onSelectedLocation={this.handleSelectionLocation}
                    />
                    {city ? (
                        <ForeCastExtended
                            cityID={city.id}
                            isOpen={isOpenModal}
                            onHandledModal={this.handledModal}
                        />
                    ) : null}
                </Grid>
            </div>
        );
    }
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value)),
});

const Weather = connect(null, mapDispatchToPropsActions)(Weather_)

export default Weather;
