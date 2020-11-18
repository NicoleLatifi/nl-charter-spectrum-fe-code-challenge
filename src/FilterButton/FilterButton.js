import React from 'react'
import PropTypes from 'prop-types';
import './FilterButton.css'

const FilterButton = ({ state }) => {
  return (
    <div>
      <button>{state}</button>
    </div>
  )
}

export default FilterButton

FilterButton.propTypes = {
  state: PropTypes.string,
}