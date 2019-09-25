import React from 'react';
import { connect } from 'react-redux';

import { weatherFourthDay } from '../../actions';

const withWeatherDayFourth = (Component) => {

    const WrappedComponent = ({list}) => {
        return (
            <Component
            averageTemp={list.averageTemp}
            date={list.date}
            />
        )
    }

    const mapStateToProps = state => ({
        list: state.listWeatherFourthDay.listWeatherFourthDay
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDayFourth;