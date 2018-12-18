import React, { Component } from 'react';
import './App.css';

/** Componentes */
import WeatherLocation from "./componets/WeatherLocation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation/>
      </div>
    );
  }
}

export default App;
