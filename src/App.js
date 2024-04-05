import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddPlant from './pages/AddPlant';
import PlantDetails from './pages/PlantDetails';
import Articles from './pages/Articles';
import mockPlants from './data/mockPlants';
import './App.css';

function App() {
  const [plants, setPlants] = useState(mockPlants);

  const addPlant = (plant) => {
    setPlants([...plants, plant]);
  };

  return (
    <div className="App">
      <div>
        <Navbar/>
        <h2>Your Plants</h2>
        {plants.map((plant, index) => (
          <PlantDetails key={index} plant={plant} />
        ))}
      </div>
      <AddPlant onAddPlant={addPlant} />
      <Articles />
    </div>
  );
}

export default App;
