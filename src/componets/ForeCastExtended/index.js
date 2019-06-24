import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';

import './ForeCastExtended.css'

/**
 * @components material-ui
 */
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import Icon from '@material-ui/core/Icon';
import LinearProgress from "@material-ui/core/LinearProgress";
/** @services */
import { url_forecast, api_key } from '../../constants/const.weatherAPI';
import fetchService from '../../services/service.fetch';
import bodyScrollService from '../../services/service.bodyScroll';
import transformForcastQueryService from '../../services/service.transformForcastQuery';
/* COMPONENTS */
import ForeCastItem from '../ForeCastItem'

class ForeCastExtended extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            city: {
                cityId: this.props.cityID,
                name: '',
                country: '',
                data: null,
            }
        }
    }

    handleCloseModal = () => {
        this.setState({isActive: false})
        this.props.onHandledModal(false);
    }

    renderForecasItemDays(data) {
        return data.map(day => ( <ForeCastItem 
            key={`${day.weekDay}-${day.hour}`} 
            weekDay={day.weekDay} 
            hour={day.hour}
            data={day.data}/>)
        )
    }

    handleFetchForUpdate(idCity) {
        console.log('nuevo fetch con el dato',idCity);
        fetchService(`${url_forecast}?id=${idCity}&appid=${api_key}`)
        .then(resp => {
            const data = transformForcastQueryService(resp);
            this.setState({
                isActive: true,
                city: {
                    data: data,
                    cityId: idCity,
                    name: resp.city.name,
                    country: resp.city.country,
                }
            });
        })
        .catch(e => console.error(e));
    }

    componentDidMount() {
        const { cityId } = this.state.city
        this.handleFetchForUpdate(cityId);
    }

    componentDidUpdate(prevProps, prevState) {
        const { cityID, isOpen } = this.props;

        if (prevProps.cityID !== cityID) {
            console.log('el props cityID ha cambiado a ',cityID);
            this.setState({isActive: true, city: {data: null}})
            this.handleFetchForUpdate(cityID);
        }
        if (prevProps.isOpen !== isOpen) {
            bodyScrollService(isOpen);
        }
    }

    render() {

        const { data, name, country } = this.state.city;
        const { isOpen } = this.props;
        bodyScrollService(isOpen);
        return (
            <div className={`c-weather_details${isOpen ? ' is-visible' : ''}`}>
                <div className={`c-weather_details-overlay`} onClick={this.handleCloseModal}></div>
                <div className={`c-weather_details-body`}>
                    { data
                        ?
                            <Fragment>
                                <AppBar position="sticky">
                                    <Grid>
                                        <Toolbar>
                                            <Typography variant="subtitle1" color="inherit" className='u-flexGrow'>
                                                {data ? `${name}, ${country}`  : 'cargando....'}
                                            </Typography>
                                            <IconButton edge="end" color="inherit" aria-label="Menu" onClick={this.handleCloseModal}>
                                                <Icon>close</Icon>
                                            </IconButton>
                                        </Toolbar>
                                    </Grid>
                                </AppBar>
                                <Grid className={`c-weather_details-content`}>
                                    { data ? this.renderForecasItemDays(data) : 'cargando....' }
                                </Grid>
                            </Fragment>
                        :   <Fragment>
                                <Grid>
                                    <Toolbar>
                                        <Typography variant="h5" color="inherit" className='u-flexGrow'>
                                            cargando....
                                        </Typography>
                                    </Toolbar>
                                </Grid>
                                <Grid className={`c-weather_details-content`}>
                                    <LinearProgress />
                                </Grid>
                            </Fragment>
                        }
                </div>
            </div>
        );

    }
}

ForeCastExtended.propTypes = {
    cityID: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onHandledModal: PropTypes.func.isRequired,
}

export default ForeCastExtended;