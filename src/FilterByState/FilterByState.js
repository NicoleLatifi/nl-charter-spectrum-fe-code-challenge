import React from 'react'
import FilterButton from '../FilterButton/FilterButton'
import PropTypes from 'prop-types';
import './FilterByState.css'

const FilterByState = ({ states }) => {
  console.log(states)

  return (
    <div></div>
  )
}

export default FilterByState

FilterByState.propTypes = {
  states: PropTypes.array,
}