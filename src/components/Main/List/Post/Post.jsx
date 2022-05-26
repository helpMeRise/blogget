import style from './Post.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import {Avatar} from './Avatar/Avatar';
import {Content} from './Content/Content';
import {Rating} from './Rating/Rating';
import {Date} from './Date/Date';
import {Delete} from './Delete/Delete';

export const Post = ({postData}) => {
  const {title, author, ups, created, url, thumbnail} = postData;

  return (
    <li className={style.post}>
      <Avatar title={title} thumbnail={thumbnail} />
      <Content title={title} author={author} url={url} />
      <Rating ups={ups}/>
      <Date date={created}/>
      <Delete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
