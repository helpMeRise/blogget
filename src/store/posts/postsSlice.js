import {createSlice} from '@reduxjs/toolkit';
// import {postsRequestAsync} from './postsAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    postsRequestSuccess: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload.children];
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postsRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    changePage: (state, action) => {
      state.page = action.payload.payload;
      state.after = '';
      state.isLast = false;
      state.data = [];
    },
  },
  extraReducers: {},
});

export default postsSlice.reducer;
