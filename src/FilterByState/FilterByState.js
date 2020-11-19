import React from 'react'
import FilterButton from '../FilterButton/FilterButton'
import PropTypes from 'prop-types';
import './FilterByState.css'

const FilterByState = ({ states, updateStatesSelected }) => {

  const stateButtons = states.map(state => {
    return <FilterButton
      key={state}
      id={state}
      name={state}
      updateSelected={updateStatesSelected}
      type="state"
      />
  })

  return (
    <div className="buttons-container">
      <h3>Filter By State</h3>
      <div className="buttons">
        {stateButtons}
      </div>
    </div>
  )
}

export default FilterByState

FilterByState.propTypes = {
  states: PropTypes.array,
  updateStatesSelected: PropTypes.func,
}