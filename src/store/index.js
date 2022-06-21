import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {authReducer} from './auth/authReducer';
import {configureStore} from '@reduxjs/toolkit';
import {commentReducer} from './commetReducer';
import postsReducer from './posts/postsSlice';
import commentsReducer from './comments/commentsSlice';
import {countReducer} from './count/countReducer';

export const store = configureStore({
  reducer: {
    tokenReducer,
    authReducer,
    postsReducer,
    commentsReducer,
    commentReducer,
    countReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});

