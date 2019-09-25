import React from 'react';
import { connect } from 'react-redux';

import { weatherFifth } from '../../actions';

const withWeatherDayFifthItem = (Component) => {

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
        list: state.listWeatherFifth.listWeatherFifth
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDayFifthItem;
