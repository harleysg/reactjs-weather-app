import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
// import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';

/** Componentes */
import LocationList from "./componets/LocationList";
import ForeCastExtended from './componets/ForeCastExtended'

const cities = [
  'new york,usa', 
  'miami,usa',
  "roma,it",
  "hawaii,us",
  "Bogota,co",
  "Washington,us",
  "Buenos aires,ar",
  "mexico,mx",
]

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
          <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} />
          {
            city === null
              ? null
              : <ForeCastExtended city={city} isOpen={isOpenModal}/>
          }
        </Grid>
      </div>
    );
  }
}

export default App;
