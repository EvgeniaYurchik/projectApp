import React, {Component} from 'react';

import withWeatherDayFirst from './with-weather-day-first'
import WeatherDayFirstItem from './weather-day-first-item'


class WeatherDayFirst extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { averageTemp, date } = this.props
        const body = this.state.isOpen && <WeatherDayFirstItem />
        return (
        <div onClick={this.handleClick} className="list-average">
            <p>Выберите день</p>
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

export default withWeatherDayFirst(WeatherDayFirst);