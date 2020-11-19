import React from 'react'
import FilterButton from '../FilterButton/FilterButton'
import PropTypes from 'prop-types';
import './FilterByType.css'

const FilterByType = ({ itemsList, updateSelected, type }) => {

  const buttons = itemsList.map(item => {
    return <FilterButton
      key={item}
      id={item}
      name={item}
      updateSelected={updateSelected}
      type={type}
      />
  })

  return (
    <div className="buttons-container">
      <h3>Filter By {type.charAt(0).toUpperCase() + type.substring(1)}</h3>
      <div className="buttons">
        {buttons}
      </div>
    </div>
  )
}

export default FilterByType

FilterByType.propTypes = {
  itemsList: PropTypes.array,
  updateSelected: PropTypes.func,
}