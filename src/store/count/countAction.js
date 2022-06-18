export const COUNT_UP = 'COUNT_UP';
export const COUNT_RESET = 'COUNT_RESET';

export const countUp = (count) => ({
  type: COUNT_UP,
  count,
});

export const countReset = (count) => ({
  type: COUNT_RESET,
  count,
});

export const countRequestAsync = () => (dispatch, getState) => {
  const count = getState().countReducer.count;
  dispatch(countUp(count));
};


