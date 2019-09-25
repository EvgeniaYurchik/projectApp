import React, {Component} from 'react';

import withWeatherDayThird from './with-weather-day-third'
import WeatherDayThirdItem from './weather-day-third-item'


class WeatherDayThird extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { averageTemp, date } = this.props
        const body = this.state.isOpen && <WeatherDayThirdItem />
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

export default withWeatherDayThird(WeatherDayThird);