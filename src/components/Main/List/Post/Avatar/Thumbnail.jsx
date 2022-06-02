import style from './Avatar.module.css';
import notPhoto from './img/notphoto.jpg';
import React from 'react';
import PropTypes from 'prop-types';

export const Thumbnail = ({title, thumbnail}) => {
  console.log();
  return (
    <img className={style.img}
      src={(!/(jpg)/g.test(thumbnail)) ?
        notPhoto : thumbnail} alt={title} />
  );
};
Thumbnail.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
