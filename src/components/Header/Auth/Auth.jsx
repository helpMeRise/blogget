import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useContext} from 'react';
import {authContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';

export const Auth = () => {
  const {auth, clearAuth} = useContext(authContext);

  const dispatch = useDispatch();

  const handleLogoutBtn = () => {
    const btn = document.querySelector(`.${style.logout}`);
    btn.classList.toggle(`${style.logout_active}`);
  };

  const logOut = () => {
    clearAuth();
    dispatch(deleteToken());
    handleLogoutBtn();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={handleLogoutBtn}>
          <img className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}/>
        </button>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <AuthIcon className={style.svg} />
        </Text>
      )}
      <button className={style.logout} onClick={logOut}>Выйти</button>
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
