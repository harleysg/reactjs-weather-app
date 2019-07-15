import React from "react";
/** @styles */
import "./App.css";
/** @constants */
import { citiesList } from "constants/const.cityList";
/** @componentes */
import Weather from "./components/Weather";

const App = () => <Weather cities={citiesList} />;

export default App;
