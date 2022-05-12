import style from './Avatar.module.css';
import notPhoto from './img/notphoto.jpg';
import React from 'react';
import PropTypes from 'prop-types';

export const Avatar = ({title}) => {
  console.log();
  return (
    <img className={style.img} src={notPhoto} alt={title} />
  );
};
Avatar.propTypes = {
  title: PropTypes.string,
};
