import RingLoader from 'react-spinners/RingLoader';
import PropTypes from 'prop-types';

export const Preloader = ({size, color}) => (
  <RingLoader color={color} css={{display: 'block'}} size={size}/>
);

Preloader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
