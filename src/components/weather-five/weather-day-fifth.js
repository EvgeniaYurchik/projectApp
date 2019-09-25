import React, {Component} from 'react';

import withWeatherDayFifth from './with-weather-day-fifth'
import WeatherDayFifthItem from './weather-day-fifth-item'


class WeatherDayFifth extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { averageTemp, date } = this.props
        const body = this.state.isOpen && <WeatherDayFifthItem />
        return (
        <div onClick={this.handleClick} className="list-average">
            <p className="text-average">{averageTemp}</p>
            <p className="text-average">{date}</p>
            {body}
        </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default withWeatherDayFifth(WeatherDayFifth);