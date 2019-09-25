import React from 'react';

import CityMain from './take-city/city-main';
import CurrentWeather from './current-weather/current-weather';
import WeatherDayFirst from './weather-day/weather-day-first';
import WeatherDaySecond from './weather-two/weather-day-second';
import WeatherDayThird from './weather-three/weather-day-third';
import WeatherDayFourth from './weather-four/weather-day-fourth';
import WeatherDayFifth from './weather-five/weather-day-fifth';
import withApp from './with-app'

const App = () => {
  return (
    <div>
      <CityMain />
      <CurrentWeather />
      <WeatherDayFirst />
      <WeatherDaySecond />
      <WeatherDayThird />
      <WeatherDayFourth />
      <WeatherDayFifth />
    </div>
  );
};

export default withApp(App);