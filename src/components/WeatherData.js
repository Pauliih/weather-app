import React from 'react';
import WeatherTemperature from './WeatherTemperture';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature = {29} />
        <WeatherExtraInfo humidity = {80} wind ={'23km/h'}/>
    </div>
)

export default WeatherData;