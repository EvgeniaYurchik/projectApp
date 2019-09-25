import React from 'react';
import { connect } from 'react-redux';

import { weatherSecond } from '../../actions';

const withWeatherDaySecondItem = (Component) => {

    const WrappedComponent = ({list}) => {
        return (
            <Component
            list={list}
            temperature={list.temperature}
            wind={list.wind}
            pressure={list.pressure}
            time={list.time}
            icon={list.icon}
            />
        )
    }

    const mapStateToProps = state => ({
        list: state.listWeatherSecond.listWeatherSecond
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDaySecondItem;
