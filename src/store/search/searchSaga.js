import {put, select, takeLatest, call} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {searchRequestSuccess, SEARCH_REQUEST} from './searchAction';

function* fetchSearch(search) {
  const token = yield select(state => state.tokenReducer.token);

  try {
    const request = yield call(axios, `${URL_API}/search?q=${search}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    });

    yield put(searchRequestSuccess(request.data.data));
  } catch (e) {
    yield put(searchRequestSuccess(e));
  }
}


export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
