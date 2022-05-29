import style from './Content.module.css';
import {React, useState} from 'react';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Content = ({title, author, url}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2'
        className={style.title}
      >
        <Text As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {title}
        </Text>
      </Text>
      <Text As='a'
        color='orange'
        size={12}
        tsize={14}
        className={style.linkAuthor} href="#author">{author}
      </Text>
      {isModalOpen && <p>Открыто</p>}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
};

