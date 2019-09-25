import React from 'react';
import { connect } from 'react-redux';

import { weatherSecondDay } from '../../actions';

const withWeatherDaySecond = (Component) => {

    const WrappedComponent = ({list}) => {
        return (
            <Component
            averageTemp={list.averageTemp}
            date={list.date}
            />
        )
    }

    const mapStateToProps = state => ({
        list: state.listWeatherSecondDay.listWeatherSecondDay
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDaySecond;
