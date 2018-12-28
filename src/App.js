import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';

/** Componentes */
import LocationList from "./componets/LocationList";

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

  handleSelectionLocation = city => {
    console.log('handleSelectionLocation ', city);
    
  };

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} />
          </Col>
          <Col xs={12} md={6}>
            <div className="c-weather_details">
              Detalles
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
