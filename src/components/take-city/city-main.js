import React from 'react';

import CityInfo from './city-info';

const CityMain = function() {
    return (
    <div>
        <div className="city-text">Выберите город</div>
        <CityInfo />
    </div>
    )
};

export default CityMain;
