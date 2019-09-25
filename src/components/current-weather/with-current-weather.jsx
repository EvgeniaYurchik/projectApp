import React from 'react';
import { connect } from 'react-redux';

import { listAction } from '../../actions';

const withCurrentWeather = (Component) => {

    const WrappedComponent = ({list}) => {
        return (
            <Component
            temperature={list.temperature}
            wind={list.wind}
            iconImg={list.iconImg}
            icon={list.icon}
            />
        )
    }

    const mapStateToProps = state => ({
        list: state.list.list
    });

    return connect(mapStateToProps)(WrappedComponent);
}

export default withCurrentWeather;

