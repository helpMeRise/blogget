export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  const arr = [];
  if (!token) return;
  dispatch(postsRequest());
  axios(`${URL_API}/best?limit=20`, {
    headers: {
      'Authorization': `bearer ${token}`,
    },
  })
    .then(({data: {data}}) => {
      data.children.forEach(item => arr.push(item.data));
      dispatch(postsRequestSuccess(arr));
    })
    .catch((err) => {
      console.error(err);
      dispatch(postsRequestError(err.toString()));
    });
};
