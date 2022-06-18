import {
  COUNT_UP,
  COUNT_RESET,
} from './countAction';

const initialState = {
  count: 0,
};

export const countMiddleware = store => next => (action) => {
  if (action.type === COUNT_UP) {
    action.count;
  }

  if (action.type === COUNT_RESET) {
    action.count = 0;
  }

  next(action);
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_UP:
      console.log(action);
      console.log(state);
      return {
        ...state,
        count: action.count + 1,
      };
    case COUNT_RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
