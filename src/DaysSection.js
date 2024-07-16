import React from 'react';

const DaysSection = ({ dailyData }) => {
  return (
    <section id="days-section">
      <div className="daily-forecast">
        {dailyData.map((day, index) => (
          <div key={index} className="day-block">
            <p className="day-date">{day.date}</p>
            <p className="day-temp">Temp: {day.day.avgtemp_c}°C</p>
            <p className="day-condition">{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DaysSection;
