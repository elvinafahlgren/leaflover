import React from 'react';
import PlantDetails from './PlantDetails';

const Plants = ({ plants }) => {
  return (
    <div className='plant-list'>
      {plants.map((plant, index) => (
        <PlantDetails key={index} plant={plant} />
      ))}
    </div>
  );
};

export default Plants;
