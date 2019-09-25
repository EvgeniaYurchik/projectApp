import React, {Component} from 'react';

import withWeatherDaySecond from './with-weather-day-second'
import WeatherDaySecondItem from './weather-day-second-item'


class WeatherDaySecond extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { averageTemp, date } = this.props
        const body = this.state.isOpen && <WeatherDaySecondItem />
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

export default withWeatherDaySecond(WeatherDaySecond);