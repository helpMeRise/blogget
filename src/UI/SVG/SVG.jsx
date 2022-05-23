// import classNames from 'classnames';
import PropTypes from 'prop-types';

export const SVG = prop => {
  const {
    url,
  } = prop;

  return (
    <>
      <img src={url} alt=""/>
    </>
  );
};

SVG.propTypes = {
  url: PropTypes.string,
};
