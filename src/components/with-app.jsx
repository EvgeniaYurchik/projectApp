import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { textAction, listAction } from '../actions';
import getWeatherDay from '../reducers/get-weather-day'


const withApp = (Component) => {

    const WrappedComponent = () => <Component />;

    const mapDispatchToProps = (dispatch) => ({ getListWeather: dispatch(getWeatherDay("Minsk")) })
            
    return connect(null, mapDispatchToProps)(WrappedComponent);
}

export default withApp;