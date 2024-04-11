import React from 'react';
import '../styles/PlantDetails.css'; // Adjust the path based on your project structure

const PlantDetails = ({ plant }) => {
  return (
    <div className="plant-details">
      <h2>{plant.name}</h2>
      {plant.imageUrl && <img src={plant.imageUrl} alt={plant.name} />}
      <p>Type: {plant.type}</p>
      <p>Care Instructions: {plant.careInstructions}</p>
    </div>
  );
};

export default PlantDetails;
