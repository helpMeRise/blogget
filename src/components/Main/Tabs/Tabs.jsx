import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';
import {debounceRaf} from '../../../utils/debounce';

const LIST = [
  {value: 'Главная', Icon: EyeIcon},
  {value: 'Просмотренные', Icon: HomeIcon},
  {value: 'Сохраненные', Icon: PostIcon},
  {value: 'Мои посты', Icon: SaveIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [tabName, setTabName] = useState(LIST[0].value);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {tabName}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>)}

      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <button className={style.btn} onClick={() => {
                setTabName(value);
              }}>
                {value}
                {Icon && <Icon width={30} height={30}/>}
              </button>
            </li>
          ))}
        </ul>)}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
