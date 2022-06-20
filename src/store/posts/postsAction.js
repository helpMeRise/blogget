import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';
// import {postsSlice} from './postsSlice';

// export const postsRequest = () => ({
//   type: POSTS_REQUEST,
// });

// export const postsRequestSuccess = (data) => ({
//   type: POSTS_REQUEST_SUCCESS,
//   posts: data.children,
//   after: data.after,
// });

// export const postsRequestSuccessAfter = (data) => ({
//   type: POSTS_REQUEST_SUCCESS_AFTER,
//   posts: data.children,
//   after: data.after,
// });

// export const postsRequestError = (error) => ({
//   type: POSTS_REQUEST_ERROR,
//   error,
// });

// export const changePage = page => ({
//   type: CHANGE_PAGE,
//   page,
// });

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    let page = getState().postsReducer.page;
    if (newPage) {
      page = newPage;
    }
    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    // const loading = getState().postsReducer.loading;
    const isLast = getState().postsReducer.isLast;

    if (!token || isLast) return;

    return axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          'Authorization': `bearer ${token}`,
        },
      })
      .then(({data}) => {
        if (after) {
          return {posts: data.data.children};
        } else {
          return {posts: data.data.children};
        }
      })
      .catch((error) => ({error}));
  },
);
