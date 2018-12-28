import React, { Component } from 'react';
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
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} />
      </div>
    );
  }
}

export default App;
