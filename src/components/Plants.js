import React from 'react';
import PlantDetails from './PlantDetails'; // Adjust the path based on your project structure

const Plants = ({ plants }) => {
  return (
    <div>
      <h2>Your Plants</h2>
      {plants.map((plant, index) => (
        <PlantDetails key={index} plant={plant} />
      ))}
    </div>
  );
};

export default Plants;
