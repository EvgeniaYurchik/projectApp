import React from 'react';
import { connect } from 'react-redux';

import { weatherFourth } from '../../actions';

const withWeatherDayFourthItem = (Component) => {

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
        list: state.listWeatherFourth.listWeatherFourth
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDayFourthItem;
