import style from './Date.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Date = ({date}) => {
  console.log();
  return (
    <Text
      As='time'
      size={12}
      tsize={16}
      bold
      className={style.date}
      dateTime={date}>{formatDate(date)}</Text>
  );
};

Date.propTypes = {
  date: PropTypes.number,
};
