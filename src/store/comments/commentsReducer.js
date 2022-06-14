import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_SUCCESS,
  COMMENTS_REQUEST_ERROR
} from './commentsAction';

const initialState = {
  status: '',
  comments: [],
  postData: {},
  error: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        comments: action.comments,
        postData: action.postData,
        error: '',
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};
