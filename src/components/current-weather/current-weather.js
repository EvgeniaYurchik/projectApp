import React from 'react';

import withCurrentWeather from './with-current-weather'


const CurrentWeather = ({ temperature, wind, icon }) =>
    <div className="current-weather">
        <p>{ temperature }</p>
        <p>{ wind }</p>
        <img src={`https://openweathermap.org/img/w/${icon}.png`} />
    </div>

export default withCurrentWeather(CurrentWeather);