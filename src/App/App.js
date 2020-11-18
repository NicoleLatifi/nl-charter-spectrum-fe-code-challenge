import './App.css';
import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../helpers/apiCall';
import RestaurantsTable from '../RestaurantsTable/RestaurantsTable'

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants()
      .then(data => setRestaurants(data))
  }, [])

  return (
    <div className="App">
      <RestaurantsTable restaurants={restaurants}/>
    </div>
  )
}

export default App;
