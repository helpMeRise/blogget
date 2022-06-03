import style from './FormComment.module.css';
import {useRef, useState} from 'react';

export const FormComment = () => {
  const inputRef = useRef(null);
  // const focusRef = useRef(null);
  const [isTextArea, setIsTextArea] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  const handleClick = e => {
    setIsTextArea(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };


  return (
    <>
      {!isTextArea ? (
        <button
          className={style.btn}
          onClick={handleClick}>
          Написать комментарий
        </button>
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <textarea className={style.textarea} ref={inputRef}/>
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
