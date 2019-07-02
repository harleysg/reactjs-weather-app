import React, { Component } from 'react';
/**@libraries */
import { Grid } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
/** @styles */
import './App.css';
/** @constants */
import { citiesID } from "./constants/const.cityList";
/** @componentes */
import LocationList from "./componets/LocationList";
import ForeCastExtended from './componets/ForeCastExtended';

class App extends Component {

    constructor() {
        super();

        this.state = {
        city: null,
        isOpenModal: false
        }
    }
    handledModal = stateModal => {
        if (stateModal === false) {
        this.setState({isOpenModal: false})
        } else {
        this.setState({isOpenModal: true})
        }
    }

    handleSelectionLocation = city => {
        this.setState( {
        city,
        isOpenModal: true
        })
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
                    <LocationList cities={citiesID} onSelectedLocation={this.handleSelectionLocation} />
                    {
                    city
                        ? <ForeCastExtended cityID={city.id} isOpen={isOpenModal} onHandledModal={this.handledModal}/>
                        : null
                    }
                </Grid>
            </div>
        );
    }
}

export default App;
