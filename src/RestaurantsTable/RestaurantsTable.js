import React from 'react'
import Restaurant from '../Restaurant/Restaurant'

const RestaurantsTable = ({ restaurants }) => {
  const restaurantRows = restaurants.map(restaurant => {
    return <Restaurant name={restaurant.name}/>
  })

  return (
    <div>
      {restaurantRows}
    </div>
  )
}

export default RestaurantsTable