import PropTypes from 'prop-types';
import './Restaurant.css';

const Restaurant = ({ name, city, state, phone, genre }) => {
  return(
    <div className="restaurant-container">
      <p className="name-cell cell">{name}</p>
      <p className="city-state-cell cell">{city}, {state}</p>
      <p className="phone-cell cell">{phone}</p>
      <p className="genre-cell cell">{genre}</p>
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