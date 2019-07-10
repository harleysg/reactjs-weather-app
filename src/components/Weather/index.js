import React, { Component } from "react";
/** @ui_libraries */
import { Grid } from "react-flexbox-grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
/** @constants */
import { citiesID } from "constants/const.cityList";
/** @components */
import { WeatherListContainer } from "components/containers";
import ForeCastExtended from "./_foreCastExtended";

class WeatherComponent extends Component {
    constructor() {
        super();

        this.state = {
            city: null,
            isOpenModal: false
        };
    }

    handleSelectionLocation = city => {
        this.setState({
            city,
            isOpenModal: true
        });
    };

    handledModal = stateModal => {
        if (stateModal === false) {
            this.setState({ isOpenModal: false });
        } else {
            this.setState({ isOpenModal: true });
        }
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
                    <WeatherListContainer
                        cities={citiesID}
                        setCity={() => {}}
                        onSelectedCity={this.handleSelectionLocation}
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

export default WeatherComponent;
