import React, { useState, useEffect } from 'react';

const FiveMinValuesFromAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://example-api.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const values = data.map((item) => item.value);
  const minValues = values.sort((a, b) => a - b).slice(0, 5);

  return (
    <div>
      <h2>5 Minimum Values:</h2>
      <ul>
        {minValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiveMinValuesFromAPI;