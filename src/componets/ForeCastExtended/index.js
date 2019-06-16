import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
/* SERVICE */
import { url_forecast, api_key } from '../../constants/const.weatherAPI';
import { citiesID } from '../../constants/const.cityList';
import fetchService from '../../services/service.fetch';
/* COMPONENTS */
import ForeCastItem from '../ForeCastItem'

(function (city) {
    fetchService(`${url_forecast}?id=${city[1].id}&appid=${api_key}`)
    .then(data => {
        console.log(data);
    })
    .catch(e => console.error(e))
})(citiesID)

const days = [
    'Lunes',
    'martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
]

class ForeCastExtended extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen || false,
            city: null
        }
    }

    handleCloseModal = () => {
        if( this.state.isOpen === true ) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    renderForecasItemDays() {
        return days.map(day => (<ForeCastItem key={day} weekDay={day} hour={12}></ForeCastItem>))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.isOpen !== this.props.isOpen) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    render() {

        const { city } = this.props;
        const { isOpen } = this.state
        
        return (
            <Fragment>
                <div className={`c-weather_details ${isOpen ? 'is-visible' : ''}`}>
                    <div className={`c-weather_details-overlay`} onClick={this.handleCloseModal}></div>
                    <div className={`c-weather_details-body`}>
                        <AppBar position="sticky">
                            <Grid>
                                <Toolbar>
                                    <Typography variant="subtitle1" color="inherit">
                                        {city}
                                    </Typography>
                                </Toolbar>
                            </Grid>
                        </AppBar>
                        <Grid className={`c-weather_details-content`}>
                            {
                                (city)
                                    ? this.renderForecasItemDays()
                                    : 'cargando...'
                            }
                        </Grid>
                    </div>
                </div>
            </Fragment>
        );
    }
}

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default ForeCastExtended;