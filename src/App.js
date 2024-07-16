import logo from './logo.svg';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import CurrentLocation from './CurrentLocation';
import HourSection from './HourSection';
import DaysSection from './DaysSection';
import Overview from './Overview';
import ErrorComponent from './ErrorComponent';
import Signup from './Signup';
import Login from './Login';
import SavedLocations from './SavedLocations';
import './App.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from './components/Header';
// import CurrentLocation from './components/CurrentLocation';
// import HourSection from './components/HourSection';
// import DaysSection from './components/DaysSection';
// import Overview from './components/Overview';
// import ErrorComponent from './components/ErrorComponent';
// import SavedLocations from './components/SavedLocations';
// import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [overviewData, setOverviewData] = useState(null);
  const [error, setError] = useState(null);
  const [locationInput, setLocationInput] = useState('');

  const fetchWeatherData = async (location) => {
    try {
      const apiKey = '08c1765e80fd4413aab52018241607'; // Replace with your actual API key
      const weatherResponse = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`);

      setWeatherData(weatherResponse.data);
      setError(null);

      const forecastResponse = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`);
      setHourlyData(forecastResponse.data.forecast.forecastday[0].hour);
      setDailyData(forecastResponse.data.forecast.forecastday);
      setOverviewData(weatherResponse.data.current);
    } catch (error) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    const fetchInitialLocation = async () => {
      try {
        const ipResponse = await axios.get('https://api.ipify.org?format=json');
        const locationResponse = await axios.get(`https://ipinfo.io/${ipResponse.data.ip}/geo`);
        const { city } = locationResponse.data;
        fetchWeatherData(city);
      } catch (error) {
        setError('Failed to fetch initial location. Please try again.');
        console.error('Error fetching initial location:', error);
      }
    };

    fetchInitialLocation();
  }, []);

  const handleSaveLocation = async () => {
    if (!locationInput) {
      setError('Location input cannot be empty');
      return;
    }

    try {
      await axios.post('http://localhost:5000/locations/add', { locationName: locationInput });
      setLocationInput('');
    } catch (error) {
      setError('Failed to save location');
      console.error('Error saving location:', error);
    }
  };

  return (
    <div className="App">
      <Header onSearch={fetchWeatherData} />
      {error && <ErrorComponent message={error} />}
      <input 
        type="text" 
        placeholder="Enter location" 
        value={locationInput} 
        onChange={(e) => setLocationInput(e.target.value)} 
      />
      <button onClick={handleSaveLocation}>Save Location</button>
      <SavedLocations onSelectLocation={fetchWeatherData} />
      <CurrentLocation weatherData={weatherData} />
      <HourSection hourlyData={hourlyData} />
      <DaysSection dailyData={dailyData} />
      <Overview overviewData={overviewData} />
    </div>
  );
};

export default App;
