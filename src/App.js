import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
// import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
/** STYLES */
import './App.css';
/** Constants */
import { citiesID } from "./constants/const.cityList";
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
    console.log('App', city);
    
    this.setState( {
      city,
      isOpenModal: !this.state.isOpenModal
    } )
      // console.log('handleSelectionLocation ', city);
      
    };
  
  render() {
    const { city } = this.state;
    const { isOpenModal } = this.state;
    // console.log('App Render', city, city ? city.id: null);
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
              ? <ForeCastExtended cityId={city.id} isOpen={isOpenModal}/>
              : null
          }
        </Grid>
      </div>
    );
  }
}

export default App;
