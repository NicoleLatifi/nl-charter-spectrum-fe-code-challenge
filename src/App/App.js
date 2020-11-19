import './App.css';
import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../helpers/apiCall';
import RestaurantsTable from '../RestaurantsTable/RestaurantsTable';
import FilterByState from '../FilterByState/FilterByState';
import FilterByGenre from '../FilterByGenre/FilterByGenre';

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
    determineStates()
    determineGenres()
  }, [restaurants])

  useEffect(() => {
    filterRestaurants()
  }, [statesSelected, genresSelected])

  const determineStates = () => {
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

  const determineGenres = () => {
    const allGenres = []
    restaurants.forEach(restaurant => {
      const genresList = restaurant.genre.split(",")
      genresList.forEach(genre => {
        if (!allGenres.includes(genre)) {
          allGenres.push(genre)
        }
      })
    })
    allGenres.sort(function(a, b){
      if(a < b) { return -1; }
      if(a > b) { return 1; }
      return 0;
    })
    setGenres(allGenres)
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
        <RestaurantsTable restaurantsToDisplay={restaurantsToDisplay} className="table-container" />
        <FilterByState states={states} updateSelected={updateSelected} className="filter-by-state-container"/>
        <FilterByGenre genres={genres} updateSelected={updateSelected} className="filter-by-genre-container"/>
      </div>
    </div>
  )
}

export default App;
