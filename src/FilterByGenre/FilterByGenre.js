import React from 'react'
import FilterButton from '../FilterButton/FilterButton'
import PropTypes from 'prop-types';
import './FilterByGenre.css'

const FilterByGenre = ({ genres, updateGenresSelected }) => {

  const genreButtons = genres.map(genre => {
    return <FilterButton
      key={genre}
      id={genre}
      name={genre}
      updateGenresSelected={updateGenresSelected}
      type="genre"
      />
  })

  return (
    <div className="genre-buttons-container">
      <h3>Filter By Genre</h3>
      <div className="genre-buttons">
        {genreButtons}
      </div>
    </div>
  )
}

export default FilterByGenre

FilterByGenre.propTypes = {
  genres: PropTypes.array,
  updateGenresSelected: PropTypes.func,
}