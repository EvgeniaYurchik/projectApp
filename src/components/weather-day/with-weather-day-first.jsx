import React from 'react';
import { connect } from 'react-redux';

import { weatherFirstDay } from '../../actions';

const withWeatherDayFirst = (Component) => {

    const WrappedComponent = ({list}) => {
        return (
            <Component
            averageTemp={list.averageTemp}
            date={list.date}
            />
        )
    }

    const mapStateToProps = state => ({
        list: state.listWeatherFirstDay.listWeatherFirstDay
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDayFirst;
