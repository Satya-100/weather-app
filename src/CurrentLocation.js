import React from 'react';

const CurrentLocation = ({ weatherData }) => {
  return (
    <section id="current-location">
      <div className="weather-details">
        <h2 id="location-name">{weatherData?.location?.name || 'Location'}</h2>
        <p id="weather-condition">{weatherData?.current?.condition?.text || 'Weather Condition'}</p>
        <p id="temperature">Temperature: {weatherData?.current?.temp_c || '--'}°C</p>
        <p id="humidity">Humidity: {weatherData?.current?.humidity || '--'}%</p>
        <p id="wind-speed">Wind Speed: {weatherData?.current?.wind_kph || '--'} km/h</p>
        <p id="date-time">Date & Time: {weatherData ? new Date(weatherData.location.localtime).toLocaleString() : '--'}</p>
      </div>
    </section>
  );
};

export default CurrentLocation;
