import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './FilterButton.css'

const FilterButton = ({ name, updateStatesSelected, type }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = (event) => {
    updateStatesSelected(event.target.innerText, !isSelected)
    setIsSelected(!isSelected)
  }

  return (
    <div>
      <button id={type} className={isSelected ? "active-filter-button" : "filter-button"} onClick={handleClick}>{name}</button>
    </div>
  )
}

export default FilterButton

FilterButton.propTypes = {
  state: PropTypes.string,
  updateStatesSelected: PropTypes.func,
  type: PropTypes.string,
}