import style from './Post.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import {Thumbnail} from './Avatar/Thumbnail';
import {Content} from './Content/Content';
import {Rating} from './Rating/Rating';
import {Date} from './Date/Date';
import {Delete} from './Delete/Delete';

export const Post = ({postData}) => {
  const {
    id,
    title,
    author,
    ups,
    created,
    url,
    thumbnail,
    selftext: markdown,
  } = postData;

  return (
    <li className={style.post}>
      <Thumbnail title={title} thumbnail={thumbnail} />
      <Content title={title}
        author={author}
        url={url}
        markdown={markdown}
        id={id}/>
      <Rating ups={ups}/>
      <Date date={created}/>
      <Delete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
