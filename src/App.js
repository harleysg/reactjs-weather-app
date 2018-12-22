import React, { Component } from 'react';
import './App.css';

/** Componentes */
import WeatherComponent from "./componets/Weather";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherComponent/>
      </div>
    );
  }
}

export default App;
