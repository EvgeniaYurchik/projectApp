import React from 'react';

import withWeatherDayFifthItem from './with-weather-day-fifth-item'

const WeatherDayFifthItem = ({ list }) => 
   <div className="list-point">
       {
        list.map(item => <div key={item.id} className="text-point-wrap"> 
            <img src={`https://openweathermap.org/img/w/${item.icon}.png`} className="image-point"/>
            <p className="text-point">температура {item.temperature} °C</p> 
            <p className="text-point">ветер {item.wind}</p>
            <p className="text-point">давление {item.pressure} гПа</p>
            <p className="text-point">время {item.time}</p>
        </div>)
       }
   </div>

export default withWeatherDayFifthItem(WeatherDayFifthItem);