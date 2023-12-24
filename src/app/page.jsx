// components/DataComponent.js
'use client'
import { useState, useEffect } from 'react';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
      });

  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Data Component</h1>
      {data.map((item, id) => (
        <div key={id}>{item}</div>
      ))}
    </div>
  );
};

export default DataComponent;

