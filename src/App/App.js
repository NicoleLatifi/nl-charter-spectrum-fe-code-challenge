import './App.css';
import React, { useState, useEffect } from 'react';
import RestaurantsTable from '../RestaurantsTable/RestaurantsTable';
import FilterByType from '../FilterByType/FilterByType';
import { getRestaurants } from '../helpers/apiCall';
import { alphabetizeArray } from '../helpers/helperFunctions';

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [restaurantsToDisplay, setRestaurantsToDisplay] = useState([])
  const [states, setStates] = useState([])
  const [statesSelected, setStatesSelected] = useState(states)
  const [genres, setGenres] = useState([])
  const [genresSelected, setGenresSelected] = useState(genres)

  useEffect(() => {
    getRestaurants()
      .then(data => setRestaurants(data))
  }, [])

  useEffect(() => {
    setRestaurantsToDisplay(restaurants)
    determineItems("state")
    determineItems("genre")
  }, [restaurants])

  useEffect(() => {
    filterRestaurants()
  }, [statesSelected, genresSelected])

  const determineItems = (key) => {
    let allItems = []
    restaurants.forEach(restaurant => {
      const itemsList = restaurant[key].split(",")
      itemsList.forEach(genre => {
        if (!allItems.includes(genre)) {
          allItems.push(genre)
        }
      })
    })
    allItems = alphabetizeArray(allItems)
    key === "state" ? setStates(allItems) : setGenres(allItems)
  }
  
  const filterRestaurants = () => {
    if (statesSelected.length > 0 || genresSelected.length > 0) {
      const filteredRestaurants = restaurants.filter(restaurant => {
        let matchesGenre = false
        const restaurantGenreList = restaurant.genre.split(",")
        restaurantGenreList.forEach(genre => {
          if (genresSelected.includes(genre)) {
            matchesGenre = true
          }
        })
        return statesSelected.includes(restaurant.state) || matchesGenre
      })
      setRestaurantsToDisplay(filteredRestaurants)
    } else {
      setRestaurantsToDisplay(restaurants)
    }
  }

  const updateSelected = (type, itemClicked, isSelected) => {
    const setSelected = type === "state" ? setStatesSelected : setGenresSelected
    const selected = type === "state" ? statesSelected : genresSelected
    if (isSelected) {
      setSelected([...selected, itemClicked])
    } else {
      const updatedItem = selected.filter(state => {
        return itemClicked !== state
      })
      setSelected(updatedItem)
    }
  }

  return (
    <div>
      <h1 className="title">Restaurants</h1>
      <div className="table-section">
        <RestaurantsTable 
          restaurantsToDisplay={restaurantsToDisplay} 
          className="table-container" 
        />
        <FilterByType 
          itemsList={states} 
          updateSelected={updateSelected} 
          type="state" 
          className="filter-by-state-container" 
        /> 
        <FilterByType 
        itemsList={genres} 
        updateSelected={updateSelected} 
        type="genre" 
        className="filter-by-genre-container" 
        />
      </div>
    </div>
  )
}

export default App;
