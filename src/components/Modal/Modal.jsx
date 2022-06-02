import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Text} from '../../UI/Text';
import {FormComment} from '../Main/List/Post/FormComment/FormComment';
import {Comments} from '../Main/List/Post/Comments/Comments';

export const Modal = ({closeModal, id}) => {
  const overlayRef = useRef(null);

  const [comments, postData] = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current ||
      target.closest(`.${style.close}`)) {
      closeModal();
    }
  };

  const handlePress = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handlePress);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handlePress);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{postData.title}</h2>

        <div className={style.content}>
          {postData.selftext ? (
            postData.selftext
          ) : (
            'У этого поста нет текста'
          )}
        </div>

        <Text as='p' className={style.author}>
          {postData.author}
        </Text>

        <FormComment/>

        {comments.length ? (
          <Comments comments={comments}/>
        ) : (
          'Загрузка...'
        )}

        <button className={style.close}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};


Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
