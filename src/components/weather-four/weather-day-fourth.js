import React, {Component} from 'react';

import withWeatherDayFourth from './with-weather-day-fourth'
import WeatherDayFourthItem from './weather-day-fourth-item'


class WeatherDayFourth extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { averageTemp, date } = this.props
        const body = this.state.isOpen && <WeatherDayFourthItem />
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

export default withWeatherDayFourth(WeatherDayFourth);