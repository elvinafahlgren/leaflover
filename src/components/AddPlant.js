import React, { useState } from 'react';

const AddPlant = ({ onAddPlant }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onAddPlant({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Plant Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default AddPlant;
