import React from 'react';

const HourSection = ({ hourlyData }) => {
  return (
    <section id="hour-section">
      <div className="hourly-forecast">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hour-block">
            <p className="hour-time">{hour.time}</p>
            <p className="hour-temp">Temp: {hour.temp_c}°C</p>
            <p className="hour-condition">{hour.condition.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourSection;
