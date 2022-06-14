import style from './FormComment.module.css';
import {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../../../store/commetReducer';


export const FormComment = () => {
  const inputRef = useRef(null);
  const value = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();
  const [isTextArea, setIsTextArea] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  };

  const handleClick = e => {
    setIsTextArea(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };


  return (
    <>
      {!isTextArea ? (
        <button
          className={style.btn}
          onClick={handleClick}
        >
          Написать комментарий
        </button>
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <textarea
            className={style.textarea}
            value={value}
            onChange={handleChange}
            ref={inputRef}
          />
          <button type='submit'
            className={style.btn}
          >
            Отправить
          </button>
        </form>
      )}
    </>
  );
};
