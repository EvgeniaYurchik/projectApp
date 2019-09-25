import React from 'react';
import { connect } from 'react-redux';

import { weatherThird } from '../../actions';

const withWeatherDayThirdItem = (Component) => {

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
        list: state.listWeatherThird.listWeatherThird
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withWeatherDayThirdItem;
