import React, { Component } from "react";
/** @ui_libraries */
import { Grid } from "react-flexbox-grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
/** @components */
import { WeatherListContainer } from "components/containers";
import ForeCastExtended from "./_foreCastExtended";

class WeatherComponent extends Component {
    constructor(props) {
        super(props);

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
        const { city, isOpenModal } = this.state;
        const { cities } = this.props;
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
                        cities={cities}
                        setCity={() => {}}
                        onSelectedCity={this.handleSelectionLocation}
                    />
                    {city ? (
                        <ForeCastExtended
                            city={city}
                            isOpen={isOpenModal}
                            onHandledModal={this.handledModal}
                        />
                    ) : null}
                </Grid>
            </div>
        );
    }
}

WeatherComponent.propTypes = {
    cities: PropTypes.array.isRequired /**@param array */
};

export default WeatherComponent;
