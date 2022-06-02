import style from './FormComment.module.css';
import {useRef} from 'react';

export const FormComment = () => {
  const inputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <textarea className={style.textarea} ref={inputRef}/>
      <button type='submit'
        className={style.btn}
      >
        Отправить
      </button>
    </form>
  );
};
