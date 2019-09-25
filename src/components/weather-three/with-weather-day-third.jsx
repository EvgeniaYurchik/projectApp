import React from 'react';
import { connect } from 'react-redux';

import { weatherThirdDay } from '../../actions';

const withWeatherDayThird = (Component) => {

    const WrappedComponent = ({list}) => {
        return (
            <Component
            averageTemp={list.averageTemp}
            date={list.date}
            />
        )
    }

    const mapStateToProps = state => ({
        list: state.listWeatherThirdDay.listWeatherThirdDay
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDayThird;
