import React from 'react';

const Overview = ({ overviewData }) => {
  return (
    <section id="overview">
      <h2>Yearly Overview</h2>
      <div className="overview-details">
        <p>Humidity: {overviewData?.humidity || '--'}%</p>
        <p>UV Index: {overviewData?.uv || '--'}</p>
        <p>Chances of Rainfall: {overviewData?.precip_mm || '--'} mm</p>
      </div>
    </section>
  );
};

export default Overview;
