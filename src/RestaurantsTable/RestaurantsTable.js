import React from 'react'
import Restaurant from '../Restaurant/Restaurant'
import PropTypes from 'prop-types';

const RestaurantsTable = ({ restaurants }) => {
  const restaurantRows = restaurants.map(restaurant => {
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
      {restaurantRows}
    </div>
  )
}

export default RestaurantsTable

RestaurantsTable.propTypes = {
  restaurants: PropTypes.array,
}