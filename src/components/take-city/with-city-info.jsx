import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { textAction, listAction } from '../../actions';
import getWeatherDay from '../../reducers/get-weather-day'


const withCityInfo = (Component) => {

    const WrappedComponent = props => <Component city={props.city} onChange={({target}) => props.onChange(target.value)}/>;

    const mapStateToProps = state => ({
        city: state.city.city
    });

    const mapDispatchToProps = (dispatch, city) =>
        bindActionCreators(
            {
                onChange: getWeatherDay
            },
        dispatch,
    );

    return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}

export default withCityInfo;