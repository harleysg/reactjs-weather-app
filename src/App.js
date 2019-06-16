import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
// import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
/** STYLES */
import './App.css';
/** Constants */
import { citiesName } from "./constants/const.cityList";
/** Componentes */
import LocationList from "./componets/LocationList";
import ForeCastExtended from './componets/ForeCastExtended'

class App extends Component {

  constructor() {
    super();

    this.state = {
      city: null,
      isOpenModal: false
    }
  }

  handleSelectionLocation = city => {
    this.setState(
      {
        city,
        isOpenModal: !this.state.isOpenModal
      }
    )
    console.log('handleSelectionLocation ', city);
    
  };

  render() {
    const { city, isOpenModal } = this.state;
    return (
      <div className="c-weather">
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
          <LocationList cities={citiesName} onSelectedLocation={this.handleSelectionLocation} />
          {
            city && <ForeCastExtended city={city} isOpen={isOpenModal}/>
          }
        </Grid>
      </div>
    );
  }
}

export default App;
