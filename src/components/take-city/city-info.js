import React, {Component} from 'react';
import { connect } from 'react-redux';

import withCityInfo from './with-city-info';

class CityInfo extends Component {
    render() {
        const { onChange } = this.props;
        return (
            <select onChange={onChange}>
                <option value="Minsk">Минск</option>
                <option value="Moskva">Москва</option>
                <option value="Kiev">Киев</option>
            </select>
        )
    }
}

export default withCityInfo(CityInfo);