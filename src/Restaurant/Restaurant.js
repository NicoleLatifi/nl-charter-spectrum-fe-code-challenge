import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = ({ name, city, state, phone, genre }) => {
  return(
    <div >
      <h2>{name}</h2>
      <p>{city}, {state}</p>
      <p>{phone}</p>
      <p>{genre}</p>
    </div>
  )
}

export default Restaurant;

Restaurant.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  genre: PropTypes.string,
}