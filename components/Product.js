import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import PropTypes from 'prop-types';

const Product = ({ id, name, image, price, category }) => {
  // Fallback for missing product name
  const displayName = name || 'Untitled Product';
  
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={displayName} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{displayName}</h3>
            <p className="card-data--price">
              <FormatPrice price={price}/>
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

// Add prop validation
Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

// Add default props
Product.defaultProps = {
  name: 'Untitled Product',
  image: '',
  category: 'Uncategorized'
};

export default Product;