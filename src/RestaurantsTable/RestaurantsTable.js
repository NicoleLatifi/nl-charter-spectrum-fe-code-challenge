import React from 'react'
import Restaurant from '../Restaurant/Restaurant'
import PropTypes from 'prop-types';
import './RestaurantsTable.css'

const RestaurantsTable = ({ restaurants }) => {
  const restaurantRows = restaurants.slice(0,9).map(restaurant => {
    return <Restaurant
      key={restaurant.id}
      name={restaurant.name}
      city={restaurant.city}
      state={restaurant.state}
      phone={restaurant.telephone}
      genre={restaurant.genre}
      />
  })

  console.log(restaurants)

  return (
    <div>
      <div className="restaurants-header-container">
        <h2 className="name-header">Name</h2>
        <h2 className="city-st-header">City, St</h2>
        <h2 className="phone-header">Phone</h2>
        <h2 className="genre-header">Genre</h2>
      </div>
      <div>
        {restaurantRows}
      </div>
    </div>
  )
}

export default RestaurantsTable

RestaurantsTable.propTypes = {
  restaurants: PropTypes.array,
}