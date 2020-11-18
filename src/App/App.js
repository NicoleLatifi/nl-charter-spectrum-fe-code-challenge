import './App.css';
import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../helpers/apiCall';
import RestaurantsTable from '../RestaurantsTable/RestaurantsTable';
import FilterByState from '../FilterByState/FilterByState';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [states, setStates] = useState([])

  useEffect(() => {
    getRestaurants()
      .then(data => setRestaurants(data))
  }, [])

  useEffect(() => {
    determineStates()
  }, [restaurants])

  function determineStates() {
    const allStates = []
    restaurants.forEach(restaurant => {
      console.log("hi")
      if (!allStates.includes(restaurant.state)) {
        allStates.push(restaurant.state)
      }
    })
    allStates.sort(function(a, b){
      if(a < b) { return -1; }
      if(a > b) { return 1; }
      return 0;
    })
    setStates(allStates)
  }

  return (
    <div className="App">
      <h1 className="heading">Restaurants</h1>
      <RestaurantsTable restaurants={restaurants} />
      <FilterByState states={states} />
    </div>
  )
}

export default App;
