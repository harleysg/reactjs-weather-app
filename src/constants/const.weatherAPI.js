const location = 'Bogotá,co';
const url_base = 'http://api.openweathermap.org/data/2.5/weather';
const api_key = '4a8bd0bc43e8116ca67b5e4ce64d84a9';
export const apiWeatherURL = `${url_base}?q=${location}&appid=${api_key}`