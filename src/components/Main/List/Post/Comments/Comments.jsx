import style from './Comments.module.css';
import {Text} from '../../../../../UI/Text';
import React from 'react';
import {Comment} from './Comment/Comment';

export const Comments = (comments) => {
  const arr = [...comments.comments];
  arr.pop();
  return (
    <ul className={style.list}>
      {arr.length > 0 ? (
        arr.map(item => (
          <Comment key={item.data.id} item={item.data}/>
        ))
      ) : (
        <Text as='p'>Нет комментариев</Text>
      )}
    </ul>
  );
};
