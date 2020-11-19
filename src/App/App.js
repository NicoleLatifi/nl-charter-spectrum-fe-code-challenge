import './App.css';
import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../helpers/apiCall';
import RestaurantsTable from '../RestaurantsTable/RestaurantsTable';
import FilterByState from '../FilterByState/FilterByState';

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [states, setStates] = useState([])
  const [statesSelected, setStatesSelected] = useState([])
  const [restaurantsToDisplay, setRestaurantsToDisplay] = useState([])

  useEffect(() => {
    getRestaurants()
      .then(data => setRestaurants(data))
  }, [])

  useEffect(() => {
    setRestaurantsToDisplay(restaurants)
  }, [restaurants])

  useEffect(() => {
    determineStates()
  }, [restaurants])

  useEffect(() => {
    filterRestaurants()
  }, [statesSelected])

  function determineStates() {
    const allStates = []
    restaurants.forEach(restaurant => {
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

  const filterRestaurants = () => {
    if (statesSelected.length > 0) {
      const filteredRestaurants = restaurants.filter(restaurant => {
        return statesSelected.includes(restaurant.state)
      })
      setRestaurantsToDisplay(filteredRestaurants)
    } else {
      setRestaurantsToDisplay(restaurants)
    }
  }

  const updateStatesSelected = (stateClicked, isSelected) => {
    if (isSelected) {
      setStatesSelected([...statesSelected, stateClicked])
      console.log(statesSelected)
    } else {
      const updatedStates = statesSelected.filter(state => {
        return stateClicked !== state
      })
      setStatesSelected(updatedStates)
    }
  }

  return (
    <div>
      <h1 className="title">Restaurants</h1>
      <div className="table-section">
        <RestaurantsTable restaurantsToDisplay={restaurantsToDisplay} statesSelected={statesSelected} className="table-container" />
        <FilterByState states={states} updateStatesSelected={updateStatesSelected} className="filter-by-state-container"/>
      </div>
    </div>
  )
}

export default App;
