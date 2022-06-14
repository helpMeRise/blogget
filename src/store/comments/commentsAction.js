export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsRequestSuccess = (comments, postData) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  comments,
  postData,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(commentsRequest());
  axios(`${URL_API}/comments/${id}?limit=5`, {
    headers: {
      'Authorization': `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const postData = data[1].data.children;
      const comments = data[0].data.children[0].data;
      dispatch(commentsRequestSuccess(postData, comments));
    })
    .catch((err) => {
      console.error(err);
      dispatch(commentsRequestError(err));
    });
};
