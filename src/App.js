import React from 'react';
import data from './data/data'
import PlantForm from './components/PlantForm'

function App() {
  const plantNames = data;

  return (
    <div>
      
      <h1>Botanical and Common Plant Name Generator</h1>

      <PlantForm />

      {
        plantNames.map(plant => (
          <div key={plant.id}>
            <div>{plant.common_name}</div>
            <div>{plant.scientific_name}</div>
          </div>
      ))};

    </div>
  );
}

export default App;