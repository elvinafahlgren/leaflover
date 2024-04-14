import React, { useState } from 'react';
import '../styles/AddPlant.css';

const AddPlant = ({ onAddPlant }) => {
  // state to keep track of the input field for the plant name
  const [name, setName] = useState('');

  // called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents default form submit action (page reload)

    if (!name) return; // if no name is entered, do nothing

    onAddPlant({ name }); // add plant
    setName(''); // clear input field
  };
  
  return (
    //<form> element is used to create an HTML form for user input
    <form onSubmit={handleSubmit}>
      <label>
        Plant Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className="add-plant-button" type="submit">Add Plant</button>
    </form>
  );
};

export default AddPlant;
