import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {authReducer} from './auth/authReducer';
import {configureStore} from '@reduxjs/toolkit';
import {commentReducer} from './commetReducer';
import postsReducer from './posts/postsSlice';
import commentsReducer from './comments/commentsSlice';
import {searchReducer} from './search/searchReducer';
import {countReducer} from './count/countReducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
  reducer: {
    tokenReducer,
    authReducer,
    postsReducer,
    commentsReducer,
    commentReducer,
    countReducer,
    searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);
