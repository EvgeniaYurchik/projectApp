import React from 'react';
import { connect } from 'react-redux';

import { weatherFifthDay } from '../../actions';

const withWeatherDayFifth = (Component) => {

    const WrappedComponent = ({list}) => {
        return (
            <Component
            averageTemp={list.averageTemp}
            date={list.date}
            />
        )
    }

    const mapStateToProps = state => ({
        list: state.listWeatherFifthDay.listWeatherFifthDay
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDayFifth;
