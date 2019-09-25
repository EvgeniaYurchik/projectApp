import React from 'react';
import { connect } from 'react-redux';

import { weatherFirst } from '../../actions';

const withWeatherDayFirstItem = (Component) => {

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
        list: state.listWeatherFirst.listWeatherFirst
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDayFirstItem;
