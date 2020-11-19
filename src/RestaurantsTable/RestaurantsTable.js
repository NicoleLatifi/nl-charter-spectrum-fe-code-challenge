import React, { useState, useEffect } from 'react'
import Restaurant from '../Restaurant/Restaurant'
import PropTypes from 'prop-types';
import './RestaurantsTable.css'

const RestaurantsTable = ({ restaurantsToDisplay }) => {
  restaurantsToDisplay.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })

  const restaurantRows = restaurantsToDisplay.map(restaurant => {
    return <Restaurant
      key={restaurant.id}
      name={restaurant.name}
      city={restaurant.city}
      state={restaurant.state}
      phone={restaurant.telephone}
      genre={restaurant.genre.split(",").join(", ")}
      />
  })

  return (
    <div className="table">
      <div className="restaurants-header-container">
        <h2 className="name-header cell">Name</h2>
        <h2 className="city-st-header cell">City, State</h2>
        <h2 className="phone-header cell">Phone</h2>
        <h2 className="genre-header cell">Genre</h2>
      </div>
      <div>
        {restaurantRows}
      </div>
    </div>
  )
}

export default RestaurantsTable

RestaurantsTable.propTypes = {
  restaurantsToDisplay: PropTypes.array,
}