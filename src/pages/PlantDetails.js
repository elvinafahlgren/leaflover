import React from 'react';

const PlantDetails = ({ plant }) => {
  return (
    <div>
      <h2>{plant.name}</h2>
      <p>Type: {plant.type}</p>
      <p>Care Instructions: {plant.careInstructions}</p>
      {plant.imageUrl && <img src={plant.imageUrl} alt={plant.name} />}
    </div>
  );
};



export default PlantDetails;
