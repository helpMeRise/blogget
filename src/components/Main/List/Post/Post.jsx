import style from './Post.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import {Avatar} from './Avatar/Avatar';
import {Content} from './Content/Content';
import {Rating} from './Rating/Rating';
import {Date} from './Date/Date';
import {Delete} from './Delete/Delete';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log('title, author, ups, date: ', title, author, ups, date);

  return (
    <li className={style.post}>
      <Avatar title={title}/>
      <Content title={title} author={author}/>
      <Rating ups={ups}/>
      <Date date={date}/>
      <Delete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
