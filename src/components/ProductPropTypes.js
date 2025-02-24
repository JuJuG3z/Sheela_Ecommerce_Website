import PropTypes from 'prop-types';

export const productPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};